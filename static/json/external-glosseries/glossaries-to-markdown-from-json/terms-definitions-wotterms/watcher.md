## watcher

<h4>Definition</h4><p>KERI alternative to total global ordering and consensus protocols is a mechanism called <a href="duplicity">duplicity</a> detection. In the <a href="verifier">verification</a> and <a href="validate">validation</a> <strong>watchers are all that matter</strong>; they guarantee that logs are immutable by one very simple rule: &quot;<a href="first-seen">first seen</a> wins&quot;.</p><h4>KERI operational</h4><p>This would be a set of watchers (that the validators trust) that record any and all copies of key event logs (KEL) that they see. Because these watchers can be anyone and anywhere, any controller of a public identifier is at peril should they choose to publish inconsistent copies of their KEL. This removes the incentive to be duplicitous.</p>

