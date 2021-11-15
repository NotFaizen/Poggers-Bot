module.exports = ({
name: "disablechatbot",
aliases: ["disable-chatbot"],
code: `$getVar[yeah] Successfully disabled chatbot for this server! Run \`$getServerVar[prefix]set-chatbot <#channel> to set one again.\`
$resetServerVar[chatbot]
$onlyPerms[manageserver;You realise you need \`MANAGE_SERVER\` perms to run this right?]`
})