//sub commands for help
module.exports = ({
name: "help",
code: `$if[$toLowercase[$message[1]]==fun]
$title[Fun commands]
$description[\`rps\`, \`say\`, \`clap\`, \`emojify\`, \`meme\`, \`doot\`, \`8ball\`, \`mock\`, \`ds\`, \`ttt\`, \`sudo\`, \`snake\`, \`owofy\`, \`advice\`, \`ss\`, \`whoasked\`]
$endif
$if[$toLowerCase[$mesage]==econ]
$title[Economy commands]
$description[\`bal\`, \`set-symbol\`, \`beg\`, \`daily\`, \`weekly\`, \`dep\`, \`with\`, \`farm\`]
$endif
$if[$toLowercase[$message[1]]==mod]
$title[Moderation commands]
$description[\`kick\`, \`ban\`, \`mute\`, \`unmute\`, \`gr\`, \`nick\`, \`slowmode\`, \`takerole\`, \`dehoist\`, \`purge\`]
$endif
$if[$toLowercase[$message[1]]==image]
$djseval[//well fuck]
$title[Image generation commands]
$description[\`bed\`, \`buttons\`, \`cat\`, \`clown\`, \`cmm\`, \`coffee\`, \`comment\`, \`delete\`, \`dog\`, \`drake\`, \`eject\`, \`invert\`, \`lolice\`, \`neko\`, \`panik\`, \`petition\`, \`ph\`, \`pride\`, \`roblox\`, \`simpcard\`, \`trash\`, \`trigger\`, \`wasted\`, \`hitler\`, \`gun\`, \`trump\`, \`affect\`, \`stonks\`, \`unstonks\`, \`tweet\`, \`wide\`, \`scroll\`, \`drip\`, \`mc\`, \`cr\`, \`rip\`, \`billy\`, \`ad\`, \`fear\`, \`pablo\`, \`pf\`, \`god\`]
$endif
$if[$toLowercase[$message[1]]==util]
$title[Utility commands]
$description[\`av\`, \`calc\`, \`setprefix\`, \`resetprefix\`, \`set-channel\`, \`suggest\`, \`set-msg\`, \`set-welcome-channel\`, \`set-welcome-bg\`, \`embed-color\`]
$endif
$if[$toLowercase[$message[1]]==misc]
$title[Miscellaneous commands]
$description[\`help\`, \`pastebin\`, \`recog\`, \`npm\`, \`invite\`]
$endif
$color[$getUserVar[embedColor]]
$footer[All commands start with the prefix \`$getServerVar[prefix]\`]
$onlyIf[$message[1]!=;]
`
})