## Definition
An [AID](AID) and its associated self-certifying trust basis gives rise to a trust domain for associated cryptographically verifiable non-repudiable statements. Every other type of identifier including human meaningful identifiers may then be secured in this resultant trust domain via an [end-verifiable](end-verifiable) [authorization](authorization). This authorization legitimizes that human meaningful identifier as an LID through its association with an AID. The result is a secured trust domain specific identifier couplet of aid|lid.

## Problematic human meaningfulness
Human meaningfulness has two limiting characteristics: *scarcity* and *security*. Scarcity exhibits itself in various undesirable ways such as name squatting, or race conditions to register or otherwise assert control. More importantly, there is no inherent security property of a human meaningful identifier. This makes them insecure by default. Happily an [AID](autonomic-identifier) comes to rescue.

## Couplet for scarcity and security
The trust domain of an AID provides a context in which to interpret the appearance of any LID. The AID is implied by the context. This means that the AID may not need to be prepended or appear with the LID. This allows the human meaningfulness of the LID to exhibit itself without being encumbered by the AID.

This model of an *aid|lid couplet* unifies all desirable identifier properties into one identifier system model. The AID part provides the security infrastructure while the LID part provides the application specific human meaningfulness. The connection between the two is provided by a legitimizing authorization represented by the |.
