const discord = require('discord.js')
const client = new discord.Client()

module.exports = ({
name: "djseval",
aliases: ['djs'],
description: "Allows the bot owner to execute any discord.js code",
usage: "$getServerVar[prefix]djseval <code>",
error: `\`\`\`js
$error\`\`\``,
code: `  $addField[📤 Output 📤;\`\`\`js
$djseval[$message;yes]\`\`\`

$addField[📥 Input 📥;\`\`\`js
$message\`\`\`]
$color[$getUserVar[embedColor]]
$onlyForIDs[$botOwnerID;$getvar[sophie];$getvar[faizenAlt];For legal reasons you don't have permission to use this]`
})