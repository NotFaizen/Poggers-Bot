module.exports = {
  name: "buttons",
  code: `$attachment[https://api.devs-hub.xyz/two-buttons?button1=$replaceText[$splitText[1]&button2=$splitText[2]; ;+;-1];buttons.png]
  $onlyIfMessageContains[$message;/;You need two words or sentences splitted by /]
  $textSplit[$message;/]`
}