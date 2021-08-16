module.exports = ({
  name: "mock",
  code: `$jsonRequest[https://api.popcatdev.repl.co/mock?text=$replaceText[$message; ;+;-1]; text;{title:An error occurred}{description:This is most likely an API error, not your or our fault.}{footer:Contact $usertag[752565851948974100] incase of an error}]
  $argsCheck[>1;I can't mock text if you dont provide anything $customEmoji[really]]`
})