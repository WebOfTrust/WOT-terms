## Definition
A traditional `key:value` pair renamed to avoid confusing with the cryptographic use of the term 'key'.

## More

To avoid confusion with the cryptographic use of the term key we instead use the term field to refer to a mapping pair and the terms _field label_ and _field value_ for each member of a pair. These pairs can be represented by two tuples e.g (`label, value`). We qualify this terminology when necessary by using the term _field map_ to reference such a mapping.

## Nested field maps
Field maps may be nested where a given field value is itself a reference to another field map. We call this nested set of fields a nested field map or simply a nested map for short.