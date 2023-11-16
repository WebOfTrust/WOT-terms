## Introduction

This is a Controlled Document of the GLEIF verifiable LEI (vLEI) Ecosystem Governance Framework (vLEI Ecosystem Governance Framework). It is the authoritative Governance Framework for the Legal Entity vLEI Credential. It specifies the purpose, principles, policies, and specifications that apply to the use of this Credential in the vLEI Ecosystem. 

## Terminology

All terms in First Letter Capitals are defined in the vLEI Glossary.

## Purpose

The purpose of the Legal Entity vLEI Credential is to enable the simple, safe, secure identification of a Legal Entity vLEI Credential Holder to any Verifier that accepts a Legal Entity vLEI Credential.

## Scope

The scope of this Credential Governance Framework is limited to Issuers, Holders, and Verifiers of the vLEI Legal Entity Credential.

## Principles

The following principles guide the development of policies in this Credential Governance Framework. Note that they apply in addition to the Core Policies defined in the vLEI Ecosystem Governance Framework.

Binding to Holder

The Legal Entity vLEI Credential shall be designed to provide a strong enough binding to the Legal Entity vLEI Credential Holder that a Proof Request for the Legal Entity vLEI Credential can be satisfied only by the Legal Entity vLEI Credential Holder.

Context Independence

The Legal Entity vLEI Credential shall be designed to fulfil a Proof Request for the legal identity of the Legal Entity vLEI Credential Holder regardless of context, including in-person, online, or over the phone.

Issuer Policies

Qualifications

The Issuer MUST:

be a Qualified vLEI Issuer (QVI) in the vLEI Ecosystem with Qualification up to date. 

follow all of the requirements specified in the vLEI Issuer Qualification Agreement.

use thevLEI software for hosting Witnesses, Watchers, Discovery, and Oracles, and for Key Management.

Credential

The Issuer MUST:

use the Legal Entity vLEI Credential schema defined in section 9.1.

include the Claims marked as Required in section 9.1.

Legal Entity Identity Verification

Identity Assurance

A QVI Authorized Representative (QAR) MUST verify that the LEI supplied for the Credential is the LEI of the Legal Entity for which the issuance request for the Credential has been made.

A QAR MUST verify the Legal Entity Identifier (LEI) of the Legal Entity has a LEI Entity Status of Active and a LEI Registration Status of Issued, Pending Transfer or Pending Archival in the Global LEI System.

The Legal Entity MUST designate a set of one or more Legal Entity Authorized Representatives (LARs) to act on its behalf. 

The Legal Entity SHOULD designate at least three LARs in order to use the greater security of KERI multi-sig protocols.

A QAR MUST perform identity assurance of a person serving in the role of a Legal Entity Authorized Representative (LAR) to at least Identity Assurance Level 2 (IAL2) as defined in NIST 800-63A (https://pages.nist.gov/800-63-3/sp800-63a.html). Even when IAL2 is used for Identity Assurance, a real-time OOBI session is required as specified in 2.c.i below (essentially including the IAL3 requirement for a Supervised Remote In-person session).

As an alternative to d., the QVI MAY use Third-Party Services to perform identity assurance on the LARs.  

Proper security access controls MUST be put in place between the QVI and the third-party provider so that the QAR can view the results of identity assurance and confirm that the persons that have been identity assured are the LARs that join the real-time OOBI session specified in 2. b.) below, as well as to ensure that the third-party provider follows the requirements of the vLEI Ecosystem Governance Framework.

Identity Authentication

A credential wallet MUST be set up for the Legal Entity and for each LAR.

The Legal Entity SHOULD designate at least three LARs in order to use the greater security of KERI multi-sig protocols.

A QAR and the LARs MUST establish a real-time OOBI session in which the QAR and all LARs are present. An example is a continuous web meeting attended by all parties on both audio and video. 

The following steps MUST be performed in this completed during this OOBI session. 

The QAR MUST perform manual verification of each LAR’s legal identity for which the QAR has already performed identity Assurance. An example is each LAR visually presenting one or more legal identity credentials and the QAR compares the credentials verified during Identity Assurance to the AVR Person.

The QAR MUST use an OOBI protocol (such as a QR code or live chat) to share the QVI Autonomic Identifier (AID) with the LARs.

