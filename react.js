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
    'fp/no-class': 0,
    'fp/no-this': 0
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
