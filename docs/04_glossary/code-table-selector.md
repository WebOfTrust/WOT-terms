## Definition
the first character in the text code of [CESR stream](composable-event-streaming-representation) that determines which [code table](code-table) to use, either a default code table or a code table selector character when not the default code table. Thus the 1 character text code table must do double duty. It must provide selectors for the different text code tables and also provide type codes for the most popular primitives that have a pad size of 1 that appear is the default code table.

## Selector code table
See row 1.
<img src="https://hackmd.io/_uploads/H1LHEQDfj.png" width="600" />
