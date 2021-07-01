const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("")
.setTitle("<a:tik:857675414121742366> Yardım Komutları")
 .setTimestamp()
.setDescription("<a:s3:857675413550530580> **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:s3:857675413550530580> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:s3:857675413550530580> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:s3:857675413550530580> **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/830500599757406220/832607026701140018/standard.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["yardım","hey"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'hey',
  category: 'hey',
  description: 'Yardım Menüsü.',
   usage:'hey'
}