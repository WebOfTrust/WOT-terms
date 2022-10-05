## Definition
Is a type of Establishment Event, it's the first event that establishes an identifier. \
(_SamMSmith_)\
Establishment Event that provides the incepting information needed to derive an [AID](term_AID) and establish its initial key-state.\
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)

### Inception Statement

{% include image.html file="inception-statement.png" url="" alt="inception statement" caption="inception statement" %}

<img src="./images/inception-statement.png" alt="inception statement" border="0" width="400" style="float:right">

<img src="https://raw.githubusercontent.com/WebOfTrust/keri/7fc96da6c277d3921fb1248ce9235400a4ff6af7/images/inception-statement.png" alt="inception statement" border="0" width="400" style="float:right">

**In brief: It's the signed version of a statement containing the inception event with some extra data.**\
(_@henkvancann_)


### Components and self-contained
The inception data must include the public key, the identifier derivation from that public key, and may include other configuration data. The identifier derivation may be simply represented by the `derivation code`. A statement that includes the inception data with attached signature made with the private key comprises a cryptographic commitment to the derivation and configuration of the identifier that may be cryptographically verified by any entity that receives it. \
A KERI inception statement is completely self-contained. No additional infrastructure is needed or more importantly must be trusted in order to verify the derivation and initial configuration (inception) of the identifier. The initial trust basis for the identifier is simply the signed inception statement.\
(_SamMSmith_)
