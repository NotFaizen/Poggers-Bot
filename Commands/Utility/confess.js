module.exports = ({
name: "confess",
code: `
$author[Anonymous Confession;$serverIcon]
$description[$message]
$image[$messageAttachment]
$color[$getUserVar[embedColor]]
$footer[DM me "#SEMI#confess" to confess • $advancedTextSplit[$parsedate[$datestamp];,;1]]
$onlyIf[$guildID==;This command can only be used in my DMs, trust me you don't wanna let others see your confession.]
$argsCheck[>1;You can't send an empty confession mate. (Pro tip: you can send images)]
`
})