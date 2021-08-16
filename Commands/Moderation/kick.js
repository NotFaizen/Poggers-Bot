module.exports = {
  name: "kick",
  code: `
$title[Kicked user]
$description[Successfully kicked user.]
$footer[Kicked by: $username]
$color[$getUserVar[embedColor]]
$kick[$mentioned[1]]
$onlyPerms[kick;You can't use this command dummy]
$cooldown[5m;Have some patience comrade, wait 5 mins before kicking someone again]
$onlyIf[$mentioned[1]!=;Mention someone to kick]`
}