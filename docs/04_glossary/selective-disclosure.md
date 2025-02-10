## Definition
a disclosure of an ACDC that selectively discloses its attributes using Compact Disclosure. The set of selectively disclosable attributes is provided as an array of blinded blocks where each attribute in the set has its own dedicated blinded block. Unlike Partial Disclosure, the selectively disclosed fields are not correlatable to the so far undisclosed but selectively disclosable fields in the same encompassing block.
Source: Dr. S. Smith  

## Explanation
Selective disclosure is a from partial disclosure that has a different cryptographic fundament: a sort of cryptographic aggregator (not an accumulator).

Selective disclosure is a list of field maps. You can choose to blind and publish every single field map, but you have to disclosure all the field maps, either blinded or published.

It is an aggregator because you have to disclosure all the blinded fields when you do the selective disclosure.

## Related
[Partial Disclosure](partial-disclosure)

Source: distilled from ACDC Zoom meeting, date March 28, 2023