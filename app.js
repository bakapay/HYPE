const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const prefix = "/"

client.on('ready', () => {
	client.user.setGame("discord.me/hypeuniverse", "https://www.twitch.tv/drkillerxd")
});

client.on("guildMemberRemove", member => {
  client.channels.get("409293635704848394").send("[-] " + member + ".")
});

client.on("guildMemberBan", member => {
  client.channels.get("409293635704848394").send("[x] " + member + ".")
});

client.on("guildMemberAdd", member => {
  client.channels.get("409293635704848394").send("[+] " + member + ".")
  let defaultrole = member.guild.roles.find("name", "Hypers")
  let default2role = member.guild.roles.find("name", "safe")
  member.addRole(defaultrole)
  member.addRole(default2role)
});

client.on("message", message => {
if(message.content.startsWith("/acceptat")){
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
}
});

client.on("message", message => {
if(message.content.startsWith("/color")){
let arg = message.content.split(" ").slice(1)
if(!arg || arg === "list") return message.author.send("**==== CULORI DISPONIBILE ====**\n**/color yellow** - galben\n**/color red** - rosu\n**/color blue** - albastru\n**/color purple** - violet\n**/color green** - verde\n**/color golden** - auriu\n**/color black** - negru\n**/color white** - alb\n**/color gray** gri\n**/color pink** - roz")
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
}
});

client.on("message", message => {
	if(message.content.startsWith("/leave")){
if(message.member.hasPermission('MANAGE_SERVER')) return message.reply("detii o functie destul de mare, mai bine **nu ai parasi** serverul.")
        let kickMember = message.author
	kickMember.send("Ai iesit de pe serverul **HYPEUNIVERSE**, daca vrei sa revii pe server, poti folosi link-ul de mai jos. \n:link: https://discord.gg/t6HGuCe").then(
  setTimeout(() => { 
	message.guild.member(kickMember).kick()
        }, 1000))
}	
});

client.on("message", message => {
	if(message.content.startsWith("/report")){
	   
let member = message.mentions.members.first();
let motiv1 = message.content.split(" ").slice(1)
let dovada1 = message.content.split(" ").slice(2)

let motiv = motiv1[1]
let dovada = dovada1[2]

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
	   }
	   });

client.on("message", message => {
	if(message.content.startsWith("/serverinfo")){
const embed = new Discord.RichEmbed()
	.setAuthor(message.guild, message.guild.iconURL)
	.addField("Name", message.guild, true)
	.addField("Owner", message.guild.owner, true)
	.addField("Members", message.guild.memberCount, true)
	.addField("Online", message.guild.members.filter(m => m.presence.status !== 'offline').size, true)
	.addField("Channels", message.guild.channels.size, true)
	.addField("Region", message.guild.region, true)
	.setFooter("CreatedAt • Friday, February 02, 2018 at 6:20 PM")
	.setThumbnail(message.guild.iconURL)
        .setColor(0x0896c7)
	    message.channel.sendEmbed(embed)
}
});


client.on("message", message => {
	if(message.content.startsWith("/say")){	
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("nu ai **acces** la aceasta comanda.")
let mesaj = message.content.split("").slice(0)
message.channel.send(mesaj)
message.delete()
}
});



client.login("NDA5MzcyODcwMjU5NjM4Mjcz.DVdpxw.IDql-6-5uGkCM8Z9gtFVGUcLnmk");
