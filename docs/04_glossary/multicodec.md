## Definition
Is a self-describing multi-format, it wraps other formats with a tiny bit of self-description. A multi-codec identifier is both a variant (variable length integer) and the code identifying data. 

See more at [GitHub Multi-codec](https://github.com/multiformats/multicodec)

### Design

Multi-codec is an agreed-upon codec table. It is designed for use in binary representations, such as keys or identifiers (i.e CID). It is then used as a prefix to identify the data that follows.