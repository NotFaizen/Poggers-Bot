module.exports = ({
  name: "pablo",
  usage: ";pablo <text here>",
  description: "Pablo.",
  code: `$attachment[https://api.berk404.ga/pablo?text=$uri[encode;$message];pablo.png]
  $argsCheck[>1;{attachment:pablo.png:https://api.berk404.ga/pablo?text=Provide+something+for+me+to+say}]`
})