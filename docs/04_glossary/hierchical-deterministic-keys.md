## Definition
An HDK type is a deterministic Bitcoin wallet derived from a known [seed](seed) that allows child keys to be created from the parent key. Because the child key is generated from a known seed, a relationship between the child and parent keys is invisible to anyone without that seed.

## More

The HD protocol (BIP 32) can generate a near-infinite number of child keys from a deterministically generated seed (chain code) from its parent, allowing you to recreate those exact same child keys as long as you have the seed.  
More at [W3 source](https://www.w3.org/2016/04/blockchain-workshop/interest/robles.html)