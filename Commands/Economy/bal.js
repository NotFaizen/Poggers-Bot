 module.exports = ({
  name: "bal",
  description: "Check your money",
  usage: "$getserverVar[prefix]bal <@user> (optional)",
  alises: ['Bal','balance','money'],
  code: `$title[Balance Card of $username[$mentioned[1;yes]]]
  $attachment[https://frenchnoodles.xyz/api/endpoints/balancecard?background=https://cdn.discordapp.com/attachments/814536184045764650/842002987295703050/credit-card.png&avatar=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1]&title=$replaceText[$username[$mentioned[1;yes]]'s Balance; ;+;-1]&text1=Wallet:+$$numberSeparator[$getGlobalUserVar[Money;$mentioned[1;yes]]]&text2=Bank:+$$numberSeparator[$getGlobalUserVar[bank;$mentioned[1;yes]]]&textcolor=FFFFFF;balancecard.png]
  $image[attachment://balancecard.png]
  $color[$getUserVar[embedColor]]`
})