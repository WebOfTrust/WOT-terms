## Definition

_RUN off the [CRUD](CRUD)_ is an alternative to the traditional [CRUD](CRUD) approach to defining basic operations on resources in data management systems (e.g., databases, APIs). RUN stands for Read, Update, Nullify and bears a nuanced approach to deletion.

## More

Why is it preferred ('run off') over the CRUD (Create, Update, Delete)?

Consider the need to protect '_authentic data_' in a decentralized environment.

In a decentralized control model, the data always originates from a controller (aka client). The data created (sourced) by the controller follows the principle of '_Non-Interactive Replay Monotonicity_' to be able to protect the data from a replay (events are changed) or a deletion (some events are deleted) attacks. That is to say, the data (or events comprising it) is never deleted, it's rather always added to via updates. Each update, therefore, forms a verifiable, continuous log ( e.g. by providing growing sequence number, date timestamp, etc for each update). To enable invalidation of data, a special update, called Nullify, is used.

The client, therefore, updates the server (it's peer or peers), which just maintains the log following certain rules (see [BADA](best-available-data-acceptance-mechanism) - Best Available Data Acceptance).

To summarise, the server can only Read the log, add Updates to it, including Nullifying ones. So *no* Create or Delete.