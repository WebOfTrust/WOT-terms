# keri request authentication method
## Definition
All requests from a web client must use KRAM (KERI Request Authentication Method) for replay attack protection. The method is essentially based on each request body needing to include a date time string field in ISO-8601 format that must be within an acceptable time window relative to the server's date time. See the [KRAM Github repo](https://github.com/WebOfTrust/kram/blob/main/README.md)

Source [SKWA GitHub repo](https://github.com/WebOfTrust/skwa), more info in [HackMD.io write-up](https://hackmd.io/ZbVAbNK1SPyT90-oNwN_cw)

## Related
[SKWA](SKWA)
