## Definition

The current state of all the temporary storage locations (what events are waiting for what other information) that KERI protocol needs to  keep track of, due to its fully asynchronous nature.

## Inner-working and motivation
Since the KERI protocol is fully asynchronous, there is no way to guarantee that events will arrive in order to be processed successfully.  This includes things like anchoring events for transaction event logs for credentials (the TEL even could arrive before the anchoring event) and signatures arriving on a multisig event.\
To account for this asynchronous nature, implementations need to "escrow" events (store them temporarily) while waiting for other events or additional signatures to show up.   The current state of all the temporary storage locations (what events are waiting for what other information) is called the "escrow state".\
Source: Philip Feairheller

## Beware
An physical [Escrow State](https://www.answers.com/Q/What_is_an_escrow_state) that you might know from Real Estate transaction is not at all related to the one we define.
