<div className="accordion accordion-flush" id="annotated-copies">
                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headersignify-keria-request-authentication-protocol--skrap-">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-signify-keria-request-authentication-protocol--skrap-" aria-expanded="false" aria-controls="accordeon-signify-keria-request-authentication-protocol--skrap-">
                            signify-keria-request-authentication-protocol--skrap-, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-signify-keria-request-authentication-protocol--skrap-" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Signify/KERIA Request Authentication Protocol (SKRAP)

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerkeria-service-endpoint-interfaces">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-keria-service-endpoint-interfaces" aria-expanded="false" aria-controls="accordeon-keria-service-endpoint-interfaces">
                            keria-service-endpoint-interfaces, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-keria-service-endpoint-interfaces" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## KERIA Service Endpoint Interfaces
The KERIA service will expose 3 separate HTTP endpoints on 3 separate network interfaces.

1. Boot Interface - Exposes one endpoint for Agent Worker initialization.
2. Admin Interface - The REST API for command and control operations from the Signify Client.
3. KERI Protocol Interface - CESR over HTTP endpoint for KERI protocol interactions with the rest of the world.

This separation allows for the Boot interface to be expose to internal infrastructure only (or disabled all together) while exposing the other two interfaces externally.  If a KERIA instance is launched in static worker mode, meaning all agent workers are configured at start up only the Boot interface can be disabled completely.

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headeragent-worker-initialization">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-agent-worker-initialization" aria-expanded="false" aria-controls="accordeon-agent-worker-initialization">
                            agent-worker-initialization, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-agent-worker-initialization" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Agent Worker Initialization
To initiate a connection between a Signify Client and a KERIA agent, the two sides will exchange KERI AIDs with the Signify Client AID (called the "Client AID") being the delegator for the KERIA agent worker AID (called the "Agent AID").  To establish the connection the following steps are performed:


                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerstep-one---generate-client-aid">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-step-one---generate-client-aid" aria-expanded="false" aria-controls="accordeon-step-one---generate-client-aid">
                            step-one---generate-client-aid, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-step-one---generate-client-aid" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Step One:  Generate Client AID
The Signify Client generates the client AID as a transferable AID with a single signing key and single rotation key and provides the signed inception event out-of-bands to the KERIA service through the Boot interface. The HTTP request must be signed by the client AID using Signify Request Authentication described below.  The algorithm for generating the signing and rotation key pairs for Client AID is as follows:

1. Prepend the 128 bit random salt derivation code ('0A') plus the blank qualified base 64 character ('A') to the provided 21 character passcode
2. Stretch the passcode derivation using Argon2 to generate an Ed25519 private key from the provided "tier" and paths of `signify:controller00` and `signify:controller01` for the signing key and rotation key respectively.
3. Use the qualified base64 of the signing public key and the qualified base64 of the Blake3 digest of the rotation public key in the inception event.

The follow is an example of a Client AID generated by the SignifyPy (Python implementation) Signify Client with a passcode of `0123456789abcdefghijk`

```json
{
 "v": "KERI10JSON00012b_",
 "t": "icp",
 "d": "ELI7pg979AdhmvrjDeam2eAO2SR5niCgnjAJXJHtJose",
 "i": "ELI7pg979AdhmvrjDeam2eAO2SR5niCgnjAJXJHtJose",  // Client AID
 "s": "0",
 "kt": "1",
 "k": [
  "DAbWjobbaLqRB94KiAutAHb_qzPpOHm3LURA_ksxetVc"  // Derived from passcode as salt, kidx = 0
 ],
 "nt": "1",
 "n": [
  "EIFG_uqfr1yN560LoHYHfvPAhxQ5sN6xZZT_E3h7d2tL"  // Derived from passcode as salt, kidx = 1, Blake3 Hashed
 ],
 "bt": "0",
 "b": [],
 "c": [],
 "a": []
}
```

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerstep-two---agent-worker-creation">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-step-two---agent-worker-creation" aria-expanded="false" aria-controls="accordeon-step-two---agent-worker-creation">
                            step-two---agent-worker-creation, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-step-two---agent-worker-creation" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Step Two:  Agent Worker Creation
