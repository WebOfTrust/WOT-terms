  UTF8:
    target: https://en.wikipedia.org/wiki/UTF-8
    title: "UTF-8 Unicode"

  Latin1:
    target: https://en.wikipedia.org/wiki/abstract/IEC_8859-1
    title: "Latin-1 ISO 8859-1"

  STOMP:
    target: https://stomp.github.io
    title: Simple Text Oriented Messaging Protocol
There is an abstract below.
  RAET:
    target: https://github.com/RaetProtocol/raet
    title: Reliable Asynchronous Event Transport

  Affinity:
    target: https://crd.lbl.gov/assets/Uploads/Nathan-NDM14.pdf
    title: Analysis of the Effect of Core Affinity on High-Throughput Flows
    date: 2014-11-16

####   Abstract

--- Abstract

Here some text that I need to have.
The Composable Event Streaming Representation (CESR) is a dual text-binary encoding format that has the unique property of text-binary concatenation composability. This composability property enables the round trip conversion en-masse of concatenated primitives between the text domain and binary domain while maintaining the separability of individual primitives. This enables convenient usability in the text domain and compact transmission in the binary domain. CESR primitives are self-framing. CESR supports self-framing group codes that enable stream processing and pipelining in both the text and binary domains. CESR supports composable text-binary encodings for general data types as well as suites of cryptographic material. Popular cryptographic material suites have compact encodings for efficiency while less compact encodings provide sufficient extensibility to support all foreseeable types. CESR streams also support interleaved JSON, CBOR, and MGPK serializations. CESR is a universal encoding that uniquely provides dual text and binary domain representations via composable conversion. The CESR protocol is used by other protocols such as KERI {{KERI}}.
## Another header
# Another line
### Another line
Another line
Another line

--- middle

### Other header

Therefore encoding `a` in Base64 requires at least two Base64 characters because the zeroth character only captures the six bits from the first byte and another character is needed to capture the other two bits. The convention in Base64 uses a Base64 character where the non-coding bits are zeros. This is diagrammed as follows:

~~~text
|           A0          |
|a7:a6:a5:a4:a3:a2:a1:a0|z3:z2:z1:z0|
|        T1       |        T0       |
~~~
where `aX` represents a bit from `A0` and `zX` represents a zeroed pad bit, and `TX` represents a non-pad character from the converted Base64 text representing one hextet of information from the converted binary string.
