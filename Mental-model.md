# Mental model of the KERI suite

To comprehend the *reason to be* for KERI, we need to create a frame of reference, a mental model. Why this in necessary can be best illustrated with an example.
> Example:
> Let’s suggest you have mental model that says the *earth is at the center of the universe*, and the sun and planets somehow revolve around it. Further development of the model allows you to compute planetary positions, and do some fortune telling and predict tides.
However, the mental model changes drastically when you would state that the *sun, rather than the earth, is at the centre of the universe*.  Or even more far-reaching: the Big Bang is the middle of the universe. **Changing one’s perspective can have very profound consequences**, without changing the universe itself. That’s what mental models are all about.

More on this can be read here: eSSIF-lab [mental models](https://essif-lab.github.io/framework/docs/terms/pattern).

## Authentic web
If we wrap up the definition of the authentic web [here](https://github.com/trustoverip/acdc/wiki/authentic-web) we could say:

### The authentic web is the internet as a whole giant verifiable data structure.

## Technical implications

How to make any data authentic using the KERI suite? -> create and append to an ever growing _Authentic Web_ where everything is signed and connected. 

### Visionaries

As often _filmmakers_ are visionaries: an analogy for the authentic web is **Eywa** from the *Avatar* film: the tree of truth and interconnection.

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/eywa-analogy-authentic-web.png" width="600">


Back with our feet on the ground of worldly realm:

The authentic Web as **a verifiable data structure** is built from **signed hash chained content addressable data**.

Now try to convince your date to go to that movie.

What does this mean?

Solves the hard problem of *zero-trust* architectures, which is [signed-at-rest](https://github.com/trustoverip/acdc/wiki/authentic-web). Conversely, _Signed in motion_ is relatively easy because we can use ephemeral identifiers with ephemeral key state for tokens

*Key state at rest* is hard because have to solve key rotation problem for persistent identifiers
            - signed data at rest using key state at rest of persistent identifiers
                - Use ephemeral identifiers as auxiliaries to persistent identifiers
                - Ambient verifiability:  everything can be verified offline, even copies.


## Speak the language of the majority of people

This is hard for several reasons:

- They are not there yet
- Identity is vague and vast 
- Digital identity is complex and all-encompassing
- They don't feel the need, nor the pain, nor the problem
- They think we're nuts and have been smoking marihuana

### How can we break through blissful ignorance

The **discomfort** many people experience on digital media like

- on the web
- in the main stream media (radio, tv, newspaper)
- on phone calls
- receiving text messages
- chat bots

might be a lead. Best expressed by Andy:

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/discomfort-on-the-web.drawio.png" alt="Andy and Lou from Little Britain" width="600">

Acknowledgement: Little Britain character expressing his ever-negative judgement "I don't want no .. { fill in anything } ". [Lou and Andy](https://en.wikipedia.org/wiki/Lou_and_Andy) Example: ["Want a chocolate!"](https://www.youtube.com/watch?v=oegFZUodeJA).

### How can we shine the spotlight on the unique feature mix of the KERI suite?
<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/mental-Model-KERI.drawio.png" alt="Andy from Little Britain" width="600">


## Pseudo code of Mental model: Verifiable Data Structures all the way down

> Or: the inner working of 'Eywa'

### Genealized hash chained signed data structures (provenanceable)
                - hashed list. 
                - hash of concatenated hashes in list
                - hash of cat blinded hashes in list
                - Hash Graph
                    - Hash DAG
                    - Custom Hash DAG
                    - Merkle root hash (binary tree) Sparse Merkle Tree
                    - Patricia Merkle (Trie) root hash 
                - Signed Hash Graph
                    - Signed Hash DAG
                        - ACDC is a type of Custom signed Hash DAG iteself and distribute universal Hash DAG fragment
                - Cryptographic Accumulators
                    - Collective Signatures (BBS+)
                    - CL Signatures (AnonCreds)
### Hash Log
                - KEL is a hash log for key state
                - TEL is a hash log for every other kind of state anchored to key state
                    - TEL as versioned hash log
### Content Addressable (Hash indexed) Database
                - De-duplication
                - universaly unique identifers as indexes = secure distributable database 
                - SAID as index = crypto agile interoperable universally unique identifiers as indexes
                    - ACDC is a type of content addressable SAID database fragment, graph fragment
                - B-Tree branch

## Append to Extend
            - permission-less data type registry
            - permission-less rules registry
            - ecosystem governance through permission-less but trusted (reputable) (web-of-trust)  registries
## Versioned Authentic data
            - TEL transfer registry for versioned authentic data
            - TEL transfer registry for NFTs
            - TEL/ACDC for authentic messaging registry
            - TEL/ACDC for authentic versioned document registry
            - ACDCs are modeled as graph fragments.
## BADA/RUN when not use KEL Seals for distributed authentic database
            - replay attack protection through monotonicity
                - replay signed date-time stamped message 
                - replay stale keys to newly date-time stamp and sign message
                - ephemeral identifiers as auxiliaries to persistent identifiers
                    - signed at rest of auxiliary ephemeral identifier



## Concepts
See more [Concepts](https://github.com/WebOfTrust/WOT-terms/blob/main/concepts.md) behind KERI. This is an elaboration on the why's of KERI within the mental model describes in detail above.