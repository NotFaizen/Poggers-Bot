module.exports = ({
  name: "anime-quote",
  code: `$title[Random anime quotes]
  $addField[Quote:;"$getObjectProperty[quote]"]
  $addField[Character:;$getObjectProperty[character]]
  $addField[Anime:;$getObjectProperty[anime]]
  $color[$getUserVar[embedColor]] $createObject[$jsonRequest[https://animechan.vercel.app/api/random]]
  `
})