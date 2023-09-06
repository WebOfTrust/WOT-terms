## Definition
Locus of control is the degree to which people believe that they, as opposed to external forces (beyond their influence), have control over the outcome of events in their lives. Also 'LoC'. \
More on [wikipedia](https://en.wikipedia.org/wiki/Locus_of_control)

## In SSI domain
In SSI loci-of-control was decribed by Tim Bouma in 2019:
![](https://github.com/WebOfTrust/keri/blob/main/images/loci-of-control.png)

## KERI development
In KERI this is further developed:\
- Key Event Promulgation Service = from the `controller`'s point.
- key event confirmation service = from the `validator`'s point.

The separation of promulgation and confirmation into two separate _loci-of-control_, one the controller’s, and the other the validator’s simplifies the interaction space between these two parties.\
The design principle of separating the loci-of-control between controllers and validators removes one of the major drawbacks of total ordered distributed consensus algorithms, that is, shared governance over the pool of nodes that provide the consensus algorithm.\
The primary purpose of the [KA2CE](#keri-agreement-algorithm-for-control-establishment) algorithm is to protect the controller’s ability to promulgate the authoritative copy of its key event history despite external attack. This includes maintaining a sufficient degree of availability such that any validator may obtain an authoritative copy on demand.