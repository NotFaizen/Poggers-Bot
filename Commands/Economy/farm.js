module.exports = ({
  name: "farm",
  description: "Work at a farm and get some money",
  usage: "$getserverVar[prefix]farm",
  code: `

  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[10;500]]]

  $title[Farm Time]
  $description[You $randomText[milked the cows;took the eggs from the chickens;cleaned the chicken coup;planted corn;sold bales of hay] and the farmer paid you $getservervar[symbol]$random[10;500]!]
  $footer[Nice job bro]
  $color[$getUserVar[embedColor]]
  $cooldown[5m;Sorry the farm is closed for the next %time%]`
})