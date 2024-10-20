import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginSecurity from 'eslint-plugin-security';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: [
        'error',
        4,
        {
          SwitchCase: 1,
        },
      ],
      'no-use-before-define': ['error', { variables: false }],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'no-else-return': 'error',
      'no-multi-spaces': 'error',
      'no-whitespace-before-property': 'error',
      // camelcase: 'error',
      'no-console': 'error',
      'comma-dangle': 'error',
      'no-shadow': 'error',
      'object-shorthand': ['error', 'properties'],
      'no-unused-vars': [
        'warn',
        { vars: 'all', args: 'none', ignoreRestSiblings: true },
      ],
      'func-names': 'off',
      'no-underscore-dangle': 'off',
      'consistent-return': 'off',
      'jest/expect-expect': 'off',
      'security/detect-object-injection': 'off',

      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  {
    ignores: [
      '!node_modules/', // unignore `node_modules/` directory
      'node_modules/*', // ignore its content
    ],
  },
  {
    env: {
      'jest/globals': true,
    },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  pluginSecurity.configs.recommended,
];
