module.exports = ({
  name: "couldread",
  aliases: ['cr'],
  code: `$djseval[(async () => { const Discord = require('discord.js')
  const img = require("image-generation-for-discord");
  const imag = await img.couldread("$message");
  const image = new Discord.MessageAttachment(imag, "read.png")
  message.channel.send(image)})()]
  $argsCheck[>1;Insert some text]
`
})
