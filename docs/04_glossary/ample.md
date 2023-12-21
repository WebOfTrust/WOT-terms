# ample
## Definition

The minimum required number of participants in an event to have a [supermajority](supermajority) so that one and only one agreement or consensus on an event may be reached. This is a critical part of the [KAACE](KAACE) agreement algorithm (consensus) in KERI for establishing consensus between witnesses on the key state of a KERI identifier. This consensus on key state forms the basis for accountability for a KERI controller, or what a person who controls a KERI identifier may be held legally responsible for.

This supermajority is also called a _sufficient majority_ that is labeled _immune_ from certain kinds of attacks or faults. 

From section **11.4.2.4 Immune** of v2.60 of the KERI whitepaper, 
> Satisfaction of this constraint guarantees that at most one sufficient agreement occurs or none at
all despite a dishonest controller but where at most F of the witnesses are potentially faulty.

Ample Agreement Constraint:   
![image](https://github.com/WebOfTrust/WOT-terms/assets/65027257/5c8733c1-4370-420c-83f0-f6e778a6b68f)

Can apply to either

1) a group of KERI witnesses for a witnessed event or 
2) a group of KERI identifier controllers participating in a multi-signature group.

## Problems avoided by using `ample`

Ample witnesses avoids problems of accidental lockout from a multisig group which would occur if the signing threshold for the multisig group was set lower than the "ample" number of participants.

## Table of minimum required, or ample, number of participants

N = Number of total participants  
M = Number of participants needed to get the guarantees of "ample"

![image](https://github.com/WebOfTrust/WOT-terms/assets/65027257/01363aeb-7055-4413-bbc4-8f89325e703a)

## Code Example

Python code implementation from [keri.core.eventing.py](https://github.com/WebOfTrust/keripy/blob/development/src/keri/core/eventing.py) of the `ample` algorithm used in [KAACE](KAACE):

```python
def ample(n, f=None, weak=True):
    """
    Returns int as sufficient immune (ample) majority of n when n >=1
        otherwise returns 0
    Parameters:
        n is int total number of elements
        f is int optional fault number
        weak is Boolean
            If f is not None and
                weak is True then minimize m for f
                weak is False then maximize m for f that satisfies n >= 3*f+1
            Else
                weak is True then find maximum f and minimize m
                weak is False then find maximum f and maximize m

        n,m,f are subject to
        f >= 1 if n > 0
        n >= 3*f+1
        (n+f+1)/2 <= m <= n-f
    """
    n = max(0, n)  # no negatives
    if f is None:
        f1 = max(1, max(0, n - 1) // 3)  # least floor f subject to n >= 3*f+1
        f2 = max(1, ceil(max(0, n - 1) / 3))  # most ceil f subject to n >= 3*f+1
        if weak:  # try both fs to see which one has lowest m
            return min(n, ceil((n + f1 + 1) / 2), ceil((n + f2 + 1) / 2))
        else:
            return min(n, max(0, n - f1, ceil((n + f1 + 1) / 2)))
    else:
        f = max(0, f)
        m1 = ceil((n + f + 1) / 2)
        m2 = max(0, n - f)
        if m2 < m1 and n > 0:
            raise ValueError("Invalid f={} is too big for n={}.".format(f, n))
        if weak:
            return min(n, m1, m2)
        else:
            return min(n, max(m1, m2))
```
