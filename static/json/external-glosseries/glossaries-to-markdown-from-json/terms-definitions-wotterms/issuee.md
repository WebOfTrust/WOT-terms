## issuee

<h4>Definition</h4><p>An <a href="authentic-chained-data-container">ACDC</a> is optionally issued to the Issuee. When present, the Issuee identifier (<a href="autonomic-identifier">AID</a>) appears at the top level of the attribute section or in the attribute list at the top level of the attribute aggregate section of the ACDC.</p><h4>Rule</h4><p>Each ACDC MUST have an <a href="issuer">Issuer</a> and MAY have an <a href="issuee">Issuee</a>. The set of <a href="ACDC">ACDC</a>s so disclosed in a presentation exchange MUST be chained. This set of chained ACDCs define a <a href="directed-acyclic-graph">directed acyclic graph</a> that MUST have at least one vertex and MAY have zero or more edges pointing to other vertices.</p>

