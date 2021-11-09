module.exports = ({
name: "sadcat",
code: `$attachment[https://api.popcat.xyz/sadcat?text=$uri[encode;$message;sadcat.png]
$argsCheck[>1;{attachment:sadcat.png:https://api.popcat.xyz/sadcat?text=When+you+dont+provide+text}]`
})