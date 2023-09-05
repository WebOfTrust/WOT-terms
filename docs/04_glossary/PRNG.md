## Definition
means "Pseudorandom Number Generator" which means that a sequence of numbers (bits, bytes...) is produced from an algorithm which looks random, but is in fact deterministic (the sequence is generated from some unknown internal state), hence pseudorandom.

Such pseudorandomness can be cryptographically secure, or not. It is cryptographically secure if nobody can reliably distinguish the output from true randomness, even if the PRNG algorithm is perfectly known (but not its internal state). A non-cryptographically secure PRNG would fool basic statistical tests but can be distinguished from true randomness by an intelligent attacker.\
(Source: https://crypto.stackexchange.com/questions/12436/what-is-the-difference-between-csprng-and-prng)

## See also
[CSPRNG](CSPRNG)