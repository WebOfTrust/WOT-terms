## Definition
is a bunch of generators. Responsible for pulling out a stream of bits from a CESR stream and parse it.
Sam Smith suggested for Parside to not iterate stuff, only parse chunks delimited by the [count code](count-code). (Source Cesride: meeting Feb 2 2023)
## Background
CESR primitives are self-framing (which is relatively new). That means that you can construct your parser modually. We can dispatch the parsing of the stream to an entity. The [strip parameter](strip-parameter) tells us what part will be parsed be which code.

## Design ideas Feb 2023
1. Parside should be concerned with parsing group codes, [cesride](cesride) concerned with parsing primitives.
2. Parside will contain a [count code](count-code) at the beginning of the stream, each cesr primitive is self framing, JSON is not; hence the [Version string](version-string).
3. Parside could "load" the tables it supports for dynamically loaded code tables
4. Parside could look at how/if we can return an interator/generator

Source Cesride: meeting Feb 2 2023 notes

> Cesride parses the CESR primitives

> Parside parses the [group codes](group-code)

| TBW |

## Related
- [Version code](version-code)
- [Version string](version-string)
- [Strip parameter](strip-parameter)
- [Cesride](cesride)
- [Sniffer](sniffer)

Source Cesride: meeting Feb 2 2023

## Working
Parside should start with a default version for CESR. Anytime it gets a version count code it changes the version and also elevates to the top level (the version count code must appear at the top level). The version count code determines which CESR table to load when parsing the stream. The [sniffer](sniffer) detects if CESR binary, CESR Text, JSON, CBOR, MGPK. If any of the last three then the parser regexes to find the version string inside the JSON, CBOR, and MGPK and from the version string extracts the number of characters/bytes that is the length of the JSON, CBOR, or MGPK. The parser then resumes sniffing. When the sniff is CESR then when at the top level looks for the CESR version count code or any other count codes. The interpretation of the count codes is dependent on the version count code that is why the Parser has to start with a default version count code because the stream may not begin with a version code or may have resumed after a cold restart. When a count code is parsed then the parser may descend into parsing whats inside group for a group count code which may recursively nest down a ways.  
Source Slack Cesride thread: Feb 2 2023
