module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'prettier/standard',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:fp/recommended',
    'plugin:import/recommended',
    'plugin:lodash-fp/recommended',
    'plugin:lodash/recommended',
    'plugin:promise/recommended'
  ],
  plugins: [
    'standard',
    'sort-imports-es6-autofix',
    'jest',
    'prettier',
    'unicorn',
    'fp',
    'import',
    'lodash-fp',
    'lodash',
    'promise'
  ],
  env: {
    es6: true,
    jest: true,
    'jest/globals': true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'fp/no-nil': 0,
    'arrow-parens': 1,
    'sort-imports-es6-autofix/sort-imports-es6': [
      1,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'fp/no-mutation': [
      1,
      {
        commonjs: true,
        allowThis: true,
        exceptions: [
          { property: 'propTypes' },
          { property: 'defaultProps' },
          { property: 'contextTypes' },
          { property: 'childContextTypes' }
        ]
      }
    ]
  }
}
