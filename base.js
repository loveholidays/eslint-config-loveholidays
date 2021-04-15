module.exports = {
  rules: {
    // -- Generic rules
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'off',
    'newline-before-return': 'error',
    'no-console': ['warn'],
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  }
}