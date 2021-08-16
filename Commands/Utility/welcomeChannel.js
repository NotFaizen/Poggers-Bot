module.exports = ({
  name: "set-welcome-channel",
  aliases: ['setwelcomechannel'],
  code: `$setServerVar[welcomeChannel;$mentionedChannels[1]]
  Successfully set your welcome channel to <#$mentionedChannels[1]>
  $onlyIf[$mentionedChannels[1]!=;Mention a channel to set as your welcome channel]`
})