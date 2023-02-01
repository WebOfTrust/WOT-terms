# Fill out terms in one of the ToIP wikis

This page tells a little bit about how to use the ToIP terms wiki:

- how to use
- how to fill
- how to manage

## Video Daniel Hardman

For new learners, the video | TBW prio1 | of Daniel Hardman is very educational.

You could also have a look at the elaborate and complete description of the ToIP terms wikis [here](https://github.com/trustoverip/toip)

| TBW |

## How to use a terms wiki

Go to any of them, for example to the [acdc](https://github.com/trustoverip/acdc/wiki) wiki of the KERI team. It's not only acdc by the way, the KERI suite has been defined in terms there.

1. **Find a page**: To find a term just type part of it and the available list will be filtered instantly
   <img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/find-a-page.png" alt="how to create a new term in the terms wiki" width="300" />

> this is a very handy feature when attending virtual meeting and the experts are throwing in various terms.
> you could save the newcomers by throwing links in the chat to the matching terms in the wiki.

### Result filtered pages

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/filter-pages.png" alt="how to create a new term in the terms wiki" width="300" />

## A few guidelines

"So we decided that it was simpler to handle acronyms a different way. Whenever you have a term with an associated acronym, just create two wiki pages. One should document the full, spelled out version of the term, including its definition and any other interesting metadata. The other should NOT contain a `## Definition` block but rather a `## See` block that contains a cross reference. You can see this pattern in the TOIP glossary entries for SSI and self-sovereign identity: https://trustoverip.github.io/toip/glossary#ssi" (Source: Daniel Hardman)

### This is the resulting to do

1. all lower case words with spaces. These will be converted to dashed terms

2. Only for those entries complying to 1.

```
## Definition
The authentic web is the internet as a whole giant verifiable data structure. Also called Web5. The web will be one big graph. That's the mental model of the 'authentic web'.
```

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/new-term-wiki-page.png" alt="how to create a new term in the terms wiki" width="600" />

3. Abbreviations

Example `CESR`:

```
## See
[composable event streaming representation](composable-event-streaming-representation)
```

The resulting markdown file will be saved and accessible as CESR.md

### What problem does this extra glossary item solve?

Originally, the instruction was to create a term and is acronym the way you have done -- a single page in the wiki, where the page tile is "term with many words (acronym)". The term tool generates entries for both.

However, it turns out that generating two entries from one wiki page creates some undesirable complications. The tool needs to generate two tag lists and two edit histories as well. References to the term have an ID that is the same for both the short and the long form, and which authors may not remember. (You're writing a doc and you want to link to "SSI" but you have to remember to link to "self sovereign identity (SSI)" instead.) Etc.\
(Source: Daniel Hardman)
