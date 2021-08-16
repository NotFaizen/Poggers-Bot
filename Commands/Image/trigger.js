module.exports = {
  name: "triggered",
  code: `$attachment[https://api.cool-img-api.ml/triggered?image=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1;];triggered.gif]`
}