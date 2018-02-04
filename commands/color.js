const Discord = require('discord.js');
exports.run = function(client, message, args) {
let arg = args[0]
let sender = message.author
let yellow = message.guild.roles.find("name", "yellow");
let red = message.guild.roles.find("name", "red");
let blue = message.guild.roles.find("name", "blue");
let purple = message.guild.roles.find("name", "purple");
let green = message.guild.roles.find("name", "green");
let golden = message.guild.roles.find("name", "golden");
let black = message.guild.roles.find("name", "black");
let white = message.guild.roles.find("name", "white");
let gray = message.guild.roles.find("name", "gray");
let pink = message.guild.roles.find("name", "pink");

if(!arg || arg === "list") return message.author.send("**==== CULORI DISPONIBILE ====**\n**/color yellow** - galben\n**/color red** - rosu\n**/color blue** - albastru\n**/color purple** - violet\n**/color green** - verde\n**/color golden** - auriu\n**/color black** - negru\n**/color white** - alb\n**/color gray** gri\n**/color pink** - roz")
	
if(arg === "yellow") return message.guild.member(sender).addRole(yellow)
if(arg === "red") return message.guild.member(sender).addRole(red)
if(arg === "blue") return message.guild.member(sender).addRole(blue)
if(arg === "purple") return message.guild.member(sender).addRole(purple)
if(arg === "green") return message.guild.member(sender).addRole(green)
if(arg === "golden") return message.guild.member(sender).addRole(golden)
if(arg === "black") return message.guild.member(sender).addRole(black)
if(arg === "white") return message.guild.member(sender).addRole(white)
if(arg === "gray") return message.guild.member(sender).addRole(gray)
if(arg === "pink") return message.guild.member(sender).addRole(pink)
	message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'color',
  description: 'Stergi un numar de mesaje.',
  usage: 'purge <number>'
};