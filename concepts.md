# Concepts

THIS IS UNDER CONSTRUCTION
Would you like to contribute? Join us at the Concepts, Terms and Edu [bi-weekly Zoom session](./agenda.md)

Explanation of concepts 

Concepts uses existing terms (which could create confusion) and introduces new terminology. It's aimed at identity experts in general and Self-Sovereign Identity experts specifically.

### Familiar terms

We explain the terminology at various [levels of understanding](#levels-of-understanding), and also **our criteria** how we judge certain terms to be defined for the sake of KERI / ACDC. E.g. `multisignatures`, `validators` and `verifiers`. What are they exactly? 

### Use cases and domains

Understanding could vary in different domains and use-cases (e.g. a controller in finance is quite different from a controller of an identifier). We need to be sure that sender and recipient are talking about "the same thing".

### New terminology, acronyms and abbreviations

KERI is a new development. ACDC is build on top of KERI; so it's new too. Inevitably, new terminology has surfaced in the design of KERI and ACDC. In this `concepts` page we try to explain related terms in a few [levels of understanding](./README.md#levels-of-understanding). We've used analogies and symbols to clear up complex and intangible concepts for those new to KERI / ACDC and even for those experts that we consider being 'advanced'. The ultimate goal is to try to make sense in the perception of respectively the newbie - and the advanced identity expert.

## Concept details

### Objectives of Key Event Receipt Infrastructure (KERI)

#### Open source - Apache2

#### Waist identity layer for the internet - maximum coverage - prefixes

#### Secure Attribution over the internet - verifiability to root-of-trust - no middlemen

<!-- #######NEW BLOCK####### -->
### Objectives of Authentic Chained Data Containers (ACDC)

#### Veracity of credentials through authoritative proof of authorship

#### Self-contained data - Self addressing identifier - self proving data blocks - provable consistency -  signed commitments by controllers of the identifiers

<!-- #######NEW BLOCK####### -->
### Practical principles

#### Simple cryptography, which has a long standing durability record

#### Minimal sufficient means to an end - thresholded multi signs

#### Round-robin transposable streaming format text-binary-text-binary-etc

#### Out-of-band introduction - strong in-band validation

<!-- #######NEW BLOCK####### -->
### Framework conditions

#### Its and Bits - Cryptography and one-way functions is the only thing than can safe our digital twin

#### Network dynamics - centralized system will lose

#### Moore’s law in IoT - centralized systems not capable of handling exponentially growing numbers

#### Anonymity is non-existing anymore - second best is expensive and timely pseudonymity

<!-- #######NEW BLOCK####### -->
### Design principles

#### Security first, then confidentiality, then privacy

#### Strong bindings - security first

#### Verifiable to the root of trust

#### Primary root of trust - sufficient entropy / randomness + Private keys need to be kept private

#### Portability - no anchoring to silos

#### Internal consistency (VDS) and external consistency

#### Key events - sequence number

#### Transaction event log (TEL) separated - anchored in KEL - minimal sufficient means - secondary root-of-trust (dependent of anchoring KEL for primary root-of-trust validation)

#### Ambient verifiability - hash chained data structures

#### Content addressable hashes - uniqueness - finding - unchanged

#### First seen - timing solution - overload protection

#### Pre-rotation - quantum protection - security fallback (exposure, theft) - portray changing power dynamics

#### Rotation - transfer of control authority without transaction

<!-- #######NEW BLOCK####### -->
### Autonomic governance principles and pre-conditions

#### Duplicity - Don’t trust unique identifiers with multiple states per default

#### Reconciliation - use consensus mechanism to try to recover from duplicity

#### Delegation - non-custodial - always staying in control

#### Secondary root-of-trust - non-portable anchoring to blockchains as an extra layer of guarantee (above KELs)

<!-- #######NEW BLOCK####### -->
### Human governance principles and pre-conditions

#### Freedom of witness and backer organization

#### Freedom of validator and watchtower organization

#### Private keys need to be kept private

#### Validation of Key event logs to the point where you arrived last time

<!-- #######NEW BLOCK####### -->
### Criteria we share with the SSI community

#### 10 principles of SSI

#### SSI identity book Reed / Preuschat

#### Key management and asset planning