Each LAR MUST use an OOBI protocol (such as a QR code or live chat) to share the Legal Entity AID with the QAR.

The QAR MUST send a Challenge Message to the Legal Entity AID as defined in the Technical Requirements Part 1 for the purposes of cryptographic authentication of the Legal Entity AID.  The Challenge Message MUST be unique to the OOBI session.

Each LAR MUST use its Private Key Store to sign and return the response to the Challenge Message, after which the LAR MUST acknowledge that this action has been completed.

The QAR MUST verify in real time that a response to the Challenge Message was received from each LAR.

When all responses to the Challenge Messages sufficient to satisfy the multi-sig threshold have been received, the QAR verify the complete set of signatures.

Issuance 

The Legal Entity Identity Verification process outlined in section 6.3 MUST be completed before Legal Entity vLEI Credential issuance can begin.

A workflow MUST be implemented in the operations of the QVI which requires two QARs to be involved in the issuance and signing a Legal Entity vLEI Credential.  The first QAR will perform the required above-mentioned Identity Assurance, or confirm if a third-party provider is used), Identity Authentication and out-of-band validations and then will sign the credential. Another QAR then approves the issuance and signs the Legal Entity vLEI Credential.

A QAR MUST call the vLEI Reporting API with each issuance event of Legal Entity vLEI Credentials

Revocation

Voluntary revocation

A QAR MUST revoke a Legal Entity vLEI Credential upon receipt of a Fully Signed revocation request by the LAR(s) of the Legal Entity, e.g., if the Legal Entity chooses to no longer be the Holder of this Credential. 

A QAR MUST perform the revocation within the timeframe specified in Appendix 5, Service Level Agreement (SLA).

Involuntary revocation of vLEI Credentials MUST follow the process specified in Appendix 5, Service Level Agreement (SLA).

A QAR MUST call the vLEI Reporting API with each revocation event of Legal Entity vLEI Credentials. 

GLEIF MUST update the list of vLEI Credentials on the LEI page of the Legal Entity to reflect vLEI credential revocations that have been reported by QVIs.

The QAR SHOULD remove the LEI of the Legal Entity from the process to monitor the status of LEIs used within vLEIs.

Level of Assurance

The Legal Entity vLEI Credential SHOULD be issued with only a single Level of Assurance. Future versions of this credential governance framework MAY define multiple Levels of Assurance.

Holder Policies

There are no restrictions on the Holders of vLEI Credentials specified in the vLEI Ecosystem.  Restrictions may be introduced in other Ecosystems that use the vLEI Ecosystem.

Verifier Policies

There are no restrictions on the Verifiers of vLEI Credentials specified in the vLEI Ecosystem.  Restrictions may be introduced in other Ecosystems that use the vLEI Ecosystem.

Credential Definition

Schema

The Legal Entity vLEI Credential MUST be an Authentic Chained Data Container (ACDC) that MUST use for its schema at the time of issuance, the JSON Schema found in:

https://github.com/WebOfTrust/vLEI/blob/dev/schema/acdc/legal-entity-vLEI-credential.json

The field values in the credentialbe as follows:

     	"LEI" field value MUST be the LEI of Legal Entity Holder. 

Additional data elements can be specified about the Legal Entity through issuance of another ACDC credential containing these additional elements by using the chaining capabilities of ACDC credentials to chain this additional ACDC credential to the related Legal Entity vLEI Credential.

The Sources section MUST contain a source reference to the Qualified vLEI Issuer vLEI Credential of the QVI that issued this redential.

The elements in this type of credential can be returned in response to a presentation request as defined in the IPEX protocol (see below).

The ACDC specification is covered in the ACDC protocol specification which can be found in: https://github.com/WebOfTrust/ietf-keri

The issuance and presentation exchange protocols are covered in the Issuance and Presentation Exchange (IPEX) protocol specification, which can be found in: https://github.com/WebOfTrust/IETF-IPEX

Additional data elements can be specified about the Legal Entity, OOR Person and ECR Person through issuance of another ACDC credential containing these additional elements by using the chaining capabilities of ACDC credentials to chain this additional ACDC credential to the related Legal Entity vLEI Credential, Legal Entity Official Organizational Role vLEI or a Legal Entity Engagement Context vLEI Credential.

