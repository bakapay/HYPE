const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (message.author.equals(client.user)) return;
    //Avatar
    if(message.content.startsWith('/avatar')) {
      const myavatar = new Discord.RichEmbed()
	  .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(message.author.avatarURL);
	  
	  
      if(message.mentions.users.size < 1) return message.channel.sendEmbed(myavatar)
		  
	  
      const avatar = new Discord.RichEmbed()
      .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL)
      .setImage(message.mentions.users.first().avatarURL)
      message.channel.sendEmbed(avatar)
    }
	};
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'COX.',
  usage: 'search <words>'
};