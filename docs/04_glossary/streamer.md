# streamer
## Definition
 A convenience class for supporting stream parsing, including nested (tunneled, encrypted) CESR streams. Streams can be a mixture/combination of different primitives, including other streams. A stream is a concatenation of primitives.

It is akin to a cryptographic primitive yet is not a cryptographic primitive itself. 

It supports [ESSR](ESSR) by making it easier to handle tunneled streams.  
Source: Kent Bull in chat Zoom meeting KERI Aug 6, 2024.