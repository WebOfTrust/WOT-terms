## Definition
Liveness refers to a set of properties of concurrent systems, that require a system to make progress despite the fact that its concurrently executing components ("processes") may have to "take turns" in critical sections, parts of the program that cannot be simultaneously run by multiple processes.

### Meaning
A _liveness_ property in concurrent systems states that "something good will eventually occur".

Liveness guarantees are important properties in operating systems and distributed systems.  
Unlike liveness properties, [safety properties](#safety-properties) can be violated by a finite execution of a distributed system. All properties can be expressed as the intersection of safety and liveness properties.  
{TBW prio 2 how is liveness important in distributed systems? how does KERI guarantee liveness}

### More information
On [wikipedia](https://en.wikipedia.org/wiki/Liveness)