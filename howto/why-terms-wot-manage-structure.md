# The Terms WOT manage structure explained

What we have to generate our static content site:
1. wiki resources, terms in separate `.md` files in a Jekyll directory structure
2. a sheet called _Terms WOT manage_ (`.xls`) a central location with strict editing rights.
3. a comma separated file _Terms WOT manage_ (`.csv`) in the root directory of the `gh-pages` branch of `WOT-terms` repo.

## Why a sheet and why is it called Terms WOT manage?
We need a place where terms are defined and declared. A sheet of terms is very practical:
- lots of software available to amend and manage sheets
- many people have the skills to manage sheets with this software
- a sheet can enforce a notion of a unique value ('Key') in a column, a meaningless long-living identifier
- sheets can be flexibly expanded so that the content gets richer: tags, categories, dictionaries, etc
- sheet can be exported to comma separated files (CSVs)
- CSVs can be imported into markdown, front matter, yaml files, etc.

The reason it's called 'Terms WOT manage':

1. it's the management tool our unique identifier
2. it covers all the Concepts, terms, categories, dictionaries, tags in the WebofTrust (WOT) field.
3. The smallest unit of declaration is a 'Term'

## Conventions

Columns are our fields. Field names are in the first row. A few columns maintain database structure:
- Key: a unique incremental meaningless numeric identifier. The uniqueness is not enforced by code, but by userinterface: conditional formatting colours the cells with the same value red.
- TTTTT_FKey: this columns contains foreigns key into another table or sheet. TTTTT can be a file that has terms mentioned in a video ("PhilVid") or another Glossary ("eSSIF-lab") that are related to the matching term on a specific row in our sheet.
- Cat_CCCCC: this columns contains Categories. We consider a term from a certain category went it's mentioned regularly in the content of certain repository (e.g. 'KERI' or 'OOBI') of the WebofTrust Github site.

One term per row. We give **an extra row to the abbreviation** of a term. The reason fot this is a ToIP convention:
- the term is lowercase and has '-' between the words of the term, e.g. 'key-event-log'
- the abbreviation is uppercase and can have a hyphen, e.g. 'VC-TEL'
- the term always has a corresponding .md file in the ToIP Glossary, its .md file has a '## Definition' header
- the abbreviation (if relevant, which is a subjective guess by the team) also has a corresponding .md file in the ToIP Glossary, its .md file ONLY has a **'## See' header**. The 'See' contains a link to the matching term.

KEL.md:
```
## See 
[Key event log](key-event-log)
```

key-event-log.md:
```
## Definition
A verifiable data structure that is a backward and forward chained ...
```


## Counting tool

The counting tool is offered by Blockchainbird.org and has been develop in 2019 as a means to assess the level of real expertise in blockchain publications. It crawled through a pdf, based on a dictionaries of terms and very simple business rules. 

> E.g. If a pdf mentions 'bitcoin' in conjunction with words like 'scam', 'tax evasion', etc. we considered the writers as not being informed too well about the true nature of the bitcoin / blockchain innovation.

### Why would we need a terms counting tool?
The actual presence of a certain glossary term in documents and webpages is a strong indication whether the term at hand is relevant in a certain section. Based on this relevance expressed in an objective count we can automatically added certain tags and categories to the term.

> The term 'out-of-band' has lots of 'hits' in the OOBI repo, but much less so in the KERI repo.

Based on this relevance expressed in an objective count we can automatically added certain tags and categories to the term.

> The term 'out-of-band' wil have an impressive count in the column `Cat_OOBI`. We might offer a high level menu item for the term in the sidebar of the WebofTrust Glossary 'OOBI'.

The other reason is that a manual check for terms in documents is a very strenuous and time-consuming effort. And the result is always outdated per definition: once your change the source, the glossary needs to be updated too.

**In short:\
We count, so we're lazily up to date.**

### Redesign

Recently the tool has been engineered towards the WOT-terms challenge:
- it crawls any Github page and also pdfs (if necessary)
- the tool uses the 'Terms WOT manage' sheet to match terms
- the scores are based on a combination of parameters:
   1. level of (understanding need for) the term
   2. number of appearances, the actual count

### Results

The count of terms are in the Cat_CCCCC columns after a (re)run of the counting tool

## Why do we need this?

- Key: We need a Key field to be able to have a unique long-living identifier for a term in the WebofTrust domain.
- TTTTT_Fkey / TTTTT_start: We use this Foreign Key to link to other educational resources of the this term, like Youtube footage*, webpages and other glossaries.
- level: We assess a [level of understanding](../README.md#levels-of-understanding) to meaningful study a term. Regardless this subjective and personal judgement, the filtering options are numerous:

 1. offer everything (a glossary)
 2. offer a learning trajectory
 3. filter in the opposite direction: exclude terms for experts
 4. etc.

- Cat_CCCCC: we are now able to store the [counts](#counting-tool) and then offer the term in various relevant contect at the front end of the site.

'* Youtube footage*: plus the start time of where the term is mentioned first or most extensively.

## Why not a term content file per level of understanding?

Per term various levels of explanation (plus related further readings) are offered within one source file `.md`. The reason for this is that every individual learner is different. Within the source file of a term we can label "stars" to both questions and answers, compliant to what's explained in this section of the README.md file : [Levels of Understanding](../README.md#levels-of-understanding)

By offering "everything we have" about a certain term in one file a reader is able to identify herself / himself with a certain level in a specific context and "filter the stars" in an eye blink.

## What's the whole point of managing WOT term in a sheet?

Three major applications:

Being the home of our terms maintenance, we [load ToIP glossary](./load-toip-glossary-in-weboftrust-github-page.md) and generate our Jekyll [static content site](https://weboftrust.github.io/WOT-terms/) on Github. This whole process is steered with the content in the Terms WOT manage sheet.

Any resource that mentions WebofTrust terms can be much easier enriched with the use of 
E.g. we can create a [terms link table for any footage](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/howto/create-terms-link-table.md) from the sheet Terms WOT manage sheet.

Integration and synchronisation with other glossaries and destination information sources is possible by maintenance of Key and Foreign Keys in Terms WOT manage sheet.

This is a non-exhaustive list of application options.