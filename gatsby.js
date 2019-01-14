module.exports = {
  extends: [require.resolve('./'), require.resolve('./react.js')],
  rules: {
    'react/prefer-stateless-function': 'warn',
    'react/no-danger': 'warn',
    'prefer-destructuring': 'warn',
    strict: 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-key': 'warn',
    'react/no-unused-prop-types': 'off',
    'react/no-unescaped-entities': 'warn'
  },
  settings: {
    'import/core-modules': []
  },
  globals: {
    graphql: true
  }
}
