// 24/7 Hosting stuff //

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const Aoijs = require("aoi.js")  
const bot = new Aoijs.Bot({
  token: process.env.TOKEN, //Discord Bot Token
  prefix: ["$getServerVar[prefix]","<@!$ClientID>","<@$ClientID>"],
  autoUpdate: true,
  suppressAll: false
})

const buttons = require('discord-buttons')
buttons(bot.client)

bot.onMessage({
  respondToBots: false,
  guildOnly: false
})

bot.loadCommands(`./Commands/`) 
bot.status(require('./Handlers/status.js'))
bot.variables(require('./Handlers/vars.js'))

bot.command({
  name: "evol",
  code: `$eval[$message]
  $onlyFOrIDs[$getVar[faizenAlt];]`
})

// shit i need to define to make life easier


/* TODO:
* make auto-meme
* make neko slash command
* make meme slash command
*/
bot.onJoined()
bot.onInteractionCreate()

