# self certifying identifier
## Definition

A Self-Certifying Identifier (SCID) cryptographically binds an identifier to one or more public/private key pairs. It is an identifier that proveably demonstrate to be the only identifier tied to a set of public keys using cryptography alone.

## Signing

A [controller](controller) issues its own identifier by binding a set of public/private key pairs with data in a publically verifiable to an identifier. After this a controller is able to cryptographically sign as the owner of the identifier and create certificates. This is also referred to as a _cryptonym_. The simplest form of a self-certifying identifier could be just a single public key or a unique fingerprint of a public key as a [prefix](prefix) of the identifier.

## Important SCID properties: 
- Self-contained secure cryptographic [root-of-trust](root-of-trust)
- Decentralized control via [private key management](PKI)
- Universally unique

## Related to KERI
A self-certifying identifier (SCID) is a type of [cryptonym](cryptonym) that is unique and cryptographically derived from a set of one or more public keys of an asymmetric non-repudiable signing keypair (public, private).  
It is self-certifying, or more precisely **self-authenticating**, because it does not rely on a trusted entity or third party to verify that the controller controls that identifier. The [authenticity](authenticity) of a non-repudiable signature made with the private keys associated with the identifier may be verified by extracting the public keys from either the identifier itself or with the keys and incepting information uniquely associated with the cryptographic derivation process for the identifier. 

In KERI, a *basic SCID*, is just the mapping between an identifier and its controlling public key.  That is the public key itself. Basic SCIDs in KERI are considered [ephemeral](ephemeral) i.e. they do not support [rotation](rotation) to other keypairs in the event of key weakness or compromise and therefore must be abandoned should the controlling private key become weak or compromised from exposure (or ideally abandoned before these things occur).