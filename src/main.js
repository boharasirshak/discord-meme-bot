require('dotenv').config()
const { Client } = require('discord.js');
const Reddit = require('./reddit/reddit');
const { myCommands, sendMeme } = require('./discord/commands');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.login(process.env.DISCORD_BOT_TOKEN);

const reddit = new Reddit(
    process.env.REDDIT_CLIENT_ID,
    process.env.REDDIT_CLIENT_SECRET,
    process.env.REDDIT_REFRESH_TOKEN
)

const prefix = process.env.PREFIX;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let body = message.content.slice(prefix.length);
    let args = body.split(" ") || [];
    let command = args.shift().toLowerCase();
    let user = "@" + message.author.username + "#" + message.author.discriminator;

    if (command === 'ping'){
        message.channel.send('pong 🏓');
    }

    if (command === 'cmds' || command === 'help'){
        myCommands(message)
    }

    if (command === 'meme'){
        reddit.getRandomMeme().then(meme => {
            sendMeme(meme, message);
        });
    }

    if (command === 'memez'){
        reddit.getMeme(args[0]).then(meme => {
            sendMeme(meme, message);
        });
    }
});