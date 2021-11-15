module.exports = ({
name: "exec",
description: "Executes a terminal shell command",
usage: "$getserverVar[prefix]exec <command>",
code: `\`\`\`js
$exec[$message]
$onlyForIDs[$botOwnerID;$getvar[sophie];$getVar[faizenAlt];]
$argsCheck[>1;You do realise I cannot execute shell commands if you don't provide one right?]
\`\`\`
`
})