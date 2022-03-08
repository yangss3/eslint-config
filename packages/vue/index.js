module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@yangss/eslint-config-ts'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      }
    }
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': ['error', { 'singleline': 3 }]
  }
}
