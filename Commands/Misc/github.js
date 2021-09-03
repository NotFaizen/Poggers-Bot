module.exports = ({
name: "github",
code: `$title[Github User info for $getObjectProperty[name];$getObjectProperty[url]]
$thumbnail[$getobjectProperty[avatar]]
$addField[Bio;$getObjectProperty[bio];yes]
$addField[Created At;$getObjectProperty[created_at];yes]
$addField[Location;$getObjectProperty[location];yes]
$addField[Email;$getObjectProperty[email];yes]
$addField[Public Gists;$getObjectProperty[public_gists];yes]
$addField[Public Repositories;$getObjectProperty[public_repos];yes]
$addField[Followers;$getObjectProperty[followers];yes]
$addField[Following;$getObjectProperty[following];yes]
$addField[Username;$getObjectProperty[name];yes]
$color[BLUE] $createObject[$jsonRequest[https://api.popcat.xyz/github/$uri[encode;$message]]
$suppressErrors[{title:An error occurred}{description:This is most likely an internal error or the user doesn't exist} {color:RED}]`
})