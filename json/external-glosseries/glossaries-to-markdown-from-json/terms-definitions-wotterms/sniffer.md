## sniffer

<h4>Definition</h4><p>The <em>sniffer</em> is part of <a href="parside">Parside</a> and detects if the CESR stream contains CESR binary, CESR Text, JSON, CBOR, MGPK. </p><h4>Working</h4><p>If any of JSON, CBOR, MGPK then the parser regexes to find the <a href="version-string">version string</a> inside the JSON, CBOR, and MGPK and from the version string extracts the number of characters/bytes that is the length of the JSON, CBOR, or MGPK. The parser then resumes <em>sniffing</em>. When the sniff result is &#39;CESR&#39; then when at the top level looks for the CESR <a href="version-code">version count code</a> or any other count codes.</p><p>Source Slack Cesride thread: Feb 2 2023</p><h4>Related</h4><p><a href="sniffable">Sniffable</a></p>

