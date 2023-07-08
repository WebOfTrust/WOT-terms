## Definition
KERI Agent in the cloud. The KERIA service will expose 3 separate HTTP endpoints on 3 separate network interfaces.

1. Boot Interface - Exposes one endpoint for Agent Worker initialization.
2. Admin Interface - The REST API for command and control operations from the Signify Client.
3. KERI Protocol Interface - CESR over HTTP endpoint for KERI protocol interactions with the rest of the world.

More at [Source Github repo](https://github.com/WebOfTrust/keria/blob/main/docs/protocol.md)