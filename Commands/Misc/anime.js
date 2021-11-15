module.exports = ({
name: "anime",
code: `$title[$getObjectProperty[anime.title];$getObjectProperty[anime.url]]
$thumbnail[$getObjectProperty[anime.picture]]
$description[$getObjectProperty[anime.synopsis]]
$addField[Trailer:;**[Youtube video]($getObjectProperty[anime.trailer])**;yes]
$addField[Age Rating:;$replaceText[$getObjectProperty[anime.rating];R - ;];yes]
$addField[Type:;$getObjectProperty[anime.type];yes]
$footer[Score: $getObjectProperty[anime.score] | Favorites: $getObjectProperty[anime.favorites]]
$color[$getUserVar[embedColor]]
$createObject[$jsonRequest[https://husky.huskyio.repl.co/anime?key=husky&name=$uri[encode;$message]]
$argsCheck[>1;I simply cannot get info on an anime if you don't provide a name]`
})