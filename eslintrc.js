module.exports = {
    extends: [
      'plugin:vue/vue3-recommended', // Use recommended Vue 3 rules
      'eslint:recommended', // Use recommended ESLint rules
    ],
    rules: {
      // Add or modify rules as needed
      'vue/component-name-in-template-casing': ['error', 'PascalCase'], // Example rule
    },
  };