## Definition

Out-of-band Introductions are discovery and validation of IP resources for [KERI](key-event-receipt-infrastructure-(KERI)) autonomic identifiers. **Discovery via URI, trust via KERI.**

The simplest form of a KERI OOBI is a namespaced string, a tuple, a mapping, a structured message, or structured attachment that contains both a KERI AID and a URL. The OOBI associates the URL with the AID. In tuple form this abstractly:

```code
(url, aid)
```

and concretely

```code
("http://8.8.5.6:8080/oobi", "EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM")
```

## Validation

Validation is done based on [BADA](#best-available-data-acceptance-mechanism) More in 
[KERI OOBI draft spec](https://hackmd.io/MxTAIBQTRkWU4-w140tNuA?view) and [KERI OOBI explained - draft](https://medium.com/p/510467856035).

## High-end definition

![](https://hackmd.io/_uploads/H13bNyPiq.png)

From the [IETF draft specification](https://datatracker.ietf.org/doc/html/draft-ssmith-oobi):
 
An Out-Of-Band Introduction (OOBI) provides a discovery mechanism that associates a given URI or URL with a given AID ([autonomic identifier](autonomic-identifier-(AID)) or [self-addressing identifier (SAID)](self-addressing-identifier-(SAID))). The URI provided by an OOBI acts as a service endpoint for the discovery of verifiable information about the AID or SAID. As such an OOBI itself is not trusted but must be verified.  
To clarify, any information obtained from the service endpoint provided in the OOBI must be verified by some other mechanism.  An OOBI, however, enables any internet and web search infrastructure to act as an out-of-band infrastructure to discover information that is verified using an in-band mechanism or protocol.
The primary in-band verification protocol is [KERI](key-event-receipt-infrastructure-(KERI)).