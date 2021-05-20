const rules = {
  /**
   * @see {@link https://eslint.org/docs/rules/array-bracket-newline}
   */
  'array-bracket-newline': [ 'warn', 'consistent' ],

  /**
   * @see {@link https://eslint.org/docs/rules/array-bracket-spacing}
   */
  'array-bracket-spacing': [ 'warn', 'always' ],

  /**
   * @see {@link https://eslint.org/docs/rules/array-element-newline}
   */
  'array-element-newline': [ 'warn', 'consistent' ],

  /**
   * @see {@link https://eslint.org/docs/rules/block-spacing}
   */
  'block-spacing': [ 'warn', 'always' ],

  /**
   * @see {@link https://eslint.org/docs/rules/brace-style}
   */
  'brace-style': [ 'warn', '1tbs', { allowSingleLine: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/camelcase}
   */
  'camelcase': [ 'off', {
    properties: 'always',
    ignoreDestructuring: false,
    ignoreImports: false,
    ignoreGlobals: false,
    allow: []
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/capitalized-comments}
   */
  'capitalized-comments': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/comma-dangle}
   */
  'comma-dangle': [ 'warn', 'only-multiline' ],

  /**
   * @see {@link https://eslint.org/docs/rules/capitalized-comments}
   */
  'comma-spacing': [ 'warn', { before: false, after: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/comma-style}
   */
  'comma-style': [ 'warn', 'last' ],

  /**
   * @see {@link https://eslint.org/docs/rules/computed-property-spacing}
   */
  'computed-property-spacing': [ 'warn', 'never', { enforceForClassMembers: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/consistent-this}
   */
  'consistent-this': [ 'warn', 'that' ],

  /**
   * @see {@link https://eslint.org/docs/rules/eol-last}
   */
  'eol-last': [ 'warn', 'unix' ],

  /**
   * @see {@link https://eslint.org/docs/rules/func-call-spacing}
   */
  'func-call-spacing': [ 'warn', 'never' ],

  /**
   * @see {@link https://eslint.org/docs/rules/func-name-matching}
   */
  'func-name-matching': [ 'warn', 'always', {
    considerPropertyDescriptor: true,
    includeCommonJSModuleExports: false
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/func-names}
   */
  'func-names': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/func-style}
   */
  'func-style': [ 'warn', 'expression' ],

  /**
   * @see {@link https://eslint.org/docs/rules/function-call-argument-newline}
   */
  'function-call-argument-newline': [ 'warn', 'consistent' ],

  /**
   * @see {@link https://eslint.org/docs/rules/function-paren-newline}
   */
  'function-paren-newline': [ 'warn', 'multiline' ],

  /**
   * @see {@link https://eslint.org/docs/rules/id-denylist}
   */
  'id-denylist': [ 'off', [] ],

  /**
   * @see {@link https://eslint.org/docs/rules/id-length}
   */
  'id-length': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/id-match}
   */
  'id-match': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/implicit-arrow-linebreak}
   */
  'implicit-arrow-linebreak': [ 'warn', 'beside' ],

  /**
   * @see {@link https://eslint.org/docs/rules/indent}
   */
  'indent': [ 'warn', 2 ],

  /**
   * @see {@link https://eslint.org/docs/rules/jsx-quotes}
   */
  'jsx-quotes': [ 'warn', 'prefer-single' ],

  /**
   * @see {@link https://eslint.org/docs/rules/key-spacing}
   */
  'key-spacing': [ 'warn', {
    beforeColon: false,
    afterColon: true,
    mode: 'strict',
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/keyword-spacing}
   */
  'keyword-spacing': [ 'warn', { before: true, after: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/line-comment-position}
   */
  'line-comment-position': [ 'off', { position: 'above' } ],

  /**
   * @see {@link https://eslint.org/docs/rules/linebreak-style}
   */
  'linebreak-style': [ 'warn', 'unix' ],

  /**
   * @see {@link https://eslint.org/docs/rules/lines-around-comment}
   */
  'lines-around-comment': [ 'warn', {
    beforeBlockComment: true,
    afterBlockComment: false,
    allowBlockStart: true,
    allowBlockEnd: true,
    allowClassStart: true,
    allowClassEnd: true,
    allowObjectStart: true,
    allowObjectEnd: true,
    allowArrayStart: true,
    allowArrayEnd: true
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/lines-between-class-members}
   */
  'lines-between-class-members': [ 'warn', 'always', { exceptAfterSingleLine: false } ],

  /**
   * @see {@link https://eslint.org/docs/rules/max-depth}
   */
  'max-depth': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/max-len}
   */
  'max-len': [ 'warn', {
    code: 80,
    tabWidth: 2,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/max-lines}
   */
  'max-lines': [ 'warn', { max: 300, skipComments: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/max-lines}
   */
  'max-lines-per-function': [ 'warn', { max: 100, skipComments: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/max-nested-callbacks}
   */
  'max-nested-callbacks': [ 'warn', 10 ],

  /**
   * @see {@link https://eslint.org/docs/rules/max-params}
   */
  'max-params': [ 'warn', 4 ],

  /**
   * @see {@link https://eslint.org/docs/rules/max-statements}
   */
  'max-statements': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/max-statements}
   */
  'max-statements-per-line': [ 'warn', { max: 2 } ],

  /**
   * @see {@link https://eslint.org/docs/rules/multiline-comment-style}
   */
  'multiline-comment-style': [ 'warn', 'starred-block' ],

  /**
   * @see {@link https://eslint.org/docs/rules/multiline-ternary}
   */
  'multiline-ternary': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/new-cap}
   */
  'new-cap': [ 'warn', { newIsCap: true, capIsNew: false, properties: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/new-parens}
   */
  'new-parens': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/newline-per-chained-call}
   */
  'newline-per-chained-call': [ 'warn', { ignoreChainWithDepth: 2 } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-array-constructor}
   */
  'no-array-constructor': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-bitwise}
   */
  'no-bitwise': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-continue}
   */
  'no-continue': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-inline-comments}
   */
  'no-inline-comments': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-lonely-if}
   */
  'no-lonely-if': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-mixed-operators}
   */
  'no-mixed-operators': [ 'warn', {
    groups: [
      /** Arithmetic */
      [ '+', '-', '*', '/', '%', '**' ],

      /** Bitwise */
      [ '&', '|', '^', '~', '<<', '>>', '>>>' ],

      /** Comparison */
      [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],

      /** Logical */
      [ '&&', '||' ],

      /** Coalesce */
      // [ '??' ], // should not have fewer than 2 items.
      /** Relational */
      [ 'in', 'instanceof' ],

      /** Ternary */
      // [ '?:' ], // should not have fewer than 2 items.
    ],
    allowSamePrecedence: true
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-mixed-spaces-and-tabs}
   */
  'no-mixed-spaces-and-tabs': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-multi-assign}
   */
  'no-multi-assign': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-multiple-empty-lines}
   */
  'no-multiple-empty-lines': [ 'warn', { max: 1, maxEOF: 1, maxBOF: 0 } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-negated-condition}
   */
  'no-negated-condition': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-nested-ternary}
   */
  'no-nested-ternary': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-new-object}
   */
  'no-new-object': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-plusplus}
   */
  'no-plusplus': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-restricted-syntax}
   */
  'no-restricted-syntax': [ 'warn', 'WithStatement' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-tabs}
   */
  'no-tabs': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-ternary}
   */
  'no-ternary': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-trailing-spaces}
   */
  'no-trailing-spaces': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-underscore-dangle}
   */
  'no-underscore-dangle': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unneeded-ternary}
   */
  'no-unneeded-ternary': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-whitespace-before-property}
   */
  'no-whitespace-before-property': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/nonblock-statement-body-position}
   */
  'nonblock-statement-body-position': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/nonblock-statement-body-position}
   */
  'object-curly-newline': [ 'warn', { consistent: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/nonblock-statement-body-position}
   */
  'object-curly-spacing': [ 'warn', 'always' ],

  /**
   * @see {@link https://eslint.org/docs/rules/object-property-newline}
   */
  'object-property-newline': [ 'warn', { allowAllPropertiesOnSameLine: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/one-var}
   */
  'one-var': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/one-var-declaration-per-line}
   */
  'one-var-declaration-per-line': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/operator-assignment}
   */
  'operator-assignment': [ 'warn', 'always' ],

  /**
   * @see {@link https://eslint.org/docs/rules/operator-linebreak}
   */
  'operator-linebreak': [ 'off', 'after' ],

  /**
   * @see {@link https://eslint.org/docs/rules/padded-blocks}
   */
  'padded-blocks': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/padding-line-between-statements}
   */
  'padding-line-between-statements': [
    'warn',
    { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
    { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] },
    { blankLine: 'always', prev: 'directive', next: '*' },
    { blankLine: 'any', prev: 'directive', next: 'directive' },
    { blankLine: 'always', prev: [ 'case', 'default' ], next: [ 'case', 'default' ] },
    { blankLine: 'always', prev: [ 'throw', 'switch', 'import' ], next: '*' },
    { blankLine: 'any', prev: [ 'import' ], next: [ 'import' ] },
  ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-exponentiation-operator}
   */
  'prefer-exponentiation-operator': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-object-spread}
   */
  'prefer-object-spread': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/quote-props}
   */
  'quote-props': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/quote-props}
   */
  'quotes': [ 'warn', 'single', { avoidEscape: true, allowTemplateLiterals: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/quote-props}
   */
  'semi': [ 'warn', 'never', { beforeStatementContinuationChars: 'always' } ],

  /**
   * @see {@link https://eslint.org/docs/rules/semi-spacing}
   */
  'semi-spacing': [ 'off', { before: false, after: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/semi-style}
   */
  'semi-style': [ 'off', 'last' ],

  /**
   * @see {@link https://eslint.org/docs/rules/sort-keys}
   */
  'sort-keys': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/sort-vars}
   */
  'sort-vars': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/space-before-blocks}
   */
  'space-before-blocks': [ 'warn', 'always' ],

  /**
   * @see {@link https://eslint.org/docs/rules/space-before-function-paren}
   */
  'space-before-function-paren': [ 'warn', 'never' ],

  /**
   * @see {@link https://eslint.org/docs/rules/space-in-parens}
   */
  'space-in-parens': [ 'warn', 'always' ],

  /**
   * @see {@link https://eslint.org/docs/rules/space-infix-ops}
   */
  'space-infix-ops': [ 'warn', { int32Hint: false } ],

  /**
   * @see {@link https://eslint.org/docs/rules/space-unary-ops}
   */
  'space-unary-ops': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/spaced-comment}
   */
  'spaced-comment': [ 'warn', 'always' ],

  /**
   * @see {@link https://eslint.org/docs/rules/switch-colon-spacing}
   */
  'switch-colon-spacing': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/template-tag-spacing}
   */
  'template-tag-spacing': [ 'warn', 'never' ],

  /**
   * @see {@link https://eslint.org/docs/rules/unicode-bom}
   */
  'unicode-bom': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/wrap-regex}
   */
  'wrap-regex': [ 'off' ],
}

module.exports = { rules }
