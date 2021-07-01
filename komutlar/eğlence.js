const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("")
.setTitle("<:tik:841337101567918101> eğlence komutları")
 .setTimestamp()
.setDescription("<a:gif:859806665733570610> **-tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:developers:857675406613545010> \n <a:gif:859806665733570610> **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:developers:857675406613545010> \n <a:gif:859806665733570610> **-fbi** = Bot FBi Gif Atar. <a:developers:857675406613545010> \n <a:gif:859806665733570610> **-token** = Tokenimi Öğrenmek İstemezmisin? <a:developers:857675406613545010> \n <a:gif:859806665733570610> **-düello** = Düello Atarsın. <a:developers:857675406613545010> \n <a:gif:859806665733570610> **-wasted** = Polis tarafından yakalanırsın. <a:developers:857675406613545010> \n <a:gif:859806665733570610> **-atatürk** = Dene ve gör... (1881-1938) <a:developers:857675406613545010> \n <a:gif:859806665733570610> **-fakekimlik** = fakekimlik oluşturur <a:developers:857675406613545010> \n <a:gif:859806665733570610>   **-aşkölçer** = Kime Aşıksın ? <a:developers:857675406613545010>")
.setImage("https://cdn.discordapp.com/attachments/830500599757406220/832607026701140018/standard.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}