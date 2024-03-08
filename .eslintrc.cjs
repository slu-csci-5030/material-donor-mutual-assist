module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        jest: true,
        node: true
      },
      files: [
        'tests/**/*',
        'babel.config.{js}',
        '.eslintrc.{js}'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  parser: '@babel/eslint-parser'
}