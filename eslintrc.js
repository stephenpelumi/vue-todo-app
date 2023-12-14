module.exports = {
    extends: [
      'plugin:vue/vue3-recommended', 
      'eslint:recommended', 
    ],
    rules: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    },
  };