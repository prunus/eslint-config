module.exports = {
  extends: [
    './js',
    './rules/react',
    './rules/react-hooks',
    './rules/import-helpers-react',
    './prettier.js',
  ].map(require.resolve),
  parserOptions: { ecmaVersion: 12 },
}
