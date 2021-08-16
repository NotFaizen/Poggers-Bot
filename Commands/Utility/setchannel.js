module.exports = ({
  name: "setsuggestchannel",
  aliases: ['setchannel','set-channel'],
  code: `Successfully set the suggestion channel to <#$mentionedChannels[1]>, all suggestions will now appear there
$setServerVar[suggestion;$mentionedChannels[1]]
$onlyPerms[manageserver;You need to have \`MANAGE_SERVER\` permission in order to use this]
$onlyIf[$mentionedChannels[1]!=;Mention a channel to set as the suggestion channel]`
})