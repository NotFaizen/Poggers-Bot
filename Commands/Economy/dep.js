module.exports = {
  name: "dep",
  description: "Deposit money into your bank",
  usage: "$getserverVar[prefix]dep <amount>",
  code: `
  You have deposited $getServerVar[symbol]$noMentionMessage to the bank.
  $setGlobalUserVar[bank;$sum[$getUserVar[bank];$noMentionMessage]]
  $setGlobalUserVar[Money;$sub[$getUserVar[Money];$noMentionMessage]]
  $onlyIf[$isNumber[$noMentionMessage]==true;Is it that hard to enter a valid number? Quit trying to break me smh]
  $onlyIf[$getglobaluservar[Money]>=$noMentionMessage;you don't have that money to deposit]
  $argsCheck[>1;You must enter an amount to deposit]`
}