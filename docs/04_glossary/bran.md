## Definition

A cryptographic string used as a primary input, a seed, for creating key material for and [autonomic-identifier](autonomic-identifier). 

## Usages

This is used in Signify TS:
- `Controller` [constructor argument](https://github.com/WebOfTrust/signify-ts/blob/516539f8bb68c8504e10221bf144a54b8c507dc3/src/keri/app/controller.ts#L104C77-L104C89)
   ```javascript
   constructor(bran: string, tier: Tier, ridx: number = 0, state: any | null = null) {
        this.bran = MtrDex.Salt_128 + 'A' + bran.substring(0, 21)  // qb64 salt for seed
        this.stem = "signify:controller"
        this.tier = tier
        this.ridx = ridx

        this.salter = new Salter({ qb64: this.bran, tier: this.tier })
   ...
   ```

## Sources

Quote, a Zoom chat message, from Dr. Sam Smith on 8/22/23 in the Tuesday morning KERI & ACDC ToIP specification discussion call:

> We already use seed and salt for something else so bran is related to seed so we used a term that was evocative of its use but not conflict with already used seed