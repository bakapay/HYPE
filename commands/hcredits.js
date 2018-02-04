const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');
exports.run = (client, message, args) => {
let sender = message.author.id
let moneyData = JSON.parse(fs.readFileSync('storage/rpoints.json', 'utf8'));
let hcredits = 50		
		
if (!moneyData[sender]) moneyData[sender] = {}
if (!moneyData[sender].money) moneyData[sender].money = 0;
		
if(moneyData[sender].money > 0 || moneyData[sender].money === 0){
	if (moneyData[sender].lastDaily != moment().format('H')) {
    moneyData[sender].lastDaily = moment().format('H')
    moneyData[sender].money += hcredits;
	message.channel.send("Felicitări, **" + message.author.username + "**! Tocmai ai primit **" + hcredits + "** hcredits.")
} else {
    message.channel.send("Vino să cerșești după **1h** de la primirea hcredits-urilor, **" + message.author.username + "**. Ai strâns **" + moneyData[sender].money +"** hcredits.")}};
	
	fs.writeFile('storage/rpoints.json', JSON.stringify(moneyData), (err) => {
	if (err) console.error(err);});
	};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hcredits',
  description: 'RPOINTS.',
  usage: 'search <words>'
};