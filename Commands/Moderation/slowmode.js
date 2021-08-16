module.exports = ({
  name: "slowmode",
  aliases: ['sm'],
  code: `
  $if[$message[1]==0]
  Successfully reset chat slowmode.
  $slowmode[$channelID;$message[1]]

  $elseif[$message[1]!=0]

  Successfully set the chat slowmode to $message[1] seconds.
  $slowmode[$channelID;$message[1]s]
  $onlyIf[$isNumber[$message[1]]==true;Bro... that ain't a number, stop your futile attempts at breaking me smh]
  $endelseif
  $endif
  $onlyPerms[managemessages;You need \`MANAGE_MESSAGES\` perms to use this]
  $argsCheck[>1;Provide a number in seconds to set the chat slowmode to]
  $suppressErrors`
})