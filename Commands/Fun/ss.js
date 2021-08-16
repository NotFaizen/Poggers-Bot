module.exports = ({
name: "ss",
code: `
$title[Here's the website ss you requested]
$image[attachment://ss.png]
$color[$getUserVar[embedColor]]
$attachment[https://image.thum.io/get/width/1920/crop/675/noanimate/$replaceText[$replaceText[$checkContains[$message;https://];true;$message];false;https://$message];ss.png]
$onlyif[$checkContains[$toLowercase[$message];porn;hentai;bdsm;bondage;nsfw;xxx;sex;threesome;uncensored;dick;big dick;cock;strapon;futanari;trap;strap on;shemale;dickgirl;futa;incest;lolicon;titty;fuck;boobs;boobas;titties;hardcore;milf;amelewd;murr;yiff;4k;anal;cumart;cumslut;boobs;ass;blowjob;bondage;femdom;feet;gasm;gif;hanal;hboobs;hentai;hneko;holo;keta;pussy;kitsu;kuni;nude;girlsolo;orgy;slut;creampie;xlecx;xhamster;xnxx;lewd;xvideos;bangbros;boyfriendtv;goodgay;txx;4tube;8teenxxx;alotporn;amateurscentral;asianscentral;beeg;bustnow;cliphunter;definebabes;deviantclip;drtuber;empflix;fantasti.cc;fapdu;freeporn;freudbox;fuq;fux;grayvee;hellxx;hustlertube;jugy;jizzhut;kaktuz;keezmovies;kinxxx;laraporn;leakedporn;lovelyclips;lubetube;mofosex;monstertube;madthumbs;moviefap;moviesand;orgasm;perfectgirls.net;pichunter;planetsuzy;porn;pornolandia;porn-plus;porncor;pornhub;pornrabbit;porntitan;pussy;redtube;tube8;xhamster;xnxx;xvideos;youjizz;redwap2;childxfun;childxporn]==false;{title:❌ NSFW detected!} {description:No I won't screenshot this because your message was flagged as NSFW. If you think this is a mistake, contact $usertag[$botownerid].} {footer:go to horny jail *bonk*} {color:RED}]
$argsCheck[>1;Provide a url for the site you want to screenshot. Example: \`#SEMI#ss popcat.xyz\` or \`#SEMI#ss https://popcat.xyz\`]
`
})