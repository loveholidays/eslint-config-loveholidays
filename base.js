module.exports = {
  plugins: [
    'import'
  ],

  rules: {
    // -- Generic rules
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true
    }],
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
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      'SwitchCase': 1,
      'ignoredNodes': [
        'FunctionExpression > .params[decorators.length > 0]',
        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
        'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
      ],
    }],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true,
          after: true,
        },
      },
    }],
    '@typescript-eslint/member-delimiter-style': 'error',
    'array-bracket-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],
    '@typescript-eslint/brace-style': [
      "error",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    'curly': ['error', 'all'],
    'key-spacing': "error",

    // -- Typescript
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "String": {
            "message": "Use string instead",
            "fixWith": "string"
          },
          "Number": {
            "message": "Use number instead",
            "fixWith": "number"
          },
          "Boolean": {
            "message": "Use boolean instead",
            "fixWith": "boolean"
          },
        }
      }
    ]
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