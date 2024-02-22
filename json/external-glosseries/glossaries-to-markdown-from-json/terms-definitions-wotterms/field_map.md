## field map

<h4>Definition</h4><p>A traditional <code>key:value</code> pair renamed to avoid confusing with the cryptographic use of the term &#39;key&#39;.</p><p>To avoid confusion with the cryptographic use of the term key we instead use the term field to refer to a mapping pair and the terms <em>field label</em> and <em>field value</em> for each member of a pair. These pairs can be represented by two tuples e.g (<code>label, value</code>). We qualify this terminology when necessary by using the term <em>field map</em> to reference such a mapping.</p><h4>Nested field maps</h4><p>Field maps may be nested where a given field value is itself a reference to another field map. We call this nested set of fields a nested field map or simply a nested map for short.</p>

