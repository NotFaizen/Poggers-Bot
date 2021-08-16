module.exports = {
  name: "$alwaysExecute",
  code: `
  $if[$checkContains[$message;<@!$clientID>;<@$clientID>]==true]
  <@$authorID> my prefix here is \`$getServerVar[prefix]\` you can change it by using \`$getServerVar[prefix]setprefix <new prefix>\`
  $endif
  $suppressErrors`
}