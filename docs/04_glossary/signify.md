# signify
## Definition

Signify is a web client [(key) event](key-event) signing - and key pair creation app that minimizes the use of [KERI](KERI) on the client.

The main reason is that we want to minimize what needs to be put in the client or the cloud. Most proofs should be cryptographically verifiable and it should not be able to be repudiated (successful [pointing fingers](#Finger-pointing) should be prevented), and this happens when the signatures come straight from the controller.

## Background
On a small set of activities that need to be protected in infrastructure for key management
- key pair creation
- key pair storage
- event generating 
- event signing
- event verification

## Finger pointing
What are the liabilities do a cloud host has to worry about?
- Cloud host does not want to see keys (non-repudiation).  So we want to move event signing out of the cloud agent.
- Key state (next [digest](digest) and current signing key) come from the client
- Cloud host ensures that the code supply chain is secure and never sees the private keys