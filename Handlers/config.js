module.exports = {
  token: process.env.TOKEN,
  prefix: ["$getServerVar[prefix]","<@!$ClientID>","<@$ClientID>"],
  autoUpdate: false,
  suppressAll: false
}