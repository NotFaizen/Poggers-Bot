/* note for future faizen: "pf" = profile frame, made using berk's API, y'know the profile frames like developer, bravery, balance, etc. This note is just incase you forget tf this command does lmao */

module.exports = ({
  name: "profile-frame",
  aliases: ['pf'],
  code: `$attachment[https://api.berk404.ga/$nomentionmessage?image=$userAvatar[$mentioned[1;yes]];frame_$nomentionmessage.png]
  $djseval[//if this appears in code, i am gay]
  $onlyIf[$checkContains[$noMentionMessage;brilliance;bravery;balance;developer;twitch;basement]==true;{title:Incorrect usage}{description:Correct usage: \`#SEMI#pf @user < bravery | brilliance | balance | developer | twitch | basement >\`}{color:RED}]`
})