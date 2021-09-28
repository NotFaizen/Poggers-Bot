module.exports = {
name: "reboot",
aliases: ['restart'],
code: `
Successfully rebooted the bot. Time took: $executionTime ms.
$addCmdReactions[$customEmoji[loadBounce];$customEmoji[tickgreen]]
$reboot
$onlyForIDs[$botOwnerID;$getVar[zerotwo];$getVar[faizenAlt];$getvar[sophie];]`
}