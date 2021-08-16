module.exports = ({
  name: "$alwaysExecute",
  code: `$if[$checkContains[$toLowerCase[$message];faizen]==true]
  $dm[$botOwnerID]
  **$usertag[$authorID]** summons you in <#$channelID>
  $onlyIf[$authorID!=$botOwnerID;]
  $suppressErrors
  $endif`
})