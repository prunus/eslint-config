const plugins = [
  'import-helpers'
]

const parserOptions = {
  ecmaFeatures: {
    jsx: true
  }
}

const rules = {
  /**
   * @see {@link https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md}
   */
  'import-helpers/order-imports': [ 'warn', {
    newlinesBetween: 'always',
    groups: [
      [ '/^@?react/', '/^@?[A-z-]+-react/' ],
      'module',
      '/^~/',
      [ 'parent', 'sibling', 'index' ],
    ],
    alphabetize: { order: 'asc', ignoreCase: true },
  } ]
}

module.exports = { plugins, parserOptions, rules }
