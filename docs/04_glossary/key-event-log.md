# key event log
## Definition
A verifiable data structure that is a backward and forward chained, signed, append-only log of key events for an AID. The first entry in a KEL MUST be the one and only Inception Event of that AID.  
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)

### Put differently
KELs are hash-chained Key Events. These are blockchains in a narrow definition, but not in the sense of ordering (not ordered) or global consensus mechanisms (which is not needed). (SamMSmith)

A KEL is KERI's VDS: the proof of key state of its identifier.