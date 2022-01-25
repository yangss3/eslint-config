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
    indent: ['error', 'tab'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-var': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': ['error', { max: 2 }]
  },
  ignorePatterns: ['dist/*']
}
