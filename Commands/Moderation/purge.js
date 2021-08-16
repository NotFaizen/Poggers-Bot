module.exports = ({
  name: "purge",
  aliases: ['clear'],
  code: `$deleteIn[3s]
  $deletecommand
  $getVar[yeah] Cleared **$message[1]** messages!
  $clear[$sum[$message[1];1]]
  $onlyIf[$isNumber[$message[1]]==true;$getvar[nah] Enter a valid number!]
  $onlyIf[$message[1]!=;Give me a number of messages to delete. Example: \`#SEMI#clear 10\`.]`
})