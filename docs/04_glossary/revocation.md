## Definition
Revocation is the act of [recall](https://en.wiktionary.org/wiki/recall) or [annulment](https://en.wikipedia.org/wiki/Annulment). It is the cancelling of an act, the recalling of a grant or privilege, or the making [void](https://en.wikipedia.org/wiki/Void_(law)) of some [deed](https://en.wikipedia.org/wiki/Deed) previously existing.  
More on source [Wikipedia](https://en.wikipedia.org/wiki/Revocation)

## In identity
The term revocation has two completely different meanings in the identity space. In key management one may speak of revoking keys. With statement issuance, authorization issuance, or credential issuance, one may speak of revoking an authorization statement, a token, or a credential.  
This becomes confusing when the act of revoking keys also implicitly revokes the [authorization](authorization) of statements signed with those keys. Any statement may be effectively authorized by virtue of the attached signature(s) made with a set of [authoritative](authoritative) keys. The statement itself may be authorizing some other function in the system. So, the verification of the signature on an authorizing statement is essential to determining the authoritativeness of the associated authorized function. To clarify when an authorization is conveyed via a signed statement, the signature acts to authorize the statement.

## How KERI avoids confusion
KERI terminology usually avoids confusion between [rotation](rotation) and revocation because a key rotation operation is the equivalent of a key revocation operation **followed by a key replacement operation**. So one operation, rotate, is implemented instead of two operations (revoke and replace).  
**A bare key revocation is indicated by replacement with a null key.** So only one operation is needed, that is, rotate where a special case of rotation is to rotate to a null key.

## Also see
[Revocation event](revocation-event)
