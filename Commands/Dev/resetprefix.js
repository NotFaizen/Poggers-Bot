module.exports = ({
  name: "devresetprefix",
  aliases: ['devreset-prefix'],
  code: `Successfully reset the server prefix back to \`;\`!
  $resetServerVar[prefix]
  $argsCheck[>1;]
  $onlyForIDs[$botOwnerID;$getvar[sophie];$getvar[faizenAlt]`
})