The KERIA service will create an Agent Worker on behalf of the new client and create the delegated, transferable Agent AID
with a single signing key and single rotation key specifying the Client AID as its delegator in its inception event.  
The KERIA service will return the Agent AID inception event in a signed HTTP response, signed by the Agent AID.  Agent AID keys
can be generated using a salt or truly random depending on the requirements of the service hosting the KERIA service.

```json
{
 "v": "KERI10JSON00015f_",
 "t": "dip",  // Delegated AID
 "d": "EEXekkGu9IAzav6pZVJhkLnjtjM5v3AcyA-pdKUcaGei",
 "i": "EEXekkGu9IAzav6pZVJhkLnjtjM5v3AcyA-pdKUcaGei",  // Agent AID
 "s": "0",
 "kt": "1",
 "k": [
  "DMZh_y-H5C3cSbZZST-fqnsmdNTReZxIh0t2xSTOJQ8a"
 ],
 "nt": "1",
 "n": [
  "EM9M2EQNCBK0MyAhVYBvR98Q0tefpvHgE-lHLs82XgqC"
 ],
 "bt": "0",
 "b": [],
 "c": [],
 "a": [],
 "di": "ELI7pg979AdhmvrjDeam2eAO2SR5niCgnjAJXJHtJose"  // Delegated signing authority from Client AID
}
```


                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerstep-three--signify-client-delegation-approval">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-step-three--signify-client-delegation-approval" aria-expanded="false" aria-controls="accordeon-step-three--signify-client-delegation-approval">
                            step-three--signify-client-delegation-approval, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-step-three--signify-client-delegation-approval" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Step Three: Signify Client Delegation Approval
_Note that all HTTP requests against the Admin Interface must be signed by the Client AID and expect all responses to be signed by the Agent AID._


The Signify Client will approve the delegation of the client AID with an interaction event that it sends back to the KERIA service over the Admin interface.

Once these steps are complete the Signify Client can begin using the rest of the Admin interface to create AIDs, issue credentials, etc.

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerreconnecting-to-existing-agent-worker">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-reconnecting-to-existing-agent-worker" aria-expanded="false" aria-controls="accordeon-reconnecting-to-existing-agent-worker">
                            reconnecting-to-existing-agent-worker, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-reconnecting-to-existing-agent-worker" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Reconnecting to Existing Agent Worker
Document the steps for retrieving state from the Admin interface and updating.


                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerkey-generate-methods">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-key-generate-methods" aria-expanded="false" aria-controls="accordeon-key-generate-methods">
                            key-generate-methods, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-key-generate-methods" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Key Generate Methods
The KERIA service supports the following key generation methods where the Signify Client generates the keys and only ever sends encrypted key material (if any) to the server.
1. Salty Keys - HDK key chain generated from a salt per aid that is encrypted and stored server.
2. Randy Keys - Randomly generated keys (signing and rotation) that are encrypted and store on the server.
3. Sandy Keys - Keys generated from a different salt for inception and each rotation.  
4. Group Keys - Signify Client/KERIA Service AIDs participating in a distributed group multisig AID.
5. HSM Keys - Signify Client uses a Signify HSM Integration Module (SHIM) to manage keys and signatures.

For all key generation methods, the Signify Client creates and signs all KERI events, credentials, etc. ensuring that unencrypted private key material never leaves the client. The key generate methods are descrive in more detail in the following sections.

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headersalty-keys">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-salty-keys" aria-expanded="false" aria-controls="accordeon-salty-keys">
                            salty-keys, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-salty-keys" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Salty Keys
The Salty Key algorithm is used to create a hierarchical deterministic key chain for each AID by generating a unique random salt for each AID and stretching the salt using Argon2 with a `path` that is calculated from the AIDs index relative to all other AIDs and the key index calculated by the total number of signing and rotation keys over the lifetime of the AID.

