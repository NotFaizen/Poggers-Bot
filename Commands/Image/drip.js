module.exports = ({
  name: "drip",
  code: `$attachment[https://api.popcat.xyz/drip?image=$replaceText[$replaceText[$replaceText[$userAvatar[$mentioned[1;yes]];webp;png;-1];jpg;png;-1];gif;png;-1];drip.png]`
})