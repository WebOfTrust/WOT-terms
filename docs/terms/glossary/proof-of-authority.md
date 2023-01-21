## Definition

Proof that somebody or something has certain rights or permissions. It's about _data_. Whereas [proof of authorship](proof-of-authorship) is about _data_ and its original creator.\
A proof-of-authority provides verifiable authorizations or permissions or rights or credentials.

## ACDC and proofs

_Proof of authorship_ and [proof of authority](proof-of-authority) are integrated in [Authentic Chained Data Containers (ACDCs)](authentic-chained-data-container-(ACDC)):
- ACDCs provide a verifiable chain of proof-of-`authorship` of the contained data
- A proof-of-`authority` may be used to provide verifiable authorizations or permissions or rights or credentials. A chained (treed) proof-of-authority enables delegation of authority and delegated authorizations.
These proofs of authorship and/or authority provide provenance of an ACDC itself and by association any data that is so conveyed.\
([source](https://github.com/trustoverip/tswg-acdc-specification/blob/main/draft-ssmith-acdc.md#introduction))

### Example APC : book rights sold

The data contained in an ACDC is a book written by Terlalu Bonito; the ACDC also contains anchoring digest, signed by the author at publishing date. Terlalu has sold all rights to publish the book to Liz Smiley The ownership of the book matches the current [control](controller) over the book and its digital twin: the proof of authority by the chain of ACDCs.

## Do not confuse blockchains or consensus algorithms

Proof of authority (PoA) is also an [algorithm](https://en.wikipedia.org/wiki/Algorithm) used with [blockchains](https://en.wikipedia.org/wiki/Blockchain) that delivers comparatively fast transactions through a consensus mechanism based on identity as a stake.\
([Source](https://en.wikipedia.org/wiki/Proof_of_authority))

This is NOT what we mean in SSI, KERI and ACDC.