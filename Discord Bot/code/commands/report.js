const Discord = require('discord.js');

module.exports.run = async (bot,message, args) =>{

    let rUser = message.guild.member(message.mentions.users.first()) ||
                message.guild.members.get(args[0]);

    if(!rUser) message.channel.send("Couldn't find user.")
    let reason = args.join(' ').slice(22);

    let embed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor(0xff0000)
    .addField("Reported user", rUser)
    .addField("Reported user ID", rUser.id)
    .addField("Reported by", message.author)
    .addField("Reason", reason)

    let rChannel = message.guild.channels.find("name", "reports");
    if(!rChannel) return message.channel.send("No reports channel, create one");

    message.delete().catch(O_o => {});
    rChannel.send(embed);

    return;

}

module.exports.help = {
    name: "report",
    description: "Report users",
    usage: "[@user, reason]"
}