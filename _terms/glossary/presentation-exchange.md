## Definition
An exchange that provides disclosure of one or more [ACDC](term_authentic-chained-data-container)s between a Discloser and a Disclosee.

A presentation exchange is the process by which [authenticatable](term_authentication) information may be exchanged between two parties, namely, the [Discloser](term_discloser) and [Disclosee](term_disclosee).

## Rule
Each ACDC MUST have an [Issuer](term_issuer) and MAY have an [Issuee](term_issues). The set of [ACDC](term_ACDC)s so disclosed in a presentation exchange MUST be chained. This set of chained ACDCs define a [directed acyclic graph](term_directed-acyclic-graph) that MUST have at least one vertex and MAY have zero or more edges pointing to other vertices.

