module.exports = ({
  name: "scroll",
  code: `$attachment[https://api.devs-hub.xyz/truth?text=$replaceText[$message; ;+;-1];scroll.png]
  $argsCheck[>1;Provide some text]`
})