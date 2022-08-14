# Concepts

[![hackmd-github-sync-badge](https://hackmd.io/TYKEsJ5OQy-4w78NUGRSMA/badge)](https://hackmd.io/TYKEsJ5OQy-4w78NUGRSMA)


THIS IS UNDER CONSTRUCTION
Would you like to contribute? Join us at the Concepts, Terms and Edu [bi-weekly Zoom session](./agenda.md)

## What is this?
This concepts page explains the main design objectives of KERI and ACDC, which results in a scope (or context) and links them to
1. the things we've designed (whitepapers, technical designs)
2. the things we've created (repos and code)
3. the terminology we use.

## Why this page?
To be better and quicker understood. It's a way to anchor our language and the words we use to our objectives. This pages shares and exchanges our criteria to why and in which situation something is important to us.

## For Whom?
The ultimate goal is to make sense in the perception of respectively the newbie -, the advanced - and the advanced **identity expert**.\
We'll not try to reach out to laymen.

## How?
A static site generated on Github, that uses resources all over the web and can be commented on.

Also a [howto](https://github.com/WebOfTrust/WOT-terms/tree/main/howto) will be written along side to inform contributors how to add, link and amend resources.

## When?
The intention is to have *resources* (glossaries, videos, etc.) and *howtos* available continuously. It'll hopefully improve over time. 
The resulting static **WebofTrust-site** is already here: https://weboftrust.github.io/WOT-terms/ and will be automatically generated with Github Actions.
All intermediate results are also **directly available**:
- [resources](https://github.com/WebOfTrust/WOT-terms/tree/main/resources)
- [howtos](https://github.com/WebOfTrust/WOT-terms/tree/main/howto)
- Glossaries: [TrustoverIP/ACDC](https://github.com/trustoverip/acdc/wiki) and [eSSIF-lab](https://essif-lab.github.io/framework/docs/essifLab-glossary)

#### Vision
We reuse and reorganise as much as possible, using open source tools. 

Contributions welcome!

<img src="https://hackmd.io/_uploads/r1BYbPfA5.png" width="1000" alt="CDCI design for WOT-terms">

## Explanation of concepts 

Concepts use existing terms (which could create confusion) and introduces new terminology. It's aimed at identity experts in general and Self-Sovereign Identity experts specifically.

### Familiar terms

We explain the terminology at various [levels of understanding](#levels-of-understanding), and also **our criteria** how we judge certain terms to be defined for the sake of KERI / ACDC. E.g. `multisignatures`, `validators` and `verifiers`. What are they exactly? 

### Use cases and domains

Understanding could vary in different domains and use-cases (e.g. a controller in finance is quite different from a controller of an identifier). We need to be sure that sender and recipient are talking about "the same thing".

### New terminology, acronyms and abbreviations

KERI is a new development. ACDC is build on top of KERI; so it's new too. Inevitably, new terminology has surfaced in the design of KERI and ACDC. In this `concepts` page we try to explain related terms in a few [levels of understanding](./README.md#levels-of-understanding). We've used analogies and symbols to clear up complex and intangible concepts for those new to KERI / ACDC and even for those experts that we consider being 'advanced'. The ultimate goal is to try to make sense in the perception of respectively the newbie - and the advanced identity expert.

## Concept details (NO ORDERING yet)

### Values

#### Social values
- existance and persistance
- access and transparency
- privacy - consent to use
- confidentiality - minimal disclosure

#### Societal values
- commitment en compliance to rules - signature
- freedom of speech and movement - inception of AIDs, rotation
- self-sovereignty - delegation and revocation
- Protection – users’ rights, censorship-resistant

### Objectives of Key Event Receipt Infrastructure (KERI)

#### Freedom

KERI came to be in occasional happenings, online and in-person, in which individuals voluntarily participated. It has no members, and no dues. This is how the KERI community strives to further work. 

Manifestation: KERI has found the IETF as a home. This is because its value statement and organizational principles strongly resonate with KERI.

#### Open source

Manifestation:\
Apache2

#### Trust spanning layer for the internet
Need: Fix the limitations of the original PKI-based WebofTrust.
Goal: Achieve a truly decentralized trust spanning layer for the Internet; (see [Hourglass Model](https://cacm.acm.org/magazines/2019/7/237714-on-the-hourglass-model/fulltext))

Manifestation:\
security - maximum coverage (extensible prefixes) - no middle men - portability

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

#### Use dumb crypto
"The point is to be used, not to use the latest, coolest technique that is also very difficult to implement properly. That's the principle of KERI: solve a problem in the real world with the minimum techniques needed. The dumber the technology, but still sufficient to solve the problem, the better. 'Dumb technology' is freely available, understandable to everyone and easy to implement. In our case: just hashes and digital signatures."
Source: [Sam Smith](https://docs.google.com/document/d/1quOTSGPuFXa_pduaGSHWY8LpfXZiYjzR) 2022

### Development choices

#### REST API

ACDC has been implemented inside of keripy.  We have full credential issuance, revocation and streaming support in both the REST API as well as the command line.\
Source P. Feairheller, 2022

#### It's under construction

> "We don't have version 1 of the specs of KERI yet.""

As soon as we do, the code will look the version up, and act accordingly (backward compatibility).

We split the KERIpy repo in two branches `dev` and `main`, so people can rely on a stable production version in `main`.

## ACDC
1. Authentic
2. Chained
3. Data containers (serialization of them)
Mainly through SAIDs.

### Self-Adressing Identifiers

Embedding a SAID as a field in the associated
serialization indicates a preferred content-addressable identifier for that serialization that facilitates **greater interoperability**, **reduced ambiguity**, and **enhanced security** when reasoning about the serialization.  Moreover, given sufficient cryptographic strength, a cryptographic commitment such as a signature, digest, or another SAID, to a given SAID is essentially equivalent to a commitment to its associated serialization.  Any change to the serialization invalidates its SAID thereby ensuring secure immutability evident reasoning with SAIDs about serializations or equivalently their SAIDs.  Thus SAIDs **better facilitate immutably** referenced data serializations for applications such as Verifiable Credentials or Ricardian Contracts.\

[Source](https://datatracker.ietf.org/doc/draft-ssmith-said/)


<!-- #######NEW BLOCK####### -->
### [Objectives ACDC](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/concepts.md#objectives-acdc)
<!-- #######NEW BLOCK####### -->
### Framework conditions

#### Its and Bits - Cryptography and one-way functions is the only thing than can safe our digital twin

#### Network dynamics - centralized system will lose

#### Moore’s law in IoT - centralized systems not capable of handling exponentially growing numbers

#### Anonymity is non-existing anymore - second best is expensive and timely pseudonymity

Sam is going to develop this

## Guiding Principles 

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

#### CESR composeable without having to parse (in CBOR this is needed)

#### GDDP True gossip protocol AND Round Robin (KERI meeting Tue Aug 9)

<!-- #######NEW BLOCK####### -->
### Autonomic governance 
principles and pre-conditions

#### Duplicity - Don’t trust unique identifiers with multiple states per default

#### Reconciliation - use consensus mechanism to try to recover from duplicity - scalable

#### Delegation - non-custodial - always staying in control - scalable

#### Secondary root-of-trust - non-portable anchoring to blockchains as an extra layer of guarantee (above KELs)

<!-- #######NEW BLOCK####### -->
### Human governance 
principles and pre-conditions

#### Freedom of witness and backer organization - extensible - scalable

#### Freedom of validator and watchtower organization - extensible - scalable

#### Private keys need to be kept private

#### Validation of Key event logs to the point where you arrived last time

#### Strive to minimize correlation 
Correlation between identifiers and there controlling human beings and binding of identifiers to human beings in general.

#### ALl we can do to guarantee sufficient randomness, we (advise to) do
Applying salts, stretching passwords, etc.


<!-- #######NEW BLOCK####### -->
### Sharing SSI-community values

#### Open source
There are a few commons reasons to choose development tools. Mostly because they have the following features:

- open source
- not patented
- best of breed
- universally applicable
- tested for a few years

#### Zero trust

#### 10 principles of SSI
The 10 principles were coined by Christopher Allen, one of the pioneers within this world, concerning the Self-Sovereign Identity (SSI). According to Allen, SSI can be interpreted in two ways: the first is ideological, which (key reading) affirms the importance of being able to control one’s own identity on the network without the need to counter trust; the second is technological, which means analysing which technologies and technological standards can enable this objective. 
The 10 principles of the SSI are precisely intended to define what values and goals the idea and technology should pursue. They were first enunciated in [Allen’s blog](http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html).\
We've integrated the 10 principles in [Social Values](#social-values) and [Societal Values](#societal-values) above.


#### SSI identity book Reed / Preuschat

#### Key management and asset planning

#### Prevent repeated use of a public key 
It weakens them, because it exposes it and allows people an opportunity to try and work against it.

#### Self-determination
It's all your own identifier and you're controlling your identifier, so it's up to you what security constraints you want for that identifier. Anchoring, witness pools, thresholds, etc.

#### Permission-less society
Best and compactly described by Daniel Hardman in [Security, Silos, and Sovereignty](https://daniel-hardman.medium.com/security-silos-and-sovereignty-522e30bb8eb4) 2022:\
"SSI is not bestowed by corporate IT (Active Directory/LDAP systems); it’s not granted by internet giants (“sign in with Google/Facebook”); it’s not arranged through single sign-on vendors. SSI is for ordinary people who detest their messy collection of usernames and passwords, and just want bad guys to go away and good guys to enjoy the trust they deserve. SSI puts us — not institutions that leak our data to hackers, sell our data to partners, or surveil us for their own purposes — in charge. It also empowers governments, businesses, and other institutions that want to revolutionize privacy, redefine the cybersecurity and regulatory landscape, reduce cost and risk, keep people safe in pandemics, and do right by the people they serve."

#### No needless control, no needless surveillance
Principle: In a society there needs some control and surveillance of individuals (or individual entities) for the sake of the security of soceity as a whole. However, those situation should be limited to absolute minimum needed and be strictly independently monitored.

Manifestion: A robust witness network along with consistent witness rotation provides protection from monitoring and association of an individual's activity inside a KERI network.\
Source [Phil Feairheller](https://github.com/WebOfTrust/ietf-did-keri/blob/main/draft-pfeairheller-did-keri.md#privacy-considerations) 