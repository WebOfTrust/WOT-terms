## Definition
is non-CESR Base64 conversion. And also how people are used to using the Base64 encode and decode.  Without [pre-pad](term_pre-pad)ding etc all the stuff CESR does to ensure it aligns on 24 bit boundaries, so [CESR](term_CESR) never uses the '=' pad character. But naive [Base64](term_Base64) will pad if the length is not 24 bit aligned.\
Source: Samuel Smith in [issue 34](https://github.com/WebOfTrust/ietf-cesr/issues/34)

Naive conversion is a text to binary conversion or vice versa that doesn't anticipate on either [composability](term_composability) and / or on the [concatenation](term_concatenation) capability of the result of such an operation.

## CESR related
In the [IETF draft CESR](https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#conversions) there's much attention for naive [Base64](term_base64) conversions, because it helps explaining the necessity of stable code characters and padding in CESR to achieve:
- [self-framing](term_self-framing)
- round-robin [composability](term_composability)
- [concatenation](term_concatenation) options
- [pipelined](term_pipelining) streaming
