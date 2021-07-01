const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Jarvis v12 sürümüyle yeniden sizlerle.")
.setTitle("<a:krmz:831133883075919873> Jarvis Kullanıcı Komutları <a:krmz:831133883075919873>")
 .setTimestamp()
.setDescription("<a:gif:832234942322311334> **-avatar** = Avatarınıza bakarsınız. <a:developers:832230543634333717> \n <a:gif:832234942322311334> **-yetkilerim** = Yetkilerini görürsün. <a:developers:832230543634333717> \n <a:gif:832234942322311334> **-profil** = Profilini görürsün. <a:developers:832230543634333717> \n <a:gif:832234942322311334> **-sunucuresmi** = Sunucu resmini gösterir. <a:developers:832230543634333717> \n <a:gif:832234942322311334> **-ping** = Botun Pingine Bakarsın. <a:developers:832230543634333717> \n <a:gif:832234942322311334> **-id** = Birisinin id'sine Bakarsın. <a:developers:832230543634333717> \n <a:gif:832234942322311334> **-davet** = Beni Sunucuna Ekle. <a:developers:832230543634333717> \n <a:gif:832234942322311334> **-botbilgi** = Bot istatistiklerini görürsünüz. <a:developers:832230543634333717> \n <a:gif:832234942322311334> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <a:developers:832230543634333717>")
.setImage("https://cdn.discordapp.com/attachments/830500599757406220/832607026701140018/standard.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}