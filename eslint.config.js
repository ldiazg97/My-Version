// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettier = require('eslint-config-prettier');

/**
 * ESLint configuration for Angular 20 + Prettier (CommonJS)
 * Compatible with ESLint 9+ and typescript-eslint 8+
 */
module.exports = tseslint.defineConfig([
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettier, // 🔧 Desactiva reglas que choquen con Prettier
    ],
    plugins: ['prettier'],
    processor: angular.processInlineTemplates,
    rules: {
      // 💅 Reglas de Prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          printWidth: 100,
          trailingComma: 'es5',
          tabWidth: 2,
          endOfLine: 'auto',
        },
      ],

      // 🅰️ Reglas Angular recomendadas
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
]);
