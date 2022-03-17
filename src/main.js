require('dotenv').config()
const { Client } = require('discord.js');
const Reddit = require('./reddit/reddit');
const { myCommands, formatMeme } = require('./discord/commands');
const {sendMessage} = require('./discord/messages');
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
        var redditReponse = reddit.getRandomMeme();

        if (!redditReponse) {
            sendMessage(
                message,
                'Error',
                '#FF0000',
                `Error getting meme from the subreddit`
            )
        }

        redditReponse.then(meme => {

            if (!meme) {
                sendMessage(
                    message,
                    'Error',
                    '#FF0000',
                    `Error getting meme from the subreddit`
                )
            }
            else{
                sendMessage(
                    message,
                    meme.title,
                    '#FFA500',
                    formatMeme(meme),
                    meme.link
                )
            }
        });
    }

    if (command === 'memez'){

        if (args.length === 0){
            sendMessage(
                message,
                'Error',
                '#FF0000',
                `Empty args!, please pass subreddit name after memez command`
            )
        }
        else{
            var redditReponse = reddit.getMeme(args[0]);

            if (!redditReponse) {
                sendMessage(
                    message,
                    'Error',
                    '#FF0000',
                    `Error getting meme from the subreddit`
                )
            }

            redditReponse.then(meme => {
                if (!meme) {
                    sendMessage(
                        message,
                        'Error',
                        '#FF0000',
                        `Error getting meme from the subreddit ${args[0]}`
                    )
                }
                else{
                    sendMessage(
                        message,
                        meme.title,
                        '#FFA500',
                        formatMeme(meme),
                        meme.link
                    )
                }
            });
        }
    }

});
// reddit.getMeme('danmemes')
//     .then(meme => {
//         console.log(meme);
//     })

// reddit.getRandomMeme()
//     .then(meme => {
//         console.log(meme);
//     })
