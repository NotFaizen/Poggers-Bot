/* note for future faizen: "pf" = profile frame, made using berk's API, y'know the profile frames like developer, bravery, balance, etc. This note is just incase you forget tf this command does lmao */

module.exports = ({
  name: "overlay",
  code: `$attachment[https://api.berk404.ga/overlay?image=$userAvatar[$mentioned[1;yes]]&type=$noMentionMessage;frame_$nomentionmessage.png]
  $onlyIf[$checkContains[$noMentionMessage;brilliance;bravery;balance;developer;twitch;basement;nitro;discord;gamedev;partner;moderator]==true;{title:Incorrect usage}{description:Correct usage: \`#SEMI#overlay < bravery | brilliance | balance | developer | twitch | basement | nitro | discord | gamedev | partner | moderator>\`}{color:RED}]`
})