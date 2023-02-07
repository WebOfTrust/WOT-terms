# Get Markdown files from ToIP wiki glossary terms

In a Trust over IP glossary you can easily change its underlying Markdown.

> Example\
> Go to the [wiki glossary](https://github.com/trustoverip/acdc/wiki) of ACDC\
> Pick any term, e.g. [Agency](https://github.com/trustoverip/acdc/wiki/agency)\
> Use the `Edit` button in the upper-right corner\
> Change / amend something\
> `Save`

## Be careful

Changes are immediate. A change like the one the example above, will be promoted to the production [glossary](https://trustoverip.github.io/acdc/glossary) because of installed Github Actions and triggers that go off there.

## But I want the actual .MD-file in my hands!

### Wiki is a special kind of repo in Github

The wiki section of Repo has an own git remote link.

### Steps to download all the .md files

Copy the link to the wiki repo of certain Github repo. Use the functionality at the bottom of the glossary:

<img src="https://hackmd.io/_uploads/SJspA9MRq.png" width="400" alt="clone the wiki of a repo" />

Go to a folder on your local computer and type

`Clone <paste the URL here>`

> Example:\
> Clone https://github.com/trustoverip/acdc.wiki.git

Go to your newly created local repository and all the .MD files will be there

> Example:\
> <img src="https://hackmd.io/_uploads/H1SO-jMAq.png" width="600" alt="list of term .MD files in the wiki repo" />

## How to retrieve updates of the actual .MD-file to my local machine?

Suppose you're in the root of the `acdc.wiki`

Command

```jsx
git remote -v
```

tells you from which remote location you'd like to pull the changes from

Then pull the `.md`-files in:

```jsx
git pull origin main
```

Then go to the destination directory in the Docusaurus file tree and copy the files over:

```jsx
cp <path to>/acdc.wiki/* .
```
