---
title: TEST3
---

## Definition

<div data-level="1">

Integrity (of a message or data) means that the information is whole, sound, and unimpaired (not necessarily correct). It means nothing is missing from the information; it is complete and in intended good order. (Source: Neil Thomson)

</div>

<div data-level="2">

## KERI suite criteria

In KERI's "security first" approach Authenticity includes _technical integrity_ of data involved. This includes:

1. [internal consistency](internal-inconsistency)
2. external consistency or [duplicity](duplicity) evident

</div>

<div data-level="1">

Integrity in ACDCs is "self-verifying": the [SAID](self-adressing-identifier) that is contained in the data is also the of hash of the data.

</div>

<div data-level="3">

The integrity of streaming data in [CESR](composable-event-streaming-representation) and [CESR proof signatures](cesr-proof-signature) is established by code tables and verifiable by the mere (killer-)feature: round-robin [composability](composability). If you can toggle between the text - and binary representation, _then that's the integrity proof_, if not, then it's provably lacking integrity.

</div>

<div data-level="2">

A side-benefit of how integrity is implemented in KERI is [non-repudiation](non-repudiable) - done via a crypto-hash verification via the signer's public key - is not inherent in the meaning of integrity.

</div>

<div data-level="1">

Furthermore for KERI integrity, as an assessment of the substance or the content itself, does not fall within its narrow definition.
**Our criterium is cryptographic verifiability**. Once you can't verify, for KERI this type of non-technical integrity is not included in `integrity`. For the same reason we wouldn't use [validation](validate)\* as a mechanism to prove integrity.

## ToIP related

On today's Technology Architecture TF call,..., we defined authenticity to include integrity.\
[Source ToIP issue 10](https://github.com/trustoverip/TechArch/issues/10)

[message integrity](https://github.com/trustoverip/TechArch/issues/10) seems to be included in `technical integrity`.

The further separation of Authenticity and Integrity in the ToIP glossary can be largely adopted by KERI? {TBW}

## See also

[verified integrity](verified-integrity)\
[(complementary) integrity verification](complementary-integrity-verification)

\*Validation in relation to integrity, in KERI's view would be an assessment of what's been verified before; in a certain context from a certain angle. And this mechanism is too close to _veracity judgement_, to be an objective verdict over integrity of data.

</div>
