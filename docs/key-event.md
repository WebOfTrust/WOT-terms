## Definition
Concretely, the serialized data structure of an entry in the key event log for an AID. Abstractly, the data structure itself. Key events come in different types and are used primarily to establish or change the authoritative set of keypairs and/or anchor other data to the authoritative set of keypairs at the point in the key event log actualized by a particular entry.  
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)

## Loose definition in KERI
Events happening to controlling keys of an identifier recorded in a Key Event Log (KEL).

## Data structure angle
A _key event_ is data structure that consist of a header (Key Event header), a configuration section (Key Event Data spans Header and configuration) and signatures (Key event Message spans Data and signatures)  
(_@henkvancann_)

<img src="https://github.com/WebOfTrust/keri/blob/main/images/Key-Event.png" width="500" />