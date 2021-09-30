module.exports = {
  extends: [
    './js',
    './rules/typescript',
    './rules/typescript-naming-convention',
    './rules/typescript-member-ordering',
  ].map(require.resolve),
}
