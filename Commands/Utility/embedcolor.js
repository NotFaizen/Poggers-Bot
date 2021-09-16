module.exports = ({
name: "embedcolor",
aliases: ['embed-color'],
code: `$title[Embed color changed]
$description[$getVar[yeah] Successfully changed your embed color to \`$message\`. Now all the embed based commands of the bot will have this color when you use them]
$footer[This message is in embed so you can get a preview]
$color[$toUppercase[$message]]
$setUserVar[embedColor;$replaceText[$toUppercase[$message];{author.color};$getRoleColor[$highestRole[$authorID]];-1]]
$argsCheck[>1;$getVar[nah] Provide a color, hex code. You can use the placeholder \`{author.color}\` to set the color to the role color of your highest color]`
})


