const Discord = require('discord.js');
const formatTime = require('../formatTime');

module.exports.run = async (bot, message, args) => {

    // let createdAt = formatTime(message.guild.createdAt);
    // let joinedAt = formatTime(message.guild.joinedAt);

    console.log(message.guild.createdAt);

    let embed = new Discord.RichEmbed()
    .setTitle('Server Info')
    .setColor(0xff0000)
    .setThumbnail(message.guild.iconURL)
    .addField('Server name:', message.guild.name)
    .addField('Created @', message.guild.createdAt)
    .addField('You joined @', message.guild.joinedAt)
    .addField('Owner', message.guild.owner)
    .addField('Total members: ',message.guild.memberCount);
    
    return message.channel.send(embed);
}

module.exports.help = {
    name: "serverInfo",
    description: "Get server info",
    usage: ""   
}