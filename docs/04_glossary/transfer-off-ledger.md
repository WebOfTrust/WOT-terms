# transfer off ledger
## Definition
The act of transferring control authority over an identifier from a ledger (or blockchain) to the native verifiable KERI data structure Key Event Log.

## Transition option
If you want to transition to using KERI, you could do that by anchoring your KERI identifiers in, for example, your Indy ledger. The neat thing is, you could then **transfer the identifier off the ledger** and then have non-ledger based portable identifiers.

## One at a time
Although it's portable, you can be anchored to any one ledger at a time, or you could move it to an identifier (witness, backer, watcher, etc) can only be represented different ledger, or you could move to using just witnesses, all with the same identifier by just
doing rotation events and changing your anchor, your backers here.  
So an identifier cannot be anchored, let's say to multiple Indies or Ethereum. You could be only anchored in one at a time.

## Move identifiers across networks
You can move identifiers across networks with KERI, but it's not what it has been designed for.