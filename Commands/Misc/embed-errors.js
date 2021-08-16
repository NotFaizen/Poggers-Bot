module.exports = ({
  name: "embed-errors",
  code: `$title[Special functions for error messages - DBD.js;https://www.npmjs.com/package/dbd.js]
  $description[\`\`\`{title:text}
{url:link}
{footer:text:url}
{description:text}
{color:hex}
{author:text:url}
{file:text:name.extension}
{thumbnail:url}
{deletecommand} or {deletecommand:time}
{field:name:value:inline}
{timestamp:ms}
{execute:awaited command name}
{image:url}
{reactions:emoji,emoji2,...}
{suppress:yes/no}
{delete:time}
{attachment:name.extension:url}
{edit:duration:{new message}:{new message}:{...}}\`\`\`]
  $color[$getUserVar[embedColor]]
  $thumbnail[https://cdn.discordapp.com/avatars/772968022691676210/981f79673563f7268f4e6a88f1091787.webp]
  $addTimestamp
  `
})