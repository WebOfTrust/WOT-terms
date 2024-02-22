## sally

<h4>Definition</h4><p>is an implementation of a verification service and acting as a reporting server. It is purpose-built software for the vLEI ecosystem to allow participants in the vLEI ecosystem present credentials, so the <a href="GLEIF">GLEIF</a> Reporting API can show what <a href="vLEI">vLEIs</a> are; issued to <a href="legal-entity">Legal Entities</a>.</p><h4>Inner working</h4><p>The Sally <a href="vLEI">vLEI</a> Audit Reporting Agent <em>receives presentations of credentials</em> and notices of <a href="revocation-event">revocation</a>, verifies the structure and cryptographic integrity of the credential or revocation event and performs a POST to the configured webhook <a href="URL">URL</a><br><a href="https://github.com/GLEIF-IT/sally">Source</a></p>

