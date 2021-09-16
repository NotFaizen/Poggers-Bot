module.exports = ({
 name: "hug",
 code: `$title[$username hugs $username[$mentioned[1]]!]
 $image[$jsonRequest[https://nekos.best/api/v1/hug; url;An error occurred]]
 $color[$getUserVar[embedColor]]
 $footer[Powered by nekos.best api]
$argsCheck[1;Mention the person you want to hug]`
})