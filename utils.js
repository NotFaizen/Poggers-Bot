const fetch = require('node-fetch')
const d = require("discord.js")

async function randomText(array) {
  return array[Math.floor(Math.random() * array.length)]
}
async function getfromreddit(subreddit) {
  const res = await (await fetch(`https://www.reddit.com/r/${subreddit}/random/.json`)).json()
  return res[0].data.children[0].data
}

async function redditFetch(subreddit) {
  const res = await (await fetch(`https://www.reddit.com/r/${subreddit}/random/.json`)).json()
  const self = res[0].data.children[0].data
  return { 
    title: self.title,
    image: self.url,
    url: `https://${self.permalink}`,
    subreddit: `r/${self.subreddit}`,
    author: self.author,
    upvotes: String(self.ups),
    downvotes: String(self.downs),
    comments: String(self.num_comments),
    upvote_ratio: String(self.upvote_ratio),
    nsfw: self.over_18,
    spoiler: self.spoiler
  }
}

async function replaceText(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

async function numberSeparator(num,separator=", ") {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

async function jsonRequest(url, property) {
  const r = await fetch(url)
  const data = await r.json()
  if (!property) return data
  return data[String(property)]
}

module.exports = {
  randomText,
  replaceText,
  getfromreddit,
  redditFetch,
  jsonRequest,
}
//["d3a625","eeba30","ae0001","740001","1a472a","2a623d","5d5d5d","aaaaaa","ecb939","f0c75e","726255","372e29","000000","0e1a40","222f5b","946b2d"]