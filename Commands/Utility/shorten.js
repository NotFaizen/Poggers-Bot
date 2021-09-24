module.exports = ({
name: "shorten",
code: `
$title[URL Shortener]
$description[
**Long URL:** $message[1]

**Shortened URL:** $jsonRequest[https://api.popcat.xyz/shorten?url=$message[1]&extension=$message[2];shortened]
$footer[Powered by api.popcat.xyz]
$color[$getUserVar[embedColor]]
$onlyIf[$isValidLink[$message[1]]==true;Not a valid URL]
`
})
