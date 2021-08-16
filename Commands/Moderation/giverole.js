module.exports = ({
  name: "gr",
  alias: ['giverole', 'addrole', 'give-role', 'add-role'],
  code: `$title[Success!]
  $description[Successfully gave $username[$mentioned[1]] the role <@&$roleID[$nomentionmessage]>]
  $footer[Role given by $username;$authoravatar]
  $color[$getUserVar[embedColor]]
  $giverole[$mentioned[1];$findRole[$nomentionmessage]]
  $onlyPerms[manageroles;To think you can use this command without \`MANAGE_ROLES\` perms, you must be either a troll or an idiot]
  $argsCheck[>1;Hey idiot, do you really think you can give someone a role without mentioning them and specifying the role name?]
  $suppressErrors[An error occurred while giving the role]`
})