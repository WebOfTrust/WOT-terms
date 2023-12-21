# cesride
## Definition
is concerned with parsing CESR primitives.

Cesride is built from cryptographic primitives that are named clearly and concisely. There are:
* [Diger](diger)
* [Verfer](verfer)
* [Signer](signer) 
* [Siger](siger)
* [Cigar](cigar)
* [Salter](salter)

Each primitive will have methods attached to it that permit one to generate and parse the qualified base2 or [base64](base64) representation. Common methods you'll find:

* `.qb64()` - qualified base-64 representation of cryptographic material as a string
* `.qb64b()` - qualified base-64 representation of cryptographic material as octets (bytes)
* `.qb2()` - qualified base-2 representation of cryptographic material as octets (bytes)
* `.code()` - qualifying code (describes the type of cryptographic material)
* `.raw()` - raw cryptographic material (unqualified) as octets (bytes)

[Source](https://github.com/WebOfTrust/cesride#terminology) by Jason Colburne

## Related
[Parside](parside)
