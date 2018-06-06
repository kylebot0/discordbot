const Discord = require('discord.js');
const economy = require('quick.db');



const TOKEN = 'NDUzNjIzMDk4NjU5MzA3NTQx.DfhlEA.SsgcvHWk2DF_Z7uXnLpWPN-U9oQ';

const client = new Discord.Client();
const prefix = '!';

client.on('ready', function() {
    console.log('ready');
    client.user.setPresence({ game: { name: "War Faggots" , type: 0 } });
});



client.on('message', message => {

	let msg = message.content.toUpperCase();
	let sender = message.author;
	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();

	if (!msg.startsWith(prefix)) return; 
	if (message.author.bot) return;

	//Command handler

try {
	let commandFile = require(`./commands/${cmd}.js`);
	commandFile.run(client, message, args);

} catch (e) {
	console.log(e.message);
} finally {
	console.log(`${message.author.tag} ran the command ${cmd}`);

}

	


})






client.login(TOKEN);

// bot.on('message', function(message) {
//     //	console.log(message.content);
//     if (message.author.equals(bot.user)) return;

//     if (!message.content.startsWith(PREFIX)) return;
//     // if (message.content == 'hello') {
//     // 	message.channel.sendMessage('Hi, there');
//     // }

//     var args = message.content.substring(PREFIX.length).split(' ');

//     switch (args[0].toLowerCase()) {
//         case 'ping':
//             message.channel.send('pong');
//             break;
//         case 'gay':
//             if (args[1]) message.channel.send(gayArray[Math.floor(Math.random() * gayArray.length)]);
//             else message.channel.send('Who dat');
//             break;
//             case 'balance':

//         default:
//             message.channel.send('Invalid command')
//             break;

//     }

// });
