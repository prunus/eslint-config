module.exports = {
  extends: [
    './js',
    './rules/react',
    './rules/react-hooks',
    './rules/import-helpers-react',
  ].map( require.resolve ),
  parserOptions: { ecmaVersion: 12 }
}
