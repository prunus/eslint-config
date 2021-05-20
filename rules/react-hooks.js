const plugins = [ 'react-hooks' ]

const parserOptions = {
  ecmaFeatures: {
    jsx: true
  }
}

/**
 * @see {@link https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks}
 */
const rules = {
  'react-hooks/rules-of-hooks': [ 'error' ],
  'react-hooks/exhaustive-deps': [ 'warn' ],
}

module.exports = { plugins, parserOptions, rules }
