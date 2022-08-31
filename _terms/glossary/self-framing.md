## Definition
a textual encoding that includes type, size, and value is self-framing.\
Source [Samual M Smith](https://www.ietf.org/archive/id/draft-ssmith-cesr-02.txt)

## Detailed explanation
A self-framing text primitive may be parsed without needing any additional delimiting characters. Thus a stream of concatenated primitives may be individually parsed without the need to encapsulate the primitives inside textual delimiters or envelopes. Thus a textual self-framing encoding provides the core capability for a streaming text protocol like [STOMP](https://en.wikipedia.org/wiki/Streaming_Text_Oriented_Messaging_Protocol) or [RAET](https://github.com/RaetProtocol/raet).

## Related to CESR
Although a first class textual encoding of cryptographic primitives is the primary motivation for the [CESR](term_composable-event-streaming-representation-(CESR)) protocol defined herein, CESR is sufficiently flexible and extensible to support other useful data types, such as, integers of various sizes, floating point numbers, date-times as well as generic text. Thus this protocol is generally useful to encode in text data data structures of all types not merely those that contain cryptographic primitives.