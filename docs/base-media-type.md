## Definition
`credential` plus `ld` plus `json`.

Other media types of credentials are allowed by must provide either unidirectional or bidirectional transformations.  So for example we would create credential+acdc+json and provide a unidirectional transformation to credential+ld+json.

We are going for `credential` plus `acdc` plus `json` without `@context`. The main objection to use `@context` is that it can change the meaning of a credential. 
The other way around: ACDCs will include W3C credentials.

Media types will be used to differentiate between types of credentials and verifiable credentials.