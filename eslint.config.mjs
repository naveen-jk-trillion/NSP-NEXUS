import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  // Load Next.js base config and import plugin
  ...compat.config({
    extends: ['next'],
    plugins: ['import', '@typescript-eslint', 'react', 'react-hooks'],
  }),
  {
    rules: {
      // React rules
      'react/no-unescaped-entities': 'warn',
      '@next/next/no-img-element': 'warn',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',

      // React hooks
      'react-hooks/exhaustive-deps': 'warn',

      // Import plugin rules
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
    },
  },
]

export default eslintConfig
