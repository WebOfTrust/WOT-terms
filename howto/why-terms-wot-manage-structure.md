# The Terms WOT manage structure explained

What we have to generate our static content site on the Github project page of this [WOT-terms page](https://weboftrust.github.io/WOT-terms/) repo:
1. wiki resources, terms in separate `.md` files in a Jekyll directory structure
2. a sheet called _Terms WOT manage_ (`.xls`) a central location with strict editing rights.
3. a comma separated file _Terms WOT manage_ (`.csv`) in the root directory of the `gh-pages` branch of `WOT-terms` repo.

<img src="./images/Terms-wot-manage-screen-example.png" alt="Terms-wot-manage-screen-example" width="800">

## Why a sheet and why is it called Terms WOT manage?
We need a place where terms are defined and declared. A sheet of terms is very practical:
- lots of software available to amend and manage sheets
- many people have the skills to manage sheets with this type of software (Excel, Google sheets, Numbers, etc.)
- a sheet can enforce a notion of a unique value ('Key') in a column, a meaningless long-living identifier
- sheets can be flexibly expanded so that the content gets richer: tags, categories, dictionaries, etc
- sheets can be exported to comma separated files (CSVs)
- resulting CSVs can be imported into markdown, front matter, yaml files, etc.

The reason it's called '_Terms WOT manage_':

1. it's the management tool of our unique terms identifier
2. it covers all the concepts, terms, categories, dictionaries, tags in the WebofTrust (WOT) field.
3. The smallest unit of declaration is a 'Term'.

## Conventions and comparison to database

Columns are comparable to _fields_ in a database. The rows are the _records_ in a database.

Field _names_ are in the first row. A few columns maintain our database-like structure:
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

### Why not a database?
We're generating static websites, for good reasons. [More info](https://www.cloudflare.com/en-gb/learning/performance/static-site-generator#Pros). But feel free to Google comparison and evaluations which direction you consider best. E.g. [wpamelia.com](https://wpamelia.com/static-vs-dynamic-website/?gclid=Cj0KCQjwxveXBhDDARIsAI0Q0x234PSArlYOfbriIL6u0g3RUlRST8zfdAnYtkrRSs-GJ3RdgwaCSaEaArioEALw_wcB).

Because we've chosen a static site generator, [Jekyll](https://jekyllrb.com) for the time being, but there are other open-source options, **a database would be balast**.

## Counting tool

The counting tool is offered by Blockchainbird.org and has been develop in 2019 as a means to assess the level of real expertise in blockchain publications. It crawled through a pdf, based on a dictionaries of terms and very simple business rules. 

> E.g. If a pdf mentions 'bitcoin' in conjunction with words like 'scam', 'tax evasion', etc. we considered the writers as not being informed too well about the true nature of the bitcoin / blockchain innovation.

### Why would we need a terms counting tool?
The actual presence of a certain glossary term in documents and webpages is a strong indication whether the term at hand is relevant in a certain section. Based on this relevance expressed in an objective count we can automatically added certain tags and categories to the term.

> The term 'out-of-band' has lots of 'hits' in the OOBI repo, but much less so in the KERI repo.

Based on this relevance expressed in an objective count we can automatically added certain tags and categories to the term.

> The term 'out-of-band' wil have an impressive count in the column `Cat_OOBI`. We might offer a high level menu item for the term in the sidebar of the WebofTrust Glossary 'OOBI'.

The other reason is that a manual check for terms in documents is a very strenuous and time-consuming effort. And the result is always outdated per definition: once your change the source, the glossary needs to be updated too.

**In brief:\
We count, so we're lazily up to date.**

### Redesign

Recently the tool has been engineered towards the WOT-terms challenge:
- it crawls any Github page and also pdfs (if necessary)
- the tool uses the 'Terms WOT manage' sheet to match terms
- the scores are based on a combination of parameters:
   1. level of (understanding need for) the term
   2. number of appearances, the actual count

#### Regular expression to hit
 - Some abbreviationS are too short. The acronyms match non-relevant things in the text. E.g. "AN", "AID" and "SAID". We need to look for "(AN)", " AN " or at the beginning of a paragraph: "\nAN ".
 - multiple-word expressions like "virtual-credential-transaction-event-log" should be looked for using "virtual credential transaction event log".
 - The longer combination that matches exactly, takes precedence in the count:
"virtual-credential-transaction-event-log", then "credential transaction event log" and lastly "transaction event log". No double counts here. Same with acronyms: an exact match for "VC-TEL" implies that there's no count for "TEL". Lastly also in syllables: a hit for "keridemlia" doesn't count "keri" in this word. 

### Results

The count of terms are in the Cat_CCCCC columns after a (re)run of the counting tool.

{TBW prio 1: the tool is currently being re-developed, August 18 2022 }

## Why do we need this?

- Key: We need a Key field to be able to have a unique long-living identifier for a term in the WebofTrust domain.
- TTTTT_Fkey / TTTTT_start: We use this Foreign Key to link to other educational resources of the this term, like Youtube footage*, webpages and other glossaries.
- level: We assess a [level of understanding](../README.md#levels-of-understanding) to meaningful study a term. Regardless this subjective and personal judgement, the filtering options are numerous:

 1. offer everything (a glossary)
 2. offer a learning trajectory
 3. filter in the opposite direction: exclude terms for experts; don't bother them with Noob answers.
 4. etc.

- Cat_CCCCC: we are now able to store the [counts](#counting-tool) and then offer the term in various relevant contexts at the front end of the site.

'* Youtube footage: plus the start time of where the term is mentioned first or most extensively.

## Why not a term-content file per level of understanding?

Per term various levels of explanation (plus related further readings) are offered within one source file `.md`. The reason for this is that every individual learner is different. Within the source file of a term we can label "stars" to both questions and answers, compliant to what's explained in this section of the README.md file : [Levels of Understanding](../README.md#levels-of-understanding)

By offering "everything we have" about a certain term in one file, a reader is able to identify herself / himself with a certain level in a specific context and "filter the stars" in an eye blink.

## What's the whole point of managing WOT terms in a sheet?

Three major applications:

Being the home of our terms maintenance, we [load ToIP glossary](./load-toip-glossary-in-weboftrust-github-page.md) and generate our Jekyll [static content site](https://weboftrust.github.io/WOT-terms/) on Github. This whole process is steered with the content in the _Terms WOT manage sheet_.

Any resource that mentions WebofTrust terms can be much easier enriched with the use of _Terms WOT manage sheet_.
For example, we can create a [terms link table for any footage](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/howto/create-terms-link-table.md) from the sheet Terms WOT manage sheet.

Integration and synchronisation with other glossaries and destination information sources is possible by maintenance of Key and Foreign Keys in _Terms WOT manage sheet_.

This is a non-exhaustive list of application options.