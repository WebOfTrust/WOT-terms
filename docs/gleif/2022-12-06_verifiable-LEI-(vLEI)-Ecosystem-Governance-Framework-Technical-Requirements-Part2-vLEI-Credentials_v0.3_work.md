## verifiable LEI (vLEI)

## Ecosystem Governance Framework

## Technical Requirements Part 2: vLEI Credentials

```
Public
Version 0. 3
2022 - 12 - 06
```

```
verifiable LEI (vLEI) Ecosystem Governance Framework
Technical Requirements Part 2: vLEI Credentials
```

```
Page 2 of 5
```

```
Public
2022 - 12 - 06 _verifiable-LEI-(vLEI)-Ecosystem-Governance-Framework-
```

```
Version 0. 3
2022 - 12 - 06
```

### verifiable LEI (vLEI) Ecosystem Governance

### Framework Credential Technical Requirements

This Controlled Document will cover all policies regarding the technical requirements for the vLEI
family of Authentic Chained Data Container (ACDC) Credentials, v0.1.

### 1 Credential Specifications

The following policies are necessary to achieve, in order of priority, the security, performance and
usability requirements for the vLEI Ecosystem.

#### 1.1 Specification References

vLEI credentials rely on the following specifications.

1. JSON Required
   https://datatracker.ietf.org/doc/html/rfc
2. JSON Schema Version 2020- 12
   https://json-schema.org/draft/2020-12/json-schema-core.html
3. KERI Decentralized Identifiers (AIDs) did:keri Specification
   https://github.com/WebOfTrust/did-keri
4. Autonomic Identifiers (AIDs)) for Issuers and Holders using the KERI protocol
   https://github.com/WebOfTrust/ietf-keri
5. Self Addressing Identifiers (SAIDs)
   https://github.com/WebOfTrust/ietf-said
6. ToIP Authentic Chained Data Container (ACDC) Specification
   https://github.com/trustoverip/tswg-acdc-specification
7. Composable Event Streaming Representation (CESR) Specification
   https://github.com/WebOfTrust/cesr
8. Composable Event Streaming Representation (CESR) Proof Format
   https://github.com/WebOfTrust/cesr-acdc-proof
9. Issuance and Presentation Exchange Protocol Specification (IPEX)
   https://github.com/WebOfTrust/ietf-ipex
10. Public Transaction Event Log (PTEL) Specification
    https://github.com/WebOfTrust/ietf-ptel

```
verifiable LEI (vLEI) Ecosystem Governance Framework
Technical Requirements Part 2: vLEI Credentials
```

```
Page 3 of 5
```

```
Public
2022 - 12 - 06 _verifiable-LEI-(vLEI)-Ecosystem-Governance-Framework-
```

```
Version 0. 3
2022 - 12 - 06
```

#### 1.2 Specification Version Upgrades

These policies govern migrating to revisions of the vLEI credential specifications.

1. Previous versions explicitly cited by policies in this document MUST be supported for a
   period 18 months.
2. New versions MUST be implemented within a period 12 months after final approval of the
   new version, unless otherwise superseded by revised policies in a new version of the vLEI
   Ecosystem Governance Framework.
3. After upgrading to a new version, implementers MUST NOT begin using any breaking
   changes until the end of the time period required to adopt new versions. For example, v 2.
   must be compatible with v 1 .0 until the end of the v2.0 adoption period. So v2.0 must be
   used in a v1.0 compatible mode.

### 2 Security and Privacy

Required Cryptographic Suites and Security

1. All signatures for the vLEI credentials MUST use Ed25519 Signatures CESR Proof Format.
2. All vLEI credential schema MUST be SIS compliant.
3. All instantiated vLEI credentials MUST be ACDC compliant.
4. All SAIDs MUST use the cryptoBlake3-256 digest.

The Legal Entity Engagement Context Role vLEI Credentials MAY include PII (personal identifying
information) and may therefore require some form of privacy protection which is defined in the Legal
Entity Engagement Context Role vLEI Credential Framework.

### 3 Requirements for vLEI ACDCs

The ACDC specification is provided here: hhttps://github.com/trustoverip/tswg-acdc-specification

