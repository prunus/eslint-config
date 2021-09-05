const defaultCamelCase = {
  format: ['camelCase'],
  selector: ['default'],
  leadingUnderscore: 'forbid',
  trailingUnderscore: 'forbid',
}

const globalVariableUppercase = {
  format: ['camelCase', 'UPPER_CASE'],
  selector: ['variable'],
  modifiers: ['const', 'global'],
  leadingUnderscore: 'forbid',
  trailingUnderscore: 'forbid',
}

const privateClassMemberLeadingUnderscore = {
  format: ['camelCase'],
  selector: ['memberLike'],
  modifiers: ['private'],
  leadingUnderscore: 'require',
  trailingUnderscore: 'forbid',
}

const readonlyStaticClassPropertyUppercase = {
  format: ['camelCase', 'UPPER_CASE'],
  selector: ['classProperty'],
  modifiers: ['static', 'readonly'],
  leadingUnderscore: 'forbid',
  trailingUnderscore: 'forbid',
}

const readonlyPrivateStaticClassPropertyUppercase = {
  format: ['camelCase', 'UPPER_CASE'],
  selector: ['classProperty'],
  modifiers: ['static', 'readonly', 'private'],
  leadingUnderscore: 'require',
  trailingUnderscore: 'forbid',
}

const readonlyTypePropertyUppercase = {
  format: ['camelCase', 'UPPER_CASE'],
  selector: ['typeProperty'],
  modifiers: ['readonly'],
  leadingUnderscore: 'forbid',
  trailingUnderscore: 'forbid',
}

const enumMemberAndTypeLikePascalCase = {
  format: ['PascalCase'],
  selector: ['enumMember', 'typeLike'],
  leadingUnderscore: 'forbid',
  trailingUnderscore: 'forbid',
}

const reactComponentPascalCase = {
  format: ['camelCase', 'PascalCase'],
  selector: ['variable', 'function'],
  modifiers: ['const'],
  types: ['function'],
  leadingUnderscore: 'forbid',
  trailingUnderscore: 'forbid',
}

const rules = {
  /**
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md}
   */
  '@typescript-eslint/naming-convention': [
    'error',
    defaultCamelCase,
    globalVariableUppercase,
    privateClassMemberLeadingUnderscore,
    readonlyStaticClassPropertyUppercase,
    readonlyPrivateStaticClassPropertyUppercase,
    readonlyTypePropertyUppercase,
    enumMemberAndTypeLikePascalCase,
  ],
}

const overrides = [ {
  files: ['*.jsx', '*.tsx'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      defaultCamelCase,
      globalVariableUppercase,
      privateClassMemberLeadingUnderscore,
      readonlyStaticClassPropertyUppercase,
      readonlyPrivateStaticClassPropertyUppercase,
      readonlyTypePropertyUppercase,
      enumMemberAndTypeLikePascalCase,
      reactComponentPascalCase
    ],
  }
} ]

module.exports = {rules, overrides}
