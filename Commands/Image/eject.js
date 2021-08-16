module.exports = {
  name: "eject",
  code: `$if[$mentioned[1]!=]
  $attachment[https://vacefron.nl/api/ejected?name=$replaceText[$username[741669715499286598]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow];eject.png]
  $elseif[$mentioned[1]==]
  $attachment[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1]]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow];eject.png]
  $endelseif
  $endif
  `
}