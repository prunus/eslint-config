const override = (pluginPrefix, ruleName, rule, eslintRuleName) => ({
  [`${pluginPrefix}/${ruleName}`]: rule,
  [eslintRuleName || ruleName]: ['off'],
})

override.to = pluginPrefix => override.bind(null, pluginPrefix)

module.exports = override
