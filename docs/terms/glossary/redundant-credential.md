## Definition

Multiple credentials issued by the same issuer (e.g. a [QVI](qvi.md)). They do not have anything to do with each other. They are independently valid.

## Misbehaviour

If a QVI issues two instances of the same credential, and is able to only revoke one. This is a governance issue and this behaviour of a QVI is not recommended. But it can be done this way (issue two revoke one) and it leaves the outside world with one other valid credential.
