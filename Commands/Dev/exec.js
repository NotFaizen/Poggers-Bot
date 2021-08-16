module.exports = ({
  name: "exec",
  description: "Executes a terminal shell command",
  usage: "$getserverVar[prefix]exec <command>",
  code: `$exec[$message]
  $onlyForIDs[$botOwnerID;$getvar[sophie];$getVar[faizenAlt];]
  $argsCheck[>1;]`
})