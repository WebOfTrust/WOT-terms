## definition

The most compact form of an ACDC. This is the only signed variant of an ACDC and this signature is anchored in a transaction event log (TEL) for the ACDC.
This is one valid choice for an ACDC schema. \
This form is part of the graduated disclosure mechanism in ACDCs.

## Anchoring to the TEL

The extra a fully compact version has to offer over a [most compact](most-compact.md) version is the anchoring to the [Tranaction event log](transaction-event-log.md). Here were various proofs ([hashes](hash.md)) can be "stored" which are optional in all kind of [ACDC](ACDC.md) variants.

## See

[Fully (expanded)](fully-expanded.md) version of an ACDC\
[Most compact](most-compact.md) version of an ACDC.

## Analogy

A fully compact ACDC is like the core of an onion and the fully expanded ACDC is like rest of the outer layers of the onion. Turn this onion inside-out: you only need to sign the core (most compact), and then the whole onion (expanded version) would verify. The complete (expanded) onion is the most user friendly information bulb you can get, and you don't need to peel off all the rings of the onion to securely attribute _all_ the information to the controller of the [SAID](said.md) that signed the core.

You can present any version of the onion you like: only the core, one partially stripped back, one layer at a time, or the whole thing (fully expanded). This illustrates part of the rational for why ACDCs matter. They offer a layered, graduated disclosure mechanism of verifiable credentials never seen before in the SSI field.
