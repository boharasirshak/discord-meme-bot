const { Client } = require('discord.js');
const env = require('./util/envparser');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
require('dotenv').config()

if (!env.isVaild()) {
    console.error(`[!] .Env File is empty or missing!`);
}

const botToken = env.botToken;

client.login(botToken);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
