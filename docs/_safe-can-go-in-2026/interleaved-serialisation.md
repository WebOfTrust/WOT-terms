# interleaved serialisation
## Definition
Serializations of different types interleaved in an overarching format

## CESR related
One extremely useful property of CESR is that special **count codes** enable CESR to be interleaved with other serializations. For example, Many applications use [JSON](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#JSON) [RFC4627](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#RFC4627), [CBOR](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#CBOR) [RFC8949](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#RFC8949), or MsgPack ([MGPK](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#MGPK)) to serialize flexible self-describing data structures based on field maps, also known as _dictionaries_ or [hash tables](distributed-hash-table).  
[Source IETF-CESR](https://weboftrust.github.io/ietf-cesr/draft-ssmith-cesr.html#section-3.5)