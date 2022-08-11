# Concepts

[![hackmd-github-sync-badge](https://hackmd.io/TYKEsJ5OQy-4w78NUGRSMA/badge)](https://hackmd.io/TYKEsJ5OQy-4w78NUGRSMA)


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

### We don't have version 1 of the specs of KERI
We split the KERIpy repo in two branches `dev` and `main`

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

#### Possibilty to transfer off a leger
See the features here : https://github.com/trustoverip/acdc/wiki/transfer-off-ledger

<!-- #######NEW BLOCK####### -->
### Framework conditions

#### Its and Bits - Cryptography and one-way functions is the only thing than can safe our digital twin

#### Network dynamics - centralized system will lose

#### Moore’s law in IoT - centralized systems not capable of handling exponentially growing numbers

#### Anonymity is non-existing anymore - second best is expensive and timely pseudonymity

#### CESR composeable without having to parse (in CBOR this is needed)

#### GDDP True gossip protocol AND Round Robin (KERI meeting Tue Aug 9)
Sam is going to develop this

<!-- #######NEW BLOCK####### -->
### Design principles

#### Security first (no compromise), then confidentiality (gradually give up in exchange for), then privacy (personal choice within the boundaries of confidentiality at hand)

#### Strong bindings - security first

#### Verifiable to the root of trust

#### Primary root of trust - sufficient entropy / randomness + Private keys need to be kept private

#### Generic classes of self-certifying identifiers

The KERI design approach is to build composable primitives instead of custom functionality that is so typical of other DKMI approaches:

- transferable identifiers
- non-transferable identifiers
- delegated identifiers Consequently when applied recursively, delegation may be used to compose arbitrarily complex trees of hierarchical (delegative) key management event streams. 

This is the arguably most powerful capability that may provide an essential building block for a generic universal decentralized key management infrastructure (DKMI) that is also compatible with the demand of generic event streaming applications.
(new invention) More in the [whitepaper](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf)

#### Portability - no dependent anchoring to silos - extensible - transfer them off a ledger

#### Internal consistency (VDS) and external consistency

#### Key events - sequence number

#### Transaction event log (TEL) separated - anchored in KEL - minimal sufficient means - secondary root-of-trust (dependent of anchoring KEL for primary root-of-trust validation)

#### Ambient verifiability - hash chained data structures - scalable

#### Content addressable hashes - uniqueness - finding - unchanged

#### Non-repudiability
See [glossary item](https://github.com/trustoverip/acdc/wiki/non-repudiable)

#### First seen - timing solution - overload protection
KERI alternative to total global ordering and consensus protocols is a mechanism called [duplicity](duplicity) detection. In the [verification](verifiers) and [validation](validation) **watchers are all that matter**; they guarantee that logs are immutable by one very simple rule: "[first seen](first seen) wins".

#### Pre-rotation - quantum protection - security fallback (exposure, theft) - portray changing power dynamics

#### Rotation - transfer of control authority without transaction - scalable

#### JSON-LD and triples are too simple (only "is"/"has") - we are proponents of property graphs

<!-- #######NEW BLOCK####### -->
### Autonomic governance principles and pre-conditions

#### Duplicity - Don’t trust unique identifiers with multiple states per default

#### Reconciliation - use consensus mechanism to try to recover from duplicity - scalable

#### Delegation - non-custodial - always staying in control - scalable

#### Secondary root-of-trust - non-portable anchoring to blockchains as an extra layer of guarantee (above KELs)

<!-- #######NEW BLOCK####### -->
### Human governance principles and pre-conditions

#### Freedom of witness and backer organization - extensible - scalable

#### Freedom of validator and watchtower organization - extensible - scalable

#### Private keys need to be kept private

#### Validation of Key event logs to the point where you arrived last time

#### Strive to minimize correlation 
Correlation between identifiers and there controlling human beings and binding of identifiers to human beings in general.

#### ALl we can do to guarantee sufficient randomness, we (advise to) do
Applying salts, stretching passwords, etc.

#### Dumb crypto
"The point is to be used, not to use the latest, coolest technique that is also very difficult to implement properly. That's the principle of KERI: solve a problem in the real world with the minimum techniques needed. The dumber the technology, but still sufficient to solve the problem, the better. 'Dumb technology' is freely available, understandable to everyone and easy to implement. In our case: just hashes and digital signatures."
Source: [Sam Smith](https://docs.google.com/document/d/1quOTSGPuFXa_pduaGSHWY8LpfXZiYjzR) 2022

<!-- #######NEW BLOCK####### -->
### Criteria we share with the SSI community

#### Zero trust

#### 10 principles of SSI

#### SSI identity book Reed / Preuschat

#### Key management and asset planning

#### Prevent repeated use of a public key 
It weakens them, because it exposes it and allows people an opportunity to try and work against it.

#### Self-dertimination
It's all your own identifier and you're controlling your identifier, so it's up to you what security constraints you want for that identifier. Anchoring, witness pools, thresholds, etc.