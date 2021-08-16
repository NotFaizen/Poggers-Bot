module.exports = [{
  name: "avatar",
  aliases: ['av', 'pfp'],
  code: `
  $if[$findMembers[$message;10;{position}]!=1]
  $author[$userTag[$authorID];$authorAvatar]
  $description[Please choose one of the following...
  
  $findMembers[$message;10;**{position}.)** [{tag}](https://youtu.be/M94eN-YLbOs)]]
  $color[$getUserVar[embedColor]]
  $awaitMessages[$authorID;1m;everything;avatar;$getVar[no] Cancelled]
  $setUserVar[userav;$findMembers[$message;10;{id}]]
  $elseIf[$findMembers[$message;10;{position}]==1]
  $author[$userTag[$get[id]];$userAvatar[$get[id]]]
  $image[$userAvatar[$get[id]?size=2048]]
  $color[$getUserVar[embedColor]]
  $addTimestamp
  $let[id;$findMembers[$message;10;{id}]]
  $endElseIf
  $endIf
  $onlyIf[$message!=;{author:$userTag[$authorID]:$authorAvatar}{image:$userAvatar[$authorID?size=2048]}{color:BLUE}{timestamp}]
  $onlyIf[$findMembers[$message;10;{id}]!=;{author:$userTag[$findUser[$message]]:$userAvatar[$findUser[$message]]}{image:$userAvatar[$findUser[$message]?size=2048]}{color:BLUE}{timestamp}]
  `,
  }, {
  type: "awaitedCommand",
  name: "avatar",
  code: `
  $if[$isNumber[$message[1]]==true]
  $author[$userTag[$splitText[$message[1]]];$userAvatar[$splitText[$message[1]]]]
  $image[$userAvatar[$splitText[$message[1]]?size=2048]]
  $color[$getUserVar[embedColor]]
  $addTimestamp
  $textSplit[$getUserVar[userav];\n]
  $elseIf[$toLowercase[$message[1]]==cancel]
  $getVar[no] Cancelled
  $endElseIf
  $else
  $author[$userTag[$authorID];$authorAvatar]
  $image[$userAvatar[$authorID?size=2048]]
  $color[BLUE]
  $addTimestamp
  $endIf
  $suppressErrors[$getVar[no] Cancelled]
  `
}]