const { MessageButtons } = require('discord-buttons')
module.exports = ({
  name: "tictactoe",
  aliases: ['ttt'],
  code: `
  $djsEval[(async => () { const opponent = message.mentions.users.first();
  const { TicTacToe } = require('weky')
  await TicTacToe({
    message: message,
    opponent: opponent,
    xColor: 'red',
    oColor: 'blurple',
    xEmoji: '❌',
    oEmoji: '⭕' ,
  })})()]
  $onlyIf[$mentioned[1;no]!=$authorID;W-Why do you want to play with yourself...?]
  $onlyIf[$isBot[$mentioned[1;no]]==false;Bots wont respond back if you play with them]
  $onlyIf[$mentioned[1;no]!=;You cant play with the air, dummy]
  $onlyForIDs[$getVar[faizenAlt];N<:OMEGALUL:861546482619252736>]
`
})