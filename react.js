module.exports = {
  extends: [
    require.resolve('./'),
    require.resolve('eslint-config-standard-react')
  ],
  env: {
    browser: true,
    node: true
  },
  plugins: ['jsx-a11y'],
  rules: {
    'fp/no-class': 1,
    'fp/no-this': 1,
    'react/prop-types': 'warn',
    'react/no-danger': '0'
  },
  overrides: [
    {
      files: ['*/components/**/*.js'],
      rules: {
        'unicorn/filename-case': ['error', { case: 'pascalCase' }]
      }
    }
  ]
}
