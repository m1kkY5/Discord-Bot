const Discord = require('discord.js');

module.exports.run = async (bot, message, args) =>{

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('oof')
    if(!args[0]) return message.reply('oof');

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args} messages`).then(message => message.delete(2500));
    });
}

module.exports.help = {
    name: "clear",
    description: "Clear messages(max 100)",
    usage: "[number]"
}