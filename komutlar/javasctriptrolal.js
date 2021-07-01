const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "js"); 
  if (message.member.roles.has(role.id)) return message.channel.send('JavaScript Rolüne Zaten Sahipsin.')
  message.member.addRole(role);
  message.channel.send('Ayarlanan JavaScript Rolü Başarıyla Verildi.');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['js','js'],
  permLevel: 0
};

exports.help = {
  name: 'js',
  description: '',
  usage: 'js'
};