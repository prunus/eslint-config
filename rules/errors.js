const rules = {
  /**
   * @see {@link https://eslint.org/docs/rules/for-direction}
   */
  'for-direction': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/getter-return}
   */
  'getter-return': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-async-promise-executor}
   */
  'no-async-promise-executor': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-await-in-loop}
   */
  'no-await-in-loop': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-compare-neg-zero}
   */
  'no-compare-neg-zero': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-cond-assign}
   */
  'no-cond-assign': [ 'error', 'always' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-console}
   */
  'no-console': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-constant-condition}
   */
  'no-constant-condition': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-control-regex}
   */
  'no-control-regex': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-debugger}
   */
  'no-debugger': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-dupe-args}
   */
  'no-dupe-args': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-dupe-else-if}
   */
  'no-dupe-else-if': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-dupe-keys}
   */
  'no-dupe-keys': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-duplicate-case}
   */
  'no-duplicate-case': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-empty}
   */
  'no-empty': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-empty-character-class}
   */
  'no-empty-character-class': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-ex-assign}
   */
  'no-ex-assign': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-extra-boolean-cast}
   */
  'no-extra-boolean-cast': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-extra-parens}
   */
  'no-extra-parens': [ 'error', { ignoreJSX: 'all' } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-extra-semi}
   */
  'no-extra-semi': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-func-assign}
   */
  'no-func-assign': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-import-assign}
   */
  'no-import-assign': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-inner-declarations}
   */
  'no-inner-declarations': [ 'error', 'both' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-invalid-regexp}
   */
  'no-invalid-regexp': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-irregular-whitespace}
   */
  'no-irregular-whitespace': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-loss-of-precision}
   */
  'no-loss-of-precision': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-misleading-character-class}
   */
  'no-misleading-character-class': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-obj-calls}
   */
  'no-obj-calls': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-promise-executor-return}
   */
  'no-promise-executor-return': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-prototype-builtins}
   */
  'no-prototype-builtins': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-regex-spaces}
   */
  'no-regex-spaces': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-setter-return}
   */
  'no-setter-return': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-sparse-arrays}
   */
  'no-sparse-arrays': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-template-curly-in-string}
   */
  'no-template-curly-in-string': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unexpected-multiline}
   */
  'no-unexpected-multiline': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unreachable}
   */
  'no-unreachable': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unreachable-loop}
   */
  'no-unreachable-loop': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unsafe-finally}
   */
  'no-unsafe-finally': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unsafe-negation}
   */
  'no-unsafe-negation': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unsafe-optional-chaining}
   */
  'no-unsafe-optional-chaining': [ 'off', { disallowArithmeticOperators: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-useless-backreference}
   */
  'no-useless-backreference': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/require-atomic-updates}
   */
  'require-atomic-updates': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/use-isnan}
   */
  'use-isnan': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/valid-typeof}
   */
  'valid-typeof': [ 'error' ],
}

module.exports = { rules }
