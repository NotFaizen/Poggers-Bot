module.exports = ({
 name: "slap",
 code: `$title[$username slaps $username[$mentioned[1]]! Now that's a lot of damage]
 $image[$jsonRequest[https://nekos.best/api/v1/slap; url;An error occurred]]
 $color[$getUserVar[embedColor]]
 $footer[Powered by nekos.best api]
 $onlyIf[$mentioned[1]!=$clientID;You are free to slap anyone but me :v]
 $argsCheck[1;Mention someone to slap]`
})