module.exports = {
  env: { node: true },
  parserOptions: {
    project: require.resolve( './tsconfig.json' )
  },
  extends: require.resolve( './tsx' ),
}
