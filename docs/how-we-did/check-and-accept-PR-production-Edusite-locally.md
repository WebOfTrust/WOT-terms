---
sidebar: HowWeDidSidebar
---
# Check and accept PR production Edusite locally

```jsx
git stash 
git status
git fetch upstream main
git log
```

- `fix-mdfiles` is the name of the PR.
- `testSC1` is the acronym of the developer that I use in this example.

## Pull the proposed changes in

```jsx
git checkout -b testSC1  
git fetch upstream
git merge upstream/fix-mdfiles
```

## Test
Now the changes that the PR proposes have been locally applied to the new branch

```jsx
npm run build
npm run serve
```
Now you can locally test the site at the address that look something like `http://localhost:3000/WOT-terms/`. The result of `npm run serve` will tell you the exact URL.

## After succesfull test  merge result
```jsx
git checkout main
git merge testSC1
```

## After merge push to production environment
```jsx
git push -u upstream main
```
## Result: PR remotely accepted
 ![](https://hackmd.io/_uploads/SkPSW_L6i.png)

 ## Clean up
 ```jsx
git stash pop
git branch -D testSC1
```