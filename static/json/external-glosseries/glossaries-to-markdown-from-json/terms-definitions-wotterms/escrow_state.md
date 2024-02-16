## escrow state

<h4>Definition</h4><p>The current state of all the temporary storage locations (what events are waiting for what other information) that KERI protocol needs to  keep track of, due to its fully asynchronous nature.</p><h4>Inner-working and motivation</h4><p>Since the KERI protocol is fully asynchronous, there is no way to guarantee that events will arrive in order to be processed successfully.  This includes things like anchoring events for transaction event logs for credentials (the TEL even could arrive before the anchoring event) and signatures arriving on a multisig event.<br>To account for this asynchronous nature, implementations need to &quot;escrow&quot; events (store them temporarily) while waiting for other events or additional signatures to show up.   The current state of all the temporary storage locations (what events are waiting for what other information) is called the &quot;escrow state&quot;.<br>Source: Philip Feairheller</p><h4>Beware</h4><p>An physical <a href="https://www.answers.com/Q/What_is_an_escrow_state">Escrow State</a> that you might know from Real Estate transaction is not at all related to the one we define.</p>
