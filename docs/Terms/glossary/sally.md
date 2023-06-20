## Definition

is an implementation of a verification service and acting as a reporting server. It is purpose-built software for the vLEI ecosystem to allow participants in the vLEI ecosystem present credentials, so the [GLEIF](GLEIF.md) Reporting API can show what [vLEIs](vLEI.md) are; issued to [Legal Entities](legal-entity.md).

## Inner working

The Sally [vLEI](vLEI.md) Audit Reporting Agent _receives presentations of credentials_ and notices of [revocation](revocation.md), verifies the structure and cryptographic integrity of the credential or revocation event and performs a POST to the configured webhook [URL](URL.md).\
[Source](https://github.com/GLEIF-IT/sally)
