#!/bin/bash
# Purpose: Read Comma Separated CSV File
# Author: Vivek Gite under GPL v2.0+
# Adjustments for use: Henk van Cann
# ------------------------------------------
# cut filename extension
# did this on the command line with -> cut -f 1 -d '.' ls-result.txt >> temp.txt and then after check rename back
# Also cut 'Home' from file by hand
# ------------------------------------------
INPUT=ls-result.txt
OLDIFS=$IFS   $IFS is a special shell variable in Bash
IFS=';'

EXCLUDELIST_VIDPHIL=("repo" "coroutines" "input-output" "hio" "clone" "branch" "kli" "verifiable-credential" \
"sub-shell" "agent" "cloud-agent" "user-interface" "multisig" "identifier-system" "wallet" "witness" "watcher" \
"key-management" "single-signature-identifier" "keystore" "key-event" "interaction-event" "rotation-event" \
"signing-threshold" "key-event-log" "verify-signature" "peer-to-peer" "salt" "delegation" "transferable-identifier" \
"configuration-files" "transfer_Protocol" "passcode" "key-stretching" "non-transferable-identitifer" "threshold-signature-scheme" \
"pre-rotation" "prefix" "base64" "qualified" "derivation-code" "blake3" "data-anchor" "autonomic-identifier" "digest" \
"issuance-event" "public-transaction-event-log" "verify-signature" "establishment-event" "emory-Mapped_Database" \
"indexed-signature " "self-addressing-identifier" "backer" "ledger-backer" "witness" \
"verifiable-legal-entity-identifier" "ssi-system" "transfer-off-ledger" "service-endpoint" "uniform-resource-locator" \
"ip-address" "tcp-endpoint" "inquisitor" "locked-state" "out-of-band-introduction" \
"keep" "zero-trust" "revocation-event" "escrow-state" "server-sent-event")

CNT=1


SUBSRC='gloss'
BASEDIR='output'

[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99;
 }

filename="./$BASEDIR/stripped.txt"
echo "" > $filename
# empty file when file exists


while read trm
do

    # The following command will remove the spaces from the beginning of the variable
    trm=${trm=##*( )}
    # The following command will remove the spaces from the ending of the variable
    trm=${trm=%%*( )}


    found=false; 
    for ELEMENT in ${EXCLUDELIST_VIDPHIL[@]}
    do
        echo "$trm ----- $ELEMENT"
        if [ $ELEMENT = $trm ]; then
            found=true
        fi
    done 
    # end for element loop
    if [ $found = true ]; then
        echo "$trm exists"
    else
        echo "$trm DOES NOT exist"
        echo "$trm" >> $filename
    fi
done < $INPUT
# end while loop EXCLUDELIST_VIDPHIL
IFS=$OLDIFS           $IFS is a special shell variable in Bash, set it back to the old value