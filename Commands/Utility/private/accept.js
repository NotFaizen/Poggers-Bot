module.exports = ({
name: "accept",
code: `
$getVar[yeah] Successfully marked suggestion as accepted!

$addMessageReactions[854328513363443732;$message;🔷]
$clearReactions[854328513363443732;$message;all]
$onlyForServers[838267479881023538;]
`
})