//const djsGames = require('djs-games')
module.exports = ({
name: "connect4",
error: "```$error```",
code: `$djseval[(async () => { const djsGames = require('djs-games')
const ConnectFour = new djsGames.ConnectFour()
ConnectFour.startGame(message)
})()]`
})