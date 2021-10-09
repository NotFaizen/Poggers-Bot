module.exports = {
  name: "delete",
  code: `$attachment[https://api.devs-hub.xyz/delete?image=$replaceText[$userAvatar[$mentioned[1;yes]];.webp;.png;-1]&darkmode=false;delete.png]`
}