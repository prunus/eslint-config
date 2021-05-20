module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/stylistic',
    './rules/variables',
    './rules/react',
    './rules/react-hooks',
    './rules/import-helpers-react',
  ].map( require.resolve ),
  parserOptions: { ecmaVersion: 12 }
}
