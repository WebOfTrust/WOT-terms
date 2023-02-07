# Pull changes from toip to terms

## Preposition

Docusaurus build (`npm run build`) needs to pass thruogh valid markdown.

## Problem

We don't control the source of the glossary [here](https://github.com/trustoverip/acdc/wiki).

If `npm run build` doesn't pass without errors, we change the source and then run this on the commandline:

```jsx
cd ~/apps/acdc.wiki
git pull
cd ../WOT-terms/docs/terms/glossary
cp ~/apps/acdc.wiki/* .
git status
Git add .
Git commit --amend
```
