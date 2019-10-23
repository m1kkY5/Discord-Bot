const Discord = require('discord.js');
const format = require('../formatTime');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("User Info")
    .setColor(0xff0000)
    .setThumbnail(message.author.avatarURL)
    .addField("Username", message.author.username, true)
    .addField("User ID", message.author.id, true)
    .addField("Joined @", message.guild.joinedAt);

    console.log(format.run(message.guild.joinedAt));

    return message.channel.send(embed);

};

module.exports.help = {
    name: "userInfo",
    description: "Get user info(Your if user is not specified)",
    usage: "[@user] or blank"
}