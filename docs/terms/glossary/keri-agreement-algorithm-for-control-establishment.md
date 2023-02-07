##Definition
Agreement on an event in a key event log [KEL](KEL) means each [witness](witness) has observed the same version of the event and each witness’ [receipt](receipt) has been received by every other witness.

Control establishment means that the set of agreeing witnesses along with the controller, of the identifier and associated keypairs, create a verifiable way to establish control authority for an identifier by reading all of the events in the KEL that have been agreed upon by the witnesses and the controller.

Acronyms: 'KA<sup>2</sup>CE' '[KA2CE](KA2CE)' and 'KAACE'. 

# Whitepaper definition:
Agreement with KA2CE is as follows:
"... the controller first creates its own receipt of the event and then promulgates the receipted event to witnesses in order to gather their promulgated receipts.\
In this algorithm, an agreement consists of a specific version of an event with verifiable receipts
(signatures) from the controller and a set of witnesses.\
A state of agreement about a version of an event with respect to set of witnesses means that each witness in that set has witnessed the same version of that event and each witness’ receipt in that set has been promulgated to every other witness in that set."\
Source [KERI Whitepaper Section 11.4.2 Agreement]

# Additional Definition
A newly invented algorithm that is a simplification of PBFT class algorithms, separation of control of distributed consensus using distinct promulgation (witness) and confirmation (watcher) networks (new invention) but many non-BFT consensus algorithms do something similar and one BFT algorithm Stellar does something similar but not the same.

What if PBFT and Stellar had a baby that was missing liveness and total ordering but had safety and was completely decentralized, portable, and permission less? It would be named KERI.\
(SamMSmith)