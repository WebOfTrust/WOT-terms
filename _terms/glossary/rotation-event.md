## Definition
A type of [establishment event](establishment-event) that provides the information needed to change the key-state which includes a change to the set of [authoritative](authoritative) keypairs for an [AID](autonomic-identifier).\
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)

## The inner working
We start with a [root-of-trust](root-of-trust) in public private key pair that get down to the identifier, and then we can rotate authoritatively to other keypairs given signed rotation messages. The infrastructure that we need, keeps track of these rotations, and is in the acronym "KERI": [Key Event Receipt Infrastructure](key-event-receipt-infrastructure-(KERI)).\
_(SamMSmith)_