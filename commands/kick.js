const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("nu ai acces la aceasta comanda.")
     let member = message.mentions.members.first();
      const k = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setColor("RED")
      .setTitle(":warning: **ERROR**")
      .addField("**Trebuie sa mentionezi persoana careia vrei sa ii dai kick.**", "**Mod de folosire -** [/kick <@mention>](https://discord.gg/huYUfB) \n**Exemplu -** [/kick <@409372870259638273>](https://discord.gg/huYUfB)")
      .setTimestamp()
      if (!member)
        return message.channel.sendEmbed(k);
        if (member.id === message.author.id) return message.reply("nu iti poti da kick singur.")
        if(!member.kickable) return message.reply("Imi pare rau, dar nu pot scoate acest membru de pe server, deoarece detine o functie mai inalta decat mine.")
        let reason = "reason"
        if (!args.slice(1).join(' ')) {
          reason = "Motivul nu a fost specificat."
        } else {
          reason = args[1]
        } 
        member.send("Ai fost dat afara de pe serverul **HYPEUNIVERSE** de catre **" + message.author.username + "**.").then(
        setTimeout(() => {
          member.kick(reason)
        }, 500))

    let mod = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
	.setTitle("KICK | HYPEUNIVERSE")
	.addField("Utilizatorul", member.user.username, true)
	.addField("Motiv", reason, true)
	.setFooter("Dat afara de catre " + message.author.username)
    .setTimestamp()
    .setColor(0x0896c7)
    client.channels.get("409294383083552769").send(mod)
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'COX.',
  usage: 'search <words>'
};