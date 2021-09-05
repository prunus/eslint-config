const confusingBrowserGlobals = require('confusing-browser-globals')

const rules = {
  /**
   * @see {@link https://eslint.org/docs/rules/init-declarations}
   */
  'init-declarations': ['off'],

  /**
   * @see {@link https://eslint.org/docs/rules/no-delete-var}
   */
  'no-delete-var': ['error'],

  /**
   * @see {@link https://eslint.org/docs/rules/no-label-var}
   */
  'no-label-var': ['error'],

  /**
   * @see {@link https://eslint.org/docs/rules/no-restricted-globals}
   */
  'no-restricted-globals': ['error', ...confusingBrowserGlobals],

  /**
   * @see {@link https://eslint.org/docs/rules/no-shadow}
   */
  'no-shadow': ['off'],

  /**
   * @see {@link https://eslint.org/docs/rules/no-shadow-restricted-names}
   */
  'no-shadow-restricted-names': ['error'],

  /**
   * @see {@link https://eslint.org/docs/rules/no-undef}
   */
  'no-undef': ['error'],

  /**
   * @see {@link https://eslint.org/docs/rules/no-undef-init}
   */
  'no-undef-init': ['error'],

  /**
   * @see {@link https://eslint.org/docs/rules/no-undefined}
   */
  'no-undefined': ['error'],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unused-vars}
   */
  'no-unused-vars': ['warn'],

  /**
   * @see {@link https://eslint.org/docs/rules/no-use-before-define}
   */
  'no-use-before-define': ['error'],
}

module.exports = {rules}
