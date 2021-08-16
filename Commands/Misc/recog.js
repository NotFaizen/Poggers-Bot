module.exports = {
name: 'recog',
code: `$title[Text Recognition]
$description[
**Text Recognized:** 

$jsonrequest[https://api.ocr.space/parse/imageurl?apikey=helloworld&url=$messageattachment;ParsedResults[0].ParsedText]

**Image:**
]
$color[$getUserVar[embedColor]]
$image[$messageattachment]
$onlyIf[$messageAttachment!=;Please provide a valid attachment along with your message (not an image URL)]`
}