module.exports = {
  "branches": ["main", "next"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    ["@semantic-release/release-notes-generator", {
      "preset": "angular",
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      },
      "writerOpts": {
        "commitsSort": ["subject", "scope"]
      }
    }],
    "@semantic-release/changelog",
    "@semantic-release/github",
    ["@semantic-release/npm", {
      "npmPublish": false
    }],
    {
      "path": "@semantic-release/git",
      "assets": ["package.json", "yarn.lock", "CHANGELOG.md"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
  ],
};
