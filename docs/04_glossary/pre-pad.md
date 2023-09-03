## Definition
the action and / or result of prepending a string with _leading_ pad characters to align to a certain length in bits or bytes.

## CESR related
There are two ways to provide the required alignment on 24-bit boundaries to satisfy the [composability](composability.md) property. One is [post-pad](post-pad), with trailing pad characters `=`, the text domain encoding to ensure that the text domain primitive has a total size (length) that is an integer multiple of 4. This is what [naive Base64 encoding](naive-conversion.md) does.\
The other way is to _pre-pad_ leading bytes of zeros to the raw binary value before conversion to Base64 to ensure the total size of the raw binary value with pre-pad bytes is an integer multiple of 3 bytes. This ensures that the size in characters of the Base64 conversion of the pre-padded raw binary is an integer multiple of 4 characters.\
[Source IEFT CESR draft](https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md#code-characters-and-lead-bytes)