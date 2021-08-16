module.exports = {
 name: "mute",
 code: `$title[User muted]
 $description[$username[$mentioned[1]] has been muted]  $footer[Muted by: $username]
 $color[$getUserVar[embedColor]]  
 $giveRole[$mentioned[1];$findRole[Muted]]
 $argsCheck[>1;Mention someone to mute idiot]
 $onlyPerms[manageroles;Sorry You Need More Perms!]
 $suppressErrors`
}