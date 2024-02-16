---
status: draft
---

What is this: how-we-did organize the Github Actions script.

For who: maintainers, but also users who'd like to know what actions get triggered by what type of events.

Results: insight in the choice around our Coninuous Development Continuous Integration (CDCI) process.

Github Actions are readible for most people who are able to read pseudo-code. The structure and organization of our Action scripts and those brought in by third party tools like Docusaurus, can be distilled fom the [source code](https://github.com/WebOfTrust/WOT-terms/actions). However, we 'd like to offer a convenient insight in the structure and working.

## Factors
- script are set off by hand or automatic? Or both? In which situation would you apply these options.
- are certain Action scripts calling eachtother? If so it needs to be clear under what circumstances.
- Deployment calls 'auto update glossary', why is this?

### For Maintainers
{Why are scripts disabled? Are they archived this way?}
| @kordwarshuis TBW |

### For Users
{pictogram?}
| @kordwarshuis TBW |