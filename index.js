const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
    if (message.content == 'Test') {
        
        message.channel.sendMessage('ONLINE');
    }

});

bot.login('NDUzMjUyNTgzODUxNjg3OTQ2.DfhAWA.8XJOexpUTjEsUnAeI-KCBGPnLZA');