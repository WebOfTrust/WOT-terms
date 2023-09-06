## Definition
It was designed send to sign portions of a credential. Designed for complex cases like 
- a credential embedded in another credential
- multiple signers, only signing portions of a credential (partial signing)

In these cases we provide a path (using SAD path language) to what is signed.
_We have never used it for credentials_, however we do need it for
**forwarding in KERI embedded messages** - see [video discussion](https://us06web.zoom.us/rec/play/qEL79NTkwi4KHrC7ytfy4pYJySOvjpL_gqMSiTxEBl9uXPaeUSaQdka_65xLKP1yozaakqIlYpIX4Yxc.xN0-4LkaqWOZqDjg?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2F9RtKAuTNe1417D-4tgdLzmdsrRz63EuaBOysMQU4EZ0ysw4aaZXsIXo1tIRNdzyC.FJhPr84fMxOsGoQN).

## Important
We don't sign our credentials, you shouldn't either!

Source: Philip Feairheller, July 20 2023, KERI-dev meeting