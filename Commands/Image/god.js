module.exports = ({
  name: "god",
  code: `
  $attachment[https://someapi.dragonroyale.repl.co/god_temp?text=$replaceText[$message; ;+;-1];god.png]
  $onlyIf[$message!=;<@$authorID>, You need to insert some text.]`
})