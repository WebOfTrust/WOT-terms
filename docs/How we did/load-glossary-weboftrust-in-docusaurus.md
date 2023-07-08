# Load ToIP glossary in weboftrust github page

## Input

1. The ToIP ACDC glossary locally (all the .md files pulled from [repo wiki](https://github.com/trustoverip/acdc/wiki))
2. Terms WOT manage (xls or csv) table
3. Excel or open source alternative
5. Version control (git, Github or Gitlab)

## Sync with origin ToIP glossary

We use local repo's or PR to sync Weboftrust `WOT-terms.wiki` and TrustoverIP `acdc.wiki`. Note that the wiki pages of a github repo are manifest in a seperate repo. 
### Why would we sync with ToIP glossary
The main reason is interoperability. We want to join in the effort to create cross-referencing concepts, terms and glossary resources at WebofTrust.
### Why sync with ToIP glossary and not something else.
From our WebofTrust view ToIP is our umbrella organisation that has similar objectives and principles. ToIP has good working relations with the European umbrella organisation eSSIF-lab too, who in 2023 can be considered as the global front runners of getting the terminology sorted out for Self-Sovereign Identity.

** How our own repo [WebofTrust](https://github.com/WebOfTrust) came to be **
In 2022 we reasoned:
- we would to have to build similar Github Actions tooling like [ToIP](https://wiki.trustoverip.org/display/HOME/Terms+Wikis) already has.
- we can't join the synchronization effort already taking place with [eSSIF-lab](https://essif-lab.github.io/framework)
- we would have to maintain these auxiliary which keeps us off other important work

In 2023 we experienced:
-  lagtime by ToIP and Linux Foundation internal github governance rules
- the knowledge and skills needed to "roll our own" had been acquired

Mid 2023 we decided:
- to start [Weboftrust wiki](https://github.com/WebOfTrust/WOT-terms/wiki)
- to sync at will with [ToIP wiki](https://github.com/trustoverip/acdc/wiki)

## Software environment

For Github pages Docusaurus runs locally and remotely (Github Actions). **Be sure to**:

1. Have the same version of Docusaurus installed locally as Github currently uses remotely
2. study [this guide](https://docusaurus.io/docs/advanced/routing#file-paths-and-url-paths) to avoid frustration with paths.

## Steps

### Pull the WebofTrust wiki

Because the glossary is maintained in Github wiki using Github userinterface here: [Weboftrust wiki](https://github.com/WebOfTrust/WOT-terms/wiki), the most recent version is a remote repo. We have to pull this wiki-repo (be sure to have the **wiki** repo not the "normal" WOT-terms repo!) to local to be able to create our own glossary and Docusaurus static site from this. The static site is then run as a github project page (branch _gh-pages_).

#### Initial clone of the WOT-terms.wiki repo to local

```
git clone https://github.com/weboftrust/WOT-terms.wiki.git
cd WOT-terms.wiki
git remote get-url origin
ls
```

<img src="./images/wiki-repo-ls.png" width="400" alt="wiki-repo-ls-result" />

#### Refresh the WOT-terms.wiki repo to local

```
git pull origin master
```

### Copy the WebofTrust glossary resources into the Docusaurus file structure

To able to generate a tailor made explanation site we use two inputs (see full list of inputs [here](#input)):

1. The WebofTrust glossary locally (all the .md files pulled from [Weboftrust wiki](https://github.com/WebOfTrust/WOT-terms/wiki)
2. Terms WOT manage (xls or csv) table, currently maintained in Google Sheets (mid 2023)


Step into the Docusaurus dir structure to `WOT-terms/docs/glossary` 
and execute the command `cp ../../../WOT-terms.wiki/*  .` to finish what we'd like to achieve: Copy the glossary resources into the Docusaurus file structure.

### Script YYYYYYY to put WOT-terms sheet into JSON structure

| TBW by creator Kor |
- it reads the input file (2.) per line.
- each row describes a term and its resource file
- we create a proper file name
- we try to match the terms in the ToIP glossary resources and bind them

Docusaurus takes care of
- writing `.md` files with Front matter code and includes

### Constraint on WOT-terms sheet
Columns
- key
- (WWWWW-key) multiple foreign keys
- term
- text
- level
- link
- (Cat-CCCC) multiple categories

**key** needs to be unique and once established it should not change.
**Term**s are words used in the resource, you can provide a **link** to more explanation, mainly to the [ACDC glossary](https://github.com/trustoverip/acdc/wiki/). Then the **level** of understanding at which this term might need explanation, and finally a _brief explanation_ in field **text** of the term in the first column.

#### Level

Since KERI and ACDC education start off at the level of SSI-expert, a _beginner_ is not a layman, but somebody with a good common understanding of IT and digital identity.

- 1=general digital identity expert
- 2=advanced self-sovereign identity expert
- 3=autonomic identifier & KERI experts


#### Github Repo

Push the locally updated files to the remote WebofTrust repo:

```
git status
git add .
git commit -m "update the WebofTrust glossary"
git push <remote> gh-pages
```

#### Static pages generator

The push will activate Github Actions and the resources will be input to a static site generator.

## Result

This is the Github pages result from the step by step above

https://weboftrust.github.io/WOT-terms/glossary.html
