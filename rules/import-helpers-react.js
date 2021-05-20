const override = require("../tools/override")

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
   * @override es6:sort-imports
   * @see {@link https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md}
   */
  ...override( 'import-helpers', 'order-imports', [ 'warn', {
    newlinesBetween: 'always',
    groups: [
      [ '/^@?react/', '/^@?[A-z-]+-react/' ],
      'module',
      '/^~/',
      [ 'parent', 'sibling', 'index' ],
    ],
    alphabetize: { order: 'asc', ignoreCase: true },
  } ], 'sort-imports' )
}

module.exports = { plugins, parserOptions, rules }
