## Definition
A blind [OOBI](OOBI.md) means that you have some mechanisms in place for verifying the [AID](AID) instead of via the OOBI itself. A blind OOBI is essentially a [URL](URL.md). It's called "blind" because the witness is not in the OOBI itself. You haves other ways of verifying the AID supplied. 

## Example
A blind OOBI through an AID that is on some witness list and has been verified to root-of-trust already. So you know the human being behind this referred AID. Because it's an AID that has a [KEL](KEL.md) out there, which has been securely established, you can trust it. So a blind OOBI makes a via-via commitment. 

## The working
A natural person that you trust is an owner of an AID. Then you cryptographically commit this AID to another AID through some mechanism (e.g. a witness list).

> "Here's my public key and here's my AID and because this in an another witness list I trust it."

## Unblind 
A 'blind' AID becomes "unblind" when you establish a direct relationship with human being who controls the referenced AID. You shortcut the blind OOBI because you established a direct OOBI to the formerly reference AID.

## Why is a blind OOBI interesting
type 2 authentication: minimise the friction
{TBW prio 3}

## Related terms
Authentication by reference, latent authenticity



