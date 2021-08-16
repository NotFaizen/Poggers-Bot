module.exports = {
    name: "with",
    description: "Withdraw your bank money",
    usage: "$getserverVar[prefix]with <amount>",
    code: `
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$message]]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$message]]
You withdrew $getservervar[symbol]$message from the bank
$onlyif[$isNumber[$message]==true;That's not a number bruh, stop your futile attempts at breaking me]
$onlyIf[$message>=$getGlobalUserVar[Money];You can't withdraw more money than you have]`
}