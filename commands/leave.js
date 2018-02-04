const Discord = require('discord.js');
const ms = require("ms");
exports.run = (client, message, args) => {
  let kickMember = message.author
	kickMember.send("Ai iesit de pe serverul **HYPEUNIVERSE**, daca vrei sa revii pe server, poti folosi link-ul de mai jos. \n:link: https://discord.gg/t6HGuCe").then(
  setTimeout(() => { 
	message.guild.member(kickMember).kick()
        }, 1000))
  
	};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'leave',
  description: 'COX.',
  usage: 'search <words>'
};