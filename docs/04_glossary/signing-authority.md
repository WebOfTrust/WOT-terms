## Definition
The authority to sign on behalf of the controller of the authoritative key pair. Often in situation where delegation has taken place, e.g. a custodial agent. These are limited rights because [rotation authority](rotation-authority) is not included. 

## Relation to rotation authority
The original controller of an [AID](autonomic-identifier) can hold exclusive [rotation authority](rotation-authority). Because control authority is split between two key sets, the first for signing-authority and the second ([pre-rotated](pre-rotation)) for [rotation authority](rotation-authority), the associated thresholds and key list can be structured in such a way that a designated [custodial agent](custodial-agent) can hold signing authority while the original controller can hold exclusive rotation authority.
