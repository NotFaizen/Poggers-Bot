module.exports = ({
name: "opinion",
code: `$djseval[(async () => { const Discord = require('discord.js')
const canvacord = require('canvacord')

const msg = "$nomentionmessage"




let avatar = "$replaceText[$replaceText[$userAvatar[$mentioned[1]];webp;png;-1];gif;png;-1]"
const image = await canvacord.Canvas.opinion(avatar, msg)
let attachment = new Discord.MessageAttachment(image, "opinion.png");
message.channel.send(attachment)})()]
$onlyIf[$noMentionMessage!=;Correct usage: \`#SEMI#opinion <@user> <text>\` (without the \`<\` and \`>\`)]
$onlyIf[$mentioned[1]!=;Correct usage: \`#SEMI#opinion <@user> <text>\` (without the \`<\` and \`>\`)]`
})