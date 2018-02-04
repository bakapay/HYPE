const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("nu ai acces.")

  let member = message.mentions.members.first();
  if (!member) return message.reply("trebuie să menționezi persoana pe care vrei să o accepți.")
  let thelper = message.guild.roles.find("name", "Hype - Testers")
  let partner = message.guild.roles.find("name", "Server Manager")
  
  if(message.channel.id === "409294069282504705"){
   client.channels.get("409294069282504705").send(`Felicitări, ${member}. Cererea ta de parteneriat a fost acceptată de către ${message.author}.`)
   member.addRole(partner.id)}
   
  if(message.channel.id === "409294041734316032"){
   client.channels.get("409294041734316032").send(`Felicitări, ${member}. Cererea ta de grad a fost acceptată de către ${message.author}.`)
  member.addRole(thelper.id)}
 
  message.delete()

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'acceptat',
  description: 'COX.',
  usage: 'search <words>'
};