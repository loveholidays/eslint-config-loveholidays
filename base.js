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
    '@typescript-eslint/return-await': 'off',

    // -- No default exports
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',

    // -- Code formatting
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }],
    '@typescript-eslint/member-delimiter-style': 'error',
    'array-bracket-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { code: 100, ignoreComments: true, ignoreUrls: true, ignoreStrings: true, }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],
  },

  overrides: [
    {
      rules: {
        'max-len': 'off',
      },
      files: [
        'src/**/*.spec.ts',
        'src/**/*.spec.tsx',
      ],
    },
  ]
}