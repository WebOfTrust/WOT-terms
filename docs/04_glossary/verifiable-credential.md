# Verifiable Credential

## Definition
Verifiable credentials (VCs) are an [open standard](https://en.wikipedia.org/wiki/Open_standard) for digital credentials. They can represent information found in physical credentials, such as a passport or license, as well as new things that have no physical equivalent, such as ownership of a bank account.

#### More on source Wikipedia
[VCs](https://en.wikipedia.org/wiki/Verifiable_credentials)

## W3C DID standardization
Importantly, there are VC specification that provide a mechanism to express these sorts of [credentials](https://www.w3.org/TR/vc-data-model/#dfn-credential) on the Web _in a way that is_ cryptographically secure, privacy respecting, and machine-verifiable. [More](https://www.w3.org/TR/vc-data-model/)

### Key characteristics of VCs
[Issuer](issuer): The entity that creates and issues the credential.
[Holder](holder): The entity that holds and can present the credential.
[Verifier](verifier): The entity that checks the authenticity and validity of the credential.
Tamper-proof: VCs use cryptographic techniques (like digital signatures) to ensure that the credential has not been altered since issuance.
Privacy-preserving: VCs can allow the holder to disclose only the necessary information, often using selective disclosure or zero-knowledge proofs to protect privacy.
Decentralized: VCs can be part of decentralized identity systems, where control over identity is more in the hands of the individual rather than centralized authorities.

### Examples of verifiable credentials
A university degree issued digitally by a university that can be verified by a potential employer, a government-issued ID that can be verified by a third-party service provider, or a COVID-19 vaccination certificate that health authorities can verify.

## Also see
[Virtual credentials](virtual-credential), that share a subset.
