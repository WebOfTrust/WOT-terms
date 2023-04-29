## Definition

An exchange that provides disclosure of one or more [ACDC](authentic-chained-data-container.md)s between a Discloser and a Disclosee.

A presentation exchange is the process by which [authenticatable](authentication.md) information may be exchanged between two parties, namely, the [Discloser](discloser.md) and [Disclosee](disclosee.md).

## Rule

Each ACDC MUST have an [Issuer](issuer.md) and MAY have an [Issuee](issues.md). The set of [ACDC](ACDC.md)s so disclosed in a presentation exchange MUST be chained. This set of chained ACDCs define a [directed acyclic graph](directed-acyclic-graph.md) that MUST have at least one vertex and MAY have zero or more edges pointing to other vertices.
