module.exports = ({
name: "halp",
code: `
$djseval[// embed setup
const { MessageEmbed } = require('discord.js')
let embed = new MessageEmbed()
.setTitle("Commandlist for Poggers Bot")
.setDescription("The prefix for Poggers Bot is \`$getServerVar[prefix]\`. You can do \`$getServerVar[prefix]help <category>\` to get more info on a command")
.addField("$get[funmoji] | Fun", "\`$get[pref]help fun\`")
.addField("$get[econmoji] | Economy", "\`$get[pref]help econ\`")
.addField("$get[modmoji] | Moderation", "\`$get[pref]help mod\`")
.addField("$get[imgmoji] | Image", "\`$get[pref]help image\`")
.addField("$get[utilmoji] | Utility", "\`$get[pref]help util\`")
.addField("$get[miscmoji] | Miscellaneous", "\`$get[pref]help misc\`")
.addField("$get[intermoji] | Interactions", "\`$get[pref]help interaction\`")
.setFooter("Made by $usertag[$botownerid] and $usertag[744570131199426570] <3")
.setColor("$getUserVar[embedColor]")
message.channel.send(embed)]


$djseval[//local vars]
$let[pref;$getServerVar[prefix]]
$let[intermoji;<a:Bonk_PopCat:838341333004845066>]
$let[miscmoji;<:Aqua_bored:780758067238141952>]
$let[utilmoji;<a:geary:838366449122672680>]
$let[imgmoji;<a:Faizen_catJAM:823499334997377075>]
$let[modmoji;<:robut_cop:854009645240418376>]
$let[econmoji;<:dollarSign:883301944003809290>]
$let[funmoji;<a:yay:770240939661983744>]`
})