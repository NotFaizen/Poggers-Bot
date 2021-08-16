module.exports = {
  name: "nick",
  code: `$title[Nickname changed!]
  $description[
  Succesfully changed <@$mentioned[1]>'s Name to $noMentionMessage]
  $color[$getUserVar[embedColor]]
  $footer[Changed by: $username;$authoravatar]
  $changeNickname[$mentioned[1];$noMentionMessage]
  $argsCheck[>2;Mention someone and specify their new nickname]
  $onlyBotPerms[managenicknames;Failed to change nickname! Make sure I have \`MANAGE_NICKNAMES\` permission]
  $onlyPerms[managenicknames;You need \`MANAGE_NICKNAMES\` permission to use this]
  $suppressErrors`
}