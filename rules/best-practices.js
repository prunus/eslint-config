const rules = {
  /**
   * @see {@link https://eslint.org/docs/rules/accessor-pairs}
   */
  'accessor-pairs': [ 'warn', {
    setWithoutGet: true,
    getWithoutSet: false,
    enforceForClassMembers: true,
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/array-callback-return}
   */
  'array-callback-return': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/block-scoped-var}
   */
  'block-scoped-var': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/class-methods-use-this}
   */
  'class-methods-use-this': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/complexity}
   */
  'complexity': [ 'off', 20 ],

  /**
   * @see {@link https://eslint.org/docs/rules/consistent-return}
   */
  'consistent-return': [ 'off', {
    treatUndefinedAsUnspecified: true
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/curly}
   */
  'curly': [ 'warn', 'multi', 'consistent' ],

  /**
   * @see {@link https://eslint.org/docs/rules/default-case}
   */
  'default-case': [ 'warn', { commentPattern: '^skip\\sdefault' } ],

  /**
   * @see {@link https://eslint.org/docs/rules/default-case-last}
   */
  'default-case-last': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/default-param-last}
   */
  'default-param-last': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/dot-location}
   */
  'dot-location': [ 'warn', 'property' ],

  /**
   * @see {@link https://eslint.org/docs/rules/dot-notation}
   */
  'dot-notation': [ 'warn', { allowKeywords: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/eqeqeq}
   */
  'eqeqeq': [ 'warn', 'always', { null: 'ignore' } ],

  /**
   * @see {@link https://eslint.org/docs/rules/grouped-accessor-pairs}
   */
  'grouped-accessor-pairs': [ 'warn', 'getBeforeSet' ],

  /**
   * @see {@link https://eslint.org/docs/rules/guard-for-in}
   */
  'guard-for-in': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/max-classes-per-file}
   */
  'max-classes-per-file': [ 'error', 1 ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-alert}
   */
  'no-alert': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-caller}
   */
  'no-caller': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-case-declarations}
   */
  'no-case-declarations': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-constructor-return}
   */
  'no-constructor-return': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-div-regex}
   */
  'no-div-regex': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-else-return}
   */
  'no-else-return': [ 'warn', { allowElseIf: false } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-empty-function}
   */
  'no-empty-function': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-empty-pattern}
   */
  'no-empty-pattern': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-eq-null}
   */
  'no-eq-null': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-eval}
   */
  'no-eval': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-extend-native}
   */
  'no-extend-native': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-extra-bind}
   */
  'no-extra-bind': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-extra-label}
   */
  'no-extra-label': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-fallthrough}
   */
  'no-fallthrough': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-floating-decimal}
   */
  'no-floating-decimal': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-global-assign}
   */
  'no-global-assign': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-implicit-coercion}
   */
  'no-implicit-coercion': [ 'error', {
    boolean: false,
    number: true,
    string: true,
    disallowTemplateShorthand: true,
    allow: [],
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-implicit-globals}
   */
  'no-implicit-globals': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-implied-eval}
   */
  'no-implied-eval': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-invalid-this}
   */
  'no-invalid-this': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-iterator}
   */
  'no-iterator': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-labels}
   */
  'no-labels': [ 'error', { allowLoop: false, allowSwitch: false } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-lone-blocks}
   */
  'no-lone-blocks': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-loop-func}
   */
  'no-loop-func': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-magic-numbers}
   */
  'no-magic-numbers': [ 'off', {
    ignore: [],
    ignoreArrayIndexes: true,
    enforceConst: true,
    detectObjects: false,
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-multi-spaces}
   */
  'no-multi-spaces': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-multi-str}
   */
  'no-multi-str': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-new}
   */
  'no-new': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-new-func}
   */
  'no-new-func': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-new-wrappers}
   */
  'no-new-wrappers': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-nonoctal-decimal-escape}
   */
  'no-nonoctal-decimal-escape': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-octal}
   */
  'no-octal': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-octal-escape}
   */
  'no-octal-escape': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-param-reassign}
   */
  'no-param-reassign': [ 'error', {
    props: true,
    ignorePropertyModificationsFor: [
      'acc', // For reduce accumulators
      'accumulator', // For reduce accumulators
      'e', // For e.returnvalue
      'ctx', // For Koa routing
      'context', // For Koa routing
      'req', // For Express requests
      'request', // For Express requests
      'res', // For Express responses
      'response', // For Express responses
      '$scope', // For Angular 1 scopes
      'staticContext', // For ReactRouter context
    ]
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-proto}
   */
  'no-proto': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-redeclare}
   */
  'no-redeclare': [ 'error', { builtinGlobals: true } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-restricted-properties}
   */
  'no-restricted-properties': [ 'error',
    { object: 'arguments', property: 'callee', message: 'arguments.callee is deprecated' },
    { object: 'global', property: 'isFinite', message: 'Please use Number.isFinite instead' },
    { object: 'self', property: 'isFinite', message: 'Please use Number.isFinite instead' },
    { object: 'window', property: 'isFinite', message: 'Please use Number.isFinite instead' },
    { object: 'global', property: 'isNaN', message: 'Please use Number.isNaN instead' },
    { object: 'self', property: 'isNaN', message: 'Please use Number.isNaN instead' },
    { object: 'window', property: 'isNaN', message: 'Please use Number.isNaN instead' },
    { property: '__defineGetter__', message: 'Please use Object.defineProperty instead.' },
    { property: '__defineSetter__', message: 'Please use Object.defineProperty instead.' },
    { object: 'Math', property: 'pow', message: 'Use the exponentiation operator (**) instead.' } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-return-assign}
   */
  'no-return-assign': [ 'error', 'except-parens' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-return-await}
   */
  'no-return-await': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-script-url}
   */
  'no-script-url': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-self-assign}
   */
  'no-self-assign': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-self-compare}
   */
  'no-self-compare': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-sequences}
   */
  'no-sequences': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-throw-literal}
   */
  'no-throw-literal': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unmodified-loop-condition}
   */
  'no-unmodified-loop-condition': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unused-expressions}
   */
  'no-unused-expressions': [ 'error', {
    allowShortCircuit: false,
    allowTernary: false,
    allowTaggedTemplates: false,
    enforceForJSX: true,
  } ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-unused-labels}
   */
  'no-unused-labels': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-useless-call}
   */
  'no-useless-call': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-useless-catch}
   */
  'no-useless-catch': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-useless-concat}
   */
  'no-useless-concat': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-useless-escape}
   */
  'no-useless-escape': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-useless-return}
   */
  'no-useless-return': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-void}
   */
  'no-void': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-warning-comments}
   */
  'no-warning-comments': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-with}
   */
  'no-with': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-named-capture-group}
   */
  'prefer-named-capture-group': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-promise-reject-errors}
   */
  'prefer-promise-reject-errors': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/prefer-regex-literals}
   */
  'prefer-regex-literals': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/radix}
   */
  'radix': [ 'warn', 'as-needed' ],

  /**
   * @see {@link https://eslint.org/docs/rules/require-await}
   */
  'require-await': [ 'warn' ],

  /**
   * @see {@link https://eslint.org/docs/rules/require-unicode-regexp}
   */
  'require-unicode-regexp': [ 'off' ],

  /**
   * @see {@link https://eslint.org/docs/rules/vars-on-top}
   */
  'vars-on-top': [ 'error' ],

  /**
   * @see {@link https://eslint.org/docs/rules/wrap-iife}
   */
  'wrap-iife': [ 'error', 'outside', { functionPrototypeMethods: false } ],

  /**
   * @see {@link https://eslint.org/docs/rules/yoda}
   */
  'yoda': [ 'warn' ],
}

module.exports = { rules }
