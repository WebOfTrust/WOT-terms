# non establishment event
## Definition
A key event tieing or anchoring a data payload to the [key event log](key-event-log) of an identifier. This data payload includes a set of one or more [seals](seal) each of which anchor data to the key event.  
The data payload event may be used to make verifiable, authoritative statements on behalf of the identifier controller.   
These might include authorizations of encryption keys, communication routes, service endpoints, and so forth.

Transactions or workflows composed of non-establishment events are secured by virtue of being included in the verifiable key event
sequence with the verifiable authoritative establishment events.

A non-establishment event is a key event that does not change the current key-state for an AID. 

Source [KERI Whitepaper Section 7.22 page 46](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf)  
Source [Sam Smith](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology)

## Made easier
A non-establishment event is a key event that does not change the current key-state for an [identifier](identifier). The event (only) ties or anchors digital data to the [key event log](key-event-log) of the identifier.  
_(@henkvancann)_

