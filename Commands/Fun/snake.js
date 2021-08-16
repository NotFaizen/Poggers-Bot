module.exports = {
    name:"snake" ,
    code:`
$djsEval[const { Snake } = require('weky');
     Snake({
    message: message,
    embed: {
        title: 'Snake',
        description: 'nice, you scored **{{score}}** points!',
        color: '#000001',
        timestamp: true,
    },
    emojis: {
        empty: '⬛',
        snakeBody: '🐍',
        food: '🍎',
        up: '⬆️',
        right: '⬅️',
        down: '⬇️',
        left: '➡️',
    },
    othersMessage: 'Only <@{{author}}> can use the buttons!',
    buttonText: 'Cancel',
    }).then(snake => snake)]`
    }