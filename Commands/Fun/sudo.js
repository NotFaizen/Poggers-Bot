module.exports = ({
  name: "sudo",
  code: `$djseval[const { Sudo } = require('weky');
const user = message.mentions.members.first()||author.id
const msg = "$noMentionMessage"
Sudo({
    message: message,
    text: msg,
    member: user,
});
start()]
$onlyIf[$mentioned[1]!=;Mention someone]
$onlyBotPerms[managewebhooks;I need the \`MANAGE_WEBHOOKS\` permission for this to work]`
})