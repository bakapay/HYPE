const ms = require("ms");
const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(!message.member.hasPermission('MUTE_MEMBERS')) return message.reply("nu ai acces la aceasta comanda.")
let member = message.mentions.members.first();
const k = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setColor(0x0896c7)
.setTitle(":warning: **ERROR**")
.addField("**Trebuie sa mentionezi persoana careia vrei sa ii dai mute.**", "**Mod de folosire -** [/mute <@mention> <durata> <motiv>](https://discord.gg/huYUfB) \n*IMPORTANT**\n **- d = zi/zile**\n **- m = minut/minute**\n **- s = secunda/secunde** \n**Exemplu -** [/mute <@409372870259638273> 10m Limbaj](https://discord.gg/huYUfB)")
.setTimestamp()
if (!member)
return message.channel.sendEmbed(k)
if (member.id === message.author.id) return message.reply("nu iti poti da mute singur.")
if(!member.kickable) return message.reply("Imi pare rau, dar nu ii pot interzice vorbirea acestui membru deoarece detine o functie mai inalta decat mine.")
let mr = message.guild.roles.find("name", "Muted")
if (!mr) return message.reply("role-ul **Muted** nu exista.")
let p = message.content.split(" ").slice(1)
let p2 = message.content.split(" ").slice(3)
let r = args[2]
let reason = "reason"
if (!r) {
  reason = "Motivul nu a fost specificat."
} else {
  reason = r
}
let time = args[1]
const t = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setColor("RED")
.setTitle(":warning: **ERROR**")
.addField("**Trebuie sa specifci timpul.**", "**Mod de folosire -** [/mute <@mention> <durata> <motiv>](https://discord.gg/huYUfB) \n**IMPORTANT**\n **- d = zi/zile**\n **- m = minut/minute**\n **- s = secunda/secunde** \n**Exemplu -** [/mute <@409372870259638273> 10m Limbaj](https://discord.gg/huYUfB)")
.setTimestamp()
if (!time) return message.channel.sendEmbed(t)

message.channel.sendMessage(`:mute: **${member.user.username}** a fost adus la tacere de catre **${message.author.username}**.`).then(
  setTimeout(() => { 
    member.addRole(mr.id)
  }, 500))
  
  
    let mod = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
	.setTitle("MUTE | HYPEUNIVERSE")
	.addField("Utilizatorul", member.user.username, true)
	.addField("Timpul", time, true)
	.addField("Motiv", reason, true)
	.setFooter("Adus la tacere de catre " + message.author.username)
    .setTimestamp()
    .setColor(0x0896c7)
  client.channels.get("409294383083552769").sendEmbed(mod)

  setTimeout(function() {
    member.removeRole(mr.id)
    message.channel.send(`<@${member.user.id}>, durata mute-ului a expirat. Poti sa scrii pe chat acum!`)
  },ms(time))
};
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'COX.',
  usage: 'search <words>'
};