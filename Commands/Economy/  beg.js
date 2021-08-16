module.exports = ({
name: "beg",
description: "Beg for money",
usage: "$getserverVar[prefix]beg",
code: `$title[You Begged!]
$description[**<@$authorID> You begged** $randomText[**GreenBot**;**Donald Trump**;**Lil Toe**;**an elder**;**a child**;**Billie Eyelash**;**Shawn Mandes**;**The fart you've been holding**;**a staff**;**The guy you hate**;**Mr Russia Doggo**;**Faizen**;**Faizen's non-existent gf**;**Your mom**;**Rick Astley**] **and got** $getServerVar[symbol]$random[0;500]!]
$footer[Imagine begging lol]
$color[$getUserVar[embedColor]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[0;500]]]
$onlyif[$randomText[success;no]==success;{title:You Begged!}{description:You kept on begging for what seemed like an eternity but nobody noticed you}{footer:Imagine begging lol}{color:FF0000}]
$cooldown[30s;Hey idiot, if I let you beg this much you'd be broke by now, so be patient and wait %time%]
`
})