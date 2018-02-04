const Discord = require('discord.js');
exports.run = (client, message, args) => {
let member = message.mentions.members.first();
let motiv = args[1]
let dovada = args[2]

if(!member) return message.reply("trebuie sa **mentionezi** persoana reclamata.")
if(!motiv) return message.reply("trebuie sa **prezinti** un motiv, obligatoriu sa fie compus **dintr-un cuvant**.")
if(!dovada) return message.reply("trebuie sa prezinti si o **dovada**, obligatoriu sa fie un **link**.")
	
let report = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setTitle("RECLAMATIE | HYPEUNIVERSE")
.addField("Utilizator", member.user.username, true)
.addField("Motiv", motiv, true)
.addField("Dovada", "[CLICK](" + dovada + ")", true)
.setFooter("Reclamat de catre " + message.author.username)
.setTimestamp()
.setColor(0x0896c7)

client.channels.get("409294199415111681").sendEmbed(report)
message.delete();
	};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'report',
  description: 'RPOINTS.',
  usage: 'search <words>'
};