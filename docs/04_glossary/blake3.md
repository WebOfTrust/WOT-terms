# blake3
## Definition
BLAKE3 is a relatively young (2020) cryptographic hash function based on Bao and BLAKE2.

## Features and programming languages
BLAKE3 is a single algorithm with many desirable features (parallelism, XOF, KDF, PRF and MAC), in contrast to BLAKE and BLAKE2, which are algorithm families with multiple variants. BLAKE3 has a [binary tree](https://en.wikipedia.org/wiki/Binary_tree) structure, so it supports a practically unlimited degree of parallelism (both SIMD and multithreading) given long enough input. 

The official [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)) and [C](https://en.wikipedia.org/wiki/C_(programming_language)) implementations[[24]](https://en.wikipedia.org/wiki/BLAKE_(hash_function)?wprov=srpw1_0#cite_note-BLAKE3-repo-24) are [dual-licensed](https://en.wikipedia.org/wiki/Multi-licensing) as public domain ([CC0](https://en.wikipedia.org/wiki/CC0)) and the [Apache License](https://en.wikipedia.org/wiki/Apache_License).

## Fast, parallel and streaming
BLAKE3 is designed to be as fast as possible. It is consistently a few times faster than BLAKE2. The BLAKE3 compression function is closely based on that of BLAKE2s, with the biggest difference being that the number of rounds is reduced from 10 to 7, a change based on the assumption that current cryptography is too conservative. In addition to providing parallelism, the Merkle tree format also allows for verified streaming (on-the-fly verifying) and incremental updates.
