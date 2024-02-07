module.exports = {
    // Specify the environments where your code will run
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    
    // Extend or override rules from recommended configurations
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
    ],
  
    // Define rules for your project
    rules: {
      // Example rule: enforce 2 spaces for indentation
      'indent': ['error', 2],
  
      // Example rule: require semicolons at the end of statements
      'semi': ['error', 'always'],
  
      // Disable certain rules if needed
      'no-console': 'off',
    },
  
    // Specify parser options
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
  
    // Define additional plugins
    plugins: [
      'react',
      'jsx-a11y',
      // Add more plugins if needed
      // ...
    ],
  
    // Configure settings for the React plugin
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  };
  