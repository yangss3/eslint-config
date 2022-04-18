module.exports = {
  extends: [
    '@yangss/eslint-config-basic',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/array-type': ['error', { 'default': 'array', 'readonly': 'array' }],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': ['error', {
        'assertionStyle': 'as',
        'objectLiteralTypeAssertions': 'allow'
      }
    ],
    '@typescript-eslint/consistent-type-imports': ['error', {
      'prefer': 'type-imports',
      'disallowTypeAnnotations': false,
    }],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': ['error'],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error'],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false
      },
      'multilineDetection': 'brackets'
    }],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { 'int32Hint': false }],
    '@typescript-eslint/type-annotation-spacing': ['error', { 'before': false, 'after': true }]
  }
}
