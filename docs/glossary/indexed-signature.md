## Definition
Also called _siger_. An indexed signature attachment is used when signing anything with a multi-key autonomic identifier. The index is included as part of the attachment, so a verifier knows which of the multiple public keys was used to generate a specific signature.\
Source:Philip Feairheller

## Example working
An indexed signature attachment would look something like:
```
03.<binary signature>
```
All encoded as [qualified](qualified) [base64](base64).  A verifier would then know to use the AID’s public key located at index 3 in the list of public keys to verify the signature.\
Source:Philip Feairheller

## Witness signatures indexed

In addition, [witness](witness) signatures can also be attached as indexed signatures. So a verifier can determine which witness signed a particular [receipt](receipt). This is useful when witnesses are receipting an event and only attaching their own signature. The [controller](controller) knows which witness signed the receipt by looking up the index in their list of witnesses for that event.\
Source:Philip Feairheller


