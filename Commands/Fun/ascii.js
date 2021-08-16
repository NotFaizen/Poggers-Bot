module.exports = ({
  name: "ascii",
  aliases: ['as'],
  code: `\`\`\`$httpRequest[https://artii.herokuapp.com/make?text=$replaceText[$message; ;+]]\`\`\`
`
})