## Definition
An identifier system has some degree of any combination of the three properties [authenticity](authenticity), [privacy](privacy) and [confidentiality](confidentiality), but not all three completely.

## Why a trillema?
The reason a system may not provide all three completely is that no single cryptographic operation provides all three properties.  
As a result any cryptographic system must layer the operations. But layering exposes weaknesses due to the separation between the layers. Because no single layer can exhibit all three properties, one must pick one or two properties for the bottom layer and then layer on top the remaining property or properties on one or more layers.  
Source: Universal Identifier Theory by Samuel Smith

![Trilemma of Identifier System Properties](https://github.com/weboftrust/WOT-terms/static/img/Trilemma-of-Identifier-System-Properties.png)