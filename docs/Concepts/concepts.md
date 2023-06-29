# Concepts

[![hackmd-github-sync-badge](https://hackmd.io/TYKEsJ5OQy-4w78NUGRSMA/badge)](https://hackmd.io/TYKEsJ5OQy-4w78NUGRSMA)

THIS IS UNDER CONSTRUCTION
Would you like to contribute? Join us at the Concepts, Terms and Edu [bi-weekly Zoom session](./term_agenda.md)

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

The intention is to have _resources_ (glossaries, videos, etc.) and _howtos_ available continuously. It'll hopefully improve over time.
The resulting static **WebofTrust-site** is already here: https://weboftrust.github.io/WOT-terms/ and will be automatically generated with Github Actions.
All intermediate results are also **directly available**:

- [resources](https://github.com/WebOfTrust/WOT-terms/tree/main/resources)
- [howtos](https://github.com/WebOfTrust/WOT-terms/tree/main/howto)
- Glossaries: [TrustoverIP/ACDC](https://github.com/trustoverip/acdc/wiki) and [eSSIF-lab](https://essif-lab.github.io/framework/docs/essifLab-glossary)

## Related

The [Mental Model](https://github.com/WebOfTrust/WOT-terms/blob/main/mental-model.md) of KERI suite gives the frame of reference for our concepts below.

#### Vision

We reuse and reorganise as much as possible, using open source tools.

Contributions welcome!

<img src="https://hackmd.io/_uploads/r1BYbPfA5.png" class="img-fluid" alt="CDCI design for WOT-terms" />

## Explanation of concepts

Concepts use existing terms (which could create confusion) and introduces new terminology. It's aimed at identity experts in general and Self-Sovereign Identity experts specifically.

### Familiar terms

We explain the terminology at various [levels of understanding](term_README.md#levels-of-understanding.md), and also **our criteria** how we judge certain terms to be defined for the sake of KERI / ACDC. E.g. `multisignatures`, `validators` and `verifiers`. What are they exactly?

### Use cases and domains

Understanding could vary in different domains and use-cases (e.g. a controller in finance is quite different from a controller of an identifier). We need to be sure that sender and recipient are talking about "the same thing".

### New terminology, acronyms and abbreviations

KERI is a new development. ACDC is build on top of KERI; so it's new too. Inevitably, new terminology has surfaced in the design of KERI and ACDC. In this `concepts` page we try to explain related terms in a few [levels of understanding](./term_README.md#levels-of-understanding.md). We've used analogies and symbols to clear up complex and intangible concepts for those new to KERI / ACDC and even for those experts that we consider being 'advanced'. The ultimate goal is to try to make sense in the perception of respectively the newbie - and the advanced identity expert.

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

#### Open source licensing

The KERI team maintains the following rules of thumb for all the repos in the [WoT project](https://github.com/WebOfTrust):

- '_outgoing == incoming_' policy ([Read more](#outgoing-is-incoming))
- No restrictions more stringent than Apache2 ([No poisoning](#no-poisoning))
- comprehensive licensing
- No splitting contributions between different licenses
- Possible to have less restrictive outgoing than incoming ( [Read more](##possibility-to-have-less-restrictive-outgoing-than-incoming) )

##### Outgoing is incoming

All the repos in the [WoT project](https://github.com/WebOfTrust) where the KERI code and related standards reside, have a '_outgoing == incoming_' policy. This means that someones use (outgoing) of a contribution (incoming) is on the same basis or license.

##### No poisoning

Prevent contributions to the code from being poisoned by other contributions that have a different i.e. more restrictive outgoing license, because once contributed there is no way to separate contributions.

> Example:
> IETF requires that IETF spec language be contributed under BSD not Apache2. But BSD is no less restrictive than Apache2 for outgoing so it does not poison the apache2 contributions. A consumer can consume under apache2 or via IETF through BSD. BSD is no more restrictive than Apache2. The license for the IETF spec repos in WoT include the BSD outgoing in addition to Apache2 for this reason.

##### Possibility to have less restrictive outgoing than incoming

or have multiple outgoing licenses that are of the same or less level of restriction but with different names because some consumers want to consume (outgoing) under a different license.

**Manifestation:**\
**Apache2 license default**

#### Trust spanning layer for the internet

Need: Fix the limitations of the original PKI-based WebofTrust.
Goal: Achieve a truly decentralized trust spanning layer for the Internet; (see [Hourglass Model](https://cacm.acm.org/magazines/2019/7/237714-on-the-hourglass-model/fulltext))

Manifestation:\
security - maximum coverage (extensible prefixes) - no middle men - portability

#### Secure Attribution over the internet - verifiability to root-of-trust - no middlemen

We only have one set of tools for truly secure data control! Cryptographic one-way functions! [source](https://www.youtube.com/watch?v=L82O9nqHjRE)

<!-- #######NEW BLOCK####### -->

### Objectives of Authentic Chained Data Containers (ACDC)

#### Veracity of credentials through authoritative proof of authorship

#### Self-contained data - Self addressing identifier - self proving data blocks - provable consistency - signed commitments by controllers of the identifiers

<!-- #######NEW BLOCK####### -->

### Practical principles

#### Foreseeable future

All designs accommodate for the foreseeable future in terms of size and number of types or variations.

#### Simple cryptography, which has a long standing durability record

#### Minimal sufficient means to an end - thresholded multi signs

Example in CSER:

> The design aesthetic is based on the understanding that there is a minimally sufficient cryptographic strength and more cryptographic strength is just wasting computation and bandwidth.
> The accepted minimum for cryptographic strength is 128 bits of entropy or equivalently 2\*\*128 (2 raised to the 128th power) brute force trials.
> [Source](https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#compact-fixed-size-codes) IETF Draft CESR

#### Round-robin transposable streaming format text-binary-text-binary-etc

#### Out-of-band introduction - strong in-band validation

#### Possibilty to transfer off a leger

See the features here : https://github.com/trustoverip/acdc/wiki/transfer-off-ledger

#### Use dumb crypto

"The point is to be used, not to use the latest, coolest technique that is also very difficult to implement properly. That's the principle of KERI: solve a problem in the real world with the minimum techniques needed. The dumber the technology, but still sufficient to solve the problem, the better. 'Dumb technology' is freely available, understandable to everyone and easy to implement. In our case: just hashes and digital signatures."
Source: [Sam Smith](https://docs.google.com/document/d/1quOTSGPuFXa_pduaGSHWY8LpfXZiYjzR) 2022

### Development choices

#### Semantic Naming in KeriPy

Samuel Smith about `English Semantic Naming`:

- English has operators and has 6M words. Operators can be used to create valid words that are not in the dictionary. 6 million words in the English language, many relatively unused, and without baggage.

> GOAL: Keep KERIpy more readable with short, evocative names.

- To Polysemy (ambiguity): ‘Type’ as an example -> too many meanings, you need to disambigue this
- Book “C elements and style” is advised: https://www.amazon.com/Elements-Style-Programmers-Elegant-Programs/dp/1558512918

> Example: Habitat ‘where everything resides’ -> Hab -> Habery

##### Conventions

1. {noun}
2. Er = object instances that do stuff
3. Ery = factory classes or classes that manage other classes
4. {noun}+s -> Sigs, Sigers = a list of Sig and a list of Siger

> Example II:
>
> - siger - creates signatures
> - sig - would be qb64 representation of a signature
> - sigs - would be a list of signatures

#### REST API

ACDC has been implemented inside of keripy. We have full credential issuance, revocation and streaming support in both the REST API as well as the command line.\
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
serialization indicates a preferred content-addressable identifier for that serialization that facilitates **greater interoperability**, **reduced ambiguity**, and **enhanced security** when reasoning about the serialization. Moreover, given sufficient cryptographic strength, a cryptographic commitment such as a signature, digest, or another SAID, to a given SAID is essentially equivalent to a commitment to its associated serialization. Any change to the serialization invalidates its SAID thereby ensuring secure immutability evident reasoning with SAIDs about serializations or equivalently their SAIDs. Thus SAIDs **better facilitate immutably** referenced data serializations for applications such as Verifiable Credentials or Ricardian Contracts.\

[Source](https://datatracker.ietf.org/doc/draft-ssmith-said/)

<!-- #######NEW BLOCK####### -->

### [Objectives ACDC](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/concepts.md#objectives-acdc)

#### Barriers to Adoption of Linked Data VCs

The purpose of this paper is to capture and convey to a broader audience my increasingly worrisome concerns about the adoption path for Verifiable Credentials (VCs). My concerns began with the security limitations of VCs that use Linked Data (otherwise known as JSON-LD/RDF) and have since extended to the semantic inference limitations of Linked Data. My concerns may be expressed succinctly as, the VC standard appears to be an adoption vector for Linked Data, not the other way around. My overriding interest is that the concept of a VC as a securely attributable statement is a very powerful and attractive one and therefore should be widely adopted. We should therefore be picking the best technologies that best support broad VC adoption, not the other way around.\
[Source:](.md) VC Spec Enhancement Strategy Proposal by Sam Smith

<!-- #######NEW BLOCK####### -->

### Framework conditions

#### Its and Bits - Cryptography and one-way functions is the only thing than can safe our digital twin

Use [trans-contextual value](term_trans-contextual-value.md) creation and capture to fuel cooperative network effects.

#### Network dynamics - centralized system will lose

#### Moore’s law in IoT - centralized systems not capable of handling exponentially growing numbers

#### Anonymity is non-existing anymore - second best is expensive and timely pseudonymity

Sam is going to develop this

## Guiding Principles

<!-- #######NEW BLOCK####### -->

### Design principles

#### Security first (no compromise), then confidentiality (gradually give up in exchange for), then privacy (personal choice within the boundaries of confidentiality at hand)

**Security: technical**\
Sufficient cryptographic strength (quantum safe)\
Everything signed enforced ([strong bindings](#strong-bindings) and commitments, immutability)\
[Verifiable to root-of-trust](#verifiable-to-the-root-of-trust) (no middlemen)\
Fine-grained control mechanisms (lossless scalable in every technical direction; speed, prog.languages, codetables in CESR, )\
Proven technology for cryptographic functions (robustness)\
Interoperable by design (covers everthing; internet and off-line)\
Minimalized attack surface (reuse of primitives)\
Continuous internal and external consistency checks of data structures (duplicity)

**Security: human self protection**\
Private keys as far away from agents as possible (only signatures exposed)\
pre-rotation (double-checked control authority)\
Rotation (act when you smell danger)\
Delegation (engage service provider without losing control; middleman on a leash)\
Revocation (minimize effects of adversely situation)\
Scalable witness & watchers network (reconciliation options; [first seen](.md))\
Round-robin composable streaming (for readability of commitments)\
Tamper evident (duplicity checks)\
Non-repudiation

#### KERI can't be (that) secure when

- Private keys are not being kept private
- Private keys are reused over and over to sign stuff

#### KERI can't be (that) confidential when

- Controller binds cryptographic protected data to him/herself (by mistake)
- Graduated disclosure isn't used
  {TBW}

#### KERI can't be (that) privacy protecting when

- Third party binds cryptographic protected data to other actors involved (by mistake)
  {TBW}

#### Difference between privacy and confidentiality

| BASIS FOR COMPARISON | PRIVACY                                                                      | CONFIDENTIALITY                                                                                                                            |
| -------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Meaning              | The state of being secluded is known as Privacy.                             | Confidentiality refers to the the situation when it is expected from someone that he will not divulge the information to any other person. |
| What is it?          | It is the right to be let alone.                                             | It is an agreement between the persons standing in fiduciary to maintain the secrecy of sensitive information and documents.               |
| Concept              | Limits the access of the public.                                             | Prevents information and documents from unauthorized access.                                                                               |
| Applies to           | Individual                                                                   | Information                                                                                                                                |
| Obligatory           | No, it is the personal choice of an individual                               | Yes, when the information is professional and legal.                                                                                       |
| Disallowed           | Everyone is disallowed from involving the personal affairs of an individual. | Only unauthorized persons are disallowed from using the information.                                                                       |

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/privacy-vs-confidentiality.png" alt="privacy-vs-confidentiality table" class="img-fluid" /> [Source: ](https://keydifferences.com/difference-between-privacy-and-confidentiality.html) Keydifferences.com

#### Strong bindings

_Security first_

#### Verifiable to the root of trust

_Security first_, _confidentiallity_, _privacy_

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

#### Key events - sequence number - first seen

#### Transaction event log (TEL) separated - anchored in KEL - minimal sufficient means - secondary root-of-trust (dependent of anchoring KEL for primary root-of-trust validation)

#### Ambient verifiability - hash chained data structures - scalable

#### Content addressable hashes - uniqueness - finding - unchanged

#### Non-repudiability

See [glossary item](https://github.com/trustoverip/acdc/wiki/non-repudiable)

#### First seen - timing solution - overload protection

KERI alternative to total global ordering and consensus protocols is a mechanism called [duplicity](term_duplicity.md) detection. In the [verification](term_verifiers.md) and [validation](term_validation.md) **watchers are all that matter**; they guarantee that logs are immutable by one very simple rule: "[first seen](term_first-seen.md) wins".

#### Pre-rotation - quantum protection - security fallback (exposure, theft) - portray changing power dynamics

#### Rotation - transfer of control authority without transaction - scalable

#### Event streaming

Because the cryptographic material in the events may be of variable length, a fixed field length serialization is not a viable approach. Consequently KERI must support variable length field serialization.

Only the controller of the associated identifier prefix may compose KERI events, the ordering of elements in the event serialization may be determined solely by that controller. Other entities may sign the event serialization provided by the controller but do not need to provide a serialization of their own.

In summary, the necessary constraint for complete event serialization is support for arbitrary data structures with variable length fields that are serializable and de-serializable in multiple formats. Reproducible ordering is not a necessary constraint. [Source](https://github.com/decentralized-identity/keri/blob/master/kids/kid0003.md)

#### JSON-LD and triples are too simple (only "is"/"has") - we are proponents of property graphs

#### CESR composeable without having to parse (in CBOR this is needed)

([Source](https://medium.com/happy-blockchains/cesr-one-of-sam-smiths-inventions-is-as-controversial-as-genius-d757f36b88f8))

CESR uses a parse table so the same parsing code works on all codes.

#### text and binary domains

The text domain representation of a stream enables better usability (readability) and the binary domain representation of a stream enables better compactness.

#### Pipelined hierarchical composition codes

Allow efficient conversion or off-loading for concurrent processing of composed (concatenated) groups of primitives in a stream without having to individually parse each primitive before off-loading.

**CESR is digital data streaming that**

1. can freely concatenate pieces of data
2. Has a fixed streamlet size in both text and binary format
3. Converts back and forth from text to binary without data loss and round robin
4. Is able to express complex data structures
5. Is extensible with derivation codes
6. Is extremely compact
7. Works asynchronously, e.g. collecting primitives, such as individual signatures of a Multisig from the web.
8. Is ready for post-quantum cryptography
9. Contributes to legally sound identifiers, because everything is “readable” in text format.

“CESR doesn’t provide post-quantum proofing. The hash does. CESR just makes it easier to process the crypto material. How you use crypto material is not up to CESR.”
Samual M. Smith\
This list of reinforcing features might make you think of new fields of application. That’s not entirely surprising and, to reiterate, that was my only goal with this article.\
Let me offer you a few applicable and hopefully inspiring facts to play around with in your head.\
Composability allows text domain streams of primitives or portions of streams (streamlets) to be converted as a whole to the binary domain and back again without loss.\
Fully qualified KERI cryptographic primitives are composable via concatenation in both the text (Base64) and binary domains.\
CESR’s approach to filling its derivation-code tables is a first needed, first served basis.\
In addition CESR’s requirement that all cryptographic operations maintain at least 128 bits of cryptographic strength precludes the entry of many weak cryptographic suites into the tables.

#### Design choices CESR

"There are many coding schemes that could satisfy the composability constraint of alignment on 24-bit boundaries. The main reason for using a text domain-centric encoding is higher usability, readability, or human friendliness. Indeed **a primary design goal of CESR is to select an encoding approach that provides high usability, readability, or human friendliness** in the _text_ domain. This type of usability goal is simply not realizable in the binary domain.\
The _binary_ domain's purpose is merely to **provide convenient compactness at scale**. We believe usability in the text domain is maximized when the _type_ portion of the prepended framing code is stable or invariant. Stable type coding makes it much easier to recognize primitives of a given type when debugging source, reading messages, or documents in the text domain that include encoded primitives. This is true even when those primitives have different lengths or values."\
[Source](https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md) IETF Draft CESR.

There are two possibilities for CESR's coding scheme to ensure a composable 24-bit alignment. The first is to add trailing pad characters post-conversion. The second is to add leading pad bytes pre-conversion. Because of the greater readability of the value portion of both the fully qualified text, T, or fully qualified binary, B, domain representations, the second approach was chosen for CESR.\
[Source](https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#code-characters-and-lead-bytes) IETF Draft CESR.

Good cold start **re-synchronization** is essential to robust performant stream processing. Special CESR count codes support re-synchronization at each boundary between interleaved CESR and other serializations like JSON, CBOR, or MGPK

#### Multiple Code Table Approach

The design goals for CESR framing codes include minimizing the framing code size for the most frequently used (most popular) codes while also supporting a sufficiently comprehensive set of codes for all foreseeable current and future applications. The design strives for a high degree of both flexibility and extensibility. We believe this is best achieved with multiple code tables each with a different coding scheme that is optimized for a different set of features instead of a single one-size-fits-all scheme. [Source](https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#multiple-code-table-approach).

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

We have two types: witnesses (for the controller) and backer to check duplicity in the network. The reason we've done this because we thus avoid the [eclipse attack](.md), that blockchains suffer from.

We foresee witness and watcher hosting services, just like web hosting currently. Technically speaking a watcher and a witness use the same code and protocol, watchers run in [promiscuous mode](.md).

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

Principle: In a society there needs some control and surveillance of individuals (or individual entities) for the sake of the security of society as a whole. However, those situation should be limited to absolute minimum needed and be strictly independently monitored.
We consider all other control and surveillance to be "needless".

Manifestion: A robust witness network along with consistent witness rotation provides protection from monitoring and association of an individual's activity inside a KERI network.\
Source [Phil Feairheller](https://github.com/WebOfTrust/ietf-did-keri/blob/main/draft-pfeairheller-did-keri.md#privacy-considerations)
