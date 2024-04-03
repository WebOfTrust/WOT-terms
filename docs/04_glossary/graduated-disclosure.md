# graduated disclosure
## Definition
Lifting confidentiality step by step: Selectively disclosing more data as time and/or necessity progresses, offering backwards verifiability of earlier issued cryptographic proofs.

## Example 
You proof your insurance policy without disclosing details, before enjoying extreme sports. Only when something goes wrong, e.g. 1 in a 100, you disclose the data. This way confidentiality is kept in 99% of the cases.

## KERI specific
Disclosure performed by a presentation exchange that has cross-variant (see [compact variant](compact-variant)) Issuer commitment verifiability as an essential property. It supports graduated disclosure by the [Disclosee](disclosee) of any or all variants wether it be full, compact, metadata, partial, selective, bulk issued, or contractually protected.  
Paraphrased by @henkvancann based on [source](https://github.com/WebOfTrust/ietf-ipex/blob/main/draft-ssmith-ipex.md#discussion)

## Reuse
The [SAID](SAID) of a given variant is useful even when it is not the SAID of the variant the [Issuer](issuer) signed because during graduated disclosure the [Discloser](discloser) MAY choose to sign that given variant to fulfil a given step in an IPEX graduated disclosure transaction. 

## Rule
The disclosure performed by a presentation exchange MAY be [graduated](graduated-disclosure) and MAY be [contractually](contractually-protected-disclosure) protected.

## Related terms
- [Partial Disclosure](https://github.com/trustoverip/acdc/wiki/partial-disclosure)
- [Selective Disclosure](https://github.com/trustoverip/acdc/wiki/selective-disclosure)
- [Full Disclosure](https://github.com/trustoverip/acdc/wiki/full-disclosure)


| TBW  | check prio 1