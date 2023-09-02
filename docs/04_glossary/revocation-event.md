## Definition

Revocation is the act of [recall](https://en.wiktionary.org/wiki/recall) or [annulment](https://en.wikipedia.org/wiki/Annulment). It is the cancelling of an act, the recalling of a grant or privilege, or the making [void](https://en.wikipedia.org/wiki/Void_(law)) of some [deed](https://en.wikipedia.org/wiki/Deed) previously existing.\
More on source [Wikipedia](https://en.wikipedia.org/wiki/Revocation)

## KERI related
An event that revokes [control authority](control-authority) over an [identifier](identifier). From that point in time the authoritative key-pairs at hand are not valid anymore.

The time stamp of a revocation is useful but not for security purposes, it can be gamed by an attacker. KERI should be fitted in a way so that it's _not possible_ to rewrite history. The tool we have is the ordering of the events in a [KEL](KEL).

## Beware: Suspension is non-existing
A temporary revocation of a grant or privilege is called a suspension. We don't have this type of state or event in KERI.

