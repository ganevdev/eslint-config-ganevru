module.exports = {
  extends: [require.resolve('./'), require.resolve('./react.js')],
  rules: {
    'react/prefer-stateless-function': 'warn',
    'prefer-destructuring': 'warn',
    strict: 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-key': 'warn',
    'react/no-unused-prop-types': 'off',
    'react/no-unescaped-entities': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  settings: {
    'import/core-modules': ['gatsby'],
  },
  globals: {
    graphql: true,
  },
};
