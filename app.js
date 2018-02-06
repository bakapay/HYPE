const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const prefix = "/"

client.on('ready', () => {
	client.user.setGame("discord.me/hypeuniverse", "https://www.twitch.tv/drkillerxd")
});

client.on("guildMemberAdd", member => {
  let defaultrole = member.guild.roles.find("name", "🔥 | Hypers")
  let default2role = member.guild.roles.find("name", "Hype - SafeRole")
  member.addRole(defaultrole)
  member.addRole(default2role)
});

client.on("message", message => {
if(message.content.startsWith("/acceptat")){
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you don't have the correct permission.")

  let member = message.mentions.members.first();
  if (!member) return message.reply("you must.")
  let thelper = message.guild.roles.find("name", "💰 | Hype - Testers")
  let partner = message.guild.roles.find("name", "🏆 | Server Manager")
  
  if(message.channel.id === "409294069282504705" || message.channel.id === "410490044130918400"){
   client.channels.get("409294069282504705").send(`:tada: Congratulations, ${member}. Your partnership application has been accepted by ${message.author}.`)
   member.addRole(partner.id)}
   
  if(message.channel.id === "409294041734316032" || message.channel.id === "410489978502774785"){
   client.channels.get("409294041734316032").send(`:tada: Congratulations, ${member}. Your staff application has been accepted by ${message.author}.`)
  member.addRole(thelper.id)}
 
  message.delete()
}
});

client.on("message", message => {
if(message.content.startsWith("/color")){
let arg1 = message.content.split(" ").slice(0)
let arg = arg1[1]
if(!arg || arg === "list") return message.author.send("**==== AVAILABLE COLORS ====**\n**/color yellow** - Yellow\n**/color red** - Red\n**/color blue** - Blue\n**/color purple** - Purple\n**/color green** - Green\n**/color golden** - Golden\n**/color black** - Black\n**/color white** - White\n**/color gray** Gray\n**/color pink** - Pink\nIf you use the **/color none** command, all the colors you own will be removed.")
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
	
if(arg === "yellow"){
message.guild.member(sender).addRole(yellow) 
message.channel.send(":ballot_box_with_check:")}
	
if(arg === "red"){
message.guild.member(sender).addRole(red)
message.channel.send(":ballot_box_with_check:")}
	
if(arg === "blue"){
message.guild.member(sender).addRole(blue)
message.channel.send(":ballot_box_with_check:")}

if(arg === "purple"){
message.guild.member(sender).addRole(purple)
message.channel.send(":ballot_box_with_check:")}
if(arg === "green"){
message.guild.member(sender).addRole(green)
message.channel.send(":ballot_box_with_check:")}
	
if(arg === "golden"){
message.guild.member(sender).addRole(golden)
message.channel.send(":ballot_box_with_check:")}
	
if(arg === "black"){
message.guild.member(sender).addRole(black)
message.channel.send(":ballot_box_with_check:")}
	
if(arg === "white"){ 
message.guild.member(sender).addRole(white)
message.channel.send(":ballot_box_with_check:")}
	
if(arg === "gray"){
message.guild.member(sender).addRole(gray)
message.channel.send(":ballot_box_with_check:")}
	
if(arg === "pink"){
message.guild.member(sender).addRole(pink)
message.channel.send(":ballot_box_with_check:")}

if(arg === "none"){
message.guild.member(sender).removeRole(yellow)
message.guild.member(sender).removeRole(red)
message.guild.member(sender).removeRole(blue)
message.guild.member(sender).removeRole(purple)
message.guild.member(sender).removeRole(green)
message.guild.member(sender).removeRole(golden)
message.guild.member(sender).removeRole(black)
message.guild.member(sender).removeRole(white)
message.guild.member(sender).removeRole(gray)
message.guild.member(sender).removeRole(pink)
message.channel.send(":ballot_box_with_check:")}
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
if(message.channel.type != "dm"){
let emoji = client.guilds.find("HYPEUNIVERSE 🔥").emojis.find("name", "HUHypeSquad")
const cuvant = ["HYPE"];
const cuvant2 = ["Hype"];
const cuvant3 = ["hype"]
if(message.content.includes(cuvant) || message.content.includes(cuvant2) || message.content.includes(cuvant3)){
message.react(emoji)}}
});

client.on("guildMemberAdd", member => {
member.send("Eyyy, welcome to our server, **HYPEUNIVERSE**.").then(
member.send("• Our server includes capable and responsible staff.\n• A custom credit system and language selector.\n• Experienced administrators on this platform.")).then(
member.send("**We are glad that you have chosen our server from all that exist on discord.**\n:link: If you want to help the server, you can invite your friends using this link - https://discord.gg/ShjcYXK"))
});



client.login("NDA5MzcyODcwMjU5NjM4Mjcz.DVdpxw.IDql-6-5uGkCM8Z9gtFVGUcLnmk");
