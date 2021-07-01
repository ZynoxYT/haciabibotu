const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`<a:wup:831693027793174600> **Lütfen yazı yazınız.** <a:wup:831693027793174600>`)
  const linqo = `https://habbofont.net/font/palooza/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Sarı Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'sarı',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'sarı <yazı>'
}