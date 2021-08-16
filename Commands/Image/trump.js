module.exports = ({
  name: "trump",
  code: `$attachment[https://nekobot.xyz/api/imagegen?type=trumptweet&text=$replaceText[$message; ;+;-1]&raw=1;trump.png]`
})