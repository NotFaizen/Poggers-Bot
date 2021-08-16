module.exports = {
name: "discord",
aliases: ["discord-say", "discordsay"],
code: `
$attachment[https://api.cool-img-api.ml/discord-message?message=$replaceText[$message; ;+;-1]&color=$randomText[RED;WHITE;YELLOW;PINK;Green;Blue;ORANGE;PURPLE;PINK;BLACK;]&username=$replaceText[$username; ;+;-1]&avatar=$userAvatar;discordsay.png]
$argsCheck[>1;You need to provide some text]`
}