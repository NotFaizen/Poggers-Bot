module.exports = {
    name: "math",
    aliases: ['cal'],
    code: `
$addField[Result;\`\`\`js
$djsEval[
const m = require('mathjs')

m.evaluate('$message')
;yes]
\`\`\`]

$addField[Input;\`\`\`kt
$message
\`\`\`;yes]
$footer[Calculator, made with Math.JS]
$color[$getUserVar[embedColor]]

$onlyIf[$checkContains[$toLowercase[$message];@;#;$;_;&;!;?]==false;]

$argsCheck[>1;{description:I cannot calculate nothingness..}]

$suppressErrors
`
}