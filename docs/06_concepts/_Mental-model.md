# Mental model of the KERI suite

To comprehend the *reason to be* for KERI, we need to create a frame of reference, a mental model. Why is a mental model necessary? See [below](#example-mental-model).

## A mental model for every target group
If we'd like to get the message across and be understood we have to understand that every mental model has its own target group.The ***KERI Suite*** is about the *Authentic web*. Because of mental models, the term 'Authentic web' is multi explicable. 

> The KERI Suite contains: 
> 1. all technical components (KERI, ACDC, CESR, OOBI, IPEX, etc)
> 2. the rules of engagement in implementations (how-we-did and howto's)
> 3. the governance (or "how it's run" in general)

## Authentic web
If we wrap up the definition of the authentic web [here](https://github.com/trustoverip/acdc/wiki/authentic-web) we could say:

### The authentic web is the internet as a whole giant verifiable data structure.

But who do we intend to reach with a *verifiable data structure*? Most probably only insiders or computer-savy people might resonate with this definition. So let's go for this target group first and try to expand the audience later.

### Logical implications
If authentic implies that everything is in an omnipresent big data strcuture and can be verified, this means:
1. every piece of data is (inter)related to other data
2. everything is always digitally signed, immutable, and non-censorable
3. users are able to keep secrets secret
4. we need trustable state-of-the-art cryptography to encrypt, decrypt and sign by anyone, anywhere, anytime
5. users are connected and exchange comprehensible content securely, confidentially and privately, according to their their wishes.

### Technical implications
In our mental model for computer-savy people the logical implications of the Authentic Web demand the following technical components:
- a database in the cloud (1,2)
- key management tools (2,3)
- cryptographic functions (3,4)
- a streaming protocol to send / receive data (4,5)
- credentials; a way to express and interprete (findings about) content (5)
- a decentralised infrastructure, because it's to only scalable way to meet the objectives (2,3,4,5)

## Why do we need an Authentic Web now?
Our representation in the digital world is growing exponentially in size and in speed. We've never been able to be sure 'who said what?' on the internet. At best, the tools we had so far (https:) were able to mitigate risks. But this is no longer the case. We can't trust data and its origin anymore on the web, due to the rise of fake imaginary and videos and AI. Big data collectors / Social media together know more about you and know you better than yourself.
Moreover, governments and delegated organisations combine personal data which could easily lead to totalitarion controle and surveillance and our Western countries evolve into China-like states. Although politicians promise not to go down this path, history has proven that when an urgencies arise, scope and mission creeps.
It's an urgent issue. Elections have already been influenced and people have been impersonated on the web by something else or someone else.

The securely encrypted decentralised Authentic Web could give people a chance to control and manage their own digital twin on the web and interact with others confidentially and with regard to their privacy. Most importantly, also their role and tasks in society (e.g. public safety, taxation) can be complied with, through those decentralised identifiers.

Step back for a moment. Realize we've managed to scope our KERI Suite mental model! Let's move forward to even more profoundly grasp what KERI is all about and who profits and how.

## How can the Authentic Web be achieved?
The initial effort will last a few decades and demand continuous maintenance from the beginning. The KERI Suite is fully equipped to build and maintain interconnectable parts of the Authentic web. 
How to make any data authentic using the KERI suite? -> create and append to an ever growing _Authentic Web_ where everything is signed and connected.

### Visionaries

As often *film makers* are visionaries: an analogy for the authentic web is **Eywa** from the *Avatar* film: the tree of truth and interconnection.

<img src="https://raw.githubusercontent.com/WebOfTrust/WOT-terms/gh-pages/images/eywa-analogy-authentic-web.png" width="600">

Back with our feet on the ground of worldly realm:

The authentic Web as **a verifiable data structure** is built from **signed hash chained content addressable data**.  
> Challenge: Try to convince your date to go to thát movie.

### What does "signed hash chained content addressable data" mean?
In short, it's a digital chain of mini proofs of content, so that the content is immutable, and we know 100% verifiable who its originators are, as long as they sign (which is sometimes a choice, sometimes a necessity).

> An originator of data can be:
> - creator
> - editor
> - person that assesses or judges data
> - an issuer
> - a holder 
> - an owner
> - the controller

### No authentic web without governance
In the design of an authentic web a community decides how. See the elaborate [TrustoverIP](https://trustoverip.org) model: The governance stack and the technical stack plus how both interact.  
It's no use to only build the technical stack. There can't be a meaningful authentic web without human purpose, interaction and productivity. The rules of engagement at set in fluid docs that define roles, tasks, hierachy, thresholds, criteria, processes which we called 'governance docs'.
An example of ToIP and KERI Suite governance docs is the set of GLEIF governance docs. The technical stack and governance stack are interdependent on all levels; changes in one has consequences in the other.

The main take-away from this chapter so far is that although the Authentic Web can be viewed as one giant verifiable datastructure, its meaning for any user from any angle or background will depend on the objectives and rules how this data was prepared, hidden, proved, signed and anchored. This is collective human effort to discuss, define, note, and agree upon in governance docs. There's no meaningful Authentic Web without the proper governance of its parts.

> Elaboration on the adjective *proper* in governance (in our Mental Model):
> - up to date
> - focussed
> - no loop holes
> - deterministic
> - | TBW more?.. |

### Governance is entirely tailor made within communities?
No. Arguably 80+ percent of text in Trust-over-IP governance docs and 95% of text in KERI governance docs can be copied and adjusted to be used by other communities. However, a Governance doc is a living thing. Over time, it breathes the accrued knowledge and expertise plus additionally the consensus in the group about purpose and rules of the authentic web for them. This can't be copied and pasted; you need to live through it, make up your mind together and update the docs accordingly.
Happily, a governance doc produced by another group obviously in another mental submodel, can be a guide, a check-boxed list if you will, to consistently go along with in the process.

Once again back to our target group developers, who in general are more devoted to the technical stack of the KERI Suite. Hopefully our target group realizes profoundly enough how interrelated they are with the minds of the end-users of their produce.

## Target group developers

### Speak the language of the majority of people
This is hard for several reasons:
- Authentic web? They are not there yet
- the Identity field is vague and vast
- Digital identity is complex and all-encompassing
- They don't feel the need, nor the pain, nor the problem
- When they hear us taThey think we're nuts and have been smoking marihuana

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

Like a snowball in the school yard; it landed cold and wet in your neck, you turned around and wondered ‘who did it’?! Relatable?  
You look around and a few class mates are laughing, some are smiling at you. You can’t be sure, so you try to hit the one with the biggest smile on his face with the snowball you had just been preparing when one of them hit you off guard.

**Same with paper arrows going through a class room**: it lands on your desk, our in your hair, but again… *who dunnit*?!

#### Compact means

When we design long living, all encompassing identifier system for people, organizations and IoT devices, we have to take of every single bit and byte we use. And happily KERI, ACDC, CESR, OOBI etc, do so. So it’s the minimal sufficient means variant and the best environmental friendly approach we can have for persistent identifiers.

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

See more [Concepts](https://github.com/WebOfTrust/WOT-terms/blob/main/concepts.md) behind KERI. This is an elaboration on the historic why's of KERI within the mental model describes in detail above.

## Example mental model
> Let’s suggest you have mental model that says the *earth is at the center of the universe*, and the sun and planets somehow revolve around it. Further development of the model allows you to compute planetary positions, and do some fortune telling and predict tides.

However, the mental model changes drastically when you would state that the *sun, rather than the earth, is at the centre of the universe*.  Or even more far-reaching: *the Big Bang is the middle of the universe*. **Changing one’s perspective can have very profound consequences**, without changing the universe itself. That’s what mental models are all about.

More on this can be read here: eSSIF-lab [mental models](https://essif-lab.github.io/framework/docs/terms/pattern).

### Implement signed hash chained content addressable data
For our target group 'developers': Implementing *signed hash chained content addressable data* solves the hard problem of *zero-trust* architectures, which is [signed-at-rest](https://github.com/trustoverip/acdc/wiki/authentic-web). Conversely, *Signed in motion* is relatively easy because we can use ephemeral identifiers with ephemeral key state for tokens.

*Key state at rest* is hard because have to solve key rotation problem for persistent identifiers:
 - signed data at rest using key state at rest of persistent identifiers
 - Use ephemeral identifiers as auxiliaries to persistent identifiers
 - Ambient verifiability:  everything can be verified offline, even copies.
