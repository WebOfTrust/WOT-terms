## Definition
In cryptography, post-quantum cryptography (PQC) (sometimes referred to as quantum-proof, quantum-safe or quantum-resistant) refers to cryptographic algorithms (usually public-key algorithms) that are thought to be secure against a cryptanalytic attack by a quantum computer.  
More on source [Wikipedia](https://en.wikipedia.org/wiki/Post-quantum_cryptography)

## KERI pre-rotation related
Although individual public-private key pairs are most probably not post-quantum proof, by design the pre-rotation mechanism in KERI is post-quantum proof; which means that in the projected future presence of quantum computers KERI will still be safe. Basically, this safety is established by rotating keys before a brute force quantum attack can be effective. As quantum computers might get faster or more effective over time, the rotation intervals simply become shorter and/or increased [entropy](entropy) might be used for key generation.