module.exports = ({
name: "setchatbot",
alias: "set-chatbot",
code: `$setServerVar[chatbot;$mentionedChannels[1]]
$getVar[yeah] Set the chatbot channel to <#$mentionedChannels[1]>. Send a message to try it out.
$onlyIf[$mentionedChannels[1]!=;$getVar[nah] Correct syntax: \`#SEMI#set-chatbot <#channel>\`. Example: \`#SEMI#setchatbot #not-chatbot\`]`
})