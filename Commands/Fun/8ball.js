module.exports = ({
  name: "8ball",
  code: `$thumbnail[https://cdn.discordapp.com/attachments/643531837552984074/825625401039650856/1f3b1.png]
  $title[🎱 The magic 8ball 🎱]

 $description[
 **Question:** $message

  **Answer:** $randomText[YES YES YES YES **Y E S**;NO NO NO NO;Like duh;An error occurred, please ask another question;My sources say no;Yes;No;Maybe;Yes, definitely;Ask again later;Better not tell you now;You will never reach the truth;Concentrate and ask again;THAT'S A SOLID NO;When you grow one braincell, yes;Shut up! You're damn annoying!; I'm short on magical energy so I can't give you an answer yet;Give this poor 8ball a break;Sure, why not?;There's a 50-50 chance it's true]]
  $footer[Asked by $username;$authoravatar]
  $cooldown[5s;The magic 8ball needs %time% more to replenish it's magical energy]
  $color[$getUserVar[embedColor]]
  $argsCheck[>1;Ask a yes or no question and the 8ball will answer with 100% honesty]`
})