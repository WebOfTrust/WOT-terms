## Definition
a system for uniquely identifying (public) identities

### Example identifier system
The International Standard Name Identifier (ISNI) is an identifier system for uniquely identifying the public identities of contributors to media content such as books, television programmes, and newspaper articles. Such an identifier consists of 16 digits. It can optionally be displayed as divided into four blocks.
More info on [Wikipedia page](https://en.wikipedia.org/wiki/International_Standard_Name_Identifier)

### The properties of an identifier system:

1. Completeness. Every unique object must be assigned an identifier.
2. Uniqueness. Each identifier is a unique sequence.
3. Exclusivity. Each identifier is assigned to a unique object, and to no other object.
4. Authenticity. The objects that receive identification must be verified as the objects that they are intended to be.
5. Aggregation. There must be a mechanism to aggregate all of the data, and only that data, that is properly associated with the identifier (i.e., to bundle all of the data that belong to the uniquely identified object).
6. Permanence. The identifiers and the associated data must be permanent.
7. Reconciliation. There should be a mechanism whereby the data associated with a unique, identified object in one resource can be merged with the data held in another resource, for the same unique object. This process, which requires comparison, authentication, and merging, is known as reconciliation.
8. Immutability. In addition to being permanent (i.e., never destroyed or lost), the identifier must never change (
9. Security. The identifier system should be as little vulnerable to malicious attack as possible.
10. Documentation and quality assurance. Protocols must be written for establishing the identifier system, for assigning identifiers, for protecting the system, and for monitoring the system. 
11. Centrality. The subject's identifier is the central "key" to which every event for the subject is attached.
12. Autonomy. An identifier system has a life of its own.  
By (_@henkvancann_) based on this [source](https://www.sciencedirect.com/topics/computer-science/identifier-system)

### Relationship with KERI / ACDC plus example vLEI
KERI is an thin-layered identifier system generator, offering globally portable identifiers, secure attribution to their root-of-trust, and chained verifiable credential containers (ACDC) to them.
#### A first implementation of KERI and ACDC has been at GLEIF (.org)
Verifiable Credentials (VCs) and the emerging role of the LEI: Verifiable Credentials are digitally signed credentials that are not only tamper-resistant but capable of being verified in decentralized manner. vLEIs are based on the Trust over IP Authentic Chained Data Container (ACDC) specification (based on the Key Event Receipt Infrastructure (KERI) protocol ([github.com/WebOfTrust/keri](http://github.com/WebOfTrust/keri)), both Internet Engineering Task Force (IETF) draft specifications).
Verifiable Credentials are digitally signed credentials that are not only tamper-resistant but capable of being verified in decentralized manner. vLEIs are based on the Trust over IP Authentic Chained Data Container (ACDC) specification (based on the Key Event Receipt Infrastructure (KERI) protocol ([github.com/WebOfTrust/keri](http://github.com/WebOfTrust/keri)), both Internet Engineering Task Force (IETF) draft specifications).
More info on [GLEIF site](https://www.gleif.org/en/vlei/introducing-the-verifiable-lei-vlei)

