'use strict'

module.exports = {
  extends: [
    require.resolve('standard-jsx'),
    require.resolve('eslint-config-standard-react'),
    require.resolve('./index.js')
  ],
  plugins: ['jsx-a11y']
}
