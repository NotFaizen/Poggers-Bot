const fetch = require("node-fetch")
const axios = require('axios')
async function getNSFW(endpoint) {
  /*
  * @param {string} endpoint
  */
  url = `https://gud-api.gofaizen.xyz/nsfw/${endpoint}`
  const r = await fetch(url)
  const data = await r.json()
  return data.url
}

async function jsonRequestV2(url, property, error=null) {
  try {
    const deez = await axios.get(url)
    const nuts = await deez.data;
    if(!property) return nuts
    return nuts[property]
  } catch(e) { return e; }
}
module.exports = {
  getNSFW,
  jsonRequestV2
};