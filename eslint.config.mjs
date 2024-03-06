import eslint from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';


export default tseslint.config({
  files: ['**/*.test.ts', '**/*.spec.ts'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
        playwright.configs['flat/recommended']
  ],
  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
});