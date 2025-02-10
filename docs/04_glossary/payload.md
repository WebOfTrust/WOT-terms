## Definition
The term 'payload' is used to distinguish between the 'interesting' information in a chunk of data or similar and the overhead to support it. The payload refers to the interesting part.

### Origin

It is borrowed from transportation, where it refers to the part of the load that 'pays': for example, a tanker truck may carry 20 tons of oil, but the fully loaded vehicle weighs much more than that - there's the vehicle itself, the driver, fuel, the tank, etc. It costs money to move all these, but the customer only cares about (and pays for) the oil, hence, 'pay-load'. [Source](https://softwareengineering.stackexchange.com/questions/158603/what-does-the-term-payload-mean-in-programming).

## KERI context
Now payload in `KERI`. The payload of an item in an `Event Log` is one the following cryptographic building blocks in KERI:
- a content digest hash 
- a root hash of a Merkle-tree
- a public key
Note tha KERI never puts raw data or privacy-sensitive data in a `KEL` or `KERL`.