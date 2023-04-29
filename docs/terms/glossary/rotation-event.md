## Definition

An [establishment event](establishment-event.md) representing a transfer of root control authority of an identifier from the current set of controlling keys to new set committed to in the prior establishment event (inception or rotation) as the pre-rotated key pair set.\
Source [KERI Whitepaper Section 7.21 page 46](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf)

This event provides the information needed to change the key-state including a change to the set of [authoritative](authoritative.md) keypairs for an [AID](autonomic-identifier.md).\
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)

## The inner working

We start with a [root-of-trust](root-of-trust.md) in public/private key-pair that is bound to an identifier derived from the key-pair. From this key-pair and then we can rotate controlling authority to other key-pairs with signed rotation messages (events). These rotation messages are witnessed by witnesses designated in the inception event and any subsequent rotation events. Upon completion of successful witnessing a receipt message is sent back to the identity controller performing the rotation and the controller keeps track of these receipts in a [key event receipt log](key-event-receipt-log.md).\
The infrastructure needed to keep track of these key events including inception events, rotation events, and non-establishment events is key event receipt infrastructure, thus the acronym "KERI": [Key Event Receipt Infrastructure](<key-event-receipt-infrastructure-(KERI.md)>).\
_(SamASmith)_
