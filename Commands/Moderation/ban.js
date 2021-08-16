module.exports = {
  name: "ban",
  code: `
  $title[User banned!]
  $description[$username[$mentioned[1]] was banned from the server!]
  $footer[Banned by: $username]
  $color[$getUserVar[embedColor]]
  $ban[$mentioned[1];;0]
  $onlyPerms[ban;You cannot use this command idiot]
  $argscheck[>1;Mention someone to ban dummass]
  $suppressErrors`
}