---
status: draft
---

# How we adapted TEv2 tooling


Rieks:

It's in other places. Here are some pointers:
the tool specifications/descriptions are maintained in https://github.com/tno-terminology-design/tev2-specifications, but are best viewed at https://tno-terminology-design.github.io/tev2-specifications/docs/overview/overview-tev2
currently, the existing tools each have their own repo: TRRT, MRGT and MRG-import, but they will all be transferred into the single tev2-tools repo and refactored so as to optimally reuse code.
If you want to use the tools, you best install them as an NPM package (see TRRT, MRGT, and MRG-import respectively).
You would do me a huge favor if you would browse through the stuff that's there, and then try to get the tools to work. You could clone the tev2-specifications repo, you have everything you might need. Please tell me then about your experiences: what worked, what did not, what have you been looking for that you couldn't find, suggestions for improving the docs, etc.

https://tno-terminology-design.github.io/tev2-specifications


Introducing Terminology Engine v2 (TEv2) | TNO Terminology Design
The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. curation) of terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual scopes.