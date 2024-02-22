## dual indexed codes

<h4>Definition</h4><p>a context-specific coding scheme, for the common use case of thresholded multi-signature schemes in <a href="CESR">CESR</a>.</p><h4>Related to CESR</h4><p>One way to compactly associated each signature with its public key is to include in the text code for that signature the index into the ordered set of public keys.A popular signature raw binary size is 64 bytes which has a pad size of 2. This gives two code characters for a compact text code. The first character is the selector and type code. The second character is the Base64 encoded integer index. </p><p>More at source <a href="https://github.com/WebOfTrust/ietf-cesr/blob/main/draft-ssmith-cesr.md">Github Repo Ietf-CESR</a></p>

