## base media type

<h4>Definition</h4><p><code>credential</code> plus <code>ld</code> plus <code>json</code>.</p><p>Other media types of credentials are allowed by must provide either unidirectional or bidirectional transformations.  So for example we would create credential+acdc+json and provide a unidirectional transformation to credential+ld+json.</p><p>We are going for <code>credential</code> plus <code>acdc</code> plus <code>json</code> without <code>@context</code>. The main objection to use <code>@context</code> is that it can change the meaning of a credential. The other way around: ACDCs will include W3C credentials.</p><p>Media types will be used to differentiate between types of credentials and verifiable credentials.</p>

