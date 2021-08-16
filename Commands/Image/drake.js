module.exports = {
  name: "drake",
  code: `$image[attachment://drake.png]
  $attachment[https://frenchnoodles.xyz/api/endpoints/drake?text1=$replaceText[$splitText[1]&text2=$splitText[2]; ;+;-1];drake.png]
  $color[$getUserVar[embedColor]]
  $textSplit[$message;/]
  $onlyIfMessageContains[$message;/;You need two words separated by / for this to work]
  $cooldown[1s;Due to a lot of DDOs attacks, the API has a ratelimit of 1 request per second, please wait for %time%, thank you for your patience]`
}