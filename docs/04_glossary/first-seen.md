# first seen
## Definition

A "First seen" event in KERI refers to the first event received by validator such as a witness and that is valid and fits the available tail sequence number in the validator's KEL, and therefore is accepted into the validator's KEL. This rule has no effect on the timing of what has arrived in escrow for example; in escrow there can be garbage. Assuming a watched set of validators agree on the first-seen events and thus also agree on the KELs, the watchers of those validators will propagate only those first-seen events within microseconds.

## The rule
From the perspective of a validator, the rule is "First seen, always seen, never unseen".

## Key Compromise, Duplicity, and Recovery 
Different validators might have a different _first-seen_ number for the same originating transaction event. In the case of duplicitous (inconsistent) interaction events originating from the controller (of the current signing key(s)), which might not be discovered until after a key rotation, a recovery process involving judges and jury may be triggered. More [here](https://trustoverip.github.io/tswg-keri-specification/#superseding-rules-for-recovery-at-a-given-location-sn-sequence-number). Validators will not provide an outdated KEL or Event once an erroneous KEL has been corrected.