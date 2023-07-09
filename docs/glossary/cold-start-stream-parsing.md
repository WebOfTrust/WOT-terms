## Definition
After a reboot (or cold start), a stream processor looks for framing information to know how to parse groups of elements in the stream. 

If that framing information is ambiguous then the parser may become confused and require yet another cold start. While processing a given stream a parser may become confused especially if a portion of the stream is malformed in some way. This usually requires flushing the stream and forcing a cold start to resynchronize the parser to subsequent stream elements. 

## re-synchronization
Better than flushing the stream and forcing a cold start is a re-synchronization mechanism that does not require flushing the in-transit buffers but merely skipping to the next well-defined stream element boundary in order to execute a cold start.\
_See an example_ in the [source](https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#cold-start-stream-parsing-problem)

## CESR related
Special CESR count codes support re-synchronization at each boundary between interleaved CESR and other serializations like JSON, CBOR, or MGPK.