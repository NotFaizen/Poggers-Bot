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
  autoUpdate: false,
  suppressAll: true
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

bot.onJoined()
bot.onInteractionCreate()
bot.onMessageDelete()

bot.command({
  name: "yeet",
  aliases: "sabakunogaara",
  code: `$replaceText[$getServerVar[prefix];#SEMI#;#SEMI#;-1]`
})

bot.command({
name:'test',
code:`$djsEval[(async () => {
try {
const Discord = require('discord.js');
const leaf = require("leaf-utils");

let embed1 = new Discord.MessageEmbed()
.setTitle('p1')
.setDescription('p1');

let embed2 = new Discord.MessageEmbed()
.setTitle('Help list')
.setDescription('MODERATION\nban, kick, mute, unmute, unban, warn, checkwarn, clearwarn, unban, slowmode, +role, -role, role, purge, lock, unlock, setnick, massmute');

let embed3 = new Discord.MessageEmbed()
.setTitle('page3')
.setDescription('page3');

let pages = [embed1, embed2, embed3] 

leaf.buttonpages(client, message, pages, {
  firstEmoji: ':rewind:',
  backEmoji: ':arrow_backward:', 
  delEmoji: ':wastebasket:', 
  forwardEmoji: ':arrow_forward:', 
  lastEmoji: ':fast_forward:',
  
  btncolor: 'green', 
  delcolor: 'red',
  skipcolor: 'blurple', 
  skipBtn: true
})
} catch (err) {
message.channel.send(err)
console.log(err)
}
})()]`
});

// $parseDate[$djsEval[client.uptime;yes];time] //