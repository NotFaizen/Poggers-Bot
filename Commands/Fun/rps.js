module.exports = [{
name: 'rockpaperscissor',
aliases: ['rockpaperscissor', 'rps'],
category: 'fun',
description: 'Play Rock Paper Scissor With Me!',
code: `
$reactionCollector[$splitText[1];$authorID;1m;✊,📄,✂;Rock,Paper,Scissor;yes]
$textSplit[$sendMessage[{title:Rock Paper Scissor!}
{color:GREEN}
{footer:RPS Game Command}
{description:Choose Rock, Paper Or Scissor In Reaction!};yes]; ]`
}, {
type: 'awaitedCommand',
name: 'Rock',
code: `$editMessage[$message[1];{title:🧠 RPS GAME} {description:$randomText[
**$username[$clientID] ✊ Vs ✊ You**

🟡 │ It's a **TIE**.;
**$username[$clientID] 📄 Vs ✊ You**

🔴 │ You **LOST**.;
**$username[$clientID] ✂ Vs ✊ You**

🟢 │You **WON**]

$randomText[🎉 Well Played !;🎉 Good Game !]} {color:GREEN} {footer: RPS Game!} {timestamp:ms} {thumbnail:$userAvatar[$clientID]}
]
`
}, {
type: 'awaitedCommand',
name: 'Paper',
code: `
$editMessage[$message[1];{title:🧠 RPS GAME} {description:$randomText[
**$username[$clientID] 📄 Vs 📄 You**

🟡 │ It's a **TIE**.;
**$username[$clientID] ✂ Vs 📄 You**

🔴 │ You **LOST**.;
**$username[$clientID] ✊ Vs 📄 You**

🟢 │You **WON**.]

$randomText[🎉 Well Played !;🎉 Good Game !]} {color:GREEN} {footer: RPS Game!} {timestamp:ms} {thumbnail:$userAvatar[$clientID]}
`
}, {
type: 'awaitedCommand',
name: 'Scissor',
code: `
$editMessage[$message[1];{title:🧠 RPS GAME} {description:$randomText[
**$username[$clientID] ✂ Vs ✂ You**

🟡 │ It's a **TIE**.;
**$username[$clientID] ✊ Vs ✂ You**

🔴 │ You **LOST**.;
**$username[$clientID] 📄 Vs ✂ You**

🟢 │You **WON**.]

$randomText[🎉 Well Played !;🎉 Good Game !]} {color:GREEN} {footer: RPS Game!} {timestamp:ms} {thumbnail:$userAvatar[$clientID]}
]
`
}]