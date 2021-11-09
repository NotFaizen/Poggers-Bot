module.exports = {
name: "say",
code: `$if[$message[1]==--embed]
$author[$userTag;$userAvatar]
$description[$messageSlice[1]]
$color[$getUserVar[embedColor]]
$addTimestamp
$else
$message\n\n- \`$userTag\`
$endif
$deletecommand
$onlyif[$checkContains[$message;@everyone;@here;<@;<@&]==false;You want to ping someone? Well too bad because you can't]
$argsCheck[>1;Insert something for the bot to say (you can pass a --embed flag before your message to get an embedded message)]`
}