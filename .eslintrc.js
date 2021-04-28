module.exports = {
  extends: ['./react'],
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
