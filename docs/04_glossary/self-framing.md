## Definition
a textual or binary encoding that begins with type, size, and value so that a parser knows how many characters (when textual) or bytes (when binary) to extract from the stream for a given element without parsing the rest of the characters or bytes in the element is Self-Framing. 

## More

A self-framing Primitive may be extracted without needing any additional delimiting characters. Thus, a stream of concatenated Primitives may be extracted without the need to encapsulate each Primitive inside a set of delimiters or an envelope.  
Source [Samual M Smith](https://www.ietf.org/archive/id/draft-ssmith-cesr-02.txt)

## More detailed explanation
A self-framing text primitive may be parsed without needing any additional delimiting characters. Thus a stream of concatenated primitives may be individually parsed without the need to encapsulate the primitives inside textual delimiters or envelopes. Thus a textual self-framing encoding provides the core capability for a streaming text protocol like [STOMP](https://en.wikipedia.org/wiki/Streaming_Text_Oriented_Messaging_Protocol) or [RAET](https://github.com/RaetProtocol/raet).

## Related to CESR
Although a first class textual encoding of cryptographic primitives is the primary motivation for the [CESR](composable-event-streaming-representation) protocol defined herein, CESR is sufficiently flexible and extensible to support other useful data types, such as, integers of various sizes, floating point numbers, date-times as well as generic text. Thus this protocol is generally useful to encode in text data data structures of all types not merely those that contain cryptographic primitives.