---

---
# Load weboftrust glossary in weboftrust github page

With regard to the glossary our weboftrust github page of the WOT-terms repo serves two clearly distinctive purposes:
1.  show the world we conform to the ToIP and eSSIF-lab standards of generating glossaries 
2. create our own version of the glossary where we add meta data, levels, catogeries and change the layout and UI to fit the Docusaurus KERISSE image.

## Input

1. The WebofTrust glossary (all the .md files pulled from [repo wiki](https://github.com/weboftrust/WOT-terms/wiki))
2. Terms WOT manage [Google Sheet](https://docs.google.com/spreadsheets/d/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/edit#gid=209150977)
5. Version control (git & Github)

<div class="alert alert-info" role="alert">
## Strongly recommended

Be sure to leave the following files in tact when overwriting glossary items in Docusaurus dir `nn-glossary` (`nn`  will be any sequence number before "glossary to instruct the order") from the source WOT-terms wiki:
- **\_category\_.json** 
- **intro.md**

These are vital for Docusaurus to offer links from various parts of the documentation straight to the glossary.

</div>

## In Sync with original ToIP ACDC glossary?
Yes, the WebofTrust wiki glossary is the new home of our glossary. But we can sync with ToIP [acdc wiki](https://github.com/trustoverip/acdc/wiki) anytime. For example by offering PRs to the ToIP version or vice versa.

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
- to start using [Weboftrust wiki](https://github.com/WebOfTrust/WOT-terms/wiki)
- to sync at will with [ToIP wiki](https://github.com/trustoverip/acdc/wiki)

## Software environment

For Github pages Docusaurus runs locally and remotely (Github Actions). **Be sure to**:

1. Have the same version of Docusaurus installed locally as Github currently uses remotely
2. study [this guide](https://docusaurus.io/docs/advanced/routing#file-paths-and-url-paths) to avoid frustration with paths.

## Steps

Because the glossary is maintained in Github wiki using Github userinterface here: [Weboftrust wiki](https://github.com/WebOfTrust/WOT-terms/wiki), the most recent version is a remote repo. We have to pull this wiki-repo (be sure to have the **wiki** repo not the "normal" WOT-terms repo!) to local to be able to create our own glossary and Docusaurus static site from this. The static site is then run as a github project page (branch _gh-pages_).

This is performed by this section in the Github Actions script [Deploy to GitHub Pages](WOT-terms/.github/workflows
/deploy.yml):

```
      ##############################
      # Clones the wiki
      ##############################

      - name: Checkout wiki
        run: |
          git clone https://github.com/WebOfTrust/WOT-terms.wiki.git wiki

      # Copies the wiki contents to the /docs/04_glossary/ directory
      - name: Copy Wiki To Docusaurus Glossary directory
        run: |
          mkdir -p docs/04_glossary  # Create the directory if it doesn't exist
          
          # Files that are already in the /docs/04_glossary/ directory will not be overwritten
          rsync -a wiki/ docs/04_glossary/  # Synchronize wiki contents to /docs/04_glossary/
          
          # The /wiki directory is not needed anymore
          rm -rf wiki/  # Remove the /wiki directory
      ##############################
```

## Legacy Steps
### Legacy Pull the WebofTrust wiki by hand

Because the glossary is maintained in Github wiki using Github userinterface here: [Weboftrust wiki](https://github.com/WebOfTrust/WOT-terms/wiki), the most recent version is a remote repo. We used to pull this wiki-repo (and had to be sure to have the **wiki** repo not the "normal" WOT-terms repo!) to local to be able to create our own glossary and Docusaurus static site from this. All done by hand. 

#### Legacy: Initial clone of the WOT-terms.wiki repo to local

```
git clone https://github.com/weboftrust/WOT-terms.wiki.git
cd WOT-terms.wiki
git remote get-url origin
ls
```

<img src={require('/static/img/wiki-repo-ls.png').default} alt="wiki-repo-ls-result" />

#### Legacy: Refresh the WOT-terms.wiki repo to local

```
git pull origin master
```

### Legacy: Copy the WebofTrust glossary resources into the Docusaurus file structure

To able to generate a tailor made explanation site we use two inputs (see full list of inputs [here](#input)):

1. The WebofTrust glossary locally (all the .md files pulled from [Weboftrust wiki](https://github.com/WebOfTrust/WOT-terms/wiki)
2. Terms WOT manage (xls or csv) table, currently maintained in Google Sheets (mid 2023)


Step into the Docusaurus dir structure to `WOT-terms/docs/glossary` 
and execute the command `cp ../../../WOT-terms.wiki/*  .` to finish what we'd like to achieve: Copy the glossary resources into the Docusaurus file structure.

### Github Action Script deploy.yml to put WOT-terms sheet into JSON structure
```
##############################
      # Google sheet: WOT-terms, tab: Terms-WOT-manage
      ##############################

      # Fetches data from WOT-terms (Google sheet) and generates an overview file that takes all the terms and their definitions and puts them into a single file. 
      - name: Import Google Sheet “WOT-terms”, tab “Terms-WOT-manage” data into markdown file
        run: node fetchExternalContent/fetchTermsWOTmanage/fetchTermsWOTmanage.js
      ##############################
```
Inner working:
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

Explanation
- **key** needs to be unique and once established it should not change.
- **Term**s are words used in the resource, 
- you can provide a **link** to more explanation, mainly to the [WOT glossary](https://github.com/weboftrust/WOT-terms/wiki/). 
- Then the **level** of understanding at which this term might need explanation, and finally 
- a _brief explanation_ in field **text** of the term in the first column.

#### Level

> As of mid 2023 temporarily disabled

Since KERI Suite education starts off at the level of SSI-expert, a _beginner_ is not a layman, but somebody with a good common understanding of IT and digital identity.

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

This is the Github pages result from the step by step above:

[glossary](../category/glossary)
