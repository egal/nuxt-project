module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/attributes-order': 'off',
    'vue/order-in-components': 'off',
    'vue/camelcase': 'off',
    'vue/import/order': 'off',
    'ordered-imports': 'off',
  },
}
