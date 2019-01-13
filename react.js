'use strict'

module.exports = {
  extends: [
    require.resolve('./'),
    require.resolve('eslint-config-standard-react')
  ],
  env: {
    browser: true
  },
  plugins: ['jsx-a11y']
}
