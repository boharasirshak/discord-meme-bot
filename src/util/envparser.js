require('dotenv').config()

const botToken = process.env.DISCORD_BOT_TOKEN || undefined;
const prefix = process.env.PREFIX || undefined;


module.exports.isVaild = function () {
    if (!botToken) return false;
    if (!prefix) return false;

    return true;
}

module.exports.botToken = botToken;
module.exports.prefix = prefix;