## Definition

The entity that has the ability to make changes to an [identity](identity.md), [cryptocurrency](cryptocurrency.md) or [verifiable credential](verifiable-credential.md).

The controller of an [autonomic identifier](autonomic-identifier.md) is the entity (person, organization, or autonomous software) that has the capability, as defined by derivation, to make changes to an [Event Log](key-event-log.md). This capability is typically asserted by the control of a single inception key. In DIDs this is typically asserted by the control of set of cryptographic keys used by software acting on behalf of the controller, though it may also be asserted via other mechanisms. In KERI an AID has one single controller. Note that a DID may have more than one controller, and the DID `subject` can be the DID controller, or one of them.
