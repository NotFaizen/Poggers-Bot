module.exports = ({
 name: "rps",
 aliases: ['roshambo'],
 code: `$awaitReaction[$authorID;15s;
{title:🧠 RPS GAME}
{thumbnail:$userAvatar[$clientID]}
{description:Choose your choice
✊ | **ROCK** 
📄 | **PAPER**
✂ | **SCISSOR**}
{footer:Requested By $userTag[$authorID]:$authorAvatar}
{timestamp}
{color:$getUserVar[embedColor]}
;✊,📄,✂;rock,paper,scissor;You ran out of time]`
})