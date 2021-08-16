module.exports = {
 name: "unmute",
 code: `$title[Unmuted]
 $description[$username[$mentioned[1]] has been muted]  $footer[Muted by: $username]
 $color[$getUserVar[embedColor]]  
 $takeRole[$mentioned[1];$findRole[Muted]]
 $argsCheck[>1;Mention someone to unmute idiot]
 $onlyPerms[manageroles;You really think you can unmute people without \`MANAGE_ROLES\` permission huh?]
 $suppressErrors`
}