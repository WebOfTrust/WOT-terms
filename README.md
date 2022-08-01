# WebofTrust Concepts, Terminology and Education


### Associated Specifications
The table below lists all deliverables of the KERI Community:
| Acronym | Full Name of Deliverable | Link to Deliverable | Lead Authors | Status / Notes |
|---|---|---|---|---|
| KERI | Attributable (Autonomic) Identifiers (KERI) | [IETF KERI Draft](https://github.com/WebOfTrust/ietf-keri) | Samuel Smith | |
| CESR | Composable Event Streaming Representation | [IETF CESR Draft](https://github.com/WebOfTrust/ietf-cesr)| Samuel Smith |[Active Draft](https://datatracker.ietf.org/doc/draft-ssmith-cesr/)|
| ACDC | Authentic Chained Data Containers | [IETF ACDC Draft](https://github.com/trustoverip/tswg-acdc-specification) | Samuel Smith | [Active Draft](https://datatracker.ietf.org/doc/draft-ssmith-acdc/) |
| OOBI | Out-Of-Band-Introduction | [IETF OOBI Draft](https://github.com/WebOfTrust/ietf-oobi) | Sam Smith |[Active Draft](https://datatracker.ietf.org/doc/draft-ssmith-oobi/)|

### Why Concepts, Terminology and Education

**How will KERI (secure attribution) and ACDC (veracity) be adopted?**

Anyone can set up and offer a technical tool and proponents could explain perceived use-cases, technology applications, even their general advantages and face-value features, but it's what the recipient ***believes*** that might or might not lead to adoption. Subsequently, according to the level of belief it's a choice to either study and use the tool or (completely) ignore it.

Ignoring could be reciprocal. Designers and creators of the (KERI / ACDC) technology have the freedom to not be bothered by the lack of practical use cases at all. Or they might still thrive well in the presence of misunderstanding and undervaluation of the tooling and the concepts behind them.

```
"KERI doesn't care"
```
is an often used phrase. Not to intimidate or to be condescending, but to stress criteria that decide whether a certain perceived 'situation' is relevant within the constraints of KERI or ACDC or not. Especially experts from the blockchain world and DID world have a hard time to get their head around KERI and ACDC. That's a statistical fact, and again, hopefully not a way to put people off but to create a sort of awareness that the road to understanding KERI / ACDC could be a bumpy one.

Without understanding our peers, we won't be able to help them understand the KERI concepts, without understanding and believe, there won't be adoption.

### Concepts, here we go!

That said, we consider there's given a wish to mutually understand each-other (this includes the awareness of being understood). If so, we could serve the interested recipient of information about this great innovation by:

1. **Explaining the concepts** that introduce terminology, explain the terminology at various levels of understanding and in certain domains (e.g. in certain use-cases)
2. **Asking questions** about how this explanation is received and offer next steps to dive deeper into the resources available

Then what might magically happen is that somewhere in this process the recipients concludes that the tool has **meaning** for them! He/she believes it has unique characteristics, value, practical application etc. There might even be someone that *sees* it's the next big thing on the web, like the KERI / ACDC tends to believe.

So this is why we explain our concepts in various levels of understanding and link it to terminology spun in a interrelated glossary. Here you can find the KERI, OOBI, CESR and ACDC concepts, starting points and principles: [Concepts.md](./concept.md)

{EXplain IETF, ToIP, eSSIF-Lab}

### Levels of understanding
So far we've used a star system that indicates the suitability of questions, answers, concepts and terminology (and glossary) respecting the knowledge-level of the reader / recipient.

 - '* beginner
 - '** advanced
 - '*** expert

*Mind you, a 'beginner' is still an expert in the field of identity! Target groups like friends, family, and other laymen are out of scope.*

### We need use cases for adoption

"We need use cases for adoption" is a claim based on strong believes among the participant of the WOT-terms (Zoom) group.

We could investigate the **correlation between levels of understanding** (beginner, advanced, expert) **and how use cases could be approached**. To illustrate this presumed correlation, we sketch the *adoption of cars* in hindsight: 

'* beginner -> a newbie might be triggered by meaning and practical advantages (transportation, entertainment, etc.)
'** advanced -> an advanced person is a skilled power user of the car (she knows about refuelling, starting, shifting, steering, braking, maintenance, etc.)
'*** expert -> this is the car mechanic: technically skilled and very knowledgeable (mastering everything under the bonnet, and comparisons from the top of his head.)

{TBW prio 2: how to investigate whether this correlation is present and if so how it could work with the one, two, three star model. }

### Frame of reference

Within the KERI scope, a search for criteria and consciously, on the basis of objectives, switching from one frame of reference to another, for example from KERI <-> ToIP <-> eSSIF-Lab <-> KERI 

{Explain transformations and criteria as the basis to make decisions and understand each other}

An *example* transformation KERI <-> eSSIF-Lab

{DRAFT!! -> }

- Two stars (**) Verification "yes, the passport is valid".
- One star (*) Validation "no, you can't use it in China, because less than 6 months to expiry date")
- Three stars (***) Validation and verification are synonymous under the bonnet of KERI, with the criterion that everything must be cryptographically verifiable to the root-of-trust as soon as it comes to yes/no derivations, Veracity ("is it true what is said?") covers under the bonnet the grey area where VCs do their work.

{END DRAFT}

### Policy

See the documents in this repo titled [LICENSE.md](https://github.com/WebOfTrust/Keri/blob/main/LICENSE.md) and [CONTRIBUTING.md](https://github.com/WebOfTrust/Keri/blob/main/CONTRIBUTING.md) for licensing and contributing policy. Besides the IETF licensing terms, these include the comprehensive Apache2 license for all associated intellectual property (IP) including patents. The advantage of one comprehensive license for all contributions is that there will always be alignment between all contributors and for any type of contribution. This alignment includes an **inbound=outbound** [policy](https://opensource.guide/legal/) for all related IP. We only want contributions to KERI made here in the WebOfTrust project that are licensed as free, and [nonreciprocal](https://opensource.org/node/875) open source be it software or specification.  

## Meetings

We meet every other Thursday at 10 am EDT (or EST). (First meeting 2022 July 28)

The meeting agenda may be found [here](https://github.com/WebOfTrust/WOT-terms/blob/main/agenda.md). The zoom link is also at the top of the agenda page.

### Related Meetings

Our Terms and Education meeting is at the intersection Technical and Conceptual meetings. For KERI, CESR, OOBI and ACDC it's especially important to explain our concepts to the outside world because it's new and complex matter.

#### Technical
ACDC leverages KERI. The [ACDC Task Force meeting](https://wiki.trustoverip.org/display/HOME/ACDC+%28Authentic+Chained+Data+Container%29+Task+Force) is hosted at ToIP and meets on the alternate weeks at the same time as the [KERI meetings](https://github.com/WebOfTrust/keri/blob/main/agenda.md). The ACDC meetings complement the KERI meetings. Both meetings are focussed on technicalities, specifications and code developments.

#### Conceptual
There also is the [Concepts and terminology](https://wiki.trustoverip.org/pages/viewpage.action?pageId=65700) of Trust over IP. It's a meeting that aligns Trust over IP (North America) and eSSIF (Europe) efforts in getting understood: concepts, terminology and glossaries and importantly being able to use and reference each others work.


## Existing Implementations
The reference implementation for KERI is the keripy implementation. This is hosted here by the WebOfTrust project. The repository may be found here:  
* [keripy](https://github.com/WebOfTrust/keripy) – under development  

The keripy implementation is Apache2 licensed as are all repositories in the WebOfTrust project. 

There is also an Apache2 licensed Rust implementation of KERI hosted by the WebOfTrust project which may be found here:   
* [keriox](https://github.com/WebOfTrust/keriox) – under development  

The primary contributors to keriox have since moved their efforts to a [repository](https://github.com/THCLab/keriox) with a non Apache2 license. 
As a result the WebOfTrust keriox implementation above is somewhat behind the keripy implementation in terms of
feature support. We encourage the community to step forward and continue development of the Apache2 licensed Rust implementation.

We also encourage creation of Educational material and resources for KERI, CESR, OOBI and ACDC in other appearances. We are happy to host other activities here in the WebOfTrust project as long as they are Apache2 licensed.
