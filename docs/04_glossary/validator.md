# validator
## Definition
determines current authoritative key set for identifier from at least one key event (receipt) log. Types:

- Validator of any verifiable data structure
- Validator as a node in distributed consensus or participant

Validator and [verifier](verifier) are close to synonyms for our purposes.

A `validator` in [KERI](key-event-receipt-infrastructure) and [ACDC](authentic-chained-data-container) is anybody that wants to establish control-authority over an identifier, created by the controller of the identifier. Validators verify the log, they apply duplicity detection or they leverage somebody else's duplicity detection or apply any other logic so they can say "Yes, these are events I can trust".

## Example

During validation of virtual credentials for example, a [verifier](verifier) checks to see if a verifiable [credential](credential) ([VC](VC)) has been signed by the controller of this VC using the applicable verification method.

## To be Sam-Smith precise in KERI
Any entity or agent that evaluates whether or not a given signed statement as attributed to an identifier is valid at the time of its issuance. A valid statement MUST be verifiable, that is, has a verifiable signature from the current controlling keypair(s) at the time of its issuance. Therefore a Validator must first act as a Verifier in order to establish the root authoritative set of keys. Once verified, the Validator may apply other criteria or constraints to the statement in order to determine its validity for a given use case. When that statement is part of a verifiable data structure then the cryptographic verification includes verifying digests and any other structural commitments or constraints. To elaborate, with respect to an AID, for example, a Validator first evaluates one or more KELs in order to determine if it can rely on (trust) the key state (control authority) provided by any given KEL. A necessary but insufficient condition for a valid KEL is it is verifiable i.e. is internally inconsistent with respect to compliance with the KERI protocol. An invalid KEL from the perspective of a Validator may be either unverifiable or may be verifiable but duplicitous with respect to some other verifiable version of that KEL. Detected duplicity by a given validator means that the validator has seen more than one verifiable version of a KEL for a given AID. Reconciliable duplicity means that one and only one version of a KEL as seen by a Validator is accepted as the authoritative version for that validator. Irreconcilable duplicity means that none of the versions of a KEL as seen by a validator are accepted as the authoritative one for that validator. The conditions for reconcilable duplicity are described later.  
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)

## ESSIF-lab definitions
- _[verify](https://essif-lab.github.io/framework/docs/essifLab-glossary#verify)_ definition is in sync with the definition in the KERI/ACDC vocabulary
- _[verifier](https://essif-lab.github.io/framework/docs/essifLab-glossary#verifier)_ definition is in sync with the definition in the KERI/ACDC vocabulary
- _[validate](https://essif-lab.github.io/framework/docs/essifLab-glossary#validate)_ definition is very general, however in the KERI/ACDC vocabulary 'validate' currently has diverse meanings including this one
- _[validator](https://essif-lab.github.io/framework/docs/essifLab-glossary#validator)_ definition is a generalisation of the much more specific definition in the KERI/ACDC vocabulary