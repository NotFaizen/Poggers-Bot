module.exports = {
  name: "clown",
  code: `
  $attachment[https://api.popcatdev.repl.co/clown?image=$replaceText[$replaceText[$replaceText[$userAvatar[$findMember[$message]];webp;png;-1];gif;png;-1];jpg;png;-1];clown.png]
  $cooldown[1s;Due to a lot of DDOs attacks, the API has a ratelimit of 1 request per second, please wait for %time%, thank you for your patience]`
}