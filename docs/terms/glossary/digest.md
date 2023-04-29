## Definition

verifiable cryptographic commitment. It's a collision resistant hash of content.

From Wikipedia ([Source](https://en.wikipedia.org/wiki/Cryptographic_hash_function)):

A **digest** is a cryptographic hash function (CHF) is a mathematical [algorithm](https://en.wikipedia.org/wiki/Algorithm) that [maps](<https://en.wikipedia.org/wiki/Map_(mathematics)>) data of an arbitrary size (often called the "message") to a [bit array](https://en.wikipedia.org/wiki/Bit_array) of a fixed size (the "[hash value](https://en.wikipedia.org/wiki/Hash_value)", "hash", or "message digest"). It is a [one-way function](https://en.wikipedia.org/wiki/One-way_function), that is, a function for which it is practically infeasible to invert or reverse the computation.[[1]](https://en.wikipedia.org/wiki/Message_digest#cite_note-MrThfd-1)

## Digest and ACDCs

An important property of high-strength cryptographic digests is that a verifiable cryptographic commitment (such as a digital signature) to the digest of some data is equivalent to a commitment to the data itself. [Authentic Chained Data Containers (ACDCs)](<authentic-chained-data-container-(ACDC.md)>) leverage this property to enable compact chains of ACDCs that anchor data via digests. The data contained in an ACDC may therefore be merely its equivalent anchoring digest. The anchored data is thereby equivalently authenticated or authorized by the chain of ACDCs.
