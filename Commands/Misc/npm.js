module.exports = ({
  name: "npm",
  code: `$title[$getObjectProperty[name];https://npmjs.org/package/$message]
  $description[$getObjectProperty[description]]
  $thumbnail[https://cdn.discordapp.com/attachments/833643049556901928/843063826899140628/IMG-20210515-WA0045.jpg]
  $addField[Keywords;$getObjectProperty[keywords];yes]
  $addField[Maintainers;$getObjectProperty[maintainers];yes]
  $addField[Repository;$getObjectProperty[repository];yes]
  $addField[Version;$getObjectProperty[version];yes]
  $addField[Author;$getObjectProperty[author];yes]
  $color[$getUserVar[embedColor]] $createObject[$jsonRequest[https://api.popcatdev.repl.co/npm?q=$message]]
  $suppressErrors[Couldn't find the package you were looking for, please check if the spelling is correct or the package exists]`
})