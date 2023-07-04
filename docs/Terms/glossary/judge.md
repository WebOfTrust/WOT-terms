## Definition
A judge is an entity or component that examines the entries of one or more [KERLs](key-event-receipt-log) and DELs of a given identifier to validate that the event history is from a non-[duplicitous](duplicity) controller and has been witnessed by a sufficient number of non-duplicitous [witnesses](witness) such that it may be trusted or conversely not-trusted by a [validator](validator).

## Task and result
A judge determines current [authoritative] key set for identifier from the [key event receipt logs](key-event-receipt-log) from a set of witnesses. Judges transmit the 'judgement' of watchers concerning duplicity.

## Where judges run
Example AT&T vs T-Mobile. The only "fault" that is apparent, is an attack on the KEL. And that can only occur via key compromise. So a successful multi-threshold attack causing [duplicity](duplicity) is the only thing [watchers](watcher) are looking for. 

## Competitor and common interest
So even competitors will want to share across the entire ecosystem. Similar to certificate transparency, all competitors in the internet hosting space share the information with each other because it is in their best interest to eliminate fraud / duplicity.\
Paraphrased by @henkvancann based on [source Samuel Smith / Phil Feairheller](https://hackmd.io/-soUScAqQEaSw5MJ71899w?view#2022-09-06)

