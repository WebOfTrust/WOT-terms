## Definition
In KERI and ACDC context, a witness is an entity or component designated (trusted) by the controller of an identifier. The primary role of a witness is to verify, sign, and keep events associated with an identifier. A witness is the controller of its own self-referential identifier which may or may not be the same as the identifier to which it is a witness.  

An identifier witness therefore is part of its [trust basis](trust-domain) and may be controlled (but not necessarily so) by its [controller](controller). The purpose of a pool of witnesses is to protect the controller from external exploit of its identifier.  
The term _[Backer](backer)_ and _Witness_ are closely related in KERI but not synonyms or interchangeable.

## KERI witness confusing
Be sure to understand the narrow KERI definition of Witness well. You could easily be confused, for there are dozens of papers that use the term Witness in a similar way to KERI; for example https://ieeexplore.ieee.org/document/8644609 or 'segregated witness' in bitcoin, but it's far from the same concept.  
More in the [whitepaper](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf)

## Operational description in KERI
Entity that may receive, verify, and store key events for an identifier. Each witness controls its own identifier used to sign key event messages, a controller is a special case of a witness.  
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)