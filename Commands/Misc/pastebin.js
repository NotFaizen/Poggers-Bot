module.exports = {
    name: "pastebin",
    code: `$title[$username's paste link]
$description[
 **Text:** "$message"
 
 **Link:** [Click here]($jsonRequest[https://normal-api.ml/pastebin?text=$replacetext[$message; ;+;-1];url;Error])

 **Raw link:** [Cick here]($jsonRequest[https://normal-api.ml/pastebin?text=$replacetext[$message; ;+;-1];raw;Error])
]
$color[$getUserVar[embedColor]]
$argsCheck[>1;Insert some text]`
}