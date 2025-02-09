## Definition
Non-repudiation refers to a situation where a statement's author **cannot successfully dispute** its authorship or the validity of an associated contract, signature or commitment.  
The term is often seen in a legal setting when the authenticity of a signature is being challenged. In such an instance, the authenticity is being "repudiated".

## KERI related
Any non-repudiable signature made with the private key may be verified by extracting the public key from either the identifier itself or incepting information uniquely associated with the cryptographic derivation process for the identifier. In a basic SCID, the mapping between an identifier and its controlling public key is self-contained in the identifier itself.  
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#self-certifying-identifier-scid)

## The inner-working of KERI's non-repudiation
The function of KERI's identifier-system security overlay is to establish the authenticity (or authorship) of the message payload in an IP Packet by verifiably attributing it to a cryptonymous self-certifying identifier (AID) via an attached set of one or more asymmetric keypair-based non-repudiable digital signatures. The current valid set of associated asymmetric keypair(s) is proven via a verifiable data structure called a key event log (KEL).  
An authenticatable (verifiable) internet message (packet) or data item includes the identifier and data in its payload. Attached to the payload is a digital signature(s) made with the private key(s) from the controlling keypair(s). Given the identifier in a message, any verifier of a message (data item) can use the identifier system mapping to look up the public key(s) belonging to the controlling keypair(s). The verifier can then verify the attached signature(s) using that public key(s). **Because the payload includes the identifier, the signature makes a non-repudiable cryptographic commitment to both the source identifier and the data in the payload.**  
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#identifier-system-security-overlay)
