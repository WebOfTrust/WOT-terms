## Definition
SKRAP is a client to the KERIA server. Mobile clients will be using SKRAP to connect to KERI [AID](AID.md)s via [agent](agent.md)s in the new, multi-tenant Mark II Agent server, [KERIA](KERIA.md). 
Also, browser extensions will use SKRAP in order to use a wallet similar to _MetaMask_, except it will be KERIMask, and it will be a browser extension.
[KERIMask] (KERIMask.md) will connect to KERIA servers in order for a person to control AIDs from their browser extension.

SKRAP is also usable from HSMs and hardware wallets because the keys from the hardware wallet, along with some app code, connect through SKRAP to agents running in a KERIA server.

[Signify](signify.md) signs things at the edge. This includes [ACDC](ACDC.md)s. KERIA will be used to send communications between agents. The things KERIA sends are signed by Signify.\

Source: Kent Bull in KERI Slack May 2023

## Related to KERIA
The KERIA service will expose 3 separate HTTP endpoints on 3 separate network interfaces.
1. Boot Interface - Exposes one endpoint for Agent Worker initialization.
2. Admin Interface - The REST API for command and control operations from the Signify Client.
3. KERI Protocol Interface - CESR over HTTP endpoint for KERI protocol interactions with the rest of the world.

This separation allows for the Boot interface to be expose to internal infrastructure only (or disabled all together) while exposing the other two interfaces externally. If a KERIA instance is launched in static worker mode, meaning all agent workers are configured at start up only the Boot interface can be disabled completely.\
More at source [Github Signify](https://github.com/WebOfTrust/signify/blob/main/protocol.md)

