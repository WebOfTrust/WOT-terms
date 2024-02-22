## keri request authentication method

<h4>Definition</h4><p>All requests from a web client must use KRAM (KERI Request Authentication Method) for replay attack protection. The method is essentially based on each request body needing to include a date time string field in ISO-8601 format that must be within an acceptable time window relative to the server&#39;s date time. See the <a href="https://github.com/WebOfTrust/kram/blob/main/README.md">KRAM Github repo</a></p><p>Source <a href="https://github.com/WebOfTrust/skwa">SKWA GitHub repo</a>, more info in <a href="https://hackmd.io/ZbVAbNK1SPyT90-oNwN_cw">HackMD.io write-up</a></p><h4>Related</h4><p><a href="SKWA">SKWA</a></p>

