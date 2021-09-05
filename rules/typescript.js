/* eslint max-lines: "off" */

const fs = require('fs')
const path = require('path')

const {to} = require('../tools/override')

const override = to('@typescript-eslint')

const parser = '@typescript-eslint/parser'

const plugins = ['@typescript-eslint']

const parserOptions = {
  project: fs.existsSync('tsconfig.lint.json')
    ? path.resolve('tsconfig.lint.json')
    : path.resolve('tsconfig.json'),
}

const globals = {
  NodeJS: 'readonly',
  globalThis: 'readonly',
}

const rules = {
  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md}
   */
  '@typescript-eslint/adjacent-overload-signatures': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md}
   */
  '@typescript-eslint/array-type': [
    'warn',
    {
      default: 'array-simple',
    },
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md}
   */
  '@typescript-eslint/await-thenable': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md}
   */
  '@typescript-eslint/ban-ts-comment': [
    'warn',
    {'ts-expect-error': 'allow-with-description'},
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md}
   */
  '@typescript-eslint/ban-types': ['off'],

  /**
   * @override stylistic:brace-style
   * @see {@link https://eslint.org/docs/rules/brace-style}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md}
   */
  ...override('brace-style', ['warn', '1tbs', {allowSingleLine: true}]),

  /**
   * @override stylistic:camelcase
   * @see {@link https://eslint.org/docs/rules/camelcase}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md}
   * @deprecated {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md}
   */
  ...override('camelcase', ['off']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md}
   */
  '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],

  /**
   * @override stylistic:comma-dangle
   * @see {@link https://eslint.org/docs/rules/comma-dangle}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md}
   */
  ...override('comma-dangle', ['warn', 'only-multiline']),

  /**
   * @override stylistic:comma-spacing
   * @see {@link https://eslint.org/docs/rules/comma-spacing}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md}
   */
  ...override('comma-spacing', ['warn', {before: false, after: true}]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md}
   */
  '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md}
   */
  '@typescript-eslint/consistent-type-assertions': [
    'warn',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md}
   */
  '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md}
   */
  '@typescript-eslint/consistent-type-imports': [
    'warn',
    {
      prefer: 'no-type-imports',
      disallowTypeAnnotations: true,
    },
  ],

  /**
   * @override best-practices:default-param-last
   * @see {@link https://eslint.org/docs/rules/default-param-last}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md}
   */
  ...override('default-param-last', ['warn']),

  /**
   * @override best-practices:default-param-last
   * @see {@link https://eslint.org/docs/rules/dot-notation}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md}
   */
  ...override('dot-notation', [
    'warn',
    {
      allowKeywords: true,
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
      allowIndexSignaturePropertyAccess: false,
    },
  ]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md}
   */
  '@typescript-eslint/explicit-function-return-type': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md}
   */
  '@typescript-eslint/explicit-member-accessibility': [
    'off',
    {
      accessibility: 'explicit',
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'explicit',
        parameterProperties: 'explicit',
      },
    },
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md}
   */
  '@typescript-eslint/explicit-module-boundary-types': ['off'],

  /**
   * @override stylistic:func-call-spacing
   * @see {@link https://eslint.org/docs/rules/func-call-spacing}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md}
   */
  ...override('func-call-spacing', ['warn', 'never']),

  /**
   * @override stylistic:indent
   * @see {@link https://eslint.org/docs/rules/indent}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md}
   *
   * rule disabled for compatibility with eslint-plugin-prettier
   */
  ...override('indent', ['off', 2]),

  /**
   * @override variables:init-declarations
   * @see {@link https://eslint.org/docs/rules/init-declarations}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md}
   */
  ...override('init-declarations', ['off']),

  /**
   * @override stylistic:keyword-spacing
   * @see {@link https://eslint.org/docs/rules/keyword-spacing}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md}
   */
  ...override('keyword-spacing', ['warn', {before: true, after: true}]),

  /**
   * @override stylistic:lines-between-class-members
   * @see {@link https://eslint.org/docs/rules/lines-between-class-members}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md}
   */
  ...override('lines-between-class-members', [
    'warn',
    {exceptAfterSingleLine: false, exceptAfterOverload: true},
  ]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md}
   */
  '@typescript-eslint/member-delimiter-style': [
    'warn',
    {
      multiline: {delimiter: 'none'},
      singleline: {delimiter: 'semi'},
    },
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md}
   */
  '@typescript-eslint/member-ordering': [
    'warn',
    {
      default: {
        memberTypes: [
          'signature',

          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-decorated-field',
          'protected-decorated-field',
          'private-decorated-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',
          'abstract-field',

          'decorated-field',

          'field',

          'public-constructor',
          'protected-constructor',
          'private-constructor',

          'constructor',

          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-decorated-method',
          'protected-decorated-method',
          'private-decorated-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',

          'public-method',
          'protected-method',
          'private-method',

          'static-method',
          'instance-method',
          'abstract-method',

          'decorated-method',

          'method',
        ],
        order: 'as-written',
      },
    },
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md}
   */
  '@typescript-eslint/method-signature-style': ['warn', 'method'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md}
   */
  '@typescript-eslint/naming-convention': [
    'off',
    {
      format: ['camelCase'],
      selector: ['default'],
    },
    {
      format: ['camelCase', 'UPPER_CASE'],
      selector: ['variable'],
      modifiers: ['const', 'global'],
    },
    {
      format: ['camelCase', 'UPPER_CASE'],
      selector: ['classProperty'],
      modifiers: ['static', 'readonly'],
    },
    {
      format: ['camelCase', 'UPPER_CASE'],
      selector: ['typeProperty'],
      modifiers: ['readonly'],
    },
    {
      format: ['camelCase'],
      selector: ['memberLike'],
      modifiers: ['private'],
      leadingUnderscore: 'require',
    },
    {
      format: ['PascalCase'],
      selector: ['enumMember', 'typeLike'],
    },
  ],

  /**
   * @see {@link https://eslint.org/docs/rules/no-array-constructor}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md}
   */
  ...override('no-array-constructor', ['warn']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md}
   */
  '@typescript-eslint/no-base-to-string': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md}
   */
  '@typescript-eslint/no-confusing-non-null-assertion': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md}
   */
  '@typescript-eslint/no-confusing-void-expression': [
    'off',
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true,
    },
  ],

  /**
   * @override es6:no-dupe-class-members
   * @see {@link https://eslint.org/docs/rules/no-dupe-class-members}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md}
   */
  ...override('no-dupe-class-members', ['warn']),

  /**
   * @override es6:no-duplicate-imports
   * @see {@link https://eslint.org/docs/rules/no-duplicate-imports}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md}
   */
  ...override('no-duplicate-imports', ['warn', {includeExports: false}]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md}
   */
  '@typescript-eslint/no-dynamic-delete': ['off'],

  /**
   * @override best-practices:no-empty-function
   * @see {@link https://eslint.org/docs/rules/no-empty-function}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md}
   */
  ...override('no-empty-function', [
    'warn',
    {
      allow: ['private-constructors', 'protected-constructors'],
    },
  ]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md}
   */
  '@typescript-eslint/no-empty-interface': [
    'off',
    {
      allowSingleExtends: true,
    },
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md}
   */
  '@typescript-eslint/no-explicit-any': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md}
   */
  '@typescript-eslint/no-extra-non-null-assertion': ['warn'],

  /**
   * @override errors:no-extra-parens
   * @see {@link https://eslint.org/docs/rules/no-extra-parens}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md}
   */
  ...override('no-extra-parens', ['error', 'all', {ignoreJSX: 'all'}]),

  /**
   * @override errors:no-extra-semi
   * @see {@link https://eslint.org/docs/rules/no-extra-semi}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md}
   */
  ...override('no-extra-semi', ['error']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md}
   */
  '@typescript-eslint/no-extraneous-class': ['error'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md}
   */
  '@typescript-eslint/no-floating-promises': ['off', {ignoreIIFE: true}],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md}
   */
  '@typescript-eslint/no-for-in-array': ['error'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md}
   */
  '@typescript-eslint/no-implicit-any-catch': [
    'warn',
    {allowExplicitAny: false},
  ],

  /**
   * @override best-practices:no-implied-eval
   * @see {@link https://eslint.org/docs/rules/no-implied-eval}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md}
   */
  ...override('no-implied-eval', ['error']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md}
   */
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {ignoreParameters: false, ignoreProperties: false},
  ],

  /**
   * @override best-practices:no-invalid-this
   * @see {@link https://eslint.org/docs/rules/no-invalid-this}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md}
   */
  ...override('no-invalid-this', ['error']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md}
   */
  '@typescript-eslint/no-invalid-void-type': [
    'off',
    {
      allowInGenericTypeArguments: true,
      allowAsThisParameter: false,
    },
  ],

  /**
   * @override best-practices:no-loop-func
   * @see {@link https://eslint.org/docs/rules/no-loop-func}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md}
   */
  ...override('no-loop-func', ['error']),

  /**
   * @override errors:no-loss-of-precision
   * @see {@link https://eslint.org/docs/rules/no-loss-of-precision}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md}
   */
  ...override('no-loss-of-precision', ['error']),

  /**
   * @override best-practices:no-magic-numbers
   * @see {@link https://eslint.org/docs/rules/no-magic-numbers}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md}
   */
  ...override('no-magic-numbers', ['off']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md}
   */
  '@typescript-eslint/no-misused-new': ['error'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md}
   */
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksConditionals: true,
      checksVoidReturn: true,
    },
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md}
   */
  '@typescript-eslint/no-namespace': [
    'off',
    {
      allowDeclarations: false,
      allowDefinitionFiles: true,
    },
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md}
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md}
   */
  '@typescript-eslint/no-non-null-assertion': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md}
   */
  '@typescript-eslint/no-parameter-properties': ['off'],

  /**
   * @override best-practices:no-redeclare
   * @see {@link https://eslint.org/docs/rules/no-redeclare}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md}
   */
  ...override('no-redeclare', [
    'off',
    {
      ignoreDeclarationMerge: true,
      builtinGlobals: true,
    },
  ]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md}
   */
  '@typescript-eslint/no-require-imports': ['off'],

  /**
   * @override variables:no-shadow
   * @see {@link https://eslint.org/docs/rules/no-shadow}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md}
   */
  ...override('no-shadow', ['off']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md}
   */
  '@typescript-eslint/no-this-alias': [
    'error',
    {
      allowDestructuring: true,
      allowedNames: ['that'],
    },
  ],

  /**
   * @override best-practices:no-throw-literal
   * @see {@link https://eslint.org/docs/rules/no-throw-literal}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md}
   */
  ...override('no-throw-literal', ['error']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md}
   */
  '@typescript-eslint/no-type-alias': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md}
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md}
   */
  '@typescript-eslint/no-unnecessary-condition': [
    'warn',
    {
      allowConstantLoopConditions: false,
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    },
  ],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md}
   */
  '@typescript-eslint/no-unnecessary-qualifier': ['error'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md}
   */
  '@typescript-eslint/no-unnecessary-type-arguments': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md}
   */
  '@typescript-eslint/no-unnecessary-type-assertion': ['error'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md}
   */
  '@typescript-eslint/no-unnecessary-type-constraint': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-argument.md}
   */
  '@typescript-eslint/no-unsafe-argument': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md}
   */
  '@typescript-eslint/no-unsafe-assignment': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md}
   */
  '@typescript-eslint/no-unsafe-call': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md}
   */
  '@typescript-eslint/no-unsafe-member-access': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md}
   */
  '@typescript-eslint/no-unsafe-return': ['off'],

  /**
   * @override best-practices:no-unused-expressions
   * @see {@link https://eslint.org/docs/rules/no-unused-expressions}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md}
   */
  ...override('no-unused-expressions', [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
      enforceForJSX: true,
    },
  ]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md}
   */
  '@typescript-eslint/no-unused-vars-experimental': ['off'],

  /**
   * @override variables:no-unused-vars
   * @see {@link https://eslint.org/docs/rules/no-unused-vars}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md}
   */
  ...override('no-unused-vars', [
    'warn',
    {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      varsIgnorePattern: '^_',
    },
  ]),

  /**
   * @override variables:no-use-before-define
   * @see {@link https://eslint.org/docs/rules/no-use-before-define}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md}
   */
  ...override('no-use-before-define', [
    'error',
    {
      enums: true,
      typedefs: true,
      ignoreTypeReferences: true,
    },
  ]),

  /**
   * @override es6:no-useless-constructor
   * @see {@link https://eslint.org/docs/rules/no-useless-constructor}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md}
   */
  ...override('no-useless-constructor', ['error']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md}
   */
  '@typescript-eslint/no-var-requires': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md}
   */
  '@typescript-eslint/non-nullable-type-assertion-style': ['warn'],

  /**
   * @override stylisctic:object-curly-spacing
   * @see {@link https://eslint.org/docs/rules/object-curly-spacing}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md}
   *
   * rule disabled for compatibility with eslint-plugin-prettier
   */
  ...override('object-curly-spacing', ['off', 'always']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md}
   */
  '@typescript-eslint/prefer-as-const': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md}
   */
  '@typescript-eslint/prefer-enum-initializers': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md}
   */
  '@typescript-eslint/prefer-for-of': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md}
   */
  '@typescript-eslint/prefer-function-type': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md}
   */
  '@typescript-eslint/prefer-includes': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md}
   */
  '@typescript-eslint/prefer-literal-enum-member': ['error'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md}
   */
  '@typescript-eslint/prefer-namespace-keyword': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md}
   */
  '@typescript-eslint/prefer-nullish-coalescing': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md}
   */
  '@typescript-eslint/prefer-optional-chain': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md}
   */
  '@typescript-eslint/prefer-readonly-parameter-types': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md}
   */
  '@typescript-eslint/prefer-readonly': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md}
   */
  '@typescript-eslint/prefer-reduce-type-parameter': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md}
   */
  '@typescript-eslint/prefer-regexp-exec': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md}
   */
  '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md}
   */
  '@typescript-eslint/prefer-ts-expect-error': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md}
   */
  '@typescript-eslint/promise-function-async': [
    'warn',
    {
      allowedPromiseNames: [],
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true,
    },
  ],

  /**
   * @override stylistic:quotes
   * @see {@link https://eslint.org/docs/rules/quotes}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md}
   */
  ...override('quotes', [
    'warn',
    'single',
    {avoidEscape: true, allowTemplateLiterals: true},
  ]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md}
   */
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    {ignoreStringArrays: true},
  ],

  /**
   * @override best-practices:require-await
   * @see {@link https://eslint.org/docs/rules/require-await}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md}
   */
  ...override('require-await', ['warn']),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md}
   */
  '@typescript-eslint/restrict-plus-operands': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md}
   */
  '@typescript-eslint/restrict-template-expressions': [
    'warn',
    {
      allowNumber: true,
      allowBoolean: true,
      allowAny: false,
      allowNullish: true,
    },
  ],

  /**
   * @override best-practices:no-return-await
   * @see {@link https://eslint.org/docs/rules/no-return-await}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md}
   */
  ...override('return-await', ['off'], 'no-return-await'),

  /**
   * @override stylistic:semi
   * @see {@link https://eslint.org/docs/rules/semi}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md}
   */
  ...override('semi', [
    'warn',
    'never',
    {beforeStatementContinuationChars: 'always'},
  ]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md}
   */
  '@typescript-eslint/sort-type-union-intersection-members': ['off'],

  /**
   * @override stylistic:space-before-function-paren
   * @see {@link https://eslint.org/docs/rules/space-before-function-paren}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md}
   */
  ...override('space-before-function-paren', [
    'warn',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ]),

  /**
   * @override stylistic:space-infix-ops
   * @see {@link https://eslint.org/docs/rules/space-infix-ops}
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md}
   */
  ...override('space-infix-ops', ['warn', {int32Hint: false}]),

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md}
   */
  '@typescript-eslint/strict-boolean-expressions': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md}
   */
  '@typescript-eslint/switch-exhaustiveness-check': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md}
   */
  '@typescript-eslint/triple-slash-reference': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md}
   */
  '@typescript-eslint/type-annotation-spacing': ['warn'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md}
   */
  '@typescript-eslint/typedef': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md}
   */
  '@typescript-eslint/unbound-method': ['off'],

  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md}
   */
  '@typescript-eslint/unified-signatures': ['off'],
}

