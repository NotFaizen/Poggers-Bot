const ran = require('random')
function randomText(array) {
return array[Math.floor(Math.random() * array.length)];
}

module.exports = {
  randomText
}