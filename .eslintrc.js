module.exports = {
  env: {
    browser: true,
    //es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': ["error", "windows"],
    'no-tabs': ["error", { allowIndentationTabs: true }],
    'indent': ["error", "tab"],
    'no-console': "off",
    'eol-last': ["error", "never"],    
  },  
};
