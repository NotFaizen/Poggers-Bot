module.exports = ({
name: "owofy",
aliases: ['owo'],
code: `$jsonRequest[https://gud-api.gofaizen.xyz/fun/owofy?text=$uri[encode;$message];owofied]

- \`$usertag\`
$argsCheck[>1;Insert some text to owofy]`
})