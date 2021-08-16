module.exports = {
  name: "meme",
  code: `$title[$getObjectProperty[title];$getObjectProperty[image]]
  $image[$getObjectProperty[image]]
  $footer[👍 $getObjectProperty[upvotes] | 💬 $replaceText[$getObjectProperty[comments];;0;-1]
  $color[$getUserVar[embedColor]] $createObject[$jsonRequest[https://api.popcatdev.repl.co/meme;]]
`
}
