module.exports = {
  name: "commandlist",
  code:`
  $title[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];https://aoi.leref.ga/functions/$replacetext[$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd]]
  $addField[Link:;[Click Me](https://aoi.leref.ga/functions/$replacetext[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd])]
  $addField[Description:;\`\`\`html
  $jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc]\`\`\`]
  $addField[Usage:;\`\`\`kt
  $jsonRequest[https://api.leref.ga/functions/$message[1];data[0].usage]\`\`\`]
  $color[$getUserVar[embedColor]]
  $thumbnail[https://avatars.githubusercontent.com/u/83202021?s=280&v=4]
  $onlyIf[$jsonRequest[https://api.leref.ga/functions/$message[1];message]==;Error, command not found.]
  $argsCheck[>1;Wrong usage, #SEMI#commandlist <function>]
  `
} 