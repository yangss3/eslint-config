module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@yangss/eslint-config-ts'
  ],
  overrides: {
    files: ['*.vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    }
  },
  rules: {
  }
}
