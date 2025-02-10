## Definition
means "Cryptographically Secure Pseudorandom Number Generator," which means that a sequence of numbers (bits, bytes...) that is produced from an algorithm that is deterministic (the sequence is generated from some unknown internal state), hence pseudorandom is also cryptographically secure, or not.  
(Source: https://crypto.stackexchange.com/questions/12436/what-is-the-difference-between-csprng-and-prng)
## Security

It is cryptographically secure if nobody can _reliably distinguish_ the output from true randomness, even if the PRNG algorithm is perfectly known (but not its internal state). A non-cryptographically secure PRNG would fool basic statistical tests but can be distinguished from true randomness by an intelligent attacker.  
(Source: https://crypto.stackexchange.com/questions/12436/what-is-the-difference-between-csprng-and-prng)

## See also
[PRNG](PRNG)