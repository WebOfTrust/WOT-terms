---
slug: /2022-12-01_verifiable-LEI-vLEI-Ecosystem-Governance-Framework-Technical-Requirements-Part 3-vLEI-Credential-Schema-Registry-Prep-1.0-Publication_v0.1_work
title: verifiable LEI (vLEI) Ecosystem Governance Framework
---

<!-- ![](media/image1.png){width="2.511111111111111in" -->

<!-- height="1.136111111111111in"}![](media/image2.png){width="8.481944444444444in" -->
<!-- height="12.041586832895888in"} -->

**verifiable LEI (vLEI) Ecosystem Governance Framework Technical
Requirements Part 3:**

**vLEI Credential Schema Registry**

This Controlled Document specifies all policies regarding the
publication of the official JSON Schema for the vLEI credentials.

# Related Specifications

#### JSON Schema {#json-schema .list-paragraph}

JSON Schema
2020-12 <https://json-schema.org/draft/2020-12/release-notes.html>

#### ACDC {#acdc .list-paragraph}

IETF ACDC (Authentic Chained Data Containers) Internet
Draft <https://github.com/trustoverip/tswg-acdc-specification>

**SAID**

IETF SAID (Self-Addressing IDentifier) Internet
Draft <https://github.com/WebOfTrust/ietf-said>

#### CESR {#cesr .list-paragraph}

IETF CESR (Composable Event Streaming Representation) Internet
Draft <https://github.com/WebOfTrust/ietf-cesr>

#### Semantic Versioning {#semantic-versioning .list-paragraph}

Semantic Versioning Specification 2.0 <https://semver.org>

# Official vLEI Credential Schema

## Requirements

A SAID (Self-Addressing Identifier) is an encoded agile cryptographic
digest of the contents of the schema. Any change to the schema results
in a new SAID. Therefore each and every version of any schema has a
universally unique SAID across all schema and all versions of all
schema. Any copy of a schema that verifies against the SAID published in
the following table can be assumed to be identical to any other copy
that verifies to the same SAID by virtue of the strong collision
resistance of the digest employed.

1.  The digest algorithm employed for generating schema SAIDs MUST have
    an approximate cryptographic strength of 128 bits.

2.  The SAID MUST be generated in compliance with the IETF-SAID internet
    draft specification and MUST be encoded using CESR. The CESR
    encoding indicates the type of cryptographic digest used to generate
    the SAID.

3.  The schema MUST be JSON-Schema 2020-12 compliant. The table in 2.3
    below provides the normative SAIDs for each of the official schema.

## Versioning

As ACDCs (Authentic Chained Data Containers), the vLEI schema uses
composition operators from JSON Schema. This allows extensibility in
schema such that in many cases, newer schema versions may be backward
compatible with older schema versions. A new schema version is
considered backward incompatible with respect to a previous version of a
schema when any instance of a vLEI credential that validates against the
previous version of the schema may not be guaranteed to validate against
the new version.

1.  As per the semantic versioning rules, a backward incompatible schema
    MUST have a higher MAJOR version number than any backward
    incompatible version.

## Schema Table

The following table provides, in descending order, row-by-row, the
latest version, the SAID, and the type of each official schema, along
with a URL. The URL is a network location where a copy of the schema may
be obtained. Updated versions will be added to the top of the table upon
designation by GLEIF as official Governing Body of the vLEI Ecosystem.
The version number for each schema follows the Semantic Versioning 2.0.0
specification.

---

**Version** **SAID** **Type** **URL**

---

1.0.0 ELqriXX1-lbV9zgXP4BXxqJlpZTgFchll3cyjaCyVKiz QualifiedvLEIIssuervLEICredential <https://github.com/WebOfTrust/vLEI/blob/dev/schema/acdc/qualified-vLEI-issuer-vLEI-credential.json>

1.0.0 EK0jwjJbtYLIynGtmXXLO5MGJ7BDuX2vr2_MhM9QjAxZ LegalEntityvLEICredential <https://github.com/WebOfTrust/vLEI/blob/dev/schema/acdc/legal-entity-vLEI-credential.json>

1.0.0 EDqjl80uP0r_SNSp-yImpLGglTEbOwgO77wsOPjyRVKy OORAuthorizationvLEICredential <https://github.com/WebOfTrust/vLEI/blob/dev/schema/acdc/oor-authorization-vlei-credential.json>

1.0.0 EIL-RWno8cEnkGTi9cr7-PFg_IXTPx9fZ0r9snFFZ0nm LegalEntityOfficialOrganizationalRolevLEICredential <https://github.com/WebOfTrust/vLEI/blob/dev/schema/acdc/legal-entity-official-organizational-role-vLEI-credential.json>

1.0.0 ED_PcIn1wFDe0GB0W7Bk9I4Q_c9bQJZCM2w7Ex9Plsta ECRAuthorizationvLEICredential <https://github.com/WebOfTrust/vLEI/blob/dev/schema/acdc/ecr-authorization-vlei-credential.json>

1.0.0 EOhcE9MV90LRygJuYN1N0c5XXNFkzwFxUBfQ24v7qeEY LegalEntityEngagementContextRolevLEICredential <https://github.com/WebOfTrust/vLEI/blob/dev/schema/acdc/legal-entity-engagement-context-role-vLEI-credential.json>

1.0.0 EJEMDhCDi8gLqtaXrb36DRLHMfC1c08PqirQvdPPSG5u iXBRLDataAttestation <https://github.com/WebOfTrust/vLEI/blob/dev/schema/acdc/verifiable-ixbrl-report-attestation.json>

---

# Informative Notes

At some time in the future, this registry document may be augmented with
a live registry that follows the future Trust over IP (ToIP) Trust
Registry Protocol specification. The current in progress draft may be
found
here: <https://docs.google.com/document/d/1ZGXUB0oODHO66PQkO66-fbAu6f7sVVToOz3Q8RNG0fs/edit>
