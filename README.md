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

Anyone can set up and offer a technical tool and proponents could explain perceived use-cases, technology applications, even their general advantages and face-value features, but it's what the recipient ***believes***. Subsequently it's a choice to either study and use the tool or ignore it.\
This attitude could well be Reciprocal: designers and creators of technology have the freedom to not be bothered by the lack of practical use cases at all. Or misunderstanding the concepts behind the tooling.

Given a wish to be mutually understand each-other (this includes the awareness of being understood) we could serve the interested recipient of information about this great innovation by:

1. **Explaining the concepts** that introduce terminology, explain the terminology at various levels of understanding and in certain domains (e.g. in certain use-cases)
2. **Asking questions** about how this explanation is received and offer next steps to dive deeper into the resources available

Then what might magically happen is that somewhere in this process the recipients concludes that the tool has **meaning** for them! He/she believes it has unique characteristics, value, practical application etc. There might even be someone that *sees* it's the next big thing on the web, like the KERI / ACDC tends to believe.

So this is why we explain our concepts in various levels of understanding and link it to terminology spun in a interrelated glossary. Here you can find the KERI, OOBI, CESR and ACDC concepts, starting points and principles: [Concepts.md](./concept.md)

{EXplain IETF, ToIP, eSSIF-Lab}

### Frame of reference

Within the KERI scope, a search for criteria and consciously, on the basis of objectives, switching from one frame of reference to another, for example from KERI <-> ToIP <-> eSSIF-Lab <-> KERI 

{Explain transformations and criteria as the basis to make decisions and understand each other}

An *example* transformation KERI <-> eSSIF-Lab

- Two stars (**) Verification "yes, the passport is valid".
- One star (*) Validation "no, you can't use it in China, because less than 6 months to expiry date")
- Three stars (***) Validation and verification are synonymous under the bonnet of KERI, with the criterion that everything must be cryptographically verifiable to the root-of-trust as soon as it comes to yes/no derivations, Veracity ("is it true what is said?") covers under the bonnet the grey area where VCs do their work.

### Policy

See the documents in this repo titled [LICENSE.md](https://github.com/WebOfTrust/Keri/blob/main/LICENSE.md) and [CONTRIBUTING.md](https://github.com/WebOfTrust/Keri/blob/main/CONTRIBUTING.md) for licensing and contributing policy. Besides the IETF licensing terms, these include the comprehensive Apache2 license for all associated intellectual property (IP) including patents. The advantage of one comprehensive license for all contributions is that there will always be alignment between all contributors and for any type of contribution. This alignment includes an **inbound=outbound** [policy](https://opensource.guide/legal/) for all related IP. We only want contributions to KERI made here in the WebOfTrust project that are licensed as free, and [nonreciprocal](https://opensource.org/node/875) open source be it software or specification.  

## Meetings

We meet every other Thursday at 10 am EDT (or EST). (First meeting 2022 July 28)
The zoom link is here:
{TBW prio 1 data}
The meeting agenda may be found [here](https://github.com/WebOfTrust/WOT-terms/blob/main/agenda.md)

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
