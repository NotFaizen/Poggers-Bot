module.exports = {
  name: "trash",
  code: `$attachment[https://api.cool-img-api.ml/trash?image=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1;];trash.png]`
}