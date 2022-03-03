const { Client } = require('discord.js');
const env = require('./util/envparser');
const { sendMessage, getCommands } = require('./commands/message');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
require('dotenv').config()

if (!env.isVaild()) {
    console.error(`[!] .Env File is empty or missing!`);
}

const botToken = env.botToken;
const prefix = env.prefix;

client.login(botToken);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let body = message.content.slice(prefix.length);
    let args = body.split(" ");
    let command = args.shift().toLowerCase();
    let user = "@" + message.author.username + "#" + message.author.discriminator;

    if (command === "cmd") {
        sendMessage(
            message,
            "My Commands",
            "#FFA500",
            `Here are all my **commands** :- \n ${getCommands()}`
        );

    }
    else {
        console.log("No Prefix");
    }

});
