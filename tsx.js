module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/stylistic',
    './rules/variables',
    './rules/typescript',
    './rules/react',
    './rules/react-hooks',
    './rules/import-helpers-react',
  ].map( require.resolve ),
}
