module.exports = [{
type: "deletedCommand",
channel: "$channelID",
code: `$setChannelVar[author_snipe;$authorID]
$setChannelVar[message_snipe;$message]
$setChannelVar[icon_snipe;$authorAvatar]
$setChannelVar[channel_snipe;$channelName[$channelUsed]]
$suppressErrors`
},{
 name: "snipe",
 code: `
$author[$userTag[$getChannelVar[author_snipe;$mentionedChannels[1;yes]]];$getChannelVar[icon_snipe;$mentionedChannels[1;yes]];https://ilikeblue.com]
$description[$getChannelVar[message_snipe;$mentionedChannels[1;yes]]]
$if[$userRoleColor[$getChannelVar[author_snipe;$mentionedChannels[1;yes]]]==#000000]
$color[FFB8B8]
$else
$color[$userRoleColor[$getChannelVar[author_snipe;$mentionedChannels[1;yes]]]
$endif 
$addTimestamp
$footer[$serverName | #$getChannelVar[channel_snipe;$mentionedChannels[1;yes]]]
$onlyIf[$getChannelVar[message_snipe;$mentionedChannels[1;yes]]!=;{title:whoops...}{description:it seems there is nothing to snipe $replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;];false;in <#$mentionedChannels[1]>]}{color:RED}]
$suppressErrors`
}]
