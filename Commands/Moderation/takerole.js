module.exports = ({
  name: "takerole",
  alias: ['removerole', 'remove-role', 'take-role'],
  code: `$title[Success!]
  $description[Successfully took the role <@&$roleID[$nomentionmessage]> from $username[$mentioned[1]]] 
  $footer[Role taken by $username;$authoravatar]
  $color[$getUserVar[embedColor]]
  $takerole[$mentioned[1];$roleID[$nomentionmessage]]
  $onlyPerms[manageroles;To think you can use this command without \`MANAGE_ROLES\` perms, you must be either a troll or an idiot]
  $argsCheck[>1;Hey idiot, do you really think you can take someone's role without mentioning them and specifying the role name?]
  $suppressErrors[An error occurred while giving the role]`
})