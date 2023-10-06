module.exports = {
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  ignorePatterns: [
    '**/build/**',
    '**/dist/**',
    '**/coverage/**',
    '**/stories.tsx',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
