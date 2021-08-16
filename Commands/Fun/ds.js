module.exports = ({
  name: "ds",
  code: `$jsonRequest[https://api.popcatdev.repl.co/doublestruck?text=$replaceText[$message; ;+;-1];text;Error]
  $argsCheck[>1;Input some text for me to return as doublestruck]`
})