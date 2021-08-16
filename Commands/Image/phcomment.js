module.exports = ({
  name: "phcomment",
  aliases: ['ph'],
  code: `$attachment[https://nekobot.xyz/api/imagegen?type=phcomment&image=$replaceText[$useravatar[$mentioned[1;yes]];.webp;.png]&text=$replaceText[$noMentionMessage&username=$username[$mentioned[1;yes]]; ;+;-1]&raw=1;phcomment.png]`
})