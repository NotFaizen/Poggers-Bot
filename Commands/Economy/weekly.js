module.exports = {
    name: "weekly",
    description: "Collect your weekly reward",
    code: `$title[$username's weekly reward]
$description[$getServerVar[symbol]5000 was placed in your wallet]
$footer[Poggers Bot economy system]
$color[$getUserVar[embedColor]]
$setGlobalUserVar[Money;$math[$getGlobalUserVar[Money]+5000]
$globalCooldown[7d;Your next reward is ready in %time%]`
}