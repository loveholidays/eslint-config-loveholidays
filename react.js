module.exports = {
  extends: [
    'eslint-config-airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    './base.js',
  ],
  plugins: [
    '@studysync/persnickety',
  ],
  settings: {
    react: {
      version: '16.2'
    }
  },
  rules: {
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'always' }],
    'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-key': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unused-prop-types': 'off', // Too many false positives
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    '@studysync/persnickety/jsx-child-location': 'error',
  }
}
