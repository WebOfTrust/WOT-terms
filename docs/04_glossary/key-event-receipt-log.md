## Definition
a key event receipt log is a [KEL](kel) that also includes all the consistent key event receipt [Message](message)s created by the associated set of witnesses. See annex [Key event receipt log](key-event-receipt-log).  
Source: Dr. S.Smith

## Explanation
Signed Key Events, keeping track of establishment events. To begin with the inception event and any number of rotation events. We call that the establishment subsequence.
The Key Event Receipt Logs are built from receipts of events signed by the witnesses of those events (these are called commitments); these are also append-only but not hash-chained.
(@henkvancann)

![](https://github.com/WebOfTrust/keri/blob/main/images/inception-rotation.png)