module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    // Resolve for eslint rules
    'plugin:@typescript-eslint/recommended',
    // React 17^ doesn't require this
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    // Equal to
    // {
    //   "extends": ["prettier"],
    //   "plugins": ["prettier"],
    //   "rules": {
    //     "prettier/prettier": "error",
    //     "arrow-body-style": "off",
    //     "prefer-arrow-callback": "off"
    //   }
    // }
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    //? seems unnecessary
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },
  //? is it needed for clean webpack?
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //     },
  //     typescript: {
  //       alwaysTryTypes: true,
  //     },
  //   },
  // },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],

  rules: {
    //? Probe for needed configs during development
    // General
    // camelcase: 'error',
    // 'spaced-comment': 'error',
    // quotes: ['error', 'single'],
    // 'object-curly-newline': 'off',
    // 'prefer-template': 'off',
    // 'no-restricted-syntax': 'off',
    // 'no-duplicate-imports': 'error',
    // 'import/no-unresolved': 'error',
    'no-continue': 'warn',
    'no-plusplus': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'warn',

    // Breaks custom wrappers for UIKits (<CustomBtn ...props />)
    // 'prefer-destructuring': 'warn',
    // Works bad with VS Code auto wrapping
    // 'max-len': 'off',
    // Disable errors in React components
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': ['error'],
    // use ts instead prop-types
    // 'react/require-default-props': 'off',
    // 'react/no-unused-prop-types': 'warn',

    // Consistent rename friendly exports
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // Breaks some features on Next.js & MUI
    // Sometimes works bad with prettier printWidth
    // 'implicit-arrow-linebreak': 'off',
    // 'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // 'import/extensions': [
    // 'error',
    // 'ignorePackages',
    // {
    // js: 'never',
    // jsx: 'never',
    // ts: 'never',
    // tsx: 'never',
    // },
    // ],
  },
};
