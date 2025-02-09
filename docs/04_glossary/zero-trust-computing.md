## Definition

A security model centered on the principle of "never trust, always verify." It assumes that threats can exist inside and outside the network, and thus, no entity — a device, user, or system — is inherently trusted. This approach requires continuous verification of all users and devices attempting to access network resources.

### Best practices

Best practices for the implementation of an autonomic identifier system should follow zero-trust computing principles. These principles are described at more length elsewhere but may be summarized as follows:

1. Network Hostility. The network is always hostile, internally & externally; the Locality is untrustworthy. Solutions must provide means to mitigate network layer security vulnerabilities (man-in-the-middle, DNS hijacking, BGP attacks).  
2. E2E Security.  Inter-host communication must be end-to-end signed/encrypted and data must be stored signed/encrypted. Data is signed/encrypted in motion and at rest.  
3. E2E Provenance.  Data flow transformations must be end-to-end provenanced using verifiable data items (verifiable data chains or VCs). Every change shall be provenanced.  
4. Verify every time for everything.  Every network interaction or data flow must be authenticated and authorized using best-practice cryptography.  
5. Authorization is behavioral.  Policies for authentication and authorization must be dynamically modified based on behavior (reputation).  
6. No single point of trust.  Policies for authentication and authorization must be governed by end-verified diffuse-trust distributed consensus. The diffuse trust protects the policy.  
7. Hosts locked down.  Hosts or host components executing any of the abovementioned logic must be locked down. Any changes to the host execution logic or behavior must be thoroughly security tested and validated over the respective possible combinations of hardware and software platforms. This means locking down key management and cryptographic operations on the devices. This includes key generation and storage, as well as signature generation and signature verification. These may benefit from the use of some form of trusted execution environment (TEE), either generally or especially in a trusted platform module (TPM) or a hardware security module (HSM). In addition to key management and cryptographic operations, special security measures must be implemented regarding the secure execution of the application logic (e.g., code injection, insecure object references, cross-site/service request forgery, cross-service scripting, etc.).

Source: Universal Identity Theory by Samuel Smith

## Also see
[zero trust](zero-trust)