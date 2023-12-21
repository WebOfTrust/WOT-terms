# self certifying identifier
## Definition

A Self-Certifying Identifier (SCID) cryptographically binds an identifier to a public and private key pair. It is an identifier that can be proven to be the one and only identifier tied to a public key using cryptography alone.

## Signing

A [controller](controller) issues an own Identifier by binding a generated public private key pair to an identifier. After this a controller is able to sign the identifier and create a certificate. Also called a _cryptonym_. The simplest form of a self-certifying identifier includes either the public key or a unique fingerprint of the public key as a [prefix](prefix) in the identifier.

## Important SCID properties: 
- Self-contained secure cryptographic [root-of-trust](root-of-trust)
- Decentralized control via [private key management](PKI)
- Universally unique identifiers

## Related to KERI
A self-certifying identifier (SCID) is a type of [cryptonym](cryptonym) that is uniquely cryptographically derived from the public key of an asymmetric non-repudiable signing keypair, (public, private).  
It is self-certifying or more precisely **self-authenticating** because it does not rely on a trusted entity. The [authenticity](authenticity) of a non-repudiable signature made with the private key may be verified by extracting the public key from either the identifier itself or incepting information uniquely associated with the cryptographic derivation process for the identifier. In a *basic SCID*, the mapping between an identifier and its controlling public key is self-contained in the identifier itself. A basic SCID is [ephemeral](ephemeral) i.e. it does not support [rotation](rotation) of its keypairs in the event of key weakness or compromise and therefore must be abandoned once the controlling private key becomes weakened or compromised from exposure.