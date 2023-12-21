# salty nonce blinding factor
## Definition
For ease of sharing a secret and hiding information with this secret of Blindable State TELs we use a Salty Nonce Blinding Factor. You’d like to hide the state of certain credentials to some verifiers in the future, while keeping the state verifiable for others.

## How
A way to share the key to blind/unblind the state of a TEL is
- [HTOP, HMAC-Based One-Time Password](https://datatracker.ietf.org/doc/html/rfc6238)
- [Time-Based One-Time Password](https://datatracker.ietf.org/doc/html/rfc6238)
- HDKM, Hierarchical Deterministic Key Management, based on a shared master key you could split off subkeys in a predictable manner.

The blinding is performed by the issuer, the issuee could request the blinding.

## Example
I don’t want my employment states shared in the future with former possible employers.

## More info
[Blindable State TEL](https://github.com/trustoverip/tswg-acdc-specification/blob/main/draft-ssmith-acdc.md#blindable-state-tel)