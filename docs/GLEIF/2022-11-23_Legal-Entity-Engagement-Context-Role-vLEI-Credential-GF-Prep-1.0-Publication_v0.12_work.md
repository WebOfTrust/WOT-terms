<!-- ![](media/image1.png){width="2.511111111111111in" -->

<!-- height="1.136111111111111in"}![](media/image2.png){width="8.481944444444444in" -->
<!-- height="12.041586832895888in"} -->

+----------------+-----------------------------------------------------+
| Version | 0.12 |
+================+=====================================================+
| ::: Definition | ::: Definition |
| **Date of | 2022-11-23 |
| version** | ::: |
| ::: | |
+----------------+-----------------------------------------------------+
| ::: Definition | ::: Definition |
| **Document | Legal Entity Engagement Context Role vLEI |
| Name** | Credential Governance Framework |
| ::: | ::: |
+----------------+-----------------------------------------------------+
| ::: Definition | ::: Definition |
| **Document DID | DID URLs for all documents will be published with |
| URL** | the v1.0 Draft of the Ecosystem Governance |
| ::: | Framework |
| | ::: |
+----------------+-----------------------------------------------------+
| ::: Definition | ::: Definition |
| **Governing | Global Legal Entity Identifier Foundation (GLEIF) |
| Authority** | ::: |
| ::: | |
+----------------+-----------------------------------------------------+
| ::: Definition | ::: Definition |
| **Copyright** | The verifiable LEI (vLEI) Ecosystem Governance |
| ::: | Framework is published on the GLEIF website. All |
| | documents published on the GLEIF website. All |
| | documents published on the GLEIF website are |
| | published under the Creative Commons Attribution |
| | license. |
| | ::: |
+----------------+-----------------------------------------------------+

# Introduction

This is a Controlled Document of the GLEIF verifiable LEI (vLEI)
Ecosystem Governance Framework (vLEI Ecosystem Governance Framework). It
is the authoritative Governance Framework for the Legal Entity
Engagement Context Role vLEI Credential (ECR vLEI Credential). It
specifies the purpose, principles, policies, and specifications that
apply to the use of this Credential in the vLEI Ecosystem.

# Terminology

All terms in First Letter Capitals are defined in the vLEI Glossary.

# Purpose

The purpose of the ECR vLEI Credential is to enable the simple, safe,
secure identification of an ECR vLEI Credential Holder to any Verifier
that accepts an ECR vLEI Credential.

# Scope

The scope of this Credential Governance Framework is limited to Issuers,
Holders, and Verifiers of the ECR vLEI Credential.

# Principles

The following principles guide the development of policies in this
Credential Governance Framework. Note that they apply **in addition to**
the Core Policies defined in the vLEI Ecosystem Governance Framework.

## Binding to Holder

> The ECR vLEI Credential shall be designed to provide a strong enough
> binding to the ECR vLEI Credential Holder that a Proof Request for the
> ECR vLEI Credential can be satisfied only by the Legal Entity vLEI
> Credential or the ECR Person.

## Context Independence

> The ECR vLEI Credential shall be designed to fulfil a Proof Request
> for the legal identity of the ECR Person regardless of context,
> including in-person, online, or over the phone.

# Issuer Policies

## Qualifications

> The Issuer MUST:

1.  be a QVI with which a Legal Entity holding a valid Legal Entity vLEI
    Credential has contracted with for the issuance of ECR vLEI
    Credentials, offered by QVIs as a value-added service.

2.  be a Legal Entity holding a valid Legal Entity vLEI Credential who
    will issue ECR vLEI Credentials directly to ECR Persons.

    1.  ## Credential

> The Issuer MUST:

1.  use the ECR vLEI Credential schema elements defined in section 10.1.

2.  include the Claims marked as Required in section 10.1.

    1.  ### Legal Entity Identity Verification

For an Issuer in 6.1.1:

1.  Identity Assurance

    a. A Qualified vLEI Issuer Authorized Representative (QAR) MUST
    verify that the LEI supplied for the Credential is the LEI of
    the Legal Entity for which the issuance request for the
    Credential has been made.

    b. A QAR MUST verify the Legal Entity Identifier (LEI) of the Legal
    Entity has a LEI Entity Status of Active and a LEI Registration
    Status of Issued, Pending Transfer or Pending Archival in the
    Global LEI System.

2.  Identity Authentication

    a. Identity Authentication for the Legal Entity is not applicable
    for the issuance of an ECR vLEI Credential.

> For an Issuer in 6.1.2:

1.  Identity Assurance for the Legal Entity is not applicable for the
    issuance of an ECR vLEI Credential.

2.  Identity Authentication for the Legal Entity is not applicable for
    the issuance of an ECR vLEI Credential.

    1.  ## Legal Entity Authorized Representative (LAR) Identity Verification

For an Issuer in 6.1.1:

Identity Assurance and Identity Authentication for the LAR are specified
section 6.3 of the Legal Entity vLEI Credential Governance Framework.

For an Issuer in 6.1.2:

