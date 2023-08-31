# Mental model of the KERI suite

To comprehend the *reason to be* for KERI, we need to create a frame of reference, a mental model. Why this in necessary can be best illustrated with an example.
> Example:
> Let’s suggest you have mental model that says the *earth is at the center of the universe*, and the sun and planets somehow revolve around it. Further development of the model allows you to compute planetary positions, and do some fortune telling and predict tides.
However, the mental model changes drastically when you would state that the *sun, rather than the earth, is at the centre of the universe*.  Or even more far-reaching: the Big Bang is the middle of the universe. **Changing one’s perspective can have very profound consequences**, without changing the universe itself. That’s what mental models are all about.

More on this can be read here: eSSIF-lab [mental models](https://essif-lab.github.io/framework/docs/terms/pattern).

## A mental model for every target group
If we'd like to get the message across and be understood we have to understand that every mental model has its own target group.

'Authentic web' is multi explicable, if only it would make sense in the first place.

## Authentic web
If we wrap up the definition of the authentic web [here](https://github.com/trustoverip/acdc/wiki/authentic-web) we could say:

### The authentic web is the internet as a whole giant verifiable data structure.

But who do we intend to reach with a definition like this? Definitely insiders or computer-savy people. Acknowledging this, let's go for this target group briefly. And try to expand the reach later.

## Technical implications

How to make any data authentic using the KERI suite? -> create and append to an ever growing _Authentic Web_ where everything is signed and connected. 

### Visionaries

As often *film makers* are visionaries: an analogy for the authentic web is **Eywa** from the *Avatar* film: the tree of truth and interconnection.

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/eywa-analogy-authentic-web.png" width="600">

Back with our feet on the ground of worldly realm:

The authentic Web as **a verifiable data structure** is built from **signed hash chained content addressable data**.

Now try to convince your date to go to that movie.

What does this mean?

Solves the hard problem of *zero-trust* architectures, which is [signed-at-rest](https://github.com/trustoverip/acdc/wiki/authentic-web). Conversely, *Signed in motion* is relatively easy because we can use ephemeral identifiers with ephemeral key state for tokens

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

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/discomfort-on-the-web.drawio.png" alt="Andy and Lou from Little Britain" width="800">

Acknowledgement: Little Britain character expressing his ever-negative judgement "I don't want no .. { fill in anything } ". [Lou and Andy](https://en.wikipedia.org/wiki/Lou_and_Andy) Example: ["Want a chocolate!"](https://www.youtube.com/watch?v=oegFZUodeJA).

### How can we shine the spotlight on the unique feature mix of the KERI suite?
<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/mental-Model-KERI.drawio.png" alt="Andy from Little Britain" width="600">

| What | Why | How |
| -------- | -------- | -------- |
| Secure attribution | For sure know who said what | Verifiability to root-of-trust |
| Ambient available | Anyone anywhere anytime should be able to use it, zero trust | interoperability by design, witness network |
| Compact means | heavy duty | minimal sufficient means, durable cyrptography |
| Free and Open | Anyone anywhere anytime should be able to use it, verifiable | Apache 2 license, no patents |
| Secure channels | security first and for all | composable event streaming Representation (CESR) |
| Secure key management |You gotta keep your secrets secret |Proven dumb cryptography with all inception features needed, like multisig |
| Duplicity detection | We don't trust double speak but act on it | rotate controlling keys |
| Seals and Signatures|Offer the ability to verify everything and not trust it; non-repudiable |Hashing, self-addressing identifiers, signatures|
| Witness and Watchers |Scalable presence of promulgator of key state, proofs and credentials|through secure peer-to-peer channels and cryptographic receipts|
| Veracity aid |To make an informed personal call on veracity with the help of borrowed reputation claims | Chained credentials and Self-addressing Autonomic Identifiers |
| Self control |Self sovereignty, decentralization, freedom, self determination, avoid totalitarian control and surveillance| no middlemen, private key inception, delegation, key rotation, revocation |

### "Never explain a joke"

Running to risk of violating this rule right way, I feel the need to explain some of the icons.

#### Secure attribution

**The paper arrow with a lock**
For me it’s an image of somebody sending a message and I can be 100% sure it’s from him or her. 

##### Analogy Snowball

Like a snowball in the school yard; it landed cold and wet in your neck, you turned around and wondered ‘who did it’?! Relatable?\
You look around and a few class mates are laughing, some are smiling at you. You can’t be sure, so you try to hit the one with the biggest smile on his face with the snowball you had just been preparing when one of them hit you off guard.

**Same with paper arrows going through a class room**: it lands on your desk, our in your hair, but again… *who dunnit*?!

#### Compact means

When we design long living, all encompassing identifier systems for people, orgs and IoT devices, we have to take of every single bit and byte we use. And happily KERI, ACDC, CESR, OOBI etc, do so. So it’s the minimal sufficient means variant and the best environmental friendly approach we can have for persistent identifiers.

#### Secure channels

Peer-to-peer, OOBI and CESR. 

Going over them in reverse order.

1. If you can’t read what going over the line, security is no more than pure trust. CESR is round robin composable and makes it cryptographically verifiable and visually verifiable and solves this problem.
2. OOBI is an extra, time-gap-bridging  guarantee (by authentication) that some entity is the one who you think it is while being introduced to it. OOBI is discovery via URI, trust via KERI. Confidentiality and Verifiability is preserved; therefor a (just authenticated) secure one-to-one channel.
3. The two-headed arrow symbolizes the p2p nature of this exchange. (edited) 

> Again, if I have to explain the icon, it’s not a good-enough icon. But if we describe the analogy we all can relate to, we could find somebody to draw a matching icon all along.

## Pseudo code of Mental model: Verifiable Data Structures all the way down

> Or: the inner working of 'Eywa'

### Generalized hash chained signed data structures (provenance-able)

- hashed list
    1. hash of concatenated hashes in list
    2. hash of cat blinded hashes in list
- Hash Graph
    1. Hash DAG
    2. Custom Hash DAG
    3. Merkle root hash (binary tree) Sparse Merkle Tree
    4. Patricia Merkle (Trie) root hash
- Signed Hash Graph
    1. Signed Hash DAG
        - ACDC is a type of Custom signed Hash DAG itself and distribute universal Hash DAG fragment
- Cryptographic Accumulators
    1. Collective Signatures (BBS+)
    2. CL Signatures (AnonCreds)

### Hash Log

- KEL is a hash log for key state
- TEL is a versioned hash log for every other kind of state anchored to key state

### Content Addressable (Hash indexed) Database

- De-duplication
- universally unique identifiers as indexes = secure distributable database
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
- ACDCs are modeled as graph fragments

## BADA/RUN when not use KEL Seals for distributed authentic database

- replay attack protection through monotonicity
    1. replay signed date-time stamped message
    2. replay stale keys to newly date-time stamp and sign message
- ephemeral identifiers as auxiliaries to persistent identifiers
   1. signed at rest of auxiliary ephemeral identifier

## Concepts

See more [Concepts](https://github.com/WebOfTrust/WOT-terms/blob/main/concepts.md) behind KERI. This is an elaboration on the why's of KERI within the mental model describes in detail above.