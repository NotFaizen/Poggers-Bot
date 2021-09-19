const djsGames = require('djs-games')
module.exports = ({
name: "connect4",
code: `$djseval[const djsGames = require('djs-games')
const ConnectFour = new djsGames.ConnectFour()
ConnectFour.startGame(message);yes]`
})