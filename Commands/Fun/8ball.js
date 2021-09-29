module.exports = ({
name: "8ball",
code: `$thumbnail[https://cdn.discordapp.com/attachments/643531837552984074/825625401039650856/1f3b1.png]
$title[🎱 The magic 8ball 🎱]

$description[
**Question:** $message

**Answer:** $jsonRequest[https://gud-api.gofaizen.repl.co/fun/8ball;reponse;The API is down atm. DM $usertag[$botownerid] and tell him his API is down]
$footer[Asked by $username;$authoravatar]
$cooldown[5s;The magic 8ball needs %time% more to replenish it's magical energy]
$color[$getUserVar[embedColor]]
$argsCheck[>1;Ask a yes or no question and the 8ball will answer with 100% honesty]`
})