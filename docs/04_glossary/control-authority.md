## Definition
In identity systems Control Authority is who controls what and that is the primary factor in determining the basis for trust in them. The entity with *control authority* takes action through operations that affect the
- creation (inception)
- updating
- rotation
- revocation
- deletion
- and delegation of the **authentication factors and their relation to the identifier**.

## Source of truth
How these events are ordered and their dependence on previous operations is important. The record of these operations is the source of truth for the identity system.

## Change control authority
In the 2022 implementation of [KeriPy](keripy) two [rotations](rotation-event) were required to _change_ control authority.
In new rotation rules, you can rotate to new keys that aren't in the prior next key [digests](digest). You just need to reach the appropriate thresholds of _prior-next-threshold_ and _current-signing-threshold_. So you now only need one rotation to change control authority.  
**Note**: This change was the forcing function to require [dual indexed codes](dual-indexed-codes) in CESR.