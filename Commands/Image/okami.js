module.exports = ({
name: "okami",
code: `$title[Random wolf girls!]
$image[attachment://okami.png]
$attachment[$jsonRequest[https://gud-api.gofaizen.repl.co/misc/okami;url];okami.png]
$color[$getUserVar[embedColor]]
$footer[Powered by gud-api]
$botTyping
`
})