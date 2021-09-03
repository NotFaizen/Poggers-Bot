module.exports = ({
  name: "$alwaysExecute",
  code: `
  $if[$stringStartsWith[$message[1];$getServerVar[prefix]]==true]
  $useChannel[882590653949829141]
  $title[New Command Used]
  $thumbnail[$authorAvatar]
  $addField[Author;$userTag;yes]
  $addField[Command;$message;yes]
  $addField[Total Used;$sum[$getGlobalUserVar[commandCount];1];yes]
  $addField[Guild;$serverName;yes]
  $addField[Guild ID;\`$guildID\`;yes]
  $addField[Member Count;$membersCount[$guildID];yes]
  $onlyIf[$commandInfo[$message;name]!=;]
  $endif
  $setGlobalUserVar[commandCount;$math[$getGlobalUserVar[commandCount]+1]]
  $setVar[commandCount;$math[$getVar[commandCount]+1]]
  $suppressErrors
  `
})