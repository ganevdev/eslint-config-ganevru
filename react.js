'use strict'

module.exports = {
  extends: [
    require.resolve('./'),
    require.resolve('eslint-config-standard-react')
  ],
  plugins: ['jsx-a11y']
}
