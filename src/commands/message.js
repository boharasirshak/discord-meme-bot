const discord = require("discord.js");

function sendMessage(
    message,
    title,
    color,
    description
) {
    let msg = new discord.MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
        .setTimestamp();

    message.channel.send({ embeds: [msg] });
};

function getCommands() {
    return `1] !**meme** *Get random meme from famous subreddits* \n` +
        `2] !**memz** *Get meme from the subreddit of the bot owner*`;
}

module.exports = {
    sendMessage,
    getCommands
};
