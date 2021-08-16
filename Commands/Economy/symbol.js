module.exports = {
  name: "set-symbol",
  description: "Sets the currency symbol for your server",
  usage: "$getserverVar[prefix]set-symbol <symbol or emote>",
  code: `$onlyPerms[manageserver;Yo idiot you need \`ManageServer\` perms to use this command]
$onlyIf[$message!=;I can't set the server's currency symbol to something if you don't specify anything idiot]

Successfully set this server's currency symbol to $message
$setServerVar[symbol;$message]`
}