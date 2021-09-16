module.exports = ({
  name: "rip",
  code: `$attachment[https://api.willz.repl.co/image/f?image=$get[avatar]]
  $let[avatar;$replaceText[$replaceText[$replaceText[$userAvatar[$mentioned[1;yes]];webp;png;1];gif;png;-1];jpg;png;-1]`
})//bad api