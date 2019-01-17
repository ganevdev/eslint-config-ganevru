module.exports = {
  extends: [require.resolve('./')],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['jsx-a11y'],
  rules: {
    'fp/no-class': 1,
    'fp/no-this': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'warn',
    'react/no-danger': '0',
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
  },
  overrides: [
    {
      files: ['*/components/**/*.js'],
      rules: {
        'unicorn/filename-case': ['error', { case: 'pascalCase' }],
      },
    },
    {
      files: ['*.test.js'],
      rules: {
        'unicorn/filename-case': 0,
      },
    },
  ],
};
