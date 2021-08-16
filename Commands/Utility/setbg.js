module.exports = ({
  name: "set-welcome-bg",
  aliases: ['setwelcomebg'],
  code: `
  $setServerVar[welcomeBg;$message[1]]
  Successfully set your welcome card bg to: $attachment[$message[1];bg.png]
  $onlyIf[$stringStartsWith[$message[1];https://]==true;You must enter a valid image link for your welcome bg to be]`
})