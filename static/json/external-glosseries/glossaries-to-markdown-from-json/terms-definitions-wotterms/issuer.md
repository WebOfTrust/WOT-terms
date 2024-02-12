## issuer

<h4>Definition</h4><p>An <a href="authentic-chained-data-container">ACDC</a> is issued by the Issuer. The Issuer identifier (<a href="autonomic-identifier">AID</a>) appears in the top level of the ACDC.</p><h4>Rule</h4><p>Each ACDC MUST have an <a href="issuer">Issuer</a> and MAY have an <a href="issuee">Issuee</a>. The set of <a href="ACDC">ACDC</a>s so disclosed in a presentation exchange MUST be chained. This set of chained ACDCs define a <a href="directed-acyclic-graph">directed acyclic graph</a> that MUST have at least one vertex and MAY have zero or more edges pointing to other vertices.</p>

