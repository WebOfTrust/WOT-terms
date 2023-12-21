# double spend proof
## Definition
Total global ordering of transaction so that value can’t be spend twice at the same time from the unit of value. Or in common language: you can't spend your money twice. 

| TBW |

### KERI related
The most important feature of a [cryptocurrency](cryptocurrency) is that it must be double spend proof. Because KERI's key event operations are idempotent they do not need to be double spend proofed, so we can greatly simplify the distributed consensus algorithm in KERI. Which makes KERI relatively more attractive for many applications including IoT applications by comparison.  
As a result of the relaxation of double spend proofing, KERI is able to break the distributed consensus algorithm into two halves and simplify it in the process. The two halves are the *promulgation* half (by witnesses) and the *confirmation* half (by valdators).