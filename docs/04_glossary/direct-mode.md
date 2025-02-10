## Definition 
Two primary trust modalities motivated the KERI design, One of these is the _direct_ (one-to-one) mode, in which the identity controller establishes control via verified signatures of the controlling key-pair. The direct mode doesn't use witnesses nor [KERL](key-event-receipt-log)s, but has direct (albeit intermittent) network contact with the validator.

## Operational mode
To protect a [validator](validator) when engaging with some other controller’s identifier, be it [verification](verification), control authority establishment, or [duplicity](duplicity) detection, are based on an ability to _replay_ the sequence of key events (key event history or log) of that identifier. There are two main operational modes for providing replay capability that are distinguished by the degree of availability of the identifier’s controller when creating and promulgating the key events.  
With direct mode, the promulgation of events to a validator does not happen unless the controller is attached to the network and able to communicate directly with a validator.  
Direct mode assumes that the controller may have intermittent network availability, it also assumes that these mechanism may not be trusted in any persistent sense to promulgate key events. Nonetheless, direct mode is important as it is compatible with the use of mobile internet devices such as cell phones. A single direct mode identifier may be re-used in multiple one-to-one relationships as part of a select group.  
More in [Source: chapter Protocol Operational Modes in KERI white paper](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf)

## Security concerns
The protocol may operate in two basic modes, called direct and indirect. The availability and consistency attack surfaces are different for the two modes and hence the mitigation properties of the protocol are likewise mode specific.

## Also see
[Indirect mode](indirect-mode)