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
        'no-console': ['error', { allow: ['error'] }]
    },
    ignores: [
        'node_modules/',
        'playwright.config.ts',
        '.husky/',
        'allure-results/',
        'allure-report/',
        'playwright-report/'
    ]
});
