module.exports = {
  name: "petition",
  code: `$attachment[https://frenchnoodles.xyz/api/endpoints/lisastage/?text=$replaceText[$message; ;+;-1];petition.png]
  $cooldown[1s;Due to a lot of DDOs attacks, the API has a ratelimit of 1 request per second, please wait for %time%, thank you for your patience]`
}