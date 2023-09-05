## Definition
The _sniffer_ is part of [Parside](parside.md) and detects if the CESR stream contains CESR binary, CESR Text, JSON, CBOR, MGPK. 

## Working
If any of JSON, CBOR, MGPK then the parser regexes to find the [version string](version-string.md) inside the JSON, CBOR, and MGPK and from the version string extracts the number of characters/bytes that is the length of the JSON, CBOR, or MGPK. The parser then resumes _sniffing_. When the sniff result is 'CESR' then when at the top level looks for the CESR [version count code](version-code.md) or any other count codes.

Source Slack Cesride thread: Feb 2 2023
