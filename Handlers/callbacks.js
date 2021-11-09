module.exports = (bot) => {
 // Paste your Callbacks here
 bot.onMessage({
   respondToBots: false,
   guildOnly: false
 })
 bot.onInteractionCreate()
 bot.onJoined()
}