# bexter
## Definition

The class variable length text that is used in CESR and preserves the round-trip transposability using Base64 URL safe-only encoding even though the text variable length.

## More details
From [readthedocs.io](https://keripy.readthedocs.io/en/latest/?badge=latest)

Bexter is subclass of Matter, cryptographic material, for variable length strings that only contain Base64 URL safe characters, i.e. Base64 text (bext).

When created using the 'bext' paramaeter, the encoded matter in qb64 format in the text domain is more compact than would be the case if the string were passed in as raw bytes. The text is used as is to form the value part of the
qb64 version not including the leader.

Due to ambiguity that arises from pre-padding bext whose length is a multiple of three with one or more 'A' chars. Any bext that starts with an 'A' and whose length is either a multiple of 3 or 4 may not round trip. Bext with a leading 'A' whose length is a multiple of four may have the leading 'A' stripped when round tripping.
- Bexter(bext='ABBB').bext == 'BBB'
- Bexter(bext='BBB').bext == 'BBB'
- Bexter(bext='ABBB').qb64 == '4AABABBB' == Bexter(bext='BBB').qb64

To avoid this problem, only use for applications of base 64 strings that never start with 'A'

Examples: base64 text strings:
- bext = ""
- qb64 = '4AAA'
- bext = "-"
- qb64 = '6AABAAA-'
- bext = "-A"
- qb64 = '5AABAA-A'
- bext = "-A-"
- qb64 = '4AABA-A-'
- bext = "-A-B"
- qb64 = '4AAB-A-B'

#### Example uses:
- CESR encoded paths for nested SADs and SAIDs
- CESR encoded fractionally weighted threshold expressions

#### Attributes
Inherited Properties:  (See Matter)
    .pad  is int number of pad chars given raw
    .code is  str derivation code to indicate cypher suite
    .raw is bytes crypto material only without code
    .index is int count of attached crypto material by context (receipts)
    .qb64 is str in Base64 fully qualified with derivation code + crypto mat
    .qb64b is bytes in Base64 fully qualified with derivation code + crypto mat
    .qb2  is bytes in binary with derivation code + crypto material
    .transferable is Boolean, True when transferable derivation code False otherwise
Properties:
    .text is the Base64 text value, .qb64 with text code and leader removed.
Hidden:
    ._pad is method to compute  .pad property
    ._code is str value for .code property
    ._raw is bytes value for .raw property
    ._index is int value for .index property
    ._infil is method to compute fully qualified Base64 from .raw and .code
    ._exfil is method to extract .code and .raw from fully qualified Base64
Methods:
"""
	