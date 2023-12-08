## Definition
In [computing](https://en.wikipedia.org/wiki/Computing), a pipeline, also known as a data pipeline, is a set of [data](https://en.wikipedia.org/wiki/Data) processing elements connected in series, where the output of one element is the input of the next one. The elements of a pipeline are often executed in parallel or in time-sliced fashion. Some amount of [buffer storage](https://en.wikipedia.org/wiki/Buffer_(computer_science)) is often inserted between elements.  
More on source [Wikipedia-page](https://en.wikipedia.org/wiki/Pipeline_(computing))

## Why CESR needs to anticipate pipelining
If you have a stream coming in, you have to look ahead how big a chunk of data can be. We call this a logical atomic data chunk.

### JSON is slow
With JSON I don’t know where the end is, so I have to parse the initial stream to find out. That's slow.

### Meaning of Pipelining
That once you have a block of data, that you can pull off chunks and de-multiplex from the stream into cores and multiplex them back into the streams. Cores in big datacenters are now max 5 GHz, a pipeline is 40 GHz. So you have to be able to do pipelining (split off over many cores). [CESR](CESR) is the only streaming protocol that has this anticipation on board.  
Source: Samuel Smith, KERI Zoom meeting Dec 5 2023.

### Related
[Multiplexing](multiplexing)
