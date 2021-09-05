module.exports = {
  extends: [
    './js',
    './rules/typescript',
    './rules/typescript-naming-convention',
  ].map(require.resolve),
}
