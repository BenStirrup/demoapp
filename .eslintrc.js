module.exports = {
  extends: [
    '@react-native-community',
    'universe-error/native',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['node_modules'],
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // ### HOOKS ###
    // See https://github.com/facebook/react/issues/14920
    // https://dmitripavlutin.com/react-hooks-stale-closures/
    // This is a good safeguard against stale closures and many performance issues
    'react-hooks/exhaustive-deps': 'error',
    // This is essential. Without this misplaced hooks would go straight to production
    // since there is no way to detect this during testing; neither Enzyme nor KC Dodd's
    // react-testing-library are able to trigger those.
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 'off', // with typescript, we don't really need proptypes

    // ### GENERAL ###
    strict: ['error', 'global'],
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    semi: 'off', // no semicolons, as in prettier
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', 'typescript-sort-keys'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:import/typescript',
      ],
      rules: {
        'typescript-sort-keys/interface': 'error', // Alphabetical sorting
        'typescript-sort-keys/string-enum': 'error', // Alphabetical sorting
        '@typescript-eslint/no-non-null-assertion': 'error', // Disable obj!.propert statements.
        '@typescript-eslint/explicit-function-return-type': 'off', // Functions returned typed is optional
        '@typescript-eslint/semi': 'off', // let's insist on no semicolons.
        '@typescript-eslint/indent': 'off', // turn off typescript indentation and let prettier do its job
        // no semicolons or commas in class/interface definitions
        '@typescript-eslint/member-delimiter-style': [
          'error',
          { multiline: { delimiter: 'none' } },
        ],
        '@typescript-eslint/no-use-before-define': 'off', // Clean Code : caller before callee
        '@typescript-eslint/no-var-requires': 'off', // ES6 imports are more readable
        // not ideal, but progamatically necessary sometimes
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '_', varsIgnorePattern: '_' },
        ],
        // we want interface names to start with "I"
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: { regex: '^I[A-Z]', match: true },
          },
        ],
      },
    },
  ],
}
