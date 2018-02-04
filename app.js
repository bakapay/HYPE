const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const prefix = "/"

require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on('ready', () => {
	client.user.setGame("discord.me/hypeuniverse", "https://www.twitch.tv/drkillerxd")
});


	
	
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading  ${files.length} commands. рџ‘Њ`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading command: ${props.help.name}. рџ‘Њ`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  if (message.author.id === "390155343373533195") permlvl = 4;
  return permlvl;
};


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
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
