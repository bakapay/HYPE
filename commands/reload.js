exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`:gear: Nu pot gasi o comanda cu numele **${args[0]}**`);
  } else {
    message.channel.send(`:gear: Se da reload...`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`:gear: **${command}** a primit reload cu succes`);
          })
          .catch(e => {
            m.edit(`:gear: **ERROR**\n${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Dai reload unei comenzi. [doar developerul]',
  usage: 'reload <command>'
};
