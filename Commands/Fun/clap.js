module.exports = {
 name: "clap",
 code: `$suppressErrors
 $if[$checkContains[$message; ]==true]
 $replaceText[$message; ; 👏 ;-1]
 $elseif[$checkContains[$message;]==true]
 $replaceText[$message;; 👏 ;-1]
 $endelseif
 $endif
 $blackListIDs[756075390954373140;You are blacklisted Sadge Clap]
 $onlyIf[$mentionedRoles[1]==;You can't mention roles]
 $onlyIf[$mentioned[1]==;You can't mention people as it breaks the command]
 $argsCheck[>1;Provide some text]`
}