## Definition
It's an [issuance](issuance.md) of the disclosure or presentation of other ACDCs. _Bespoke_ means _Custom_ or _tailor made_.
A bespoke credential serves as an on-the-fly contract with the issuee; it's a self-referencing and self-contained contract between the issuer and the verifier. Mind you, here the issuer and issuee are merely the discloser and disclosee of another (set of) ACDC(s).

## Example
If I want consent terms attached to a presentation of an (set of) ACDC(s).\
Consider a disclosure-specific ACDC, aka tailor made, custom or bespoke. The Issuer is the Discloser, the Issuee is the Disclosee. The rule section includes a context-specific (anti) assimilation clause that limits the use of the information to a single one-time usage purpose, that is for example, admittance to a restaurant. The ACDC includes an edge that references some other ACDC that may for example be a coupon or gift card. The attribute section could include the date and place of admittance.\
For the code of this example, see this [section 11.1 in Github](https://weboftrust.github.io/ietf-acdc/draft-ssmith-acdc.html#section-11.1)

## Advantage
We can use all the tools available for issuance and presentation we already have.

## How the process work
Similar to a presentation exchange, a verifier will first be asked for what they are looking for, secondly the discloser creates the dataset and publishes only the structure and the fields. To accomplish this, thirdly a compact ACDC will be issued (you publish the fields, not the content) and then issuer asks to sign it first. After signing, the disclosee can get the content associated with the on-the-fly contract.

More at [Github source](https://weboftrust.github.io/ietf-acdc/draft-ssmith-acdc.html#name-disclosure-specific-bespoke) 