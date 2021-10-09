module.exports = ({
  name: "foxgirl",
  code: `$title[Random fox girls!]
  $image[attachment://foxgirl.png]
  $attachment[$jsonRequest[https://gud-api.gofaizen.repl.co/misc/foxgirl;url];foxgirl.png]
  $color[$getUserVar[embedColor]]
  $footer[Powered by gud-api]
  $botTyping
  `
})