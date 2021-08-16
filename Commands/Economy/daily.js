module.exports = {
    name: "daily",
    description: "Get your daily reward",
    usage: "$getserverVar[prefix]daily",
    code: `$title[$username's daily reward]
$description[$getServerVar[symbol]1000 was placed in your wallet]
$footer[Poggers Bot economy system]
$color[$getUserVar[embedColor]]
$setGlobalUserVar[Money;$math[$getGlobalUserVar[Money]+1000]]
$globalCooldown[1d;Your next daily reward is ready in %time%]`
}