1.  The LARs of the Legal Entity MUST act as the Issuer of ECR vLEI
    Credentials when these credentials are issued directly by a Legal
    Entity.

    1.  ## ECR Person Identity Verification

For an Issuer in 6.1.1:

1.  Identity Assurance

    a. Identity Assurance of a person serving in an Engagement Context
    Role (ECR Person) MAY be performed either by a QAR, directly or
    using Third-Party Services, or by a LAR.

    b. When the Identity Assurance is performed by a QAR, the Identity
    Assurance MUST be in the same Supervised Remote In-person
    session as the Identity Authentication by the QAR.

    c. Identity Assurance of an ECR person MUST be performed to at
    least Identity Assurance Level 2 (IAL2) as defined in NIST
    800-63A (https://pages.nist.gov/800-63-3/sp800-63a.html). Even
    when IAL2 is used for Identity Assurance, a real-time OOBI
    session is required as specified 2.b.i below (essentially
    including the IAL3 requirement for a Supervised Remote In-person
    session).

    d. If Identity Assurance and Identity Authentication to generate
    the AID of the ECR Person is performed by the LAR, then Identity
    Assurance and Identity Authentication MAY be performed by a
    separate Supervised Remote In-person session.

2.  Identity Authentication by a QAR

    a. A credential wallet MUST be set up for the ECR Person.

    b. In all cases, a QAR and the ECR Person MUST establish a
    real-time OOBI session in which the QAR and the ECR Person are
    present. An example is a continuous web meeting attended by all
    parties on both audio and video.

    c. The following steps MUST be performed in this order and
    completed during this OOBI session.

        i.  The QAR MUST send a Challenge Message to the ECR Person's
            AID as defined in the Technical Requirements Part 1 for the
            purposes of cryptographic authentication of the ECR Person's
            AID. The Challenge Message MUST be unique to the OOBI
            session.

        ii. The ECR Person MUST use its Private Key Store to sign and
            return a response to the Challenge Message, after which the
            ECR Person MUST acknowledge that this action has been
            completed.

        iii. The QAR MUST verify in real time that the response to the
             Challenge Message was received from the ECR Person.

        iv. When the response to the Challenge Message has been received
            by the QAR, the QAR MUST verify the ECR Person's signature.

> For an Issuer in 6.1.2:

1.  Identity Assurance

    a. A LAR MUST perform identity assurance of a person serving in an
    Engagement Context Role (ECR Person) to at least Identity
    Assurance Level 2 (IAL2) as defined in NIST 800-63A
    (https://pages.nist.gov/800-63-3/sp800-63a.html). Even when IAL2
    is used for Identity Assurance, a real-time OOBI session is
    required as specified 2.b.i below (essentially including the
    IAL3 requirement for a Supervised Remote In-person session).

2.  Identity Authentication

    a. A credential wallet MUST be set up for the ECR Person.

    b. A LAR and the ECR Person MUST meet in person or establish a
    real-time OOBI session in which the QAR and the ECR Person are
    present. An example is a continuous web meeting attended by all
    parties on both audio and video.

    c. The following steps MUST be performed in this order and
    completed during this OOBI session.

        i.  The LAR MUST perform manual verification of the ECR Person's
            > legal identity for which the QVI has already performed
            > Identity Assurance. An example, the ECR Person visually
            > presenting one or more legal identity credentials and the
            > LAR compares the credentials verified during Identity
            > Assurance to the ECR Person.

        ii. The LAR MUST use an OOBI protocol (such as a QR code or live
            > chat) to share the QVI Autonomic Identifier (AID) with the
            > LARs.

        iii. The ECR Person MUST use an OOBI protocol (such as a QR code
             > or live chat) to share its AID with the LAR.

        iv. The LAR MUST send a Challenge Message to the ECR Person's
            > AID as defined in the Technical Requirements Part 1 for
            > the purposes of cryptographic authentication of the ECR
            > Person's AID. The Challenge Message MUST be unique to the
            > OOBI session.

        v.  The ECR Person MUST use its Private Key Store to sign and
            > return a response to the Challenge Message, after which
            > the ECR Person MUST acknowledge that this action has been
            > completed.

        vi. The LAR MUST verify in real time that the response to the
            > Challenge Message was received from the ECR Person.

        vii. When the response to the Challenge Message has been
             > received by the LAR, the LAR MUST verify the ECR Person's
             > signature.

    ```{=html}
    <!-- -->
    ```

    1.  ## Issuance

For an Issuer in 6.1.1:

1.  The Legal Entity and ECR Person Identity Verification process
    outlined in sections 6.3 and 6.5 MUST be completed before ECR vLEI
    Credential issuance can begin.

2.  The LAR(s) MUST issue a QVI AUTH ECR vLEI Credential to a QVI to
    request issuance of a ECR vLEI Credential.

3.

4.  A workflow MUST be implemented in the operations of the QVI which
    requires two QARs to be involved in the issuance and signing an ECR
    vLEI Credential. The first QAR will perform the required
    above-mentioned Identity Authentication and out-of-band validations
    and then signs the credential. Another QAR then approves the
    issuance and signs the ECR vLEI Credential.

For an Issuer in 6.1.2:

1.  The ECR Person Identity Verification process outlined in section 6.5
    MUST be completed before ECR vLEI Credential issuance can begin.

2.  A workflow MUST be put in place by the Legal Entity for ECR vLEI
    Role Credentials to meet the requirement for two LARs to sign the
    ECR vLEI Role Credentials at issuance.

    1.  ## Revocation

For an Issuer in 6.1.1:

1.  The Legal Entity MUST notify the QVI to revoke an ECR vLEI
    Credential.

2.  To revoke a previously issued ECR vLEI Credential, the LAR(s) MUST
    revoke the QVI AUTH ECR vLEI Credential related to a specific
    issuance of an ECR vLEI Credential.

3.  The QAR then MUST revoke the ECR vLEI Credential.

4.  The QAR MUST perform the revocation within the timeframe specified
    in the agreement that has delegated the issuance of ECR vLEI
    Credentials to one or more QVIs, offered by QVIs as a value-added
    service.

5.  At the end of the Grace Period for the Qualified vLEI Issuer vLEI
    Credential that has been revoked by GLEIF, the QVI MUST revoke all
    of the ECR vLEI Credentials that the QVI has issued.

6.  Then the terminated QVI MUST transfer a copy of its revocation log
    to GLEIF.

> For an Issuer in 6.1.2:
>
> The Legal Entity SHOULD put in place its own processes specifying how
> LARs are to be notified when ECR vLEI Credentials should be revoked
> and the timeframe in which the ECR vLEI Credentials are to be revoked.

## Level of Assurance

> The ECR vLEI Credential SHOULD be issued with only a single Level of
> Assurance. Future versions of this credential governance framework MAY
> define multiple Levels of Assurance.

# Holder Policies

## Restrictions

There are no restrictions on the Holders of vLEI Credentials specified
in the vLEI Ecosystem. Restrictions may be introduced in other
Ecosystems that use the vLEI Ecosystem.

## Privacy Considerations

It is the sole responsibility of Holders as Issuees of an ECR vLEI
Credential to present that Credential in a privacy-preserving manner
using the mechanisms provided in the Issuance and Presentation Exchange
(IPEX) protocol specification and the Authentic Chained Data Container
(ACDC) specification. <https://github.com/WebOfTrust/IETF-IPEX> and
https://github.com/trustoverip/tswg-acdc-specification

# Verifier Policies

There are no restrictions on the Verifiers of vLEI Credentials specified
in the vLEI Ecosystem. Restrictions may be introduced in other
Ecosystems that use the vLEI Ecosystem.

# 10 Credential Definition {#credential-definition .list-paragraph}

**10.1 Schema**

1.  The ECR vLEI Credential MUST be an Authentic Chained Data Container
    (ACDC) that MUST use for its schema at the time of issuance, the
    JSON Schema found in:

> <https://github.com/WebOfTrust/vLEI/blob/dev/schema/acdc/legal-entity-engagement-context-role-vLEI-credential.json>

2.  **The field values in the credential must be as follows:**

The \"LEI\" field value MUST be the LEI of Legal Entity Holder.

> The \"personLegalName\" field value MUST be the Legal Name of the
> Person in the Engagement Context Role at the Legal Entity.
>
> The \"engagementContextRole\" field value MUST be the the Engagement
> Context Role.
>
> Additional data elements can be specified about the ECR Person through
> issuance of another ACDC credential containing these additional
> elements by using the chaining capabilities of ACDC credentials to
> chain this additional ACDC credential to the Legal Entity Engagement
> Context vLEI Credential.

3.  For an Issuer in 6.1.1, the Sources section of the ECR vLEI
    Credential MUST contain a source reference to the QVI AUTH vLEI
    Credential (via SAID) that the issuing QVI received authorizing the
    issuance of this ECR vLEI Credential. The Sources section of that
    QVI AUTH vLEI Credential MUST contain a source reference to the
    Legal Entity vLEI Credential that was issued by the QVI to the Legal
    Entity and contain the same value for the "LEI" field as the Legal
    Entity vLEI Credential.

4.  For an Issuer in 6.1.2, the Sources section of the ECR vLEI
    Credential MUST contain a source reference to the Legal Entity vLEI
    Credential (via SAID) held by the Legal Entity that is issuing this
    ECR vLEI Credential. The value of the "LEI" field of the Legal
    Entity vLEI Credential MUST match the value of the "LEI" field in
    this ECR vLEI Credential.

> The elements in this type of credential can be returned in response to
> a presentation request in a manner that provides for graduated
> disclosure and contractually protected disclosure as defined in the
> IPEX protocol (see below).
>
> The ACDC specification is covered in the ACDC protocol specification
> which can be found in: https://github.com/WebOfTrust/ietf-keri
>
> The issuance and presentation exchange protocols are covered in the
> Issuance and Presentation Exchange (IPEX) protocol specification,
> which can be found in: https://github.com/WebOfTrust/IETF-IPEX
