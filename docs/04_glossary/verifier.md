# verifier
## Definition
the entity that (cryptographically) verifies data received from peers (check structure, signatures, dates). More narrowly defined for the KERI suite: cryptographically verifies signature(s) on an event message.

Notice the subtile difference between [validator](validator) and verifier.

## KERI related
Any entity or agent that cryptographically verifies the signature(s) and/or digests on an event message. In order to verify a signature, a verifier must first determine which set of keys are or were the controlling set for an identifier when an event was issued. In other words, a verifier must first establish control authority for an identifier. For identifiers that are declared as non-transferable at inception, this control establishment merely requires a copy of the inception event for the identifier. For identifiers that are declared transferable at inception, this control establishment requires a complete copy of the sequence of establishment events (inception and all rotations) for the identifier up to the time at which the statement was issued.  
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)

## ESSIF-lab definitions

- _[verify](https://essif-lab.github.io/framework/docs/essifLab-glossary#verify)_ definition is in sync with the definition in the KERI/ACDC vocabulary
- _[verifier](https://essif-lab.github.io/framework/docs/essifLab-glossary#verifier)_ definition is in sync with the definition in the KERI/ACDC vocabulary
- _[validate](https://essif-lab.github.io/framework/docs/essifLab-glossary#validate)_ definition is very general, however in the KERI/ACDC vocabulary 'validate' currently has diverse meanings including this one
- _[validator](https://essif-lab.github.io/framework/docs/essifLab-glossary#validator)_ definition is a generalisation of the much more specific definition in the KERI/ACDC vocabulary