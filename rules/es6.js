const env = {
  es6: true
}

const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {
    generators: true,
    objectLiteralDuplicateProperties: false
  }
}

const rules = {
  /**
   * @see {@link https://eslint.org/docs/rules/arrow-body-style}
   */
  'arrow-body-style': [ 'warn', 'as-needed' ],

  /**
   * @see {@link https://eslint.org/docs/rules/arrow-parens}
   */
  'arrow-parens': [ 'warn', 'as-needed', { requireForBlockBody: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/arrow-spacing}
   */
  'arrow-spacing': [ 'warn', { before: true, after: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/constructor-super}
   */
  'constructor-super': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/generator-star-spacing}
   */
  'generator-star-spacing': [ 'warn', {
    before: false,
    after: true,
    anonymous: 'neither',
    method: { before: false, after: true }
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-class-assign}
   */
  'no-class-assign': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-confusing-arrow}
   */
  'no-confusing-arrow': [ 'off', { allowParens: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-const-assign}
   */
  'no-const-assign': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-dupe-class-members}
   */
  'no-dupe-class-members': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-duplicate-imports}
   */
  'no-duplicate-imports': [ 'warn', { includeExports: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-new-symbol}
   */
  'no-new-symbol': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-restricted-exports}
   */
  'no-restricted-exports': [ 'warn', {
    restrictedNamedExports: [ 'default' ],
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-restricted-imports}
   */
  'no-restricted-imports': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-this-before-super}
   */
  'no-this-before-super': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-useless-computed-key}
   */
  'no-useless-computed-key': [ 'warn', { enforceForClassMembers: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-useless-constructor}
   */
  'no-useless-constructor': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-useless-rename}
   */
  'no-useless-rename': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-var}
   */
  'no-var': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/object-shorthand}
   */
  'object-shorthand': [ 'warn', 'always', {
    avoidExplicitReturnArrows: true
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-arrow-callback}
   */
  'prefer-arrow-callback': [ 'warn', {
    allowNamedFunctions: false,
    allowUnboundThis: true
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-const}
   */
  'prefer-const': [ 'warn', { destructuring: 'any' } ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-destructuring}
   */
  'prefer-destructuring': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-numeric-literals}
   */
  'prefer-numeric-literals': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-rest-params}
   */
  'prefer-rest-params': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-spread}
   */
  'prefer-spread': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-template}
   */
  'prefer-template': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/require-yield}
   */
  'require-yield': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/rest-spread-spacing}
   */
  'rest-spread-spacing': [ 'warn', 'never' ],

  /**
   * @see {@link https://eslint.org/docs/rules/sort-imports}
   */
  'sort-imports': [ 'warn', {
    ignoreCase: false,
    ignoreDeclarationSort: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
    allowSeparatedGroups: true
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/symbol-description}
   */
  'symbol-description': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/template-curly-spacing}
   *
   * rule disabled for compatibility with eslint-plugin-prettier
   */
  'template-curly-spacing': [ 'off', 'always' ],

  /**
   * @see {@link https://eslint.org/docs/rules/yield-star-spacing}
   */
  'yield-star-spacing': [ 'warn', 'after' ],
}

module.exports = { env, parserOptions, rules }
