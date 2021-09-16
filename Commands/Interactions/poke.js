module.exports = ({
 name: "poke",
 code: `$title[$username boops $username[$mentioned[1]] .-.]
 $image[$jsonRequest[https://nekos.best/api/v1/poke; url;An error occurred]]
 $color[$getUserVar[embedColor]]
 $footer[Powered by nekos.best api]
 $argsCheck[1;Tag someone to poke]`
})