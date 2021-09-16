module.exports = {
  name:'sudo',
  code:`
  $djsEval[(async () => {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Please provide a user!");
    let sends = args.slice(1).join(" ")
    if (!sends) return message.channel.send("provide a message");
    const webhook = await message.channel.createWebhook(user.displayName, {
      avatar: user.user.displayAvatarURL(),
      channel: message.channel.id
    });
    await webhook.send(sends).then(() => {
      webhook.delete();
    });
})()]
$onlyBotPerms[managewebhooks;Bot doesn't have \`MANAGE_WEBHOOKS\` permissions]
$onlyIf[$noMentionMessage!=;$getVar[nah] Incorrect usage! Correct usage: \`#SEMI#sudo <@user> <message>\`]
$onlyIf[$mentioned[1]!=;$getVar[nah] Incorrect usage! Correct usage: \`#SEMI#sudo <@user> <message>\`]
`
}