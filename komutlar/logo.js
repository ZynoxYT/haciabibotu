const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const eğlence = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Jarvis v12 sürümüyle yeniden sizlerle.")
    .setTitle(
      "<a:krmz:831133883075919873> Jarvis Logo Komutları <a:krmz:831133883075919873>"
    )
    .setTimestamp()
    .setDescription(
      "<a:gif:834035341013942304> **-dinamik** = Dinamik logo oluşturur. <a:pins:834035379937214504> \n <a:gif:834035341013942304> **-altın** = Altın logo oluşturur. <a:pins:834035379937214504> \n <a:gif:834035341013942304> **-banner** = Banner logo oluşturur. <a:pins:834035379937214504> \n <a:gif:834035341013942304> **-basit** = Basit logo oluşturur. <a:pin:779700454924877894> \n <a:gif:834035341013942304> **-elmas** = Elmas logo oluşturur. <a:pin:779700454924877894> \n <a:gif:834035341013942304> **-sarı** = Sarı logo oluşturur. <a:pin:779700454924877894> \n <a:gif:834035341013942304> **-neonmavi** = Neon mavi logo oluşturur. <a:pin:779700454924877894> \n <a:gif:834035341013942304> **-kalın** = Kalın logo oluşturur. <a:pin:829756898282438686> \n <a:gif:834035341013942304> **-anime** = Anime yazı tipinde logo oluşturur. <a:pin:829756898282438686> \n <a:gif:834035341013942304> **-habbo** = Habbo yazı tipinde logo oluşturur. <a:pin:829756898282438686> \n <a:gif:834035341013942304> **-arrow** = Ok işaretli logo oluşturur. <a:pin:829756898282438686> \n <a:gif:834035341013942304> **-green** = Yeşil logo oluşturur. <a:pin:829756898282438686>\n <a:gif:834035341013942304> **-alev** = Alevli logo oluşturur. <a:pin:829756898282438686> \n <a:gif:834035341013942304> **-red** = Kırmızı logo oluşturur. <a:pin:829756898282438686>"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/830500599757406220/832607026701140018/standard.gif"
    );
  message.channel.send(eğlence);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "logo",
  category: "kullanıcı",
  description: "Yardım Menüsü.",
  usage: "logo"
};
