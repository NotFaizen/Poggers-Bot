module.exports = {
  name: "neko",
  code: `$title[Random Nekos for $username]
  $image[attachment://neko.png]
  $color[$getUserVar[embedColor]]
  $attachment[$jsonRequest[https://nekos.best/nekos;url;An error occurred, try again later];neko.png]
  $footer[Powered by nekos.best api]
  $cooldown[30s;{title:<a:crossNo:871043625637789696> Cooldown Error} {description:<@$authorID>, if you don't want the bot to get ratelimited or worse blacklisted, wait for %time% because ratelimit / blacklist = no more nekos. The choice is yours - spam or nekos?} {color:RED} {footer: I will dropkick whoever gets me ratelimited / blacklisted}`
}