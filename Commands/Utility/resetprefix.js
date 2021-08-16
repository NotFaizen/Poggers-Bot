module.exports = ({
  name: "reset-prefix",
  aliases: ['resetprefix'],
  code: `Successfully reset this server's prefix to \`;\`
  $resetservervar[prefix]
  $onlyPerms[manageserver;You need the \`MANAGE_SERVER\` permission to use this]`
})