The salt for each AID is encrypted with the X25519 encryption key generated from the passcode and stored on the server with other AID metadata, including the AID index and current key index.  

The Signify Client API must accept the AID salt as an optional parameter to creating Salty Key AIDs allowing users to manage AID salts externally or to share Salts across AIDs if required.

The following Python data class represents the metadata storage for Salty Key AIDs:

```python
class SaltyPrm:
    """
    Salty prefix's parameters for creating new key pairs
    """
    sxlt: str = ''  # qualified b64 encoded AID salt
    pidx: int = 0  # prefix index for this keypair sequence
    kidx: int = 0  # key index for this keypair sequence
    stem: str = ''  # default unique path stem for salty algo
    tier: str = ''  # security tier for stretch index salty algo
    dcode: str = ''  # next digest hasing code
    icodes: list = field(default_factory=list)  # current signing key seed codes
    ncodes: list = field(default_factory=list)  # next key seed codes
    transferable: bool = False

```

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headersalty-key-salt-rotations">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-salty-key-salt-rotations" aria-expanded="false" aria-controls="accordeon-salty-key-salt-rotations">
                            salty-key-salt-rotations, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-salty-key-salt-rotations" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Salty Key Salt Rotations
Document the procedure for rotating a new Salt in for a Salty Key AID.
                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerrandy-keys">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-randy-keys" aria-expanded="false" aria-controls="accordeon-randy-keys">
                            randy-keys, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-randy-keys" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Randy Keys
The Randy Key algorithm allows for all signing and rotation private keys to be generated solely from entropy and encrypted with the X25519 encryption key generated from the passcode and stored on the server alongside other AID metadata.

The server stores the encrypted private key material for signing and rotation keys in separate LMBD sub-databases as indexed qualified base 64 CESR encoded Cipher representations. 


                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headersandy-keys">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-sandy-keys" aria-expanded="false" aria-controls="accordeon-sandy-keys">
                            sandy-keys, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-sandy-keys" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Sandy Keys


                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headergroup-keys">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-group-keys" aria-expanded="false" aria-controls="accordeon-group-keys">
                            group-keys, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-group-keys" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Group Keys
The Group Key algorithm is a special key generation algorith for distributed group multisig AIDs that does not manage and keys at all.  Instead this algoritm allows for the specification of an AID of one of the other three types to be the "local" participant in a distributed group multisig AID.  

All signing operations must be performed on the Signify Client on behalf of the "local" AID for this Signify Client indexed based on the local AID's location in both the signing key list and the rotation key list.  


                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerhsm-keys--experimental-">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-hsm-keys--experimental-" aria-expanded="false" aria-controls="accordeon-hsm-keys--experimental-">
                            hsm-keys--experimental-, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-hsm-keys--experimental-" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## HSM Keys (Experimental)
The SignifyPy Signify Client defines an experimental interface for declaring external modules that can be used as Signify HSM Integration Modules to allow all key generation and event signing to occur in an external Hardware Security Module (HSM).  

Two sample implementations have been defined to date, one using the Google KSM and one using a Trezure One external HSM.

The following psuedo Python class represents the current, experimental interface a SHIM has to implememnt to work with SignifyPy.  It is anticipated that each Signify Client implementation defines a similar interface.

```python
class Shim:
    def incept(self, transferable=True):
        """  Create an AID using the Google KSM for key generation and event signing.

        Parameters:
            transferable (bool):  True means create a transferable AID which allows for key rotation

        Returns:
            keys (list): list of qualified base64 public signing key deriviations based on the codes passed into init
            ndigs (list): list of qualified base64 digests of public rotation key derivations based on the codes
                          passed into init

        """

    def rotate(self, ncount, transferable):
        """  Rotate an AID using the Google KSM for key generation and event signing.

        Parameters:
            ncount (int): number of new rotation keys to generate
            transferable (bool):  True means create a transferable AID which allows for key rotation

        Returns:
            keys (list): list of qualified base64 public signing key deriviations based on the codes passed into init
            ndigs (list): list of qualified base64 digests of public rotation key derivations based on the codes
                          passed into init

        """
        
    def sign(self, ser, indexed=True, indices=None, ondices=None, **_):
        """

        Parameters:
            ser (bytes): content to be signed
            indexed (bool): True means generated indexed signatures
            indices (list): Optional list of indices to use when generating indexed signatures
            ondices (list): Optional list of rotation indices to use when generating dual indexed signatures
            **_: Placeholder

        Returns:
            sigs (list): list of qualified base64 signatures over the based in ser
        """

```


                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerpasscode-rotation">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-passcode-rotation" aria-expanded="false" aria-controls="accordeon-passcode-rotation">
                            passcode-rotation, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-passcode-rotation" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Passcode Rotation

