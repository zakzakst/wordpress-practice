module.exports = {
  parser: {
    '.njk$': '@markuplint/nunjucks-parser',
  },
  extends: ['markuplint:recommended'],
  excludeFiles: ['**/_*.html'],
}
