module.exports = ({
name: "added",
code: `
$getVar[yeah] Successfully marked suggestion as added!

$addMessageReactions[854328513363443732;$message;🔶]
$clearReactions[854328513363443732;$message;all]
$onlyForServers[838267479881023538;]
`
})