To perform a passcode rotation, the Signify Client requires both old and new passcodes and must perform the following steps:

1. Encrypted the old passcode with X25519 key generated from the new passcode.
2. Perform a partial rotation of the Client AID as described below.
3. Decrypt all salts with X25519 key from old passcode for Salty Keys, validate them against current public keys, encrypt with X25519 key from new passcode
4. Decrypt all keys with X25519 key from old passcode for Randy Keys, validate them against current public keys, encrypt with X25519 key from new passcode
5. Send all rotation event and all recrypted material in a POST request to the agent on `/agent/<Client AID>`


                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerpartial-client-aid-rotaion-in-support-of-passcode-rotation">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-partial-client-aid-rotaion-in-support-of-passcode-rotation" aria-expanded="false" aria-controls="accordeon-partial-client-aid-rotaion-in-support-of-passcode-rotation">
                            partial-client-aid-rotaion-in-support-of-passcode-rotation, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-partial-client-aid-rotaion-in-support-of-passcode-rotation" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Partial Client AID Rotaion in Support of Passcode Rotation
To provide post-quantum secure passcode recovery, a passcode recovery must be accompanied by partial rotation of the Client AID. This partial rotation is possible because the user will have to provide both old and new passcodes to initiate the process.

The partial rotation of the Client AID is accomplished by using the old passcode to regenerate the the prior rotation key pair called `R0` from the latest establishment event.  In addition, two new key pairs are generated from the new passocde, one used for signing authority (S0) and one used for rotation authority (R1) in the new rotation event.

The public key for `S0` is used as the first signing key in the new rotation event; it is giving a fractionally weighted threshold of "1".  The public key for `R0` is used as the second signing key in the new rotation event; it is giving a fractionally weighted threshold of "0".  A Blake3 has is created of the public key for `R1` and is used as the next rotation key commitment.

The rotation event is signed with the private keys of both `S0` and `R0`.  An example of a partial rotation event of the Client AID from above follows with its signatures:

```json
{
 "v": "KERI10JSON000195_",
 "t": "rot",
 "d": "EGTAY6x1tTbOO27LCy3poh5iW0Oa2Cq1s7wsVnj152Zi",
 "i": "ELI7pg979AdhmvrjDeam2eAO2SR5niCgnjAJXJHtJose",
 "s": "1",
 "p": "ELI7pg979AdhmvrjDeam2eAO2SR5niCgnjAJXJHtJose",
 "kt": [
  "1",  // Threshold for key derived from NEW passcode, has full signing authority
  "0"   // Threshold for key derived from OLD passcode, no signing authority
 ],
 "k": [
  "DAbWjobbaLqRB94KiAutAHb_qzPpOHm3LURA_ksxetVc",  // Derived from NEW passcode as salt, kidx = 0 
  "DHMAZEksiqGxlNKnm0pSAyMRPK1ZKyBfGV8q_B9r6pLs"   // Derived from OLD passcode as salt, kidx = 1 (matches previous rotation key)
 ],
 "nt": "1",
 "n": [
  "EIFG_uqfr1yN560LoHYHfvPAhxQ5sN6xZZT_E3h7d2tL"   // Derived from NEW passcode as salt, kidx = 1, Blake3 Hashed
 ],
 "bt": "0",
 "br": [],
 "ba": [],
 "a": []
}
```

