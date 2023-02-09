## Definition
is a form of a [Verifiable Data Registry](https://github.com/trustoverip/toip/wiki/credential-registry) that tracks the issuance/revocation state of credentials issued by the controller of the [KEL](key-event-log).

Two types of TELs will be used for this purpose. The first type of [TEL](transaction-event-log) is the [management TEL](management-transaction-event-log) and will signal the creation of the Registry and track the list of Registrars that will act as [Backers](backer) for the individual TELs for each [VC](virtual-credential). The second type of TEL is the [VC TEL](virtual-credential-transaction-event-log) which will track the issued or revoked state of each VC and will contain a reference to it's corresponding management TEL.

## ToIP definition
[Credential registry](https://github.com/trustoverip/toip/wiki/credential-registry)
 
## Why do we need this?
{TBW prio2}
