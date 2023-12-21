# transaction event log
## Definition
The set of transactions that determine registry state form a log called a Transaction Event Log (TEL). The TEL provides a cryptographic proof of registry state by reference to the corresponding controlling [KEL](key-event-log). Any validator may therefore cryptographically verify the [authoritative state](authoritative) of the [registry](registry).

### Put differently
An externally anchored transactions log via cryptographic commitments in a KEL.

![](https://github.com/WebOfTrust/keri/blob/main/images/TEL-and-KEL.png)
