# verifiable
## Definition
able to cryptographically verify a certain data structure on its [consistency](inconsistency) and its [authenticity](authenticity)

## KERI related
A KEL is verifiable means all content in a KEL including the digests and the signatures on that content is verifiably compliant with respect to the KERI protocol. In other words, the KEL is internally consistent and has integrity vis-a-vis its backward and forward chaining digests and authenticity vis-a-vis its non-repudiable signatures. As a verifiable data structure, the KEL satisfies the KERI protocol-defined rules for that verifiability. This includes the cryptographic verification of any digests or signatures on the contents so digested or signed.  
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)