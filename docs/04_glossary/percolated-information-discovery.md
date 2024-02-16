# percolated information discovery
## Definition
In the OOBI protocol, a discovery mechanism for the KERI and the ACDC protocols is provided by a bootstrap that enables Percolated Information Discovery (PID), which is based on Invasion Percolation Theory.

After related information for discovery and verification is bootstrapped from the OOBI, subsequent authorization is non-interactive thus making it highly scalable. This provides what we call zero-trust percolated discovery or speedy percolated discovery. Percolation means that each discoverer in turn may share what it discovers with any subsequent discoverers. Since the information so discovered is end-verifiable, the percolation mechanism and percolating intermediaries do not need to be trusted.

### Percolation Theory
[Percolation theory](https://en.wikipedia.org/wiki/Percolation_theory) is a mathematical framework used to study the behavior of connected clusters in random systems. It was originally developed to understand the flow of fluids through porous media, but it has since found applications in various fields, including physics, mathematics, computer science, and social sciences.

### Invasion Percolation Theory
Invasion percolation is a specific variant of percolation theory that models the infiltration of a fluid into a porous medium. It is used to study how a fluid, such as a gas or liquid, spreads through a random network of interconnected sites or pores.

The invasion process follows the principle of least resistance, where the fluid seeks the path of least resistance through the porous medium. As the invasion progresses, the fluid selectively infiltrates the sites with lower resistance, forming a connected cluster of invaded sites. The invaded cluster grows by adding new invaded sites through the neighboring dry sites with the lowest resistance.
