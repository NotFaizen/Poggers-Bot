module.exports = {
  name: "reload",
  aliases: ['update'],
  code: `
  Successfully reloaded all commands. Time took: $executionTime ms.
  $addCmdReactions[$customEmoji[loadBounce];$customEmoji[tickgreen]]
  $updateCommands
  $onlyForIDs[$botOwnerID;$getVar[zerotwo];$getVar[faizenAlt];$getvar[sophie];]`
}