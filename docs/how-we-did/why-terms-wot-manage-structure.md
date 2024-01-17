---
status: final
---
# The Terms WOT manage structure explained

What is this: A description of architecture and follow-up technical design

For who: anyone that likes to understand the architecture and how-we-did build KERISSE using `github.com` and its wiki, Typesense and Docusaurus and actions, resulting in the WOT-terms repo `github.io` site.

To generate our static content site on the Github project page of this [WOT-terms page](https://weboftrust.github.io/WOT-terms/) repo, we have:

1. wiki resources, terms in separate `.md` files in a Docusaurus directory structure
2. a sheet called _Terms WOT manage_ (`a Google sheet`) a central location with strict editing rights: [here](https://docs.google.com/spreadsheets/d/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/edit?pli=1#gid=209150977).
3. From this central sheet you can go where ever you like: e.g. a "comma separated" file _Terms WOT manage_ (`.csv`) exported from the Sheet in any directory locally. In fact it's a semi-colon-separated text file that you might get; so check the result.

<img src={require('/static/img/Terms-wot-manage-screen-example.png').default} alt="Terms-wot-manage-screen-example" />
<img src={require('/static/img/csv-utf-8-save-as.png').default} alt="csv-utf-8-save-as" />

*How-we-did* in 2023 and onwards is:
- use Google Docs to maintain and edit the structure and content of the sheet
- pull in the data and the structure into JSON format using github actions script | TBW @kordwarshuis |

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

## Term life cycle

A term is a bitch. A term might have one or more abbreviations that are assimilated already (e.g. 'PTEL' and 'Public TEL' for public-transaction-event-log). It can be lower case, upper case, mixed case (e.g. 'vLEI'). it can be singular and plural (e.g. 'OOBIs' is more used than 'OOBI'). So, to have a term as identifying `Key` to itself (self-referential) is a pain as long as the process hasn't completed; the term hasn't _hardened_ yet. This process is very different for every single term. For example `icp: tag` doesn't even have a proper term name yet (mid 2022).

### Lifecycle phases

- Start: We need a 'Key' field to identify a most probably changing term and prevent the database from getting polluted with double terms.
- Midlife: We need a 'Key' field to uniquely identify a term that might have various names used in the same (!) context.
- End: A term is well-known, agreed upon by the community, therefore assimilated and unique, and we don't need 'Key' anymore.

### Three simple rules (for now, feel free to comment!)

1. We prefer **a singular expression** over plural expression. So for example the term is OOBI not OOBIs, unless it's grammatically incorrect (can't think of anything now).
2. We use **lower case** as much as we can in the long (identifying) terms. The abbreviated term are linkers: they will get a `## See` header and a link to the long more meaningful term in itself.
3. **Longer compound terms take precedence** over the parts. `public TEL` or `public-transaction-event-log` is apparently worth explaining as a special form of `TEL` or `transaction-event-log`. So we first look for a hit on the longer term while parsing texts.

## Conventions and comparison to database

Columns are comparable to _fields_ in a database. The rows are the _records_ in a database.

Field _names_ are in the first row. A few columns maintain our database-like structure:

- Key: a unique incremental meaningless numeric identifier. The uniqueness is not enforced by code, but by userinterface: conditional formatting colours the cells with the same value red. The Key field becomes redundant as soon as the term itself is a well-known meaningful Key and Term at the same time, like a [country code](https://www.countrycode.org).
- Type: for filtering purposes. The field has only one character, it always fits in the general category, but maybe the terms is inherently more specific to subsequently SSI, Autonomic identifiers and finally the KERI suite.
  - `K`: KERI suite specific terms
  - `A`: Autonomic Identifier specific
  - `S`: SSI specific
  - `G`: General
- Form: mainly for explanatory reasons, possibly filtering. The field has only one character that best fits the form description of the term.
  - `n` : noun
  - `v` : verb
  - `a` : adjective/adverb
  - `r` : relation
- Text : This is the short description of the term. It will be shown as a popup after pressing the `+` sign. This sign is located after any link in glossary definition texts to a term that we have registered in the WOT-terms sheet. The Level of the description is mostly `1`; which means "Digital Identity advanced knowledge"
- Link: The direct link to the source input utility, from 2022 and still in 2024 being the wiki op the repo on github.com
- Level : level of understanding. In what kind of language is the term definition expressed? The field has only one character.
  - `3` : KERI expert (to be); this is the target group of KERISSE
  - `2` : SSI expert (decentralized IDs)
  - `1` : Digital Identity advanced knowledge
> Observation: we do not serve laymen.
> Exception: Level `4` is extraordinary level. Philip Feairheller in 2021: "this the level only KERI Suite founder Sam Smith can formulate and understand, nobody else can". If you happen to come across level 4 text in the KERI Suite, don't feel lonely. :)
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
[Key event log](key-event-log.md)
```

key-event-log.md:

```
## Definition
A verifiable data structure that is a backward and forward chained ...
```

### Why not a database?

We're generating static websites, for good reasons. [More info](https://www.cloudflare.com/en-gb/learning/performance/static-site-generator#Pros). But feel free to Google comparison and evaluations which direction you consider best. E.g. [wpamelia.com](https://wpamelia.com/static-vs-dynamic-website/?gclid=Cj0KCQjwxveXBhDDARIsAI0Q0x234PSArlYOfbriIL6u0g3RUlRST8zfdAnYtkrRSs-GJ3RdgwaCSaEaArioEALw_wcB).

Because we've chosen a static site generator, [Docusaurus](https://docusaurus.io) for the time being, but there are other open-source options, **a database would be balast**.

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
  1.  level of (understanding need for) the term
  2.  number of appearances, the actual count

#### Regular expression to hit

- Some abbreviations are too short. The acronyms match non-relevant things in the text. E.g. "AN", "AID" and "SAID". We need to look for "(AN)", " AN " or at the beginning of a paragraph: "\nAN " instead.
- multiple-word expressions like "virtual-credential-transaction-event-log" should be looked for using "virtual credential transaction event log".
- The longer combination that matches exactly, takes precedence in the count:
  "virtual-credential-transaction-event-log", then "credential transaction event log" and lastly "transaction event log". No double counts here. Same with acronyms: an exact match for "VC-TEL" implies that there's no count for "TEL". Lastly also in syllables: a hit for "keridemlia" doesn't count "keri" in this word.

### Results

The count of terms are in the Cat_CCCCC columns after a (re)run of the counting tool.

| TBW prio 1: the tool is currently being re-developed, August 18 2022 |

## Why do we need this?

- Key: We might need a Key field **to be able to** have a unique long-living identifier for a term in the WebofTrust domain. However, any term goes through a life cycle, with the end state of a term being well-known, unchanged for a while and unique. The `Key` field has become superfluous by then.
- Type: We don't need this, but it's courtesy to users / learners to be able to filter or select just specific terms to SSI, Autonomic identifier space and KERI suite specific consequetively.
- TTTTT_Fkey / TTTTT_start: We use this Foreign Key to link to other educational resources of the this term, like Youtube footage\*, webpages and other glossaries.
- level: We assess a [level of understanding](https://github.com/WebOfTrust/WOT-terms/blob/main/README.md#levels-of-understanding) to meaningful study a term. Regardless this subjective and personal judgement, the filtering options are numerous:

1.  offer everything (a glossary)
2.  offer a learning trajectory
3.  filter in the opposite direction: exclude terms for experts; don't bother them with Noob answers.
4.  etc.

- Cat_CCCCC: we are now able to store the [counts](#counting-tool) and then offer the term in various relevant contexts at the front end of the site.

'\* Youtube footage: plus the start time of where the term is mentioned first or most extensively.

## Why not a term-content file per level of understanding?

Per term various levels of explanation (plus related further readings) are offered within one source file `.md`. The reason for this is that every individual learner is different. Within the source file of a term we can label "stars" to both questions and answers, compliant to what's explained in this section of the README.md file : [Levels of Understanding](https://github.com/WebOfTrust/WOT-terms/blob/main/README.md#levels-of-understanding.md)

By offering "everything we have" about a certain term in one file, a reader is able to identify herself / himself with a certain level in a specific context and "filter the stars" in an eye blink.

## What's the whole point of managing WOT terms in a sheet?

Three major applications:

Being the home of our terms maintenance, we [load ToIP glossary](./load-glossary-weboftrust-in-docusaurus.md) and generate our Docusaurus [static content site](https://weboftrust.github.io/WOT-terms/) on Github. This whole process is steered with the content in the _Terms WOT manage sheet_.

Any resource that mentions WebofTrust terms can be much easier enriched with the use of _Terms WOT manage sheet_.
For example, we can create a [terms link table for any footage](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/how\ we\did/create-terms-link-table.md) from the sheet Terms WOT manage sheet.

Integration and synchronisation with other glossaries and destination information sources is possible by maintenance of Key and Foreign Keys in _Terms WOT manage sheet_.

This is a non-exhaustive list of application options.