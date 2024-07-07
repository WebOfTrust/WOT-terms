# non fungible token
## Definition
A non-fungible token (NFT) is a [financial security](https://en.wikipedia.org/wiki/Security_(finance)) consisting of digital data stored in a [blockchain](https://en.wikipedia.org/wiki/Blockchain), a form of [distributed ledger](https://en.wikipedia.org/wiki/Distributed_ledger). 

## Criteria
### Ownership
The ownership of an NFT is recorded in a blockchain, and can be transferred by the owner, allowing NFTs to be sold and traded. NFTs can be created by anybody, and require few or no coding skills to create. NFTs typically contain references to [digital files](https://en.wikipedia.org/wiki/Digital_file) such as photos, videos, and audio. 

### Fungible
Because NFTs are uniquely identifiable assets, they differ from [cryptocurrencies](https://en.wikipedia.org/wiki/Cryptocurrencies), which are [fungible](https://en.wikipedia.org/wiki/Fungibility).

## KERI / ACDC related
There's nothing "non fungible" about a non-fungible token in our perspective. It's just another unique identifier controlled by a public private key pair. The fact that NFTs uniquely identify a digital entity isn't very impressive, because of their
- security flaw : the security is dependent on the host ledger the NFT is anchored to
- transferability flaw : you need a transaction to transfer ownership on the host blockchain, controlling keys can't be rotated
- monetization flaw : there's no good reason whatsoever to mingle the value aspect and the uniqueness property of a digital asset; unfortunately, that's what NFTs are doing.

Uniqueness tokenization done correctly is to be praised. Moreover, **it's recommended to look into KERI identifiers and ACDC veracity claims to support the value of the identifiers**, whose monetary value can be recorded elsewhere and separately from the identifier system. Key (pre-)rotation can transfer ownership of a unique digital asset without the need for a transaction on a blockchain.

### Asset backing
Sometimes an NFT doesn't only uniquely represent a digital asset: it can be the digital twin of - and is also (hopefully) backed by - a real-life asset. Even in this perspective, KERI and ACDC are more inclusive, because in the KERI/ACDC case we are dealing with globally portable unique digital twins, not anchored to, i.e. locked in, a blockchain.