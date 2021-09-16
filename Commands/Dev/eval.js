const discord = require('discord.js')
const client = new discord.Client()

const { MessageButton, MessageActionRow } = require('discord-buttons')

module.exports = ({
  name: "eval",
  error: `\`\`\`$error\`\`\``,
  description: "Evals an Aoi.JS code",
  usage: "$getservervar[prefix]eval <code>",
  aliases: ['ev','evaluate'],
  code: `$eval[$message]
  $color[YELLOW]
  $argsCheck[>1;I can't eval a code if you don't provide said code]
  
  $onlyForIDs[$botownerid;577009668266917937;744570131199426570;752565851948974100;Lol you aren't the bot dev and you know it]`
})