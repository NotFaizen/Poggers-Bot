module.exports = ({
  name: "suggest",
  code: `
  $addcmdreactions[✅]
  $author[$usertag;$authoravatar]
  $title[New Suggestion]
  $description[$message]
  $image[$messageAttachment]
  $color[$getUserVar[embedColor]]
  $footer[🔼 Like it! | 🔽 Don't like it! | ✖️ Won't be added | 🔶 Already exists | 🔷 Will be added soon]
  $addReactions[🔼;🔽]
  $useChannel[$getServerVar[suggestion]]
  $argsCheck[>1;Usage: <prefix>suggest <your suggestion>]
  $onlyIf[$checkContains[$getServerVar[suggestion];none]==false;You haven't set a suggestion channel yet! Set one using \`set-channel <#channel>\`]`
})