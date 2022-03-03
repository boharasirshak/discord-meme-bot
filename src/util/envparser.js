require('dotenv').config()

const botToken = process.env.DISCORD_BOT_TOKEN || undefined;


module.exports.isVaild = function () {
    return botToken ? true : false;
}

module.exports.botToken = botToken;