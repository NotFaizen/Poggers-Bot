module.exports = ({
  name: "invite",
  code: `$title[Invite links for Poggers Bot] 
  $addField[Invite link;[Click here]($replaceText[$getbotinvite;0;8;-1])]
  $addField[Support server;[Click here](https://discord.gg/WnStnd4ygu)]
  $color[$getUserVar[embedColor]]
  $footer[Thanks for inviting the bot]`
})