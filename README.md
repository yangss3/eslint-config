## My own ESLint configurations for vanilla JS, TS and Vue project

install
```sh
# vanilla
npm install -D @yangss/eslint-config-basic
# typescript
npm install -D @yangss/eslint-config-ts
# vue
npm install -D @yangss/eslint-config-vue
```

.eslintrc.(js | json)

```json
{
  "extends": [
    "@yangss/eslint-config-basic",
    // or
    "@yangss/eslint-config-ts",
    // or
    "@yangss/eslint-config-vue"
  ]
}
```