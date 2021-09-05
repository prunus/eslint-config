module.exports = {
  extends: [
    './ts',
    './rules/react',
    './rules/react-hooks',
    './rules/import-helpers-react',
  ].map( require.resolve ),
}
