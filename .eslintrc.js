module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~/*', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.tsx'],
      },
    },
  },
  rules: {
    'react/button-has-type': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './webpack/**/*.js',
        ],
      },
    ],
  },
};
