## Definition

An identifier that is deterministically generated from and embedded in the content it identifies, making it and its data mutually tamper-evident.

### To generate a SAID

1. Fully populate the data that the SAID will identify, leaving a placeholder for the value of the SAID itself.
1. Canonicalize the data, if needed. The result is called the SAID's **identifiable basis**.
1. Hash the *identifiable basis*. The result is the value of the SAID.
1. Replace the placeholder in *identifiable basis* the with the newly generated identifier, so the SAID is embedded in the data it identifies. The result is called the **saidified data.**

### To verify that a SAID truly identifies a specific chunk of data

1. Canonicalize the data, if needed. The result is **claimed saidified data**.
1. In the *claimed saidified data*, replace the SAID value with a placeholder. The result is the **identifiable basis** for the SAID.
1. Hash the *identifiable basis*.
1. Compare the hash value to the SAID. If they are equal, then the SAID identifies the *claimed saidified data*. 

### Differences in SAID algorthms manifest in the following choices

* how data is canonicalized
* which hash algorithm is used
* which placeholder is used
* how the bytes produced by the hash algorithm are encoded
* how the SAID value is formatted

### Notation

A terse way to describe a SAID and its data is to write an expression that consists of the token `SAID` followed by a token with field names in canonical order, where the field containing the SAID itsef is marked by the suffix `=said`. For example, the saidification of a simple `ContactInfo` data structure might be given as `SAID(name, address, phone, email, id=said)`.
