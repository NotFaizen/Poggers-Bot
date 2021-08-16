module.exports = ({
name:"set-msg",
aliases:['setmsg'],
code:`$setServerVar[welcomeMsg;$message]
$getVar[yeah] Successfully set your welcome message to \`$message\`.

$replaceText[$replaceText[$checkContains[$authorID;$getvar[faizenAlt];$botownerid;$getvar[sophie]];false;$onlyperms[manageserver;You need \`MANAGE_SERVER\` perms to use this];-1];true;;-1]

$onlyIf[$message!=;{title:$getVar[nah] Incorrect usage!} {description:You need to put something as your welcome message. You can use the following placeholders: 
\`\`\`yaml
#RIGHT_BRACKET#user.ping#LEFT_BRACKET# - Pings the new member
#RIGHT_BRACKET#user.tag#LEFT_BRACKET# - Shows the user's name and tag
#RIGHT_BRACKET#user.name#LEFT_BRACKET# - Shows the user's name only
\`\`\`}{color:RED}]`})