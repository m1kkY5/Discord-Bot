const Discord = require('discord.js');
const { cyan } = require('../data/config.json');
const fs = require('fs');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

module.exports.run = async (bot,message, args) =>{
    
//#region Song and channel info gathering
    
    //queue
    var queue = new Map();


    //channels
    var channelID = message.member.voiceChannelID;
    var channel = message.guild.channels.get(channelID);

    //song full paths
    var path = "/home/milan/Desktop/bot/radioMusic/";
    var songNames = fs.readdirSync('./radioMusic');
    var songPaths = fs.readdirSync('./radioMusic');

    for (let index = 0; index < songPaths.length; index++) {
        songPaths[index] = path + songPaths[index];
        songNames[index] = songNames[index].replace('.mp3','');

    }

    //indices
    var indices = [];
    for(let i = 0; i < songPaths.length;i++) indices.push(i);

//#endregion

//#region Connectivity

    //check for channel
    if(!channel) return message.reply('Channel doesn\'t exist');

    //join or leave channel
    if(args == 1){
        channel.join()
        .then(connection => {



        })
        .catch(console.error);

    } else {
        channel.leave();
    }

//#endregion
};

module.exports.help = {
    name: "radio",
    description: "Play radio music",
    usage: ""
}