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

client.on("guildMemberAdd", member => {
  client.channels.get("409293635704848394").send("[+] " + member + ".")
  let defaultrole = member.guild.roles.find("name", "Hypers")
  let default2role = member.guild.roles.find("name", "safe")
  member.addRole(defaultrole)
  member.addRole(default2role)
});

client.login("NDA5MzcyODcwMjU5NjM4Mjcz.DVdpxw.IDql-6-5uGkCM8Z9gtFVGUcLnmk");
