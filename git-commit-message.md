chatgpt: [Git Commit Message    ](https://chatgpt.com/share/67567e9e-5af0-800f-896b-4a5d044ac907)
1. feat (Features) [feat: add wishlist functionality for logged-in users]
2. fix (Bug Fixes) [fix: resolve checkout button not working on mobile devices]
3. perf (Performance Improvements) [perf: optimize image loading for product pages]
4. refactor (Code Refactoring) [refactor: move cart calculations to a separate utility function]
5. style (Styling Changes) [style: format CSS for product card layout]
6. test (Adding or Modifying Tests) [test: add unit tests for the order confirmation page]
7. build (Build System Changes) [build: upgrade Node.js version to 18 in CI pipeline]
8. ops (Operational Changes) {Used for operational or infrastructure-related changes (e.g., DevOps, CI/CD scripts).} [ops: add automated backups for the database]
9. docs (Documentation) [docs: update API documentation for the user registration endpoint]
10. merge (Merges) [merge: feature/user-authentication into main]
11. chore (General Maintenance) {packages related or code changes that don't modify src or test files} [chore!: drop support for Node 6 | chore: update React to version 18.2.0 | chore: remove deprecated Webpack plugins]

Key Difference Between chore and Other Types
    - `chore`: Maintenance work not directly affecting features or bugs.
    - `feat / fix`: User-facing changes.
    - `build / ops`: Technical, build-related, or operational changes.




















```bash
convention:
  commitTypes:
  - feat
  - fix
  - perf
  - refactor
  - style
  - test
  - build
  - ops
  - docs
  - merge
  commitScopes: []
  releaseTagGlobPattern: v[0-9]*.[0-9]*.[0-9]*
changelog:
  commitTypes:
  - feat
  - fix
  - perf
  - merge
  includeInvalidCommits: true
  commitScopes: []
  commitIgnoreRegexPattern: "^WIP "
  headlines:
    feat: Features
    fix: Bug Fixes
    perf: Performance Improvements
    merge: Merges
    breakingChange: BREAKING CHANGES
  commitUrl: https://github.com/qoomon/git-conventional-commits/commit/%commit%
  commitRangeUrl: https://github.com/qoomon/git-conventional-commits/compare/%from%...%to%?diff=split
  issueRegexPattern: "#[0-9]+"
  issueUrl: https://github.com/qoomon/git-conventional-commits/issues/%issue%
```