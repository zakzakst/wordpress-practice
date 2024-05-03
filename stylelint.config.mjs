export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'color-hex-length': 'short',
    'no-empty-source': null,
    'scss/at-import-partial-extension': null,
    'scss/load-no-partial-leading-underscore': null,
  },
  ignoreFiles: ['src/styles/**/_*scss', 'src/styles/global/mixins.scss'],
}
