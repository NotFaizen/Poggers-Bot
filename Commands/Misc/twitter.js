module.exports = ({
name: "twitter",
code: `
$title[$getObjectProperty[name];https://twitter.com/$getObjectProperty[name]]
$thumbnail[$getObjectProperty[profile_image]]
$image[$getObjectProperty[banner]]
$addField[Bio:;$getObjectProperty[description];yes]
$addField[Featured URL;[Here]($getObjectProperty[featured_url]);yes]
$addField[Created At;$getObjectProperty[created_at];yes]
$addField[Verified;$getObjectProperty[verified];yes]
$addField[Tweets;$getObjectProperty[tweets];yes]
$addField[Favourites;$getObjectProperty[favourites];yes]
$addField[Friends;$getObjectProperty[friends];yes]
$addField[Followers;$getObjectProperty[followers];yes]
$addField[Location;$getObjectProperty[location];yes]
$addField[Name;$getObjectProperty[name];yes]
$color[BLUE] $createObject[$jsonRequest[https://api.popcat.xyz/twitter?q=$message]]`
})