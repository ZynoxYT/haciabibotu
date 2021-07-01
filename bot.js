const fs=require('fs');
const Discord=require("discord.js");
const client=new Discord.Client();
const db = require('quick.db')
const moment = require("moment");
const ayarlar=require("./ayarlar.json");
const express = require('express');
/////
const app = express()
app.get('/', (req, res) => res.send("Bot Aktif"))
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))
//////////////////



client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
})


client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("dnd");
  client.user.setActivity('-hey | -davet v1 güncellemesi yayında bot v12 olmuş durumda yapımcım zynox');
})


const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
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

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
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

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  
client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = -ayarlar.varsayilanperm  ;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('sanada selam')
        msg.channel.stopTyping()
      }, 5000)
    }
});

////////////////////////////jarvis yapayzeka komutları///////////////////////////////////////

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('kim bot ?')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('sanada selam')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsın jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('iyiyim sen nasılsın')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bende iyiyim jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('sen iyisem ben daha iyiyim <3')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bende ii jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('sen iyisem ben daha iyiyim <3')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ii jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('sen iyisem ben daha iyiyim <3')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'zekimisin jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('Benden Daha Zeki Bot Yoktur knkm')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'zeki misin jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('sen iyisem ben daha iyiyim <3')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'malmısın jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('hayır')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'anan nasıl jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('iyi senin annen nasıl')
        msg.channel.stopTyping()
      }, 4000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'anan nası jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('iyi senin annen nasıl')
        msg.channel.stopTyping()
      }, 2000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bb') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('bb knk az daha dursaydın bea :)')
        msg.channel.stopTyping()
      }, 3000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('iyi senden naber')
        msg.channel.stopTyping()
      }, 5000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('ase knk')
        msg.channel.stopTyping()
      }, 1500)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('efendim')
        msg.channel.stopTyping()
      }, 1000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'jarvis ab') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('?')
        msg.channel.stopTyping()
      }, 100)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'jarvis abi nbr') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('ii')
        msg.channel.stopTyping()
      }, 100)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '-yapayzeka') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('yapayzeka etkinleştirildi mesajların sonuna jarvis eklemeyi unutma')
        msg.channel.stopTyping()
      }, 9000)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('as knk')
        msg.channel.stopTyping()
      }, 1500)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'napıyosun jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('iyi sen ne yapıyon')
        msg.channel.stopTyping()
      }, 1500)
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'napıyosun jarvis') {
     msg.channel.startTyping()
      setTimeout(() => {
        msg.reply('iyiyim bende jarvis')
        msg.channel.stopTyping()
      }, 1500)
    }
});



///////////////////////////jarvis yapayzeka komutları son///////////////////////////////////



/////////////////////////////jarvis özel komutlar////////////////////////////////////////

client.on("ready", () => {
  client.channels.cache.get("835498062709129307").join();
})

client.on('guildCreate', guild => {

  let channel = guild.channels.cache.filter(c => c.type === "text").random()

  channel.send("Selam Görünüşe Göre Yeni Bir Sunucudayım :)");

});

///////////////////////////jarvis özel komutlar son//////////////////////////////////////



client.on("message", async msg => {
    if(msg.author.bot) return;
    
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`)  
          if (i == 'acik') {
              const reklam = ["https://","http://","discord.gg"];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                                       
                    return msg.channel.send(`${msg.author.tag}, Reklam Yapmak Yasak!`).then(msg => msg.delete(10000));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          });    


client.on("messageUpdate", msg => {
 
 
 const i = db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", 
                       "amk", 
                       "ananı sik iyim",
                       "piç",
                       "orospu çocuğu",
                       "amq",
                       "am",
                       "amcık",
                       "şerefsiz",
                       "mk",
                       "mq",
                       "orospu",
                       "oruspu"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                         
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
 






const googleTTS = require('google-tts-api')
client.on('voiceStateUpdate', async (oldState, newState) => {
  let kanalID = "855478697799581717";
  if (newState.id !== client.user.id && newState.voice.channel && newState.voice.channel.id === kanalID) {
    googleTTS("Hoş Geldin!", "tr", 1).then(soylenecek => {
      newState.voice.channel.join().then(kanal => {
        kanal.play(soylenecek).on("end", () => {
          setTimeout(() => {
            newState.voice.channel.leave();
          }, 2000)
        });
      });
    });
  };
});




client.on("message", async msg => {
 
 
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
          try {
 
                  return msg.reply(
                    'Aleyküm Selam, Hojgeldin <a:KalpGif:832622644565114881>')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
   
    }
    if (!i) return;
 
    });

client.login(process.env.token)