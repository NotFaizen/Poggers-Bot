// 24/7 Hosting stuff //
const express = require("express");
const app = express();

app.get("/", async(req,res) => {
  res.send("Bot is online!")
})
app.listen(5000, () => {
  console.log("Poggers Bot is up and ready to rumble!")
})

// Bot stuff //
const Aoijs = require("aoi.js")  
const bot = new Aoijs.Bot(require("./Handlers/config.js"))
require('discord-buttons')(bot.client)

bot.loadCommands(`./Commands/`) 
bot.status(require('./Handlers/status.js'))
bot.variables(require('./Handlers/vars.js'))
require("./Handlers/callbacks.js")(bot)
require("./Handlers/globals.js")(global)

// $parseDate[$djsEval[client.uptime;yes];time] //