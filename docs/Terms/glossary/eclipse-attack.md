## Definition

An eclipse attack is a [P2P](peer-to-peer.md) network-based attack. Eclipse attack can only be performed on nodes that accept incoming connections from other nodes, and not all nodes accept incoming connections.

In a bitcoin network, by default, there are a maximum of 117 incoming TCP connections and 8 outgoing TCP connections.\
[Source](https://www.geeksforgeeks.org/what-is-an-eclipse-attack/)

## KERI related

The only attack on KERI possible is an eclipse attack, so the larger your watcher network reach is the better your protection from this type of attack. The only limitation is a resource constraint.\
[Source Samuel Smith / Phil Feairheller](https://hackmd.io/-soUScAqQEaSw5MJ71899w?view#2022-09-06)

## Working of Eclipse Attack

Eclipse attacks are possible because nodes within the network are unable to connect with all other nodes and can connect with a limited number of neighboring nodes. This limitation might make it seem convenient for attackers to isolate a node from the rest of the network, but it is not an easy task. \
More at [Source GeeksforGeeks](https://www.geeksforgeeks.org/what-is-an-eclipse-attack/)

<img src="https://hackmd.io/_uploads/B1uNi0Egi.png" alt="working of an eclipse attack" width="300" />
