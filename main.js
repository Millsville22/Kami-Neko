const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: 32767 }); 
//const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ], intents: 32767});
//const prefix = '.';

//const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

//['command_handler', 'event_handler'].forEach(handler => {
    //require(`./handlers/${handler}`)(client, Discord);
//})

//const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
//for(const file of commandFiles) {
    //const command = require(`./commands/${file}`);

    //client.commands.set(command.name, command);
//}


//client.once('ready', () => {
    //console.group('Kami Neko is online!');
//});

//client.on('message', message => {
    //if(!message.content.startsWith(prefix) || message.author.bot) return;

    //const args = message.content.slice(prefix.length).split(/ +/);
    //const command = args.shift().toLowerCase();

    //if (command === 'ping') {
        //client.commands.get('ping').execute(message, args);
    //}    //else if (command == 'patriot') {
        //client.commands.get('patriot').execute(message, args, Discord);
    //}
//})

client.login(process.env.DISCORD_TOKEN);