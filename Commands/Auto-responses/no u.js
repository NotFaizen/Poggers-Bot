module.exports = ({
  name: "$alwaysExecute",
  code: `$if[$toLowercase[$message]==no u]
  no u
  $endif
  $onlyIf[$guildID!=739811956638220298;]`
})
