module.exports = {
  name: "bed",
  code: `$suppresserrors[Mmmmm an error]
  $attachment[https://api.cool-img-api.ml/bed?image=$replaceText[$authorAvatar&image2=$userAvatar[$mentioned[1]];.webp;.png;-1];bed.png]
  $onlyif[$mentioned[1]!=;Mention someone you idiot]`
}