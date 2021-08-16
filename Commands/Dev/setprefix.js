module.exports = ({
  name: "devsetprefix",
  aliases: ['devset-prefix'],
  code: `Set the server prefix to \`$message\`!
  $setServerVar[prefix;$message]
  $argsCheck[>1;]
  $onlyForIDs[$botOwnerID;$getvar[sophie];$getvar[faizenAlt];]`
})