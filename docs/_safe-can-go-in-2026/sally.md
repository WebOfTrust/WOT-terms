# sally
## Definition
is an implementation of a verification service and acting as a reporting server. It is purpose-built software for the vLEI ecosystem to allow participants in the vLEI ecosystem present credentials, so the [GLEIF](GLEIF) Reporting API can show what [vLEIs](vLEI) are; issued to [Legal Entities](legal-entity).

## Inner working
The Sally [vLEI](vLEI) Audit Reporting Agent _receives presentations of credentials_ and notices of [revocation](revocation-event), verifies the structure and cryptographic integrity of the credential or revocation event and performs a POST to the configured webhook [URL](URL)  
[Source](https://github.com/GLEIF-IT/sally)