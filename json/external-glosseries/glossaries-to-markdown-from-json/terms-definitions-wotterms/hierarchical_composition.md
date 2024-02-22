## hierarchical composition

<h4>Definition</h4><p>Encoding protocol that is composable in a hierarchy and enables <a href="pipelining">pipelining</a> (multiplexing and de-multiplexing) of complex streams in either text or compact binary. This allows management at scale for high-bandwidth applications.</p><h4>Example</h4><p>| TBW prio2 |</p><h4>CESR related</h4><p>Because of <a href="count-code">count codes</a> and the <a href="composability">composability</a> - and <a href="concatenation">concatenation</a> property in CESR, <a href="pipelining">pipelining</a> is possible, which then uses <a href="multiplexing">multiplexing</a> (combining <a href="self-framing">self-framing</a> primitives) and <em>de-multiplexing</em> (unravelling self-framing <a href="primitive">primitives</a>).</p>

