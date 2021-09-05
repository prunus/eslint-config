module.exports = {
  extends: [
    './js',
    './rules/typescript',
  ].map( require.resolve ),
}
