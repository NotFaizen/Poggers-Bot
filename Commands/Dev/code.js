module.exports = ({
name: "code",
code: `\`\`\`js
$readFile[node_modules/aoi.js/package/functions/funcs/$message]
\`\`\`
$onlyIf[$get[isValidFunction]!=NOT OK;Not a valid function lamo]
$onlyForIDs[$botOwnerID;$getVar[sophie];I didn't know where to put this so I put it in dev only, if you want to use this, ask $userTag[$botOwnerID]]
$let[isValidFunction;$jsonRequest[https://api.leref.ga/functions/$replaceText[$message;.js;];statusText]]`
})