1. Issuer and Holder Identifiers MUST be KERI AIDs that use the did:keri Method.
2. All vLEI credentials MUST include an ACDC version string field.
3. All vLEI credentials MUST support JSON serialization.
   3.1 Additional serializations MAY be introduced at a later time.
4. All vLEI credentials MUST include a SAID (as evidence of immutability).
5. The following ACDC sections MUST include a SAID.
   - Attribute (data payload) section
   - Schema section
   - Rules section

```
verifiable LEI (vLEI) Ecosystem Governance Framework
Technical Requirements Part 2: vLEI Credentials
```

```
Page 4 of 5
```

```
Public
2022 - 12 - 06 _verifiable-LEI-(vLEI)-Ecosystem-Governance-Framework-
```

```
Version 0. 3
2022 - 12 - 06
```

6. Subsections of the preceding sections MAY include a SAID.
7. All source links MUST include the SAID of the referenced ACDC.
8. ACDCs have three primary forms that MUST be supported separately by Issuers, Holders and
   Verifiers using the following rules.
   Form 1 – the Fully-expanded Form in which the schema, attributes and rules are fully
   expanded and embedded.
   Form 2 – the Fully-compressed Form in which only the SAID of each major section is
   included.
   Form 3 – Schema-compressed Form so the only SAID of the schema section is
   included.
9. Issuers MUST support the issuance of vLEI credentials in any or all three forms.
10. Issuers MUST provide the SAIDs at issuance to Holders when issuing forms 2 and 3, by either
    including the SAID in the presentation or including a reference to the highly-available service
    endpoint from which the SAID can be retrieved.
11. Verifiers SHOULD support the verification at presentation of vLEI credentials in any of the
    three forms.
12. Holders SHOULD provide the SAIDs to Verifiers when presenting forms 2 and 3, by either
    including the SAID in the presentation or including a reference to the highly-available service
    endpoint from which the SAID can be retrieved.
13. vLEI credential Issuers SHOULD use the Rules section of the credential in accordance with the
    ACDC specification to impose restrictions on the use of the credential or its attributes.
14. vLEI credential Issuers SHOULD use the Sources section of the credential in accordance with
    the ACDC specification to impose delegated authorization restrictions on the use of the
    credential and/or in conjunction with policy statement 13 above.

### 4 vLEI Credential Schema

1. vLEI credential schema MUST be compliant the SAID and SIS specifications.
2. All vLEI credential schema MUST include a SAID (as evidence of immutability).
3. Each vLEI credential MUST be in compliance with its specific vLEI Credential Governance
   Framework.
   3.1. Each vLEI Credential MUST be chained to its source(s), if any, as required by the
   applicable vLEI Credential Governance Framework in accordance with the ACDC
   specification.

```
verifiable LEI (vLEI) Ecosystem Governance Framework
Technical Requirements Part 2: vLEI Credentials
```

```
Page 5 of 5
```

```
Public
2022 - 12 - 06 _verifiable-LEI-(vLEI)-Ecosystem-Governance-Framework-
```

```
Version 0. 3
2022 - 12 - 06
```

### 5 Composable Event Streaming Representation

### (CESR)

1. The Proof Format for vLEI credentials MUST comply with the Composable Event Streaming
   Representation (CESR) Proof Format specification.
   1.1. Additional proof formats MAY be introduced at a later time.

### 6 Credential issuance and Revocation Registry

### requirements

1. Each vLEI credential Issuer MUST maintain a highly-available issuance and registration
   registry in compliance with the Public Transaction Event Log (PTEL) Specification.
2. Infrastructure for the available issuance and registration registries MAY be shared.
3. Support for privacy-preserving issuance and revocation MAY be supported at a later time.

### 7 Exchange Protocols

1. vLEI credential Issuers MUST comply with the Issuance Exchange Protocol Specification for
   ACDC and KERI.
2. vLEI credential Holders SHOULD comply with the Issuance Exchange Protocol Specification
   for ACDC and KERI.
3. vLEI credential Holders and Verifiers SHOULD comply with the Presentation Exchange
   Protocol Specification for ACDC and KERI.
