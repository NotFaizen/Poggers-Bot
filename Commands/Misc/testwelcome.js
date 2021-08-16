module.exports = ({
name: "test-welcome",
aliases: ['testwelcome','terstwelcome','testwerlcome','testwelrcome'],
code: `$replaceText[$replaceText[$replaceText[$getServerVar[welcomeMsg];{user.ping};<@$authorID>;-1];{user.name};$username;-1];{user.tag};$usertag;-1]
$attachment[https://api.popcatdev.repl.co/welcomecard?background=$get[bg]&text1=$username+$discriminator&text2=$uri[encode;$get[msg]]&text3=Member+$math[$membersCount+1]&avatar=$replaceText[$replaceText[$replaceText[$authorAvatar;webp;png;-1];jpg;png;-1];gif;png;-1];welcome.png]
$let[bg;$getServerVar[welcomeBg]]
$let[msg;Welcome To $serverName]`
})