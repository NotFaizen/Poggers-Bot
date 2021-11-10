const pog = {}
pog.utils = require(`../utils.js`)
module.exports = (global) => {
  global.pog = pog;
  global.discord = require("discord.js")
  global.client = new discord.Client()
  global.utils = require(`../utils.js`)
}