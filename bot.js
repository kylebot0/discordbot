const Discord = require('discord.js');

const TOKEN = 'NDUzNjIzMDk4NjU5MzA3NTQx.DfhlEA.SsgcvHWk2DF_Z7uXnLpWPN-U9oQ';
const PREFIX = 'cc '

var bot = new Discord.Client();

var gayArray = [
    '1%',
    '10%',
    '50%',
    '99%'
];


bot.on('ready', function() {
    console.log('ready');
    bot.user.setPresence({ game: { name: "War Faggots" , type: 0 } });
});
bot.on('message', function(message) {
    //	console.log(message.content);
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
    // if (message.content == 'hello') {
    // 	message.channel.sendMessage('Hi, there');
    // }

    var args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0].toLowerCase()) {
        case 'ping':
            message.channel.send('pong');
            break;
        case 'gay':
            if (args[1]) message.channel.send(gayArray[Math.floor(Math.random() * gayArray.length)]);
            else message.channel.send('Who dat');
            break;


        default:
            message.channel.send('Invalid command')
            break;

    }

});

bot.login(process.env.BOT_TOKEN);
