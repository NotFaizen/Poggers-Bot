module.exports = ({
  name: "advice",
  code: `$title[Random advice]
$description[$jsonRequest[https://api.adviceslip.com/advice;slip.advice;e]]
$thumbnail[https://media.discordapp.net/attachments/850033801581297755/871033444690440223/2Q.png?width=180&height=180]
  $color[$getUserVar[embedColor]]`
})