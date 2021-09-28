module.exports = ({
name: "binary",
code: `$if[$toLowercase[$message[1]]==encode]
$title[Text to Binary converter]
$addField[Output;\`\`\`fix
$jsonRequest[https://api.popcat.xyz/encode?text=$uri[encode;$messageSlice[1]];binary;API keeps going down man]
\`\`\`]

$addField[Input;\`\`\`fix
$messageSlice[1]
\`\`\`]
$elseif[$toLowercase[$message[1]]==decode]
$title[Binary to Text converter]
$addField[Output;\`\`\`fix
$jsonRequest[https://api.popcat.xyz/decode?binary=$uri[encode;$messageSlice[1]];text;API keeps going down man]
\`\`\`]

$addField[Input;\`\`\`fix
$messageSlice[1]
\`\`\`]

$endelseif
$endif
$color[$getUserVar[embedColor]]
$onlyIf[$messageSlice[1]!=;You must provide text to encode / decode]
$onlyIf[$checkContains[$toLowercase[$message];encode;decode]==true;$getVar[nah] Your first argument must be either \`encode\` or \`decode\`]
`
})