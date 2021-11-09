module.exports = {
name: "$alwaysExecute",
code: `
$reply[$messageID;$get[chatbot];yes]
$let[chatbot;$jsonRequest[https://api.popcat.xyz/chatbot?msg=$uri[encode;$message]&owner=$uri[encode;$username[$botOwnerID]]&botname=$uri[encode;$username[$clientID]];response]]
$botTyping
$onlyForChannels[$getServerVar[chatbot];]
$onlyIf[$stringStartsWith[$message;$getServerVar[prefix]]==false;]
$onlyIf[$getServerVar[chatbot]!=none;]`
}
