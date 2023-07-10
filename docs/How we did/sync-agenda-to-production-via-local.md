---
sidebar: HowWeDidSidebar
---
# Sync agenda to production via local

## Problem

We edit HackMD.io files during meetings. There is a `Versions and github sync` option in HackMD.io.

![](https://hackmd.io/_uploads/HkkAyTGps.png)

If this is not configured to direct access the production site, we need to sync this explicitly.

## Solution

Suppose `origin` is the github site where to HackMD.io file has been push to.

Then locally in git repo and present in the `main` branch (!) say:

```jsx
git fetch origin
git checkout origin/main -- agenda.md
```

### The command reports back

Changes to be committed: (use "git restore --staged \<file\>..." to unstage)\
 modified: agenda.md

git commit -m "agenda.md updated"

Be sure that you've staged what you wanted to stage

```jsx
git commit -m "agenda.md updated"
git push upstream main
```

`Upstream` is in this case the production server.
