# WOT terms documentation

We aim to document everything related to **KERI, ACDC and CESR** and alike. To let autonomic identifiers florish.

## WebofTrust Concepts, Terminology and Education
[WebofTrust WOT-terms](https://github.com/WebOfTrust/WOT-terms/)\
The README of the main WebofTrust WOT-terms repo is [here](https://github.com/WebOfTrust/WOT-terms/blob/main/README.md).

### Associated Specifications

The table below lists the key deliverables of the KERI Community:


| Acronym | Full Name of Deliverable | Link to Deliverable | Lead Authors | Status / Notes |
|---|---|---|---|---|
| KERI | Attributable (Autonomic) Identifiers (KERI) | [IETF KERI Draft](https://github.com/WebOfTrust/ietf-keri) | Samuel Smith | |
| CESR | Composable Event Streaming Representation | [IETF CESR Draft](https://github.com/WebOfTrust/ietf-cesr)| Samuel Smith |[Active Draft](https://datatracker.ietf.org/doc/draft-ssmith-cesr/)|
| ACDC | Authentic Chained Data Containers | [IETF ACDC Draft](https://github.com/trustoverip/tswg-acdc-specification) | Samuel Smith | [Active Draft](https://datatracker.ietf.org/doc/draft-ssmith-acdc/) |
| OOBI | Out-Of-Band-Introduction | [IETF OOBI Draft](https://github.com/WebOfTrust/ietf-oobi) | Sam Smith |[Active Draft](https://datatracker.ietf.org/doc/draft-ssmith-oobi/)|


### Why Concepts, Terminology and Education

**How will KERI (secure attribution) and ACDC (veracity) be adopted?**

Anyone can set up and offer a technical tool and proponents could explain perceived use-cases, technology applications, even their general advantages and face-value features, but it's what the recipient **_believes_** that might or might not lead to adoption. Subsequently, according to the level of belief it's a choice to either study and use the tool or (completely) ignore it.

Ignoring could be reciprocal. Designers and creators of the (KERI / ACDC) technology have the freedom to not be bothered by the lack of practical use cases at all. Or they might still thrive well in the presence of misunderstanding and undervaluation of the tooling and the concepts behind them.

```
"KERI doesn't care"
```

is an often used phrase. Not to intimidate or to be condescending, but to stress criteria that decide whether a certain perceived 'situation' is relevant within the constraints of KERI or ACDC or not. Especially experts from the blockchain world and DID world have a hard time to get their head around KERI and ACDC. That's a statistical fact, and again, hopefully not a way to put people off but to create a sort of awareness that the road to understanding KERI / ACDC could be a bumpy one.

> Without understanding our peers,
> we won't be able to help them understand the KERI /ACDC concepts,
> without understanding and belief,
> there won't be adoption.

### Values at the base of our plan

1. On-line education is important. We think it's an endless effort to improve the **understandability** of highly technical on-line resources and dedication is needed to achieve this value.
2. **Static sites** have value. A few relevant advantages:
   - after creation it's fixed in a directory structure, make it read-only and it's safe
   - working on continuously harvested copies of external resources (independence, improving UX, etc.)
   - a static site works off-line as a charm
   - inclusion by low-bandwidth requirements.
3. **Continuous Development Continuous Integration** (CDCI) - Github actions keeps things up to date (as few human hands as possible).

### Concepts, here we go!

That said, we consider there's given a wish to mutually understand each-other (this includes the awareness of being understood). If so, we could serve the interested recipient of information about this great innovation by:

1. **Explaining the concepts** that introduce terminology, explain the terminology at various levels of understanding and in certain domains (e.g. in certain use-cases)
2. **Asking questions** about how this explanation is received and offer next steps to dive deeper into the resources available

Then what might magically happen is that somewhere in this process the recipients concludes that the tool has **meaning** for them! He/she believes it has unique characteristics, value, practical application etc. There might even be someone that _sees_ it's the next big thing on the web, like the KERI / ACDC tends to believe.

So this is why we explain our concepts in various levels of understanding and link it to terminology spun in a interrelated glossary. Here you can find the KERI, OOBI, CESR and ACDC concepts, starting points and principles: [Concepts.md](../06_concepts/concepts.md)

{EXplain IETF, ToIP, eSSIF-Lab}

### Levels of understanding

So far we've used a star system that indicates the suitability of questions, answers, concepts and terminology (and glossary) respecting the knowledge-level of the reader / recipient.

- '\* beginner
- '\*\* advanced
- '\*\*\* expert

_Mind you, a 'beginner' is still an expert in the field of identity! Target groups like friends, family, and other laymen are out of scope._

### We need use cases for adoption

"We need use cases for adoption" is a claim based on strong beliefs among the participant of the WOT-terms (Zoom) group.

We could investigate the **correlation between levels of understanding** (beginner, advanced, expert) **and how use cases could be approached**. To illustrate this presumed correlation, we sketch the _adoption of cars_ in hindsight:

'\* beginner -> a newbie might be triggered by meaning and practical advantages (transportation, entertainment, etc.)\
'** advanced -> an advanced person is a skilled power user of the car (she knows about refuelling, starting, shifting, steering, braking, maintenance, etc.)\
'\*** expert -> this is the car mechanic: technically skilled and very knowledgeable (mastering everything under the bonnet, and comparisons from the top of his head.)

{TBW prio 2: how to investigate whether this correlation is present and if so how it could work with the one, two, three star model. }

### Frame of reference

Within the KERI scope, a search for criteria and consciously, on the basis of objectives, switching from one frame of reference to another, for example from KERI <-> ToIP <-> eSSIF-Lab <-> KERI

{Explain transformations and criteria as the basis to make decisions and understand each other}

An _example_ transformation KERI <-> eSSIF-Lab

{DRAFT!! -> }

- Two stars (\*\*) Verification "yes, the passport is valid".
- One star (\*) Validation "no, you can't use it in China, because less than 6 months to expiry date")
- Three stars (\*\*\*) Validation and verification are synonymous under the bonnet of KERI, with the criterion that everything must be cryptographically verifiable to the root-of-trust as soon as it comes to yes/no derivations, Veracity ("is it true what is said?") covers under the bonnet the grey area where VCs do their work.

{END DRAFT}

## Existing Implementations

The reference implementation for KERI is the keripy implementation. This is hosted here by the WebOfTrust project. The repository may be found here:

- [keripy](https://github.com/WebOfTrust/keripy) – under development

The keripy implementation is Apache2 licensed as are all repositories in the WebOfTrust project.

There is also an Apache2 licensed Rust implementation of KERI hosted by the WebOfTrust project which may be found here:

- [keriox](https://github.com/WebOfTrust/keriox) – under development

The primary contributors to keriox have since moved their efforts to a [repository](https://github.com/THCLab/keriox) with a non Apache2 license.
As a result the WebOfTrust keriox implementation above is somewhat behind the keripy implementation in terms of
feature support. We encourage the community to step forward and continue development of the Apache2 licensed Rust implementation.

We also encourage creation of Educational material and resources for KERI, CESR, OOBI and ACDC in other appearances. We are happy to host other activities here in the WebOfTrust project as long as they are Apache2 licensed.
