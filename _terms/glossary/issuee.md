## Definition
An [ACDC](term_authentic-chained-data-container) is optionally issued to the Issuee. When present, the Issuee identifier ([AID](term_autonomic-identifier)) appears at the top level of the attribute section or in the attribute list at the top level of the attribute aggregate section of the ACDC.

## Rule
Each ACDC MUST have an [Issuer](term_issuer) and MAY have an [Issuee](term_issuee). The set of [ACDC](term_ACDC)s so disclosed in a presentation exchange MUST be chained. This set of chained ACDCs define a [directed acyclic graph](term_directed-acyclic-graph) that MUST have at least one vertex and MAY have zero or more edges pointing to other vertices.