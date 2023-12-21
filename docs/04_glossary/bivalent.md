# bivalent
## Definition
A nested set of layered delegations in a [delegation](delegation) tree, wraps each layer with compromise recovery protection of the next higher layer. This maintains the security of the root layer for compromise recovery all the way out to the leaves in spite of the leaves using less secure key management methods.  

![bivalent-key-management-infrastructure](https://github.com/weboftrust/WOT-terms/static/img/bivalent-key-management-infrastructure.png)

To elaborate, in a [cooperative delegation](cooperative-delegation), the key generation and storage functions of the delegator and delegate, in terms of the controlling private keys, may be completely isolated from each other. This means that each may use its own independent key management infrastructure with no movement of private keys between the two infrastructures. We call this a **bivalent** key management infrastructure.

Source [Universal Identifier Theory](https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/IdentifierTheory_web.pdf) by Samuel Smith


## Also see
[Multivalent](multi-valent)
[Univalent](univalent)