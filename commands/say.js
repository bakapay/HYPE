const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("nu ai **acces** la aceasta comanda.")
let mesaj = args.slice(0).join(' ');
message.channel.send(mesaj)
message.delete()

	};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'RPOINTS.',
  usage: 'search <words>'
};