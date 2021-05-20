const plugins = [
  'import-helpers'
]

const rules = {
  /**
   * @see {@link https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md}
   */
  'import-helpers/order-imports': [ 'warn', {
    newlinesBetween: 'always',
    groups: [
      'module',
      '/^~/',
      [ 'parent', 'sibling', 'index' ],
    ],
    alphabetize: { order: 'asc', ignoreCase: true },
  } ]
}

module.exports = { plugins, rules }
