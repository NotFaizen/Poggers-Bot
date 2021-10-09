module.exports = ({
  name: "gudneko",
  code: `$title[Random Neko images]
  $image[attachment://gudneko.png]
  $attachment[$jsonRequest[https://gud-api.gofaizen.repl.co/misc/neko;url];gudneko.png]
  $color[$getUserVar[embedColor]]
  $footer[Powered by gud-api]
  $botTyping
  `
})