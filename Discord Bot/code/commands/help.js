const Discord = require('discord.js');
const fs = require('fs');

var main = require('../bot');

module.exports.run = async (bot, message, args) => {

    var turnToEmbed = prop => {

        let embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setTitle("Command Help")
        .addField("Name", prop.help.name)
        .addField("Description", prop.help.description)
        .addField("Usage", prop.help.usage);

        return message.author.send(embed);

    };

    fs.readdir('./', (err, files) => {

        if(err) console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() === "js");
        
        if(jsfile.length <= 0) return console.log("Couldn't find commands.");
    
        let result = jsfile.forEach((f) => {
    
            let prop = require(`./${f}`);

            let name = prop.help.name;
            let description = prop.help.description;
            let usage = prop.help.usage;

            message.author.send({ embed: turnToEmbed(prop)});
            
        });

    });

}

module.exports.help = {
    name: "help",
    description: "List all commands",
    usage: ""
}