module.exports = ({
  name: "api-test",
  code: `$replaceText[$replaceText[$checkContains[$jsonRequest[https://api.popcat.xyz/testo];}];true;$getVar[yeah] API is up and running!];false;$getVar[nah];$getVar[nah] API is down, you better go turn it back up.]`
})