With the following attached signatures:
```json
[
  "AADuzJ4zU8MkLBPP8Os9UPbTvNqoQ4YDImNkTjfknWgJW25V6EmwZ59PXas0zKhxtp_dOhvkPqtqIhgarOFwt7sC",
  "2AABAACRZGDB7s4hmYnt7vTYGWCawhnqHndWUy_rtR_L8mfNmrJ4N5S05wAZ6w5RoL68h1HjIzO7ZuiF30XBz1cC6eUA"
]
```

The first signature satisfies the current signing threshold and has only one index, 0 for signing key index.  The second signature satifies the prior rotation threshold and thus uses dual index code to specify a current signing index of 1 and a prior signing index of 0.

The following steps are followed to accept the passcode rotation:

1. Verify and accept the Client AID rotation
2. Verify the signature on the request against the NEW signing key of the Client AID
3. Save encrypted old passcode
4. Update all Salty Key encrypted salts
5. Update all Randy Key encrypted keys
6. Delete encrypted old passcode

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headerpasscode-rotation-recovery">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-passcode-rotation-recovery" aria-expanded="false" aria-controls="accordeon-passcode-rotation-recovery">
                            passcode-rotation-recovery, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-passcode-rotation-recovery" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Passcode Rotation Recovery

When each Agent Worker is loaded it will check for a saved old passcode to detect an aborted passcode rotation.  If a saved encrypted old passcode is found the Agent Worker will
notify the client in the response to the state call that a passcode rotation recovery is needed and lock out all other operations until it is completed successfully.

To perform a passcode rotation recovery, the Signify Client requires only the new passcode and must perform the following steps:

1. Retrieve the encrypted old passcode and decrypt it with X25519 key generated from the new passcode.
2. Perform a revised partial rotation of the Client AID where you rotate out to a new next key not new signing key.
3. Attempt to decrypt all salts with the X25519 keys from both the old and new passcode for Salty Keys
4. For any salt still encrypted with the old passcode, encrypt with X25519 key from new passcode 
5. Attempt to decrypt all keys with the X25519 keys from both the old and new passcode for Randy Keys
6. Validate them against current public keys and for any key still encrypted with the old passcode, encrypt with X25519 key from new passcode
7. Send all rotation event and all recrypted material in a POST request to the agent on `/agent/<Client AID>`

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headersignify-request-response-authentication">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-signify-request-response-authentication" aria-expanded="false" aria-controls="accordeon-signify-request-response-authentication">
                            signify-request-response-authentication, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-signify-request-response-authentication" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Signify Request/Response Authentication
Signify clients must sign all requests to the KERIA Admin Interface using the latest signing key of the Client AID and must expect all responses from the KERIA service be signed by the latest signing key of the Agent AID.  Both request and response signing rely on the same set of HTTP headers to accomplish request/response signing.

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headermetadata-headers">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-metadata-headers" aria-expanded="false" aria-controls="accordeon-metadata-headers">
                            metadata-headers, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-metadata-headers" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Metadata Headers
Document `Signify-Resource` and `Signify-Timestamp` headers here.

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headersignature-input-header">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-signature-input-header" aria-expanded="false" aria-controls="accordeon-signature-input-header">
                            signature-input-header, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-signature-input-header" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Signature Input Header
Document the `Signature-Input` header here with link to https://httpwg.org/http-extensions/draft-ietf-httpbis-message-signatures.html

                        

</div>
                        

</div>
                    

</div>
                

                    

<div className="accordion-item" data-level="1">
                        

<h2 className="accordion-header" id="headersignature-header">
                        

<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordeon-signature-header" aria-expanded="false" aria-controls="accordeon-signature-header">
                            signature-header, level 1
                        

</button>
                        

</h2>
                        

<div id="accordeon-signature-header" className="accordion-collapse collapse">
                        

<div className="accordion-body">
                            

## Signature Header
Document the signing method and `Signature` header.

                        

</div>
                        

</div>
                    

</div>
                </div>