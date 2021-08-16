module.exports = {
  name: "simpcard",
  code: `$title[$username[$mentioned[1;yes]]'s simp card]
  $image[attachment://simp.png]
  $attachment[https://some-random-api.ml/canvas/simpcard?avatar=$replaceText[$replaceText[$replaceText[$userAvatar[$mentioned[1;yes]];webp;png];jpg;png];gif;png];simp.png]
  $color[$getUserVar[embedColor]]`
}