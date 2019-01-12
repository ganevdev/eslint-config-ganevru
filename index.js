'use strict'

module.exports = {
  parser: 'babel-eslint',
  extends: ["standard", "prettier/standard"],
  plugins: ["sort-imports-es6-autofix", "standard", 'jest', 'prettier'],
  env: {
    es6: true,
    jest: true,
    'jest/globals': true // https://www.npmjs.com/package/eslint-plugin-jest#usage
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true
    }
  },
  rules: {
    "sort-imports-es6-autofix/sort-imports-es6": [
      2,
      {
        "ignoreCase": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
      }
    ]
  }
}