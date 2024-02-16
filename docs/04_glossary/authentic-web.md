# authentic web
## Definition

The authentic web is the internet as a whole giant verifiable data structure. Also called _Web5_. The web will be one big graph. That's the mental model of the 'authentic web'.

## Related
- `Signed at rest` - the data never throws away any signature of data. Because otherwise we can't validate data in the future
- `Key state at rest` - you need to solve this hard problem too. This is the hard problem [KERI](KERI) solves.
- `Signed in motion` - signatures get thrown away. You use ephemeral identifiers. You have to do everything anew every time you want to reconstruct a verifiable data structure. Therefore we need 'Signed at rest'. 

## Scalability of Key state at rest
- You can append to any part of the (directed-acyclic) [graph](directed-acyclic-graph)
- You can hop into the graph to verify any fragment of the graph
- You don't have to sign the data,you just have to sign hashes of this data
- Every tree that gets integrated in this giant graph-forest has its own [Root of Trust](root-of-trust)

## KERI related
KERI solves all hard problems of the authentic web in a scalable manner.

## Technically oriented deep dive
See more in [Mental Model](https://github.com/WebOfTrust/WOT-terms/blob/main/mental-model.md) of KERI suite and [Concepts](https://github.com/WebOfTrust/WOT-terms/blob/main/concepts.md) behind KERI
