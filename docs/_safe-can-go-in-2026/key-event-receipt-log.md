# key event receipt log
## Definition
Signed Key Events, keeping track of establishment events. To begin with the inception event and any number of rotation events. We call that the establishment subsequence.
The Key Event Receipt Logs are built from receipts of events signed by the witnesses of those events (these are called commitments); these are also append-only but not hash-chained.
(@henkvancann)

![](https://github.com/WebOfTrust/keri/blob/main/images/inception-rotation.png)