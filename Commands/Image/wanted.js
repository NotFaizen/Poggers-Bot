module.exports = ({
  name: "wanted",
  code: `$attachment[https://api.popcat.xyz/wanted?image=$replaceText[$replaceText[$userAvatar[$mentioned[1;yes]];.webp?size=4096;.png];?4096;];wanted.png]`
})