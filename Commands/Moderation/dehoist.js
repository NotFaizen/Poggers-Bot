module.exports = ({
  name: "dehoist",
  code: `$if[$checkContains[$username[$mentioned[1]];!;/;.]==true]
    Successfully dehoisted $username[$mentioned[1]]!
    $changeNickname[$mentioned[1];$replaceText[$replaceText[$replaceText[$username[$mentioned[1]];!;;-1];/;;-1];.;;-1]]
  $elseif[$checkContains[$nickname[$mentioned[1]];!;/;.]==true]
    Successfully dehoisted $username[$mentioned[1]]!
    $changeNickname[$mentioned[1];$replaceText[$replaceText[$replaceText[$nickname[$mentioned[1]];!;;-1];/;;-1];.;;-1]]
  $argsCheck[>1;Mention a user to dehoist]
  $onlyPerms[managenicknames;You need the \`MANAGE_NICKNAMES\` permission in order to use this]
  $endelseif
  $endif
  `
})