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
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  rules: {
    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': ['error', { 'singleline': 3 }]
  }
}
