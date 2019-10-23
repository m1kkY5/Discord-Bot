//modules
const Discord = require('discord.js');
const fs = require('fs');
const ffmpeg = require('ffmpeg');

//load data
const { token } = require('./data/token.json');
const config = require('./data/config.json');

const bot = new Discord.Client();

var commmands = new Discord.Collection();

//#region Reading and loading commands
fs.readdir('./commands/', (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    
    if(jsfile.length <= 0) return console.log("Couldn't find commands.");

    jsfile.forEach((f) => {

        let props = require(`./commands/${f}`);
        // console.log(`${f} loaded`);

        commmands.set(props.help.name, props);
    });
});
//#endregion

bot.once('ready', ready => {
    console.log();
    console.log(`Used on ${bot.guilds.size} servers`);
    console.log(`In ${bot.channels.size} channels`);
    console.log(`By ${bot.users.size} users`);
    console.log();
});

bot.on('message', message =>{
    
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commmandFile = commmands.get(cmd.slice(prefix.length));
    if(commmandFile) commmandFile.run(bot, message, args);

});

bot.login(token);