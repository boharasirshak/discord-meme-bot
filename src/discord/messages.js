const discord = require("discord.js");

module.exports.sendMessage =  function sendMessage(
    message,
    title,
    color,
    description,
    image = null
) {
    let msg = new discord.MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
        .setTimestamp()
        .setImage(image)

    message.channel.send({ embeds: [msg] });
};