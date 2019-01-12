'use strict'

module.exports = {
  extends: [
    require.resolve('eslint-config-standard-react'),
    require.resolve('./index.js')
  ],
  plugins: ['jsx-a11y']
}
