## Definition
The pre-rotation mechanism supports partial pre-rotation or **more exactly partial rotation of pre-rotated keypairs**. It's a rotation operation on a set of pre-rotated keys that may keep some keys in reserve (i.e unexposed) while exposing others as needed.

Partial rotation serves two important purposes:
- [Reserve rotation](reserve-rotation.md)
- [Custodial rotation](custodial-rotation.md)

Paraphrased by @henkvancann on the bases of the [IETF-KERI draft 2022](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md) by Samual Smith.

## More detailed explanation
A valid rotation operation requires the satisfaction of two different thresholds. These are the current [threshold](signing-threshold.md) of the given [rotation](rotation.md) ([establishment](establishment-event.md)) event with respect to its associated current public key list and the next threshold from the given rotation event's most recent prior establishment event with respect to its associated blinded next key [digest](digest.md) list. For short, we denote the next threshold from the most recent prior establishment event as the prior next threshold, and the list of unblinded public keys taken from the blinded key digest list from the most recent prior establishment event as the prior next key list. Explication of the elements of the prior next key list requires exposing or unblinding the underlying public keys committed to by their corresponding digests that appear in the next key digest list of the most recent prior establishment event. The unexposed (blinded) public keys MAY be held in reserve.\
More in [Source](https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#partial-pre-rotation-detail)