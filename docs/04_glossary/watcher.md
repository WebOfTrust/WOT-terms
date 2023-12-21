# watcher
## Definition
KERI alternative to total global ordering and consensus protocols is a mechanism called [duplicity](duplicity) detection. In the [verification](verifier) and [validation](validate) **watchers are all that matter**; they guarantee that logs are immutable by one very simple rule: "[first seen](first-seen) wins".

## KERI operational
This would be a set of watchers (that the validators trust) that record any and all copies of key event logs (KEL) that they see. Because these watchers can be anyone and anywhere, any controller of a public identifier is at peril should they choose to publish inconsistent copies of their KEL. This removes the incentive to be duplicitous.