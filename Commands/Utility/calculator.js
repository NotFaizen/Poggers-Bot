module.exports = {
name: "math",
aliases: ['cal'],
code: `
$addField[Result;\`\`\`js
$math[$message]
\`\`\`]

$addField[Input;\`\`\`kt
$message
\`\`\`;yes]
$color[$getUserVar[embedColor]]

$onlyIf[$checkContains[$toLowercase[$message];@;#;$;_;&;!;?]==false;]
$argsCheck[>1;{description:I cannot calculate nothingness..}]

$suppressErrors
`
}