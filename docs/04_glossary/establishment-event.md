## Definition
a [Key Event](key-event) that establishes or changes the key state which includes the current set of authoritative keypairs (key state) for an [AID](AID).  
Source: dr. S.Smith

## Explanation
A key _creation_ or _rotation_ event that establishes or transfers control authority for an identifier. 

Establishment events indicate which key pairs are authoritative (controlling) for an identifier at a given point in time.

The subset of a [key event log](key-event-log) (KEL) that are establishment events are an ordered subsequence of the full KEL.

For a non-transferable identifier this is one authoritative key pair and it never changes so there will only ever be one establishment event, the inception event.

For transferable identifiers there can be multiple establishment events which would include the initial rotation event and any subsequent rotation events.

Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)
