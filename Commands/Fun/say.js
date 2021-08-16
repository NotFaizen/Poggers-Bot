module.exports = {
  name: "say",
  code: `$message
  $deletecommand
  $onlyif[$checkContains[$message;@everyone;@here;<@]==false;You want to ping someone? Well too bad because you can't]
  $argsCheck[>1;Insert something for the bot to say]`
}