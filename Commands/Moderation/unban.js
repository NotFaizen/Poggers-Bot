module.exports = {
  name: "unban",
  code: `
  $title[Unban successful]
  $description[$username[$message[1]] has been unbanned]
  $footer[Unbanned by: $userTag[$authorID];$authorAvatar]
  $color[$getUserVar[embedColor]]
  $unban[$message[1]]
  $onlyPerms[ban;You need the \`BAN_MEMBERS\` permission to use this]
  $suppressErrors[Provide a valid ID of a user to unban]
  $argsCheck[>1;Provide a valid ID of a user to unban]
`
}