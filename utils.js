function userAv() {
  return "$replaceText[$replacetext[$useravatar[$mentioned[1;yes]];webp;png;-1];gif;png;-1]"
}

function userAv2() {
  return "$replaceText[$replacetext[$useravatar[$authorAvatar];.webp;.png;-1];.gif;.png;-1]"
}

function authorColor() {
  return "$getRoleColor[$highestRole]"
}

function replacedText() {
  return "$replaceText[$message; ;+;-1]"
}