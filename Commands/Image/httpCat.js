module.exports = ({
  name: "httpcat",
  description: "Get a cat picture for http statuses",
  usage: ";httpcat <http_status> (optional)",
  code: `
  $attachment[https://http.cat/$message;$message.png]
  $argsCheck[>1;You must enter any http protocol for me to get its related cat image. Note from dev: "If you're getting a 404 Not found error, the http protocol you entered doesn't exist or you made a typo"]
  $let[http;$randomText[100;101;102;200;201;202;203;204;206;207;300;301;302;303;304;305;307;308;400;401;402;403;404;405;406;407;408;409;410;411;412;413;414;415;416;417;418;420;421;422;423;424;425;426;429;431;444;450;451;497;498;499;500;501;502;503;504;506;507;508;509;510;511;521;523;525;599]]` 
})