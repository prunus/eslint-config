const plugins = [ 'react' ]

const env = {
  browser: true
}

const parserOptions = {
  ecmaFeatures: {
    jsx: true
  }
}

const settings = {
  react: {
    version: 'detect'
  }
}

const rules = {
  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md}
   */
  'react/boolean-prop-naming': [ 'error', {
    rule: '^(is|enable|disable|has)[A-Z]([A-Za-z0-9]?)+'
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md}
   */
  'react/button-has-type': [ 'warn', {
    button: true,
    submit: true,
    reset: true
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md}
   */
  'react/default-props-match-prop-types': [ 'error', { allowRequiredDefaults: true } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md}
   */
  'react/destructuring-assignment': [ 'warn', 'always' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md}
   */
  'react/display-name': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md}
   */
  'react/forbid-component-props': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md}
   */
  'react/forbid-dom-props': [ 'warn', { forbid: [ 'id' ] } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md}
   */
  'react/forbid-elements': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md}
   */
  'react/forbid-foreign-prop-types': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md}
   */
  'react/forbid-prop-types': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md}
   */
  'react/function-component-definition': [ 'warn', {
    namedComponents: 'arrow-function',
    unnamedComponents: 'arrow-function'
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md}
   */
  'react/jsx-boolean-value': [ 'warn', 'never' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md}
   */
  'react/jsx-child-element-spacing': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md}
   */
  'react/jsx-closing-bracket-location': [ 'warn', 'line-aligned' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md}
   */
  'react/jsx-closing-tag-location': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/}
   */
  'react/jsx-curly-brace-presence': [ 'warn', {
    props: 'always',
    children: 'never'
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md}
   */
  'react/jsx-curly-newline': [ 'warn', {
    multiline: 'require',
    singleline: 'forbid'
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md}
   */
  'react/jsx-curly-spacing': [ 'warn', {
    when: 'never',
    children: true,
    allowMultiline: false,
    spacing: { objectLiterals: 'always' }
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md}
   */
  'react/jsx-equals-spacing': [ 'error', 'never' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
   */
  'react/jsx-filename-extension': [ 'error', {
    extensions: [ '.jsx', '.tsx', '.mdx' ]
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md}
   */
  'react/jsx-first-prop-new-line': [ 'warn', 'multiline-multiprop' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md}
   */
  'react/jsx-fragments': [ 'warn', 'syntax' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md}
   */
  'react/jsx-handler-names': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md}
   */
  'react/jsx-indent-props': [ 'warn', 2 ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md}
   */
  'react/jsx-indent': [ 'warn', 2, {
    indentLogicalExpressions: true
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md}
   */
  'react/jsx-key': [ 'error', {
    checkFragmentShorthand: true,
    checkKeyMustBeforeSpread: true
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md}
   */
  'react/jsx-max-depth': [ 'warn', { max: 3 } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md}
   */
  'react/jsx-max-props-per-line': [ 'warn', {
    maximum: 2,
    when: 'always'
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md}
   */
  'react/jsx-newline': [ 'warn', { prevent: true } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md}
   */
  'react/jsx-no-bind': [ 'error', {
    ignoreDOMComponents: false,
    ignoreRefs: false,
    allowArrowFunctions: false,
    allowFunctions: false,
    allowBind: false
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md}
   */
  'react/jsx-no-comment-textnodes': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md}
   */
  'react/jsx-no-constructed-context-values': [ 'error' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md}
   */
  'react/jsx-no-duplicate-props': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md}
   */
  'react/jsx-no-literals': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md}
   */
  'react/jsx-no-script-url': [ 'error', [ {
    name: 'Link',
    props: [ 'to' ]
  }, {
    name: 'a',
    props: [ 'href' ]
  } ] ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md}
   */
  'react/jsx-no-target-blank': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md}
   */
  'react/jsx-no-undef': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md}
   */
  'react/jsx-no-useless-fragment': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md}
   */
  'react/jsx-one-expression-per-line': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md}
   */
  'react/jsx-pascal-case': [ 'error' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md}
   */
  'react/jsx-props-no-multi-spaces': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md}
   */
  'react/jsx-props-no-spreading': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md}
   */
  'react/jsx-sort-default-props': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md}
   */
  'react/jsx-sort-props': [ 'warn', {
    shorthandFirst: true,
    callbacksLast: true,
    reservedFirst: true,
    noSortAlphabetically: true
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md}
   * @deprecated {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md}
   */
  'react/jsx-space-before-closing': [ 'off' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md}
   */
  'react/jsx-tag-spacing': [ 'warn', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never'
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md}
   */
  'react/jsx-uses-react': [ 'error' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md}
   */
  'react/jsx-uses-vars': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md}
   */
  'react/jsx-wrap-multilines': [ 'warn', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line'
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md}
   */
  'react/no-access-state-in-setstate': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md}
   */
  'react/no-adjacent-inline-elements': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md}
   */
  'react/no-array-index-key': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md}
   */
  'react/no-children-prop': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md}
   */
  'react/no-danger-with-children': [ 'error' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md}
   */
  'react/no-danger': [ 'error' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md}
   */
  'react/no-deprecated': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md}
   */
  'react/no-did-mount-set-state': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md}
   */
  'react/no-did-update-set-state': [ 'error', 'disallow-in-func' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md}
   */
  'react/no-direct-mutation-state': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md}
   */
  'react/no-find-dom-node': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md}
   */
  'react/no-is-mounted': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md}
   */
  'react/no-multi-comp': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md}
   */
  'react/no-redundant-should-component-update': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md}
   */
  'react/no-render-return-value': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md}
   */
  'react/no-set-state': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md}
   */
  'react/no-string-refs': [ 'warn', { noTemplateLiterals: true } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md}
   */
  'react/no-this-in-sfc': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md}
   */
  'react/no-typos': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md}
   */
  'react/no-unescaped-entities': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md}
   */
  'react/no-unknown-property': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md}
   */
  'react/no-unsafe': [ 'warn', { checkAliases: true } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md}
   */
  'react/no-unstable-nested-components': [ 'warn', {
    allowAsProps: true
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md}
   */
  'react/no-unused-prop-types': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md}
   */
  'react/no-unused-state': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md}
   */
  'react/no-will-update-set-state': [ 'error', 'disallow-in-func' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md}
   */
  'react/prefer-es6-class': [ 'warn', 'always' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md}
   */
  'react/prefer-read-only-props': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md}
   */
  'react/prefer-stateless-function': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md}
   */
  'react/prop-types': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md}
   */
  'react/react-in-jsx-scope': [ 'error' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md}
   */
  'react/require-default-props': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md}
   */
  'react/require-optimization': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md}
   */
  'react/require-render-return': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md}
   */
  'react/self-closing-comp': [ 'warn', {
    component: true,
    html: true
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md}
   */
  'react/sort-comp': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md}
   */
  'react/sort-prop-types': [ 'warn', {
    callbacksLast: true,
    requiredFirst: true,
    sortShapeProp: true,
    noSortAlphabetically: true
  } ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md}
   */
  'react/state-in-constructor': [ 'warn', 'never' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md}
   */
  'react/static-property-placement': 'off',

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md}
   */
  'react/style-prop-object': [ 'warn' ],

  /**
   * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md}
   */
  'react/void-dom-elements-no-children': [ 'warn' ],
}

module.exports = { plugins, env, parserOptions, settings, rules }
