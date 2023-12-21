# non fungible token
## Definition
A non-fungible token (NFT) is a [financial security](https://en.wikipedia.org/wiki/Security_(finance)) consisting of digital data stored in a [blockchain](https://en.wikipedia.org/wiki/Blockchain), a form of [distributed ledger](https://en.wikipedia.org/wiki/Distributed_ledger). 

### Ownership
The ownership of an NFT is recorded in a blockchain, and can be transferred by the owner, allowing NFTs to be sold and traded. NFTs can be created by anybody, and require few or no coding skills to create. NFTs typically contain references to [digital files](https://en.wikipedia.org/wiki/Digital_file) such as photos, videos, and audio. 

### Fungible
Because NFTs are uniquely identifiable assets, they differ from [cryptocurrencies](https://en.wikipedia.org/wiki/Cryptocurrencies), which are [fungible](https://en.wikipedia.org/wiki/Fungibility).

### KERI / ACDC related
There's nothing "non fungible" to a Non-fungible Token in our perspective. It's just another unique identifier controlled by a public private key pair. The fact that an NFT uniquely identifies a digital entity isn't very impressing, because of their 
- security fault : the security is dependent of the host ledger the NFT is anchored to. 
- transferability fault : you need a transaction to transfer ownership on the host blockchain, controlling keys can't be rotated
- monitization fault : there's no good reason whatsoever to mingle the value aspect and the uniqueness property of a digital asset, and unfortunately that's what NFTs are doing.

Because uniqueness tokenization "done right" is to be praised, **it's recommended to look into KERI identifiers and ACDC veracity claims to support the value of the identifiers**, whose monetary value can be recorded elsewhere and separate from the identifier system. Key (pre-)rotation can transfer ownership of a unique digital asset without the need of a transaction on a blockchain.

### Asset backing
Sometimes an NFT doesn't only uniquely represent a digital asset. It can be the digital twin of - and is also (hopefully) backed by - a real-life asset. Even in this perspective KERI and ACDC are more emcompassing too, because in the KERI/ACDC case we are dealing with globally portable unique digital twins, not anchored to (read `locked in`) a blockchain.