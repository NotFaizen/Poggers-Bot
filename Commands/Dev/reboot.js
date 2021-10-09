module.exports = {
name: "reboot",
aliases: ['restart'],
code: `
$addCmdReactions[$customEmoji[loadBounce];$customEmoji[tickgreen]]
$reboot
$onlyForIDs[$botOwnerID;$getVar[zerotwo];$getVar[faizenAlt];$getvar[sophie];]`
}