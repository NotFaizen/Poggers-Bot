module.exports = {
  name: "invert",
  code: `$title[Inverted avatar of $username[$mentioned[1;yes]]]
  $image[attachment://invert.png]
  $attachment[https://frenchnoodles.xyz/api/endpoints/invert?image=$userAvatar[$mentioned[1;yes]];invert.png]
  $color[$getUserVar[embedColor]]
  $cooldown[1s;Due to a lot of DDOs attacks, the API has a ratelimit of 1 request per second, please wait for %time%, thank you for your patience]`
}