const { sendMessage } = require('./messages');

const MY_CURRENT_COMMANDS = [
    {
        command: '!meme',
        description: 'Get random meme from subreddit'
    },
    {
        command: '!memez <SUBREDDIT>',
        description: 'Get meme from specified subreddit'
    }
]

function getMyCommands(){
    var cmds = '';
    MY_CURRENT_COMMANDS.forEach(command => {
        cmds = cmds.concat(`${command.command} -> ${command.description}\n`)
    })
    return cmds;
}

module.exports.myCommands = function myCommands(message){
    sendMessage(
        message,
        'Here are my all commands',
        '#FFA500',
        getMyCommands()
    );
}

module.exports.formatMeme = function formatMeme(meme){
    var str = '';
    str = str.concat(`Subreddit: ${meme.subreddit} \n`);
    str = str.concat(`Author: ${meme.author} \n`);
    return str;
}