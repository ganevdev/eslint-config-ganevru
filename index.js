module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'prettier/standard',
    'plugin:lodash/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:fp/recommended',
    'plugin:lodash-fp/recommended'
  ],
  plugins: [
    'no-loops',
    'sort-imports-es6-autofix',
    'standard',
    'jest',
    'prettier',
    'lodash',
    'unicorn',
    'fp',
    'lodash-fp'
  ],
  env: {
    es6: true,
    jest: true,
    'jest/globals': true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'no-var': 'error',
    'no-loops/no-loops': 2,
    'sort-imports-es6-autofix/sort-imports-es6': [
      1,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'fp/no-mutation': [
      'error',
      {
        commonjs: true,
        allowThis: true
      }
    ]
  }
}
