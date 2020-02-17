const Discord = require("discord.js") 
const bot = new Discord.Client();
const prefix = "$";



bot.on('ready', async => {
    console.log("Go Pub !")  
    bot.user.setGame('𝙗𝙮 ៛𝙣𝙠𝙨・', 'https://www.twitch.tv/glimowetmowgli');
})

bot.on('message', message => {

    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
             if (cmd === prefix + "mp"){
        if(message.author.id != "658359325152247809") return;
                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();

                let MpMessage = args.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(`${MpMessage}`)
                })
            
            }
})

bot.login("Njc4OTc1OTkxOTkzMDczNzA0.Xkqztw.F5oiuehHe9qMOcychhx1jeg1-Hg").catch(err=> console.log("Token Incorrect"));

