module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'no-var': 'error',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline'],
    'generator-star-spacing': ['error', {'before': true, 'after': false}],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
      align: 'value',
    }],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'multiline-ternary': ['error', 'always-multiline'],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'eslint nonblock-statement-body-position': ['error', 'below'],
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true
    }],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'rest-spread-spacing': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': ['error', {'after': true, 'before': false}],
    'template-curly-spacing': ['error', 'never']
  },
  ignorePatterns: ['dist/*']
}
