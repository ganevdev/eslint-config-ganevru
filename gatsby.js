module.exports = {
  extends: [require.resolve('./'), require.resolve('./react.js')],
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'off',
    'prefer-destructuring': 'off',
    strict: 'off',
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
