module.exports = ({
  name: "$alwaysExecute",
  code: `$if[$checkContains[$message;give me a meme;gimme a meme]==true]
  $jsonRequest[https://api.popcat.xyz/meme;image;API down haiyaa]
  $endif`
})