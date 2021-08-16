module.exports = {
    name: "setprefix",
    aliases: ['set-prefix'],
    code: `Successfully set this server's prefix to \`$message\`, now I will only respond to that prefix.
 $setServerVar[prefix;$message]
 $argsCheck[>1;I can't change the prefix if you don't specify a prefix idiot]
 $onlyPerms[manageserver;You need \`MANAGE_SERVER\` perms to use this]`
}