module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/stylistic',
    './rules/variables',
    './rules/import-helpers',
    './rules/typescript',
  ].map( require.resolve ),
}
