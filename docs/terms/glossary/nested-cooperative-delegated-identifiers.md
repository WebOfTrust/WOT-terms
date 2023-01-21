## Definition
In KERI delegations are cooperative, this means that both the delegator and delegate must contribute to a delegation. The delegator creates a cryptographic commitment in either a rotation or interaction event via a seal in a delegated establishment event. The delegate creates a cryptographic commitment in its establishment event via a seal to the delegating event. Each commitment is signed respectively by the committer. This cooperative delegation together with special superseding recovery rules for events enables cooperative recovery.

### Recursive application
This superseding rule may be recursively applied to multiple levels of delegation, thereby enabling recovery of any set of keys signing or pre-rotated in any lower levels by a superseding rotation delegation at the next higher level. This cascades the security of the key management infrastructure of higher levels to lower levels. This is a distinctive security feature of the cooperative delegation of identifiers in KERI.

### More information
More in chapter Nested Delegation Recovery of the [whitepaper](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf)