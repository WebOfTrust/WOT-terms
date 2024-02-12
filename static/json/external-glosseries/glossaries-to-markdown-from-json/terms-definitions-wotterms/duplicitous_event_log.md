## duplicitous event log

<h4>Definition</h4><p>This is a record of inconsistent event messages produced by a given controller or witness with respect to a given <a href="key-event-receipt-log">KERL</a>. The duplicitous events are indexed to the corresponding event in a KERL. A duplicitous event is represented by a set of two or more provably mutually <a href="inconsistency">inconsistent</a> event messages with respect to a KERL. Each <a href="juror">juror</a> keeps a duplicitous event log (DEL) for each <a href="controller">controller</a> and all designated witness with respect to a KERL. Any <a href="validator">validator</a> may confirm <a href="duplicity">duplicity</a> by examining a DEL.</p>

