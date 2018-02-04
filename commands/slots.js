const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');
exports.run = (client, message, args) => {
let sender = message.author.id
let number = args.slice(0).join(' ');
let moneyData = JSON.parse(fs.readFileSync('storage/rpoints.json', 'utf8'));
		
if (!moneyData[sender]) moneyData[sender] = {}
if (!moneyData[sender].money) moneyData[sender].money = 0;

const text1 = [
":grapes::banana::watermelon:",
":watermelon::watermelon::cherries:",
":strawberry::banana::banana:",
":seven::tangerine::cherries:",
":watermelon::watermelon::cherries:",
":cherries::banana::watermelon:",
":watermelon::grapes::tangerine:",
":strawberry::banana::banana:",
":seven::apple::tangerine:",
":watermelon::watermelon::cherries:"
]

const text2 = [
":cherries::watermelon::apple:",
":cherries::watermelon::apple:",
":cherries::watermelon::apple:",
":watermelon::watermelon::watermelon:",
":seven::cherries::watermelon:",
":strawberry::apple::watermelon:",
":strawberry::apple::watermelon:",
":strawberry::apple::watermelon:",
":watermelon::grapes::tangerine:",
":watermelon::grapes::tangerine:",
":watermelon::grapes::tangerine:",
":grapes::banana::watermelon:",
":grapes::banana::watermelon:"
]	


const text3 = [
":grapes::banana::watermelon:",
":watermelon::watermelon::cherries:",
":strawberry::banana::banana:",
":seven::tangerine::cherries:",
":watermelon::watermelon::cherries:",
":cherries::banana::watermelon:",
":watermelon::grapes::tangerine:",
":strawberry::banana::banana:",
":seven::apple::tangerine:",
":watermelon::watermelon::cherries:"
]

const win1 = ":seven::cherries::watermelon:"
const win2 = ":watermelon::watermelon::watermelon:"
const win3 = ":strawberry::banana::banana:"

const da2 = text2[Math.floor(Math.random() *﻿ text2.length)]
		
if (!moneyData[sender]) moneyData[sender] = {}
if (!moneyData[sender].money) moneyData[sender].money = 0;

if(moneyData[sender].money === 0){
message.channel.send("Ai nevoie de minim **1 hcredits** pentru a juca la pacanele.")}

if(number === 0 || !number) return message.channel.send("Trebuie sa joci un numar de **hcredits** mai mare de **0**.")

if(number > 500) return message.channel.send("Nu poti juca un numar de **hcredits** mai mare de **500**.")
	
if(moneyData[sender].money > 0 || moneyData[sender].money === 1){
	if(moneyData[sender].money === number || moneyData[sender].money > number){
  message.channel.send("**==== SLOTS ====**\n        " + text1[Math.floor(Math.random() *﻿ text1.length)] + "\n    **>** " + da2 + " **<**\n        " + text3[Math.floor(Math.random() *﻿ text3.length)])
    moneyData[sender].money -= number;
	
if(da2 === win1)
	return message.channel.send("**==== WIN ====**\nFelicitari, **" + message.author.username + "**, ai castigat **1000 hcredits**.")
	moneyData[sender].money += 1000; 

if(da2 === win2)
	return message.channel.send("**==== WIN ====**\nFelicitari, **" + message.author.username + "**, ai castigat **1000 hcredits**.")
moneyData[sender].money += 100; 

if(da2 === win3) 
	 return message.channel.send("**==== WIN ====**\nFelicitari, **" + message.author.username + "**, ai castigat **1000 hcredits**.")
	moneyData[sender].money += 50; 

if(da2 != win1 || da2 != win2 || da2 != win3) 
  return message.channel.send("**==== LOSE ====**\nAi pierdut **" + number + "** hcredits, **" + message.author.username + "**."); 
}};


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
  name: 'slots',
  description: 'RPOINTS.',
  usage: 'search <words>'
};


