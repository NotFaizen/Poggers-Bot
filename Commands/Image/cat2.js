module.exports = ({
    name: "cat",
    aliases: ['kat','Cat','CAT','CaT','cAt'],
    code: `$title[Cute Cat images for $username;https://cataas.com/#/]
    $image[https://cataas.com/$jsonRequest[https://cataas.com/cat?json=true;url]]
    $color[$getUserVar[embedColor]]
    $footer[Powered by: CATAAS]`
})