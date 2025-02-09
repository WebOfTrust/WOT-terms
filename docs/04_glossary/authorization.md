## Definition
Is the function of specifying access rights/privileges to resources, which is related to general [information security](https://en.wikipedia.org/wiki/Information_security) and [computer security](https://en.wikipedia.org/wiki/Computer_security), and to [access control](https://en.wikipedia.org/wiki/Access_control) in particular.

More formally, "to authorize" is to define an access policy.

## KERI specific
Authorizations have the form of a signed authorization statement where the statement typically includes the [AID](autonomic-identifier) under which the authorization is issued. A [verifier](verifier) may then [verify](verify) the authorization by verifying the attached signature using the keys that were authoritative at the time the authorization was issued. These authorizations are secure to the extent that the established control authority is secure. The authorizations inherit their [security](security) from their associated AID.

### W3C VC form
Authorizations may take many forms. One form of particular interest is the *W3C Verifiable Credential* [VC](VC) standard. Verifiable credentials use the W3C Decentralized Identifier [DID](DID) standard. The DID standard provides name spacing syntax for decentralized identifiers that is evocative of URIs. A given DID may be a type of AID but **not all DIDs are AIDs**. Furthermore, because AIDs may use other name space syntax standards besides DIDs, **not all AIDs are DIDs**. KERI itself is name space agnostic so may be used to support AIDs in any name space that accepts [pseudo-random](pseudo-random-number) strings as an element.