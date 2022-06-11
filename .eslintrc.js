module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  parser: '@typescript-eslint/parser', // typescript-estree를 활용한 타입스크립트용 ESLint 파서
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true, // jsx 사용여부
    useJSXTextNode: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ], // 외부 라이브러리 사용가능 ex)airbnb base
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
  settings: { react: { version: 'detect' } },

  rules: {
    // 규칙지정
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-implicit-coercion': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-extra-boolean-cast': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
