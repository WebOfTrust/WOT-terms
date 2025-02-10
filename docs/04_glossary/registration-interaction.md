## Definition
Setup/Registration interaction, new AID and authorization to establish access control. You present a ([vLEI](vLEI)) credential. You don't want that captured and misused. Narrowing the scope to a certain role (e.g. Document Submitter) is a pre-registration via [delegatable](delegation) authority.

## More

The [Credential](verifiable-credential) is like a bearer token. Does it matter if the credential was delivered by the [issuee](issuee)? The token is [proof of the authorization](proof-of-authority), but does the delivery require the issuee signature? Depends on the context. If it is an idempotent process resubmission has no effect.  
Source: Samuel Smith / Daniel Hardman / Lance Byrd - Zoom meeting KERI Suite Jan 16 2024; discussion minute 30-60 min

## Replay attack prevention
is important, depending on the context or governance model the issuance itself needs / should / could be signed.

### Also see
[Access-controlled interaction](access-controlled-interaction)