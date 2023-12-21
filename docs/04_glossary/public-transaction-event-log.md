# public transaction event log
## Definition
is a public hash-linked data structure of transactions that can be used to track state anchored to a KEL.

### Public Verifiable Credential Registry
A Public Verifiable Credential Registry can be represented in several [TEL](TEL)s to establish issuance or revocation state of a [Verifiable Credential](verifiable-credential) (VC). 

### Control authority vs. issuance and revocation of VCs
The [KEL](KEL) is used to establish control authority over the keys used to commit to the events of the TEL and sign the VC. The events of the TEL are used to establish the issuance or revocation state of the VCs issued by the controller of the identifier represented by the KEL. 

[Source: pfeairheller](https://github.com/WebOfTrust/ietf-ptel/blob/main/draft-pfeairheller-ptel.md)