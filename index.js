module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:fp/recommended',
    'plugin:lodash-fp/recommended',
    'plugin:lodash/canonical',
    'plugin:promise/recommended'],
  plugins: [
    'sort-imports-es6-autofix',
    'jest',
    'unicorn',
    'fp',
    'lodash-fp',
    'lodash',
    'promise',
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'fp/no-nil': 0,
    'lodash-fp/no-extraneous-partials': 1,
    'lodash-fp/consistent-compose': 1,
    'lodash-fp/preferred-alias': 1,
    'lodash/prefer-lodash-method': 0,
    'sort-imports-es6-autofix/sort-imports-es6': [
      1,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
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
          { property: 'childContextTypes' },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.js', 'test/'],
      rules: {
        'fp/no-arguments': 0,
        'fp/no-class': 0,
        'fp/no-delete': 0,
        'fp/no-events': 0,
        'fp/no-get-set': 0,
        'fp/no-let': 0,
        'fp/no-loops': 0,
        'fp/no-mutating-assign': 0,
        'fp/no-mutating-methods': 0,
        'fp/no-mutation': 0,
        'fp/no-nil': 0,
        'fp/no-proxy': 0,
        'fp/no-rest-parameters': 0,
        'fp/no-this': 0,
        'fp/no-throw': 0,
        'fp/no-unused-expression': 0,
        'fp/no-valueof-field': 0,
      },
    },
  ],
};
