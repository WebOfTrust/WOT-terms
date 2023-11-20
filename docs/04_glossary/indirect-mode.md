## Definition 
Two primary trust modalities motivated the KERI design, One these is the _indirect_ (one-to-many) mode, which depends on witnessed key event receipt logs (KERL) as a secondary root-of-trust for validating events. This gives rise to the acronym KERI for key event receipt infrastructure.  
The indirect mode extends that trust basis with witnessed key event receipt logs ([KERL](key-event-receipt-log)) for validating events. The security and accountability guarantees of indirect mode are provided by [KA2CE](KA2CE) or KERI’s Agreement Algorithm for Control Establishment among a set of witnesses.  
[Source: Abstract KERI white paper](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf)

## Operational mode
To protect a [validator](validator) when engaging with some other controller’s identifier, be it [verification](verification), control authority establishment, or [duplicity](duplicity) detection, are based on an ability to _replay_ the sequence of key events (key event history or log) of that identifier. There are two main operational modes for providing replay capability that are distinguished by the degree of availability of the identifier’s controller when creating and promulgating the key events.  
With _indirect mode_, the promulgation of events to a validator may happen even when the [controller](controller) is not attached to the network and therefore not able to communicate directly with a [validator](validator). Indirect mode supports high (nearly continuous) availability of the key event history to any validator. This means that other components must be trusted to promulgate key events when the controller is not attached to the network. Indirect mode is compatible with identifiers for one-to-many exchanges or any-wise relationships (a controller with any others). A single indirect mode identifier may be used for a public service or business or otherwise when building brand and reputation in that identifier is important. An indirect mode identifier may also be used for private one-to-one or select groups but where intermittent availability is not tolerable.  
More in [Source: chapter Protocol Operational Modes in KERI white paper](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf)

## Security concerns
The protocol may operate in two basic modes, called direct and indirect. The availability and consistency attack surfaces are different for the two modes and hence the mitigation properties of the protocol are likewise mode specific.
[Source: chapter Security concerns in KERI white paper](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf)

## Also see
[Direct mode](direct-mode)
