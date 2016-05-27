module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: 'eslint:recommended',
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ]
  },
  globals: {
    _require: true
  }
};