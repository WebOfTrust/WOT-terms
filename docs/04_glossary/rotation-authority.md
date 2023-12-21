# rotation authority
## Definition
The (exclusive) right to rotate the authoritative key pair and establish changed control authority.

## Relation to rotation authority
The original controller of an [AID](autonomic-identifier) can hold exclusive rotation authority. Because control authority is split between two key sets, the first for [signing authority](signing-authority) and the second ([pre-rotated](pre-rotation)) for rotation authority, the associated thresholds and key list can be structured in such a way that a designated [custodial agent](custodial-agent) can hold signing authority while the original controller can hold exclusive rotation authority.