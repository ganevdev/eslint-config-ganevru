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
    'fp/no-mutation': [
      2,
      {
        exceptions: [
          { property: 'propTypes' },
          { property: 'defaultProps' },
          { property: 'contextTypes' },
          { property: 'childContextTypes' }
        ]
      }
    ],
    'react/prop-types': 'warn'
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
