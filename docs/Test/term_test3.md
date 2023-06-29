---
title: TEST3
Level: 1
---

## Definition

<div data-level="1">

Integrity (of a message or data) means that the information is whole, sound, and unimpaired (not necessarily correct). It means nothing is missing from the information; it is complete and in intended good order. (Source: Neil Thomson)

Lorum ipsum controller lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa wallet ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

</div>

## KERI suite criteria

In KERI's "security first" approach Authenticity includes _technical integrity_ of data involved. This includes:

1. [internal consistency](internal-inconsistency.md)
2. external consistency or [duplicity](duplicity.md) evident


<div data-level="1">

Integrity in ACDCs is "self-verifying": the [SAID](self-adressing-identifier.md) that is contained in the data is also the of hash of the data.

</div>

<div data-level="3">

The integrity of streaming data in [CESR](composable-event-streaming-representation.md) and [CESR proof signatures](cesr-proof-signature.md) is established by code tables and verifiable by the mere (killer-)feature: round-robin [composability](composability.md). If you can toggle between the text - and binary representation, _then that's the integrity proof_, if not, then it's provably lacking integrity.

</div>

<div data-level="2">

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

</div>

<div data-level="1">

Etiam quis urna malesuada, suscipit ex vel, pretium ante. Fusce pulvinar arcu a arcu elementum, nec feugiat est dapibus. Maecenas dignissim ultrices eros, eget sodales justo. Etiam eu hendrerit lorem. Mauris vel tellus nisi. Maecenas vehicula pellentesque nisl, pulvinar vulputate nulla mattis semper. Nam vel dapibus justo, nec gravida elit. Cras turpis turpis, gravida non porttitor eu, tincidunt vitae velit.

</div>

## ToIP related


On today's Technology Architecture TF call,..., we defined authenticity to include integrity.\
[Source ToIP issue 10](https://github.com/trustoverip/TechArch/issues/10)

[message integrity](https://github.com/trustoverip/TechArch/issues/10) seems to be included in `technical integrity`.

The further separation of Authenticity and Integrity in the ToIP glossary can be largely adopted by KERI? {TBW}

## See also

[verified integrity](verified-integrity.md)\
[(complementary) integrity verification](complementary-integrity-verification.md)

\*Validation in relation to integrity, in KERI's view would be an assessment of what's been verified before; in a certain context from a certain angle. And this mechanism is too close to _veracity judgement_, to be an objective verdict over integrity of data.


