module.exports = {
name: "pypi",
code: `$title[$getObjectProperty[name];$getObjectProperty[package_url]]
$thumbnail[https://cdn.discordapp.com/attachments/850033801581297755/906691698049036360/logo-small.png]
$description[$getObjectProperty[description]]
$addField[Keywords;$getObjectProperty[keywords];yes]
$addField[Maintainers;$getObjectProperty[maintainers];yes]
$addField[Repository;$replaceText[$getObjectProperty[repository];null;None];yes]
$addField[Version;$getObjectProperty[version];yes]
$addField[Author Email;$getObjectProperty[author_email];yes]
$addField[Author;$getObjectProperty[author];yes]
$color[BLUE] $createObject[$jsonRequest[https://gud-api.gofaizen.repl.co/misc/pypi?q=$message]]
$argsCheck[>1;Yes, PyPi search. Now enter the name of a package.]`
}