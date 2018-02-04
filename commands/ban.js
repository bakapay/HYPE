const Discord = require('discord.js');
const ms = require("ms");
exports.run = (client, message, args) => {
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("nu ai acces la aceasta comanda.")
  let member = message.mentions.members.first();
  const k = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(0x0896c7)
  .setTitle(":warning: **ERROR**")
  .addField("**Trebuie sa mentionezi persoana careia vrei sa ii dai ban.**", "**Mod de folosire -** [/ban <@mention> <durata> <motiv>](https://discord.gg/huYUfB) \n**IMPORTANT**\n **- d = zi/zile**\n **- m = minut/minute**\n **- s = secunda/secunde** \n**Exemplu -** [/ban <@409372870259638273> 1d Reclama](https://discord.gg/huYUfB)")
  .setTimestamp()
  if (!member)
  return message.channel.sendEmbed(k)
  if (member.id === message.author.id) return message.reply("nu iti poti da ban singur.")
  if(!member.kickable) return message.reply("Imi pare rau, dar nu pot interzice acest membru, deoarece detine o functie mai inalta decat mine.")
  let p = args.slice(1).join(' ');
  let p2 = args[2]
  let reason = "reason"
  if (!p2) {
    reason = "Motivul nu a fost specificat."
  } else {
    reason = p2
  }
  let time = args[1]
  const t = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(0x0896c7)
  .setTitle(":warning: **ERROR**")
  .addField("**Trebuie sa specifici timpul.**", "**Mod de folosire -** [/ban <@mention> <durata> <motiv>](https://discord.gg/huYUfB) \n**IMPORTANT**\n **- d = zi/zile**\n **- m = minut/minute**\n **- s = secunda/secunde** \n**Exemplu -** [/ban <@409372870259638273> 1d Reclama](https://discord.gg/huYUfB)")
  .setTimestamp()
  if (!time) return message.channel.sendEmbed(t)
  
  client.channels.get("409293635704848394").send("[x] " + member + ".").then(
    setTimeout(() => { 
      member.ban()
    }, 500))
    let mod = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
	.setTitle("BAN | HYPEUNIVERSE")
	.addField("Utilizatorul", member.user.username, true)
	.addField("Timpul", time, true)
	.addField("Motiv", reason, true)
	.setFooter("Banat de catre " + message.author.username)
    .setTimestamp()
    .setColor(0x0896c7)
    client.channels.get("409294383083552769").send(mod)
  
    setTimeout(function() {
  message.guild.unban(member);
    },ms(time))
	
	member.send("Ai fost interzis de pe serverul **HYPEUNIVERSE** de catre **" + message.author.username + "**.")
  };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'COX.',
  usage: 'search <words>'
};
	