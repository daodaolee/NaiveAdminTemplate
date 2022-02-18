module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
      referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved',
      ],
      issuePrefixes: ['#'],
      noteKeywords: ['BREAKING CHANGE'],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null,
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      ['fix', 'feat', 'test', 'chore', 'docs', 'refactor', 'style']
    ],
    'type-case': [2, 'always', 'lower-case'], //允许type小写校验
    'type-empty': [2, 'never'], //不允许type为空
    'scope-empty': [0], // 允许scope为空
    'subject-full-stop': [0, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'header-max-length': [0, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'subject-empty': [2, 'never'],
  }
}