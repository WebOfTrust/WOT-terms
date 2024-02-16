# key transparency
## Definition 
provides a lookup service for generic records and a public, tamper-proof audit log of all record changes. While being publicly auditable, individual records are only revealed in response to queries for specific IDs.

### Use cases
- Key Transparency can be used as a _public key discovery service_ to authenticate users and provides a mechanism to keep the service accountable.
- Key Transparency empowers account owners to reliably see what public keys have been associated with their account, and it can be used by senders to see how long an account has been active and stable before trusting it. [Source](https://github.com/google/keytransparency/)  

### Merkle tree
Key Transparency does this by using piece of blockchain technology called a Merkle Tree.  
More on [Stackexchange](https://security.stackexchange.com/questions/149125/how-does-key-transparency-work) how key transparency works.  
(_@henkvancann_)