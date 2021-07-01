const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Jarvis v12 sürümüyle sizlerle.")
.setTitle("<a:krmz:831133883075919873> Jarvis Moderasyon Komutları <a:krmz:831133883075919873>")
 .setTimestamp()
.setDescription("<a:gif:859806665733570610> **-sil** = Yazdığınız miktarda mesajı siler. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-ban** = Etiketlediğiniz kişiyi banlarsınız. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-kick** = Etiketlediğiniz kişiyi atarsınız. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-duyuru** = Bota duyuru yaptırırsınız. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-küfür** = Küfür engel sistemini açarsınız. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-reklam** = Reklam engel sistemi açarsınız. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-slowmode** = Yavaş modu ayarlarsınız. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-forceban** = Birisine id ban atarsınız. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-unban** = Birisinin banını açarsınız. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-sa-as** = Bot biri sa dedimi cevap verir. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-sunucubilgi** = Sunucu bilgilerini görürsün. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-üyedurum** = Üyelerin durumlarını görürsün. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-çekiliş** = Çekiliş başlatırsınız. <a:developers:834035357702946816> \n <a:gif:859806665733570610> **-nuke** = Komudu Yazdığınız Kanalı Patlatırsınız. <a:developers:834035357702946816>")
.setImage("https://cdn.discordapp.com/attachments/830500599757406220/832607026701140018/standard.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}