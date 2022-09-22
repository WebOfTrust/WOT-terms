## Definition

Proof that somebody or something has originally created certain content. It's about _data_. Whereas [proof-of-authority](proof-of-authority) is about _rights_.

For example, a [signature](https://en.wikipedia.org/wiki/Signature) constitutes direct proof of [authorship](https://en.wikipedia.org/wiki/Authorship); less directly, [handwriting analysis](https://en.wikipedia.org/wiki/Handwriting_analysis) may be submitted as proof of authorship of a document.[[21]](https://en.wikipedia.org/wiki/Proof_(truth)?wprov=srpw1_0#cite_note-21) [Privileged information](https://en.wikipedia.org/wiki/Secret) in a document can serve as proof that the document's author had access to that information; such access might in turn establish the location of the author at certain time, which might then provide the author with an [alibi](https://en.wikipedia.org/wiki/Alibi).\
[Source](https://en.wikipedia.org/wiki/Proof_(truth))

## ACDC and proofs

_Proof of authorship_ and [proof of authority](proof-of-authority) are integrated in [Authentic Chained Data Containers (ACDCs)](authentic-chained-data-container-(ACDC)) constituting an [Authentic Provenance Chain (APC)](authentic-provenance-chain-(APC)):
- ACDCs provide a verifiable chain of proof-of-`authorship` of the contained data
- A proof-of-`authority` may be used to provide verifiable authorizations or permissions or rights or credentials. A chained (treed) proof-of-authority enables delegation of authority and delegated authorizations.
These proofs of authorship and/or authority provide provenance of an ACDC itself and by association any data that is so conveyed.\
([source](https://github.com/trustoverip/tswg-acdc-specification/blob/main/draft-ssmith-acdc.md#introduction))

### Example APC : book rights sold

The data contained in an ACDC is a book written by Terlalu Bonito; the ACDC also contains anchoring digest, signed by the author at publishing date. Terlalu has sold all rights to publish the book to Liz Smiley The ownership of the book matches the current [control](controller) over the book and its digital twin: the proof of authority by the chain of ACDCs.
