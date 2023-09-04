## Definition
special framing codes can be specified to support groups of [primitives](primitives.md) in [CESR](composable-event-streaming-representation.md). Grouping enables [pipelining](pipelining.md). Other suitable terms for these special framing codes are _group codes_ or _count codes_ for short. These are suitable terms because these framing codes can be used to count characters, primitives in a group, or groups of primitives in a larger group when parsing and off-loading a stream of CESR primitives.\
[Source](https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#count-group-or-framing-codes)

## Composability property
One of the primary advantages of composable encoding is that we can use special framing code to support the above mentioned grouping.

