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
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-var': 'error',
    'no-multiple-empty-lines': ['error', { max: 2 }]
  },
  ignorePatterns: ['dist/*']
}