const overrides = [
  {
    files: ['*.ts', '*.tsx'],
    globals: {
      JSX: 'readonly',
    },
    parserOptions,
    rules: {
      'max-len': [
        'warn',
        {
          code: 100,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
    },
  },
  {
    files: ['*.js'],
    parserOptions,
    rules: {
      '@typescript-eslint/restrict-template-expressions': ['off'],
      '@typescript-eslint/no-var-requires': ['off'],
      '@typescript-eslint/no-require-imports': ['off'],
      '@typescript-eslint/explicit-member-accessibility': ['off'],
    },
  },
  {
    files: ['*.jsx', '*.tsx'],
    parserOptions,
    rules: {
      '@typescript-eslint/naming-convention': [
        'off',
        {
          format: ['camelCase'],
          selector: ['default'],
        },
        {
          format: ['camelCase', 'PascalCase'],
          selector: ['variable', 'function'],
          modifiers: ['const'],
          types: ['function'],
        },
        {
          format: ['camelCase', 'UPPER_CASE'],
          selector: ['variable'],
          modifiers: ['const', 'global'],
        },
        {
          format: ['camelCase', 'UPPER_CASE'],
          selector: ['classProperty'],
          modifiers: ['static', 'readonly'],
        },
        {
          format: ['camelCase', 'UPPER_CASE'],
          selector: ['typeProperty'],
          modifiers: ['readonly'],
        },
        {
          format: ['camelCase'],
          selector: ['memberLike'],
          modifiers: ['private'],
          leadingUnderscore: 'require',
        },
        {
          format: ['PascalCase'],
          selector: ['enumMember', 'typeLike'],
        },
      ],
    },
  },
]

module.exports = {parser, parserOptions, plugins, globals, rules, overrides}
