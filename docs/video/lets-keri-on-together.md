---
title: Let's KERI on together
---

## The video

<video controls src={require('./video/video1663530585.mp4').default} playsInline={true} poster={require('./video/WOT-educational-video.png').default} />

<div className="subtitlecontainer alert alert--info margin-bottom--lg">okay and I will show slides all right so this is the presentation I did at IIW called 'Let's</div>

<div className="counter"></div>

## The subtitles as text

<!-- <div className="no-video-insert"> -->
<div className="no-video-insert">
0:00:00.080,0:00:00.800
paracore

0:00:03.520,0:00:12.480
okay and I will show slides all right so this 
is the presentation I did at IIW called 'Let's

0:00:12.480,0:00:20.640
KERI on together'. I did the presentation, 
I did the card at IIW with instructions on

0:00:20.640,0:00:26.880
how to pull the software and get ready so you 
could run alongside the demo if you so chose.

0:00:27.600,0:00:33.120
No one did, which was a little bit disappointing, 
but the repo is here, it's the KERI, right, KERIpy

0:00:33.120,0:00:39.680
repo the web of trust it's a lot of 
the all of the networking and asynchronous

0:00:41.840,0:00:49.840
I/O is based on co-routines in a library 
Sam Smith created called 'hio' right now

0:00:49.840,0:00:54.000
what I'll be running today requires 
Python 3.9.7 but we're now up to 3.10.3

0:00:55.200,0:00:58.960
and these are the instructions if you 
wanted to follow along let me get clone

0:01:00.000,0:01:04.320
the repo itself check out the future 'iiw' 
branch and then just run a `pip install`

0:01:05.120,0:01:12.960
of the requirements file, to get all of the 
dependencies. So most of actually everything

0:01:12.960,0:01:18.720
that we'll be showing today, starts with the 
KERI command line interface that we call 'kli'.

0:01:18.720,0:01:26.080
It has commands and sub commands much like, if you're 
familiar with Kubernetes' "kubectl" command line,

0:01:26.080,0:01:29.840
so that for example if you were doing some 
something with verifiable credentials you would

0:01:29.840,0:01:36.080
start 'kli vc' and then there would be a sub command 
following after the 'vc' for example 'issue' or 'revoke'

0:01:38.320,0:01:46.640
And then we do have Docker containers 
that have all of the code pushed and configured

0:01:46.640,0:01:53.440
ready to run so you can pull one of those 
and do a 'docker run', running a sub shell

0:01:53.440,0:02:00.960
and you can use the kli to perform tasks so 
the basic structure for the commands in the kli

0:02:01.840,0:02:07.840
the groups that we have, pardon me, the agent group 
for running our cloud agent which is also run

0:02:09.200,0:02:16.800
in the distributable desktop application 
we're building using Py installer and

0:02:16.800,0:02:23.200
Electron to bundle KERIpy behind 
a web-U/I that web-U/I uses the agent

0:02:24.880,0:02:29.600
if you want to perform some delegation commands 
there's a couple of sub commands under delegate

0:02:29.600,0:02:34.320
if you want to create a distributed multi-sig 
identifier you would use the multisig commands

0:02:34.320,0:02:38.560
and then the verifiable credentials I mentioned 
the wallet commands are simply for listing the

0:02:38.560,0:02:44.560
contents of your wallet and by "wallet" I 
mean verifiable credential wallet and then

0:02:44.560,0:02:50.320
to start witnesses or watchers you would use 
the watcher group with sub cmnds like 'start'&'demo'

0:02:51.200,0:02:58.640
Steven: So, Phil, all these ..., well everything 
on this page, is there documentation as to

0:02:58.640,0:03:06.240
what exactly an 'agent' means like do you have the 
terminology somewhere? Phil: No, there isn't, {Now there is!, ed.}

0:03:06.240,0:03:13.440
but that would be a good thing to add to a getting started 
I guess. Steven: yeah absolutely, so I mean could

0:03:13.440,0:03:20.880
certainly create like a vocabulary dictionary 
and then maybe a one-liner description

0:03:20.880,0:03:28.400
of what each like "run cloud agent" does, what
delegation means. Phil: yeah that would be great.

0:03:28.400,0:03:30.720
{Available! See the glossary in the Youtube description}

0:03:30.720,0:03:46.800
Look at command line, if you run just 'help' from the top level,  
it does list... Steven: can you share the screen?

0:03:47.440,0:03:53.360
Phil: I'm sharing just this spreadsheet, I mean just the 
presentation on there, let me show that desktop

0:03:56.000,0:03:59.200
there we go, okay can you see 
the command line now? Steven: yeah

0:03:59.200,0:04:04.480
Phil: OK, so if you run 'kli --help' you get a list of 
the commands and sub commands and they do have

0:04:05.440,0:04:10.000
one liners not all of them are accurate 
at this moment but that's something that...

0:04:10.000,0:04:15.840
Steven: doesn't matter, it'll be a placeholder
in the worst case scenario.

0:04:16.400,0:04:21.360
okay, so for key management the top level commands 
the the very first thing you almost always do

0:04:21.360,0:04:27.920
is do an 'init' which initializes both your data 
store and your encrypted key store, 'incept' for

0:04:27.920,0:04:32.960
creating a single-sig identifier, technically you 
can create multi-sig identifiers with that as well,

0:04:33.600,0:04:37.120
but they're not all that interesting. Because 
all the keys are stored in the same key store

0:04:39.440,0:04:44.400
the different key events that you can create 
an interaction event or a rotation event

0:04:45.040,0:04:48.480
are handled with the next two commands 
'interact' and 'rotate' and they each take

0:04:48.480,0:04:54.160
parameters, 'rotation' for example, specifying your 
signing thresholds number of keys rotating in

0:04:54.160,0:05:00.000
and out witnesses all the things that you can do 
when rotating and 'purge' just deletes your key store

0:05:01.600,0:05:09.040
so then the miscellaneous commands querying 
for creating witnesses for a KEL. Sending your

0:05:09.040,0:05:14.240
KEL to another agent; we don't use that very much 
anymore because we use OOBIs to accomplish that now.

0:05:15.120,0:05:23.120
Signing, pardon me, you can just sign our arbitrary 
data and it will return the signatures based on

0:05:23.120,0:05:27.520
the identifier that you used and we'll be done 
I'll be demoing that in a little bit. Verifying

0:05:27.520,0:05:32.000
those signatures and if you're you know if you're 
just exchanging signed data with someone via an

0:05:32.000,0:05:36.800
e-mail this will accomplish that 
for you. Then 'list'ing the identifiers that

0:05:36.800,0:05:42.880
you're creating and giving a 'status' of a single 
identifier. So it's important to point out that

0:05:44.240,0:05:51.840
with the most recent updates to KERIpy,
we now have first class support {ringing silenced}

0:05:57.040,0:06:02.480
We now have first class support for multiple 
identifiers multiple local identifiers,

0:06:03.760,0:06:07.040
so that's why we have the 'list' command 
so you can create in you can run

0:06:07.040,0:06:10.560
'init' once create a single data store 
and key store and then run 'incept' as

0:06:10.560,0:06:13.600
many times you want to create other 
identifiers and you use those for

0:06:13.600,0:06:20.320
like peer-to-peer communications and things like 
that, so that you can't be correlated. All right

0:06:22.640,0:06:29.120
so each of the three top level runnable components 
an agent a witness or a watcher each have

0:06:31.280,0:06:39.520
various startup commands. You have the 'bootstrap'
command to start an empty agent or to run a single

0:06:39.520,0:06:44.800
agent against one that's already been started. You 
can run 'start' and then both for witnesses and for

0:06:44.800,0:06:50.480
agents we have these 'demo' commands which we make 
heavy use of for local testing. So, for example

0:06:50.480,0:06:55.920
under the witness this starts up three well-known 
witnesses and by "well-known" I mean we use salts

0:06:55.920,0:07:02.720
to initialize their key stores so that the you 
can predict what identifiers will be created and

0:07:02.720,0:07:09.760
again that's not anything that you'd want
to do in a production environment,

0:07:09.760,0:07:14.240
but for running tests, and we'll be using 
particularly the 'demo' witness command later on

0:07:15.120,0:07:19.200
to start witnesses so that other commands 
that need witnesses know where to find them.

0:07:20.320,0:07:26.720
And then we have similar commands for watchers. 
Part of the demo today is running through a

0:07:26.720,0:07:31.920
series of scripts that we've created in the 
demo directory located in keripy/scripts/demo

0:07:33.360,0:07:38.960
and the most basic one is just 'demo-script' which 
starts off and runs all the really basic commands

0:07:39.520,0:07:43.840
'demo-witness-script' runs through some of the same 
commands but requiring witnesses to be running

0:07:44.720,0:07:50.160
and then we get into the more interesting 
stuff: delegation and multi-sig

0:07:50.160,0:07:54.800
multi-sig delegation where both parties of 
the delegation are a multi-sig identifier

0:07:54.800,0:07:59.920
and then credential issuance and multi-issuance. 
During the demo at IIW we did not get to these.

0:08:00.720,0:08:05.360
We only got this far and in an hour. I'm not 
sure we'll even get to these, but we will see.

0:08:08.320,0:08:15.760
Oh, I forgot to point out the all of the sample 
JSON files are also located in keripy/tests/app/cli,

0:08:15.760,0:08:25.360
which contains the ..., when you do a 'kli incept' 
command, it takes a file for all the properties

0:08:25.360,0:08:30.560
that you want to pass in for the creation of that 
identifier, for example how many signature or how

0:08:30.560,0:08:34.880
many public keys to create, what's your signing 
thresholds, how many / what witnesses to use, whether

0:08:34.880,0:08:39.840
it's transferable or not, et cetera and 
I'll show these as we go through them today

0:08:42.320,0:08:47.360
and then finally another big enhancement in 
this most recent round of changes to KERIpy

0:08:47.920,0:08:53.840
was the addition of out-of-band 
introductions or OOBIs. They are files,

0:08:54.560,0:09:00.400
these are startup files that contain bootstrap 
OOBIs. So for example when we use the 'demo'

0:09:00.400,0:09:04.800
command for witnesses, like I said: they're 
well-known identifiers, they also start up

0:09:04.800,0:09:08.720
on well-known ports and they publish those 
ports via a series of OOBIs. This is a

0:09:08.720,0:09:14.880
configuration file that any other agent can run 
and know exactly how to contact those witnesses

0:09:16.000,0:09:19.120
and this is the configuration file for those 
witnesses, so we'll get to those in a minute.

0:09:20.000,0:09:26.080
So that's it for the, pardon me, that's it for 
the presentation there's not slides anyway

0:09:26.080,0:09:30.240
there's not that much in terms of slides, 
here's just enough to get this kick-started.

0:09:32.720,0:09:38.560
So now we'll go over to our first script today. 
Oh, one thing I didn't point out, but I wanted to

0:09:38.560,0:09:44.000
make clear: because we have the kli which you 
can do everything you need to do with KERI

0:09:44.640,0:09:48.640
in KERIpy with the kli on a command line 
and that's for running in a mode where you're

0:09:48.640,0:09:54.640
not always on the internet. But as I pointed 
out also, we have an agent that can run.

0:09:54.640,0:09:58.800
That could be a continuous or persistent connection 
to the internet. So a cloud agent for example.

0:10:00.240,0:10:05.760
And in that case the cloud agent exposes a 
series of REST APIs that perform the exact same

0:10:05.760,0:10:11.680
functionality as all the kli things that we'll 
be going through today. And in the demo scripts

0:10:11.680,0:10:17.440
that you see here for every script starting with 
'delegate', there is a sister script next to it,

0:10:17.440,0:10:22.320
'-agent', that is the exact same command but 
with a series of CURL POSTs, I'm sorry, the

0:10:22.320,0:10:28.560
exact same functionality, but executed as a 
series of CURL POSTs against an agent, or PUTs

0:10:31.600,0:10:35.440
(and I'll show when we launch) the 
agent we also expose a swagger U/I,

0:10:35.440,0:10:42.000
which allows you, if you wanted, to execute 
commands against it. I'll show that towards the end.

0:10:44.880,0:10:47.280
So let's start with the basic 'demo' script.

0:10:49.840,0:10:55.920
I'll zoom in here a little bit, is that 
legible for you? Steven: yeah, I'm much better now.

0:10:57.760,0:11:05.760
Okay so, the very first thing this does is create 
a key store within it. Currently KERI now supports

0:11:06.560,0:11:11.360
the ability to create a key store and data store 
for that matter with a passcode and when you

0:11:11.360,0:11:16.400
do that, it becomes an encryption key. like it's 
stretched into an encryption key that is used for

0:11:17.440,0:11:24.160
encrypting the key store so that no one 
else can gain access to your private keys

0:11:24.800,0:11:29.040
that passcode is never stored 
anywhere within KERIpy or the agent

0:11:29.040,0:11:33.520
so it has to be protected by the user because 
otherwise you can't get access to your keys

0:11:34.400,0:11:41.840
Steven: Sorry Phil give me one sec there's 
just something going on in here, one second

0:11:45.000,0:11:55.000
{What a perfect break for a small quiz!:}
{How many new terms has Phil introduced so far?}

0:11:55.500,0:12:05.520
{The answer is: 55 terms that need explanation!}
{Most of which are available; see description.}

0:12:07.520,0:12:08.960
Steven: sorry about that!
Phil: no worries

0:12:15.840,0:12:20.240
Okay so, for all of the commands that we're 
gonna be running today, we just pass in the

0:12:20.240,0:12:23.200
flag '--nopasscode' so the keystore isn't 
encrypted. And that's just to make things

0:12:23.200,0:12:27.120
easier, so we're not passing passcodes around 
to every other command but anywhere where you

0:12:27.680,0:12:32.640
run a subsequent command after 'init' you can 
pass in '--passcode' and it'll unlock

0:12:32.640,0:12:38.400
the keystore if it's indeed locked so the very 
first thing that this does is create a database

0:12:38.400,0:12:43.680
and key storage you can see from the comments 
the name of the database, the name of this

0:12:44.480,0:12:48.240
instance that you're creating, is 
called 'test' and that is used to create

0:12:48.240,0:12:53.440
the directory structure for the databases 
that support both the wallet and the key store.

0:12:55.520,0:13:00.800
Those databases can go in one of three 
places. When configured properly you can

0:13:00.800,0:13:06.640
create a database and key store in '/temp' 
which obviously is used just for testing and

0:13:06.640,0:13:13.360
we use that heavily when running all of our unit 
tests. If you have a directory called

0:13:14.080,0:13:18.720
'/user/local/var/keri', and the current user has 
write access to that directory it'll create

0:13:18.720,0:13:22.480
all the databases under there. And then they're 
prefixed with the name that you give it here.

0:13:23.680,0:13:28.720
If you don't have that directory the last place 
that KERIpy attempts to create the data stores

0:13:28.720,0:13:34.960
is in your 'home directory.keri' and then it 
would begin with 'test' for this one after that.

0:13:35.600,0:13:38.160
So those are the three places you 
want to go look for your key stores

0:13:41.280,0:13:44.240
So after it creates the key store, we're creating...
Steven: Sorry, can you, when you

0:13:45.760,0:13:51.280
would you define which one of those three places 
to look for here? Phil: No. Steven: or it's just the way

0:13:51.280,0:13:56.320
you're installed, you're just, you're set up 
Phil: that's correct, it's the way your system is set up

0:13:56.320,0:14:01.760
there. we don't support the creation of temporary 
from the command line. We could add it as a flag,

0:14:01.760,0:14:06.400
I guess, but we don't currently support that. 
So this will ...,from the command line, this will

0:14:06.400,0:14:09.920
create the key stored in either '/user/local/var/keri',
if it exists and you have

0:14:09.920,0:14:16.720
write access to it, or under '.keri' in your 
own directory if you don't have that other one.

0:14:20.080,0:14:20.580
Uhm...

0:14:23.600,0:14:28.240
Yeah, we could we could definitely add the ability 
to create a 'temp'(orary ed.) from here but that would

0:14:28.240,0:14:32.960
just be another flag so the first thing we create is 
a non-transferable identifier after you give

0:14:32.960,0:14:37.520
the name of the data stored you give a local 
human readable alias to this identifier and as

0:14:37.520,0:14:41.360
i mentioned you can support you can create 
multiple identifiers so you would give them

0:14:41.360,0:14:43.920
per a single key store so you can 
give them whatever aliases you want

0:14:43.920,0:14:47.600
So that you can remember what you're 
using that particular identifier for

0:14:48.880,0:14:52.480
So this is creating a non-transferable 
identifier. We'll start by opening that

0:14:56.560,0:15:04.320
So, 'transferable=false' obviously and a
transferable identifier {<- slip of the tongue!}

0:15:04.320,0:15:08.160
Or a NON-transferable identifier in 
this case, means that you cannot perform

0:15:08.160,0:15:12.320
any rotations against this (identifier ed.) You can't transfer 
to another set of keys that's why it's called

0:15:12.320,0:15:19.280
"non-transferable", so these are basically throwaway 
identifiers. You use them for example witnesses

0:15:19.280,0:15:23.200
you'd use non-transferable identifiers because 
they themselves won't ever have any witnesses

0:15:23.200,0:15:27.040
they don't perform rotations at all. 
If you feel like a witness

0:15:27.040,0:15:30.640
has been compromised, you just destroy that 
witness and start over with a brand new one,

0:15:30.640,0:15:34.720
and rotate it out of your key store, out of 
your identifier, that's using that witness.

0:15:37.120,0:15:42.560
So because it has no witnesses, 'toad' is the 
witness threshold I have no idea why it's

0:15:42.560,0:15:48.800
called "toad"; that's a Sam-ism (Sam Smith, ed.). so we have a zero 
witness threshold, because we have no witnesses the

0:15:48.800,0:15:54.320
'icount' is the number of signing keys to create, 
the 'ncount' is the number of next keys. If you

0:15:54.320,0:15:59.440
you're familiar with KERI pre-rotation, this is 
the next keys to create and that these are the

0:15:59.440,0:16:05.960
signing thresholds, 'i' for current signing threshold ('isith' ed.) 
'n' for next signing threshold ('nsith' ed.), and these have to be

0:16:05.960,0:16:10.360
'1' for transferable identifiers, across the 
board, because they only support single sig

0:16:12.400,0:16:18.240
All right, so, after we do that, we try and 
rotate this identifier and we capture the

0:16:18.240,0:16:23.200
fact that we should get an error, because you 
can't rotate a non-transferable identifier.

0:16:25.360,0:16:36.080
Then we move on and we create a 
transferable identifier. Open that file

0:16:36.080,0:16:38.320
the only difference between this and 
the previous one, because we're not

0:16:38.320,0:16:42.160
going to do witnesses quite yet, is that 
we have the flag 'transferable:' equals 'true'

0:16:44.000,0:16:46.800
and you'll notice when we create those 
two identifiers they have different

0:16:47.520,0:16:53.520
prefixes on the identifier which because 
all cryptographic material is encoded in

0:16:53.520,0:16:57.920
qualified Base64 we have a derivation code 
on the beginning that indicates one is a

0:16:57.920,0:17:03.840
non-transferable, and the other is a 'Blake3'
hash of a transferable identifier; it's 'B' versus 'E'.

0:17:11.120,0:17:14.720
So after we create the transferable 
identifier we then try and perform a

0:17:14.720,0:17:19.520
rotation event, which should work because this 
is transferable. We then rotate, and we anchor

0:17:19.520,0:17:22.480
data into it (using '--data' tag, ed.),
and in this case the anchor is

0:17:24.560,0:17:29.520
just a simple standard 
anchor for example for performing a "delegation"

0:17:29.520,0:17:36.400
or anchoring a transaction event log (TEL ed.) event into 
this, and by anchoring we mean making

0:17:36.400,0:17:40.960
a cryptographic commitment to whatever this 
data points to. So, for example in delegation,

0:17:40.960,0:17:45.840
if I were being a delegator and someone 
requested a rotation event, I would anchor,

0:17:46.800,0:17:50.640
I would create an anchor similar to this 
this is okay this wouldn't be '0' but

0:17:50.640,0:17:57.000
okay, this is the prefix {<- Oops!} that I'm 
approving, the AID, sorry, that I'm approving

0:17:57.280,0:18:01.360
this is the sequence number of the event that 
I'm approving and this is a digest of that event

0:18:02.640,0:18:05.040
same thing if you were anchoring an issuance event

0:18:05.840,0:18:09.440
from a public transaction event log (PTEL ed.), it 
would look exactly like this

0:18:11.840,0:18:18.240
Steven: And the sequence is for what? Phil: So remember,
in key event logs key events are a sequence of events.

0:18:18.800,0:18:23.680
So you do the inception: 's=0', rotation 's=...'
etc etc, so that's an index into the

0:18:23.680,0:18:31.520
key event log, that this event represents. 
We perform an interaction event which anchors

0:18:31.520,0:18:36.320
the exact same data just for testing purposes, 
obviously. Then we perform a rotation event that

0:18:36.320,0:18:41.120
gives us three keys with assigning threshold 
of two and then another rotation doing the same

0:18:41.120,0:18:46.000
thing, because remember, this is an interesting 
thing to remember about KERI,

0:18:46.000,0:18:52.560
because you do pre-rotation you need at least 
two rotations to get to a new number of next keys

0:18:52.560,0:18:57.680
So when we first created these, if you remember, I 
had a next key of '1' so after this rotation event

0:18:58.720,0:19:02.240
we will only have one key because that's 
what we previously committed to but now we

0:19:02.240,0:19:06.000
prepare ourselves to have three keys 
if we perform another rotation event.

0:19:09.680,0:19:14.080
These are the sign&verify commands that I 
mentioned earlier. So we sign the data just signing

0:19:14.080,0:19:17.840
again you can have any arbitrary data. You can 
specify the data on the command line, if you want,

0:19:17.840,0:19:25.200
or if you use the '@' sign here, you can specify a 
file to sign, and then we take the three signatures

0:19:25.840,0:19:30.160
and pass them into the 'verify' command against 
the same data, using the same identifier that

0:19:30.160,0:19:34.880
signed them, testing with the same identifier that 
signed them, and we get whether they're verified or

0:19:34.880,0:19:39.440
verifiable, or not, and then in this last one (command, ed.)
I just messed with the signed data to verify

0:19:39.440,0:19:46.320
it, to generate an error on verification. And the 
last bit here is just testing establishment only

0:19:50.000,0:19:54.000
and that's just another flag that you can 
pass in when creating an identifier: 'estOnly:'

0:19:54.720,0:20:00.720
is 'true' and that means you can only perform 
establishment events which are 'incept' or

0:20:00.720,0:20:07.120
'rotate' events and that's a security enhancement 
to an identifier, so that you can't ever expose

0:20:07.120,0:20:13.280
your public key repeatedly by doing interactions 
which just sign and anchor data but they never

0:20:13.280,0:20:18.400
rotate keys. And repeated use of a public key 
weakens it because it exposes it and allows

0:20:18.400,0:20:24.640
people an opportunity to try and work against it 
and break it. So, with "establishment only" (estOnly tag, ed.),

0:20:24.640,0:20:30.240
every time you do anything, issue a credential, approve 
a delegation, etc, you're getting a new set of

0:20:30.240,0:20:34.720
"next", you're getting a new set of keys so the keys 
are only exposed once, when they're first created.

0:20:37.280,0:20:37.780
okay

0:20:40.160,0:20:45.040
All right, so let's go run that, how are we doing 
here for visibility? Let me zoom in a little bit.

0:20:45.040,0:20:49.840
Steven: a little bit bigger will be good. Phil: How's that? Okay 
yeah, all right, let me give us a little space

0:20:55.440,0:21:03.840
All right, so the first thing we'll do is, so, 
the very first thing we always do is delete our

0:21:03.840,0:21:10.560
keystore, because I'm developing KERIpy and 
working with it every day, I repeatedly am

0:21:10.560,0:21:15.840
deleting my keystore, so if you're going to ever do 
anything with KERI you get used to running this

0:21:15.840,0:21:20.000
command, because you're creating new key stores for 
testing, and you don't want to keep the old data

0:21:20.000,0:21:25.600
around, so you'll just see me do that repeatedly 
throughout the demo today.

0:21:27.680,0:21:31.600
So run './scripts/demo/demo-script.sh'
Steven: this is a stupid question...

0:21:33.840,0:21:40.720
so when it's the key stores that are stored in that 
folder '/var/keri'; what format is it in?

0:21:42.000,0:21:50.560
those are lmdb databases. Lmdb? Lmdb, yeah. 
it's a read-only, or not read only, it's a

0:21:50.560,0:21:54.480
lightning fast key value store supposedly 
the fastest database on the planet

0:21:55.120,0:21:57.840
according to Sam (Smith, ed.) according to them 
as well; that's what they claim.

0:22:00.400,0:22:04.720
All right, so we'll just quickly go 
through the different commands that I

0:22:04.720,0:22:08.560
already talked through in the script. We created 
the key store in the database, and we created a

0:22:08.560,0:22:13.440
credential store as well, and you can see I 
have write access to '/user/local/var/keri'

0:22:13.440,0:22:19.280
So under keystore (ks, ed.) created test under database 
(db, ed.) test and 'reg' for the registry for the key

0:22:19.280,0:22:24.720
credential store, it created test. This is the 
non-transferable identifier that we created. It has

0:22:24.720,0:22:29.760
a derivation code of 'B' at the beginning of it and 
interestingly enough the public key is also

0:22:30.880,0:22:37.120
the identifier. Here's the error that we generated 
because we attempted to rotate a non-transferable

0:22:37.120,0:22:42.000
identifier. That's a good error and then 
next we created the transferable identifier

0:22:43.440,0:22:47.280
and it starts with 'E' so you know that's a 
transferable identifier just by looking at

0:22:47.280,0:22:52.320
it. And the public key is different because this 
public key, I'm sorry, this identifier (!) is generated

0:22:53.520,0:22:59.680
as a hash of the inception event, so that's how 
we generate identifiers for the

0:22:59.680,0:23:06.560
transferable identifiers and then using the same 
one, we did the first rotation, we did a second

0:23:06.560,0:23:10.720
rotation, we anchored data in here somewhere, which 
I'll take a look at with the status command next.

0:23:11.680,0:23:15.120
And then we started doing that we did: 
an interaction event. And then we did the

0:23:15.680,0:23:23.120
rotation, to get three sets of keys. Okay, that was 
the second rotation event with the three on it.

0:23:23.760,0:23:28.720
And then here are the three signatures on 
that anchor data, and those are the same

0:23:28.720,0:23:32.320
that are in the script because I when setting 
up the script, I copy and paste them in there

0:23:32.320,0:23:36.880
one two and three is valid but signature 
three is not valid now. Interestingly enough,

0:23:37.520,0:23:42.000
you see that with only passing in the signature 
the code knew that they were one two and three

0:23:42.640,0:23:46.480
and that's because when using a multi-sig 
identifier when you sign something with it

0:23:46.480,0:23:51.280
you create what's called indexed signatures 
so the derivation code contains not only

0:23:52.640,0:23:59.040
a code to tell you that it is a signature but also 
it is an index signature so that you can see 'AA',

0:23:59.040,0:24:07.040
'AB' and 'AC', that's hex for '0', '1' and '2'. So we know that 
they came from, they correspond to the first public

0:24:07.040,0:24:11.920
key versus the second public key versus the third 
public key. Steven: Cool, so how come it says signature

0:24:11.920,0:24:17.680
three is valid and then error signature is invalid? 
Phil: Because this is the one in the shell script that I

0:24:17.680,0:24:25.440
let's see script "demo-script", I ran this one with
a messed up signature, so I took signature three

0:24:25.440,0:24:31.840
and I changed the end of it, so it's an example,
just to show it that way.

0:24:32.480,0:24:37.600
i should change the anchored data, because changing 
signatures is not as interesting. But anyway,

0:24:37.600,0:24:41.360
one of the commands that I talked about at 
the beginning that's very useful is the 'kli

0:24:42.400,0:24:53.680
status' command and we'll take a look at the test 
key store and the alias of trans and you can see

0:24:53.680,0:24:57.680
that it's at sequence number five, because we 
performed an interaction

0:24:57.680,0:25:01.600
in several rotation events. We're not using any 
witnesses so this is blank, and these are our

0:25:01.600,0:25:05.840
three public keys but more interesting with 
the 'status' command is this the '--verbose' flag

0:25:07.040,0:25:10.320
which gives you the full key event log 
so now you're getting into the real guts

0:25:10.320,0:25:14.000
of kerry here you can see exactly, 
oops, that's not what I want to do,

0:25:19.040,0:25:19.760
you can see

0:25:21.840,0:25:25.360
well first we specifically list the 
witnesses when you run 'verbose', which he

0:25:25.360,0:25:28.480
doesn't have any, but now you can see each of 
the commands. So here's your inception command,

0:25:29.040,0:25:33.600
because we use self-addressing identifiers (SAID, ed.) for 
all KERI events, his digest is the same as his

0:25:33.600,0:25:38.160
inception, is the same as his identifier because 
this is an inception event, and here's his key

0:25:38.160,0:25:41.840
and here's a cryptographic commitment 
to his next key, his pre-rotating key.

0:25:42.640,0:25:47.280
Now we perform a rotation so you could you 
could run Blake3 against this and prove that

0:25:47.280,0:25:51.440
it matched up with the pre-rotated next key, 
to verify that this is the correct rotation

0:25:51.440,0:25:56.800
event and his identifier of course doesn't 
change. That's the whole power of KERI for

0:25:56.800,0:26:01.760
key management. But he has a new self-addressing 
identifier, because this is the hash of this event.

0:26:03.680,0:26:08.400
Then we move on and this is where we anchor 
the data, and this is what an anchor looks like.

0:26:08.400,0:26:13.920
So it's simply in the 'a:' field in a which is an 
array of any data that you want to anchor in here.

0:26:13.920,0:26:19.040
And this is that anchor file that I showed 
you earlier. Here's an interaction event. You see

0:26:19.040,0:26:22.960
there's nothing specifying any key changes here, 
because you don't change keys with interaction

0:26:22.960,0:26:27.200
events, you're just at anchoring data and 
here we've anchored the same amount of data.

0:26:28.480,0:26:33.120
You notice also every event but the inception event has a 'p:'

0:26:33.120,0:26:39.680
and that's an anchor to the previous; thus making 
it a blockchain. An anchor to the previous event

0:26:41.600,0:26:44.960
and then finally we performed the rotation,

0:26:46.080,0:26:50.640
to give us three next keys, but as I said, because 
we had already committed to one key when we did

0:26:50.640,0:26:54.800
that three, we got three next keys but only 
one public key, so we had to perform a second

0:26:54.800,0:27:01.360
rotation to get three public keys, and this 'kt:' 
here is the signing threshold for the (signing, ed.), so you

0:27:01.360,0:27:05.840
need at least two signatures to make anything 
valid for this identifier in this current state.

0:27:08.000,0:27:11.840
All right. So that's the first intro 
script. Any questions about that?

0:27:13.040,0:27:14.480
Steven: I don't know enough to ask questions.

0:27:18.560,0:27:24.400
So I know from reading some of the specs of 
that all the those (tags, ed.) like 'vt:' whatever the

0:27:24.400,0:27:29.760
field names are, are all defined in the spec, right?
Phil: yes, they are, absolutely. Yeah, it's funny,

0:27:29.760,0:27:35.120
I mean, I'm at the point now, where I look at them
and my head just reads them out loud to me. Steven: I'm not

0:27:35.120,0:27:44.640
there yet. Phil: yeah, it takes a while and Sam has changed 
them repeatedly. Like 'k' here used or i

0:27:44.640,0:27:48.240
know b all the b's they used to be 'w's because 
they used to be witnesses but we changed them

0:27:48.240,0:27:54.160
to backers instead of witnesses so now they're 
all 'bt', 'br' and 'ba' Steven: But is a backer a witness?

0:27:55.840,0:27:59.760
Phil: Well, you can have either a ledger backer or a 
witness backer that's why we changed the name.

0:28:01.360,0:28:05.680
and a witness backer would be using standard 
KERI infrastructure for witnesses

0:28:05.680,0:28:09.360
and then you can have as many as you want, but if 
you have a ledger backer you're anchored to just

0:28:09.360,0:28:15.840
one ledger. And that ledger serves the role 
of both witnesses and technically watchers.

0:28:16.400,0:28:20.800
Steven: a ledger is greater than ... 
a ledger contains witnesses?

0:28:22.320,0:28:28.880
Phil: a ledger serves the role of a witness, if you have 
a need for distributed ledger technology in your

0:28:28.880,0:28:33.920
infrastructure. iIf you're relying on cryptocurrency 
or you know the economics of a token or whatever,

0:28:34.960,0:28:42.240
then you can use that and trust the (if you 
want to put trust in the) anchoring of your

0:28:42.240,0:28:47.440
events in the ledger, instead of getting 
receipts from witnesses, you can do that.

0:28:47.440,0:28:52.720
It's not better, it's just different. It's just a 
different way to provide that layer of security.

0:28:54.960,0:28:58.160
So the next thing I'm going to do here, 
down in the lower window, is to launch..

0:28:58.160,0:29:01.280
Steven: So, it has a story (as a sidebar): Has there 
been discussion about using tokens?

0:29:02.640,0:29:08.000
Steven: Not for us (KERI/ACDC, ed.), no. Steven: But like crypto?
Phil: At IIW last week there was a really interesting session

0:29:08.560,0:29:15.680
that Richard Esplin from Evernym (now AVAS) held,
asking why KERI versus why a ledger?

0:29:15.680,0:29:20.560
And what the whole point of it for him was... {<- cliff hanger!},
that it was a great session, he held it on Monday and none of

0:29:20.560,0:29:25.840
us were able to attend. So then he re-held it again 
on Tuesday, oh I'm sorry it was on Tuesday, first day

0:29:26.400,0:29:32.560
on Tuesday, then he held it again on Wednesday 
after talking to us Tuesday night at dinner he

0:29:32.560,0:29:38.320
held it again on Wednesday, so Sam and myself 
and Kevin could participate, pardon me, and his

0:29:38.320,0:29:42.240
the whole point of it for him was { tadaa! -> }
okay, if I'm instructing clients who want to build

0:29:42.240,0:29:46.400
SSI infrastructure, do I tell him "he is KERI" 
do I tell him "he's a ledger" what do I tell him?

0:29:48.160,0:29:51.280
And it was great to clear up a lot of 
misconceptions because people think:

0:29:52.000,0:29:56.400
"oh, you can't use a ledger with KERI". No that's not 
true, you don't have to use a ledger with KERI. We

0:29:56.400,0:30:01.200
don't think it's, we don't think it's needed at 
all, but as Sam as what Sam pointed out during

0:30:01.200,0:30:05.920
the talk, is if you already have an investment 
in ledger infrastructure for other reasons,

0:30:06.640,0:30:10.720
you can then leverage that ledger 
as an additional trust threshold,

0:30:10.720,0:30:14.640
or security threshold for your 
identifiers instead of using witnesses.

0:30:17.200,0:30:22.800
So no, we're not, I mean the vLEI won't be using 
anything to do, with cryptocurrencies or tokens but

0:30:22.800,0:30:29.280
if you, you know, if for example a lot of people are 
using SSI systems based on Indy networks, right,

0:30:29.280,0:30:34.320
now if you want to transition to using KERI, you 
could do that by anchoring your KERI identifiers

0:30:34.320,0:30:39.040
in your Indy ledger. And then you, and the neat 
thing about it is, you could then transfer them

0:30:39.040,0:30:43.600
off, off the ledger and have non-ledger based 
identifiers, so that's what's great about

0:30:43.600,0:30:47.760
KERI: it's portable, you can be anchored to any 
one ledger at a time, or you could move it to a

0:30:47.760,0:30:53.040
different ledger, or you could move to using just 
witnesses, all with the same identifier by just

0:30:53.040,0:30:58.880
doing rotation events and changing your anchor, 
your backers here. Steven: but could you also do, if

0:31:02.080,0:31:09.520
could you be anchored, let's say to multiple Indies
or Ethereum? Phil: you could be only anchored in one at a

0:31:09.520,0:31:16.160
time, because that's the source of truth 
for that identifier at that given point in time.

0:31:16.160,0:31:21.440
You can then rotate to a different one, but you 
you can't have two ledgers at the same time.

0:31:23.200,0:31:30.320
Steven: So when people, well what maybe they 
misunderstood, so I understood that

0:31:30.320,0:31:33.360
okay one of the problems in blockchain is that 
you're all you have to be committed to all use

0:31:33.360,0:31:39.120
the same network which is not practical 
unless you're running an ICO scam, so

0:31:40.960,0:31:46.880
I understand KERI is digital ledger
technology agnostic. And that you could

0:31:46.880,0:31:52.080
use it..., it could interoperate with existing 
ledgers like Aries or Indy whatever it's called,

0:31:54.800,0:31:57.760
but it's only that one network. 
You couldn't, you couldn't connect

0:31:59.280,0:32:07.520
Ethereum and Indy to the KERI ledger (<- KEL?!) 
Phil: Correct, yeah, KERI is not (a ledger. ed.), KERI couldn't,

0:32:07.520,0:32:13.520
It couldn't be used as a technology to bridge between 
networks, that's not what it's designed for, but

0:32:13.520,0:32:17.200
you could use it to move a single 
identifier across networks, if you wanted

0:32:19.360,0:32:29.520
oh okay, all right, yep, okay. So moving on, 
the next command I'm running again

0:32:29.520,0:32:34.160
we do the 'rm -rf' and then 'kli witness 
demo'. This starts these three witnesses and

0:32:34.160,0:32:38.320
we give them aliases of 'wan', 'wil' and 
'wes' and these are the three identifiers.

0:32:38.320,0:32:41.840
That I now know by heart, because I 
start them a hundred times every day.

0:32:42.800,0:32:48.240
And they're started with a given salt for 
each one, so that the identifier is predictable.

0:32:50.000,0:32:54.640
Now we get to OOBIs. This is the really interesting 
part. So OOBIs or "out-of-band introductions"

0:32:54.640,0:33:00.720
allow people to discover full key event logs, 
witness key event logs and service endpoints.

0:33:00.720,0:33:06.800
for any other identifier, and you can see here 
they are simply URLs, so in these cases this is

0:33:06.800,0:33:13.760
an OOBI, we know that because it has this '\*\*\*/oobi/'
in the path. This is the identifier about whom

0:33:13.760,0:33:18.960
this OOBI is referencing. And this is the role that 
this particular OOBI is playing, so in this case

0:33:18.960,0:33:26.880
this is a 'controller' OOBI for this witness. 
We'll take a look at two configuration files.

0:33:33.200,0:33:38.320
So this is a new (setup? ed.), with the most recent 
version of KERI with Py, we have the ability

0:33:38.320,0:33:42.160
to specify configuration files. Previously 
when we did our first pilot for life with

0:33:42.160,0:33:44.640
this we were hard-coding IP-addresses 
all over the place, because we didn't

0:33:44.640,0:33:48.560
have a discovery mechanism. But we now have 
a discovery mechanism that's using OOBIs.

0:33:49.680,0:33:54.000
So when you start any agent who's going to run 
with persistent connection like our witnesses,

0:33:54.000,0:34:00.320
or if you run agents, you can specify a 
CURLs field in their configuration file,

0:34:00.320,0:34:06.880
that specifies endpoints that he will be exposing. 
So in this case the scheme he's exposing a TCP

0:34:06.880,0:34:15.600
end-point. On this port 'localhost' and an 'http:' endpoint 
on this port on localhost when he generates OOBIs

0:34:15.600,0:34:19.440
he can generate OOBIs, for either of these 
endpoints, because he's been told, through this

0:34:19.440,0:34:26.320
configuration file that that's who he's listening 
on. So when he generates an OOBI for example for a

0:34:26.320,0:34:30.720
controller, so then the controller is basically saying:
"this is where you can contact me directly, not through

0:34:30.720,0:34:38.480
a witness, but just contact me directly", pardon me,
he would generate a newbie that looks like this...

0:34:41.520,0:34:45.280
Okay, we're already schooled over this, is the 
little window of the two of us was blocking it

0:34:47.600,0:34:52.560
so it's again, it's the location to 
contact this OOBI which is of course the same

0:34:52.560,0:34:57.760
as his 'http:' endpoint: what they identify, who the 
identifier is, and what role this OOBI is playing.

0:34:57.760,0:35:02.480
Now interestingly, when you look at the 
command line we ran six OOBI resolutions, the

0:35:02.480,0:35:07.440
little green checkboxes, said they all worked 
and that's because, well now when we start this

0:35:08.000,0:35:12.560
based on the configuration file, not only does 
each witness expose his endpoints this way,

0:35:12.560,0:35:19.360
but he also resolves the other two witnesses 
OOBIs, so at startup he exposes this then he

0:35:19.360,0:35:27.280
reaches out to this witness at this 
address and this witness returns a reply event

0:35:27.840,0:35:32.320
which contains his key event log, which is very 
simple, because he's a non-transferable

0:35:32.320,0:35:38.080
identifier, and a reply message containing 
his endpoint information that he has had

0:35:38.080,0:35:41.920
configured via this configuration file. So now 
all the witnesses are communicating with each

0:35:41.920,0:35:45.360
other and establishing how they could connect 
with each other if they need to. And also if

0:35:45.360,0:35:50.160
someone is, let's say, as we will demo in a minute, 
someone is using all three of these witnesses,

0:35:52.080,0:35:56.720
when someone asks a witness for an OOBI 
for an identifier, that he's a witness for,

0:35:56.720,0:36:01.520
he can say "oh well, he's also has 
these other two witnesses and here's

0:36:01.520,0:36:05.200
their connection information. Doesn't have to do 
that, but he can, because we've configured him to

0:36:05.200,0:36:11.120
resolve the other witnesses and then wil's 
and wes's configuration file is the same.

0:36:11.120,0:36:17.280
Except of course he's referencing the other two 
identifiers, right, so now we'll look at 'demo-script-witness'

0:36:20.800,0:36:28.320
again, this is we initially initialized 
the key store with, no passcode, we do an OOBI

0:36:28.320,0:36:32.720
resolution against each of the three witnesses, 
those OOBIs should look familiar because the ones

0:36:32.720,0:36:38.240
I just showed in the configuration file, so now 
this new data store now has the information for

0:36:38.240,0:36:42.960
each of these three witnesses. So he's configured 
to be able to use them as witnesses, if he wants

0:36:43.840,0:36:49.680
this, however, if we were running an agent we would 
probably create a configuration file like this one.

0:36:50.960,0:36:54.960
If for example we were, which 
we will be for the vLEI system,

0:36:54.960,0:36:59.600
packaging up an agent that has pre-configured 
witnesses; that we're anticipating everyone will

0:36:59.600,0:37:03.600
use and then we create a configuration file 
which gives them OOBIs to those witnesses.

0:37:03.600,0:37:06.960
So when they start up, they initially 
automatically initialize those,

0:37:06.960,0:37:10.720
and bring them, bring all the data over they need, 
so they can communicate with those witnesses.

0:37:12.800,0:37:17.120
But you can do it with command line here 'kli 
oobi resolve' so that's what we do for this.

0:37:19.280,0:37:26.160
So then we do an inception event with the 
'trans-wits-sample' and then we create an inquisitor

0:37:26.160,0:37:31.840
and then we do a status of this with his 
witnesses, we perform a rotation witness

0:37:31.840,0:37:35.520
cut, so that removes this guy from his set 
of witnesses, this is rotating a witness

0:37:35.520,0:37:39.360
out, because I don't want to use them 
anymore and then we do a status again

0:37:39.360,0:37:43.840
to see that he's gone, that he's down to 
two witnesses this is fixed, I fixed this,

0:37:46.080,0:37:51.600
and then we do a kli rotate with a 'witness-add',
so we add that witness back in and then we do

0:37:51.600,0:37:56.240
another status to see that he has those, that 
witness's back in, as part of his witness set.

0:37:56.240,0:37:59.760
Steven: And what happens if you never added that 
back in? Does something tell you have,

0:38:00.560,0:38:03.040
you should have three witnesses? Phil: Well you're okay,

0:38:04.640,0:38:08.320
you don't have to. It's just saying that 
you now have two and when you, so when you

0:38:08.320,0:38:18.080
rotate this out, it will also change your witness 
threshold. I think let's take a look at this guy

0:38:18.080,0:38:22.400
yeah so you can see when we create him he's 
created his transferable with these three

0:38:22.400,0:38:26.880
witnesses and he has a witness threshold of two 
so that means you only need receipts from any

0:38:26.880,0:38:31.280
two of these okay considering Steven: Okay, that's sort 
of, that's what I was thinking / wondering about.

0:38:31.280,0:38:36.720
So if you put that to three 
and you and you removed, you cut that one...,

0:38:37.440,0:38:42.480
Phil: you'd get an error. Steven: Oh, you get an error, yeah, 
you can't cut them? Phil: you

0:38:42.480,0:38:46.480
can't, yeah, I would say your witness threshold of 
two is you're with a threshold of three can't be

0:38:46.480,0:38:50.720
satisfied, because you only have two witnesses. Steven: so 
you're supposed to create a new one, add a new one

0:38:50.720,0:38:54.320
and then... Phil: No, you can change the threshold 
on the command line, so you do something like

0:38:55.440,0:38:59.840
'--toad 2' and then that would, 
that would make it valid

0:39:01.680,0:39:04.240
Steven: but wasn't there a reason why 
it was three in the first place?

0:39:05.760,0:39:09.440
Phil: It's all your own identifier and 
you're controlling your identifier, so it's up to

0:39:09.440,0:39:14.560
you to determine what security constraints 
you want for that identifier, so yeah sure, you

0:39:14.560,0:39:17.920
probably created it with three, but if you're just 
saying "okay, you know what, now I only need two, or

0:39:17.920,0:39:21.760
I'm only going to have two temporarily, because 
i need to go find a new witness", you can do this.

0:39:21.760,0:39:27.200
Again not the most practical example but 
I'm just showing how 'cut's and 'add's work, makes sense?

0:39:27.200,0:39:40.340
Steven: yeah. Phil: All right, cool, so let's run this 
script and we can watch it go through its process.

0:39:40.840,0:39:44.720
{Quick question: Does Phil enjoy being around Wan, Wil and Wes??}

0:39:44.720,0:39:45.220
yes

0:39:48.720,0:39:51.840
All right, creating key store, this 
is the OOBI resolution so that this

0:39:51.840,0:39:55.280
guy now knows how to contact 
those OOBIs. And you can see

0:39:55.280,0:39:58.640
he's going through all the different steps. 
And we'll go step by step through this.

0:40:02.640,0:40:09.520
Page up, so this is where he initialized his, 
or he resolved his three OOBIs with the 'oobi resolve'

0:40:09.520,0:40:15.600
command and you can see part of the 'incept' command 
also takes your identifier and propagates it to

0:40:15.600,0:40:20.560
your three witnesses. However, many end number of 
witnesses waits for receipts from those witnesses,

0:40:20.560,0:40:25.200
then collects all the receipts and passes them out 
to all the other witnesses. So he propagates the

0:40:25.200,0:40:30.960
receipts from everybody to every witness. So every 
witness has a fully receded key event log for him

0:40:30.960,0:40:34.800
and that's what waiting for witness receipts 
is here. And that all happens as part of the

0:40:34.800,0:40:40.320
'incept' command, then we did the 'status' command 
so this is 'EELF\_' as our new identifier

0:40:40.960,0:40:45.280
and you can see that he has a signing 
threshold of two but he got all three receipts

0:40:50.480,0:40:54.480
and then as we go on, you can see this is 
where he cut that one witness, so he's now

0:40:54.480,0:41:00.880
down to two, and this is where he added him back 
in, he's now back up to three, so we'll do a quick

0:41:04.640,0:41:05.840
test

0:41:16.240,0:41:19.840
my fingers know I made a mistake my brain didn't

0:41:22.080,0:41:22.580
yes

0:41:32.240,0:41:33.040
what did I type

0:41:38.960,0:41:41.520
witness test trans wits

0:41:43.600,0:41:49.600
Okay, so here's the key event log for all those 
things that we just did. This is the inception

0:41:49.600,0:41:53.360
event, and in an inception event you just 
specify the 'b:' field with the backers you're

0:41:53.360,0:41:58.480
going to use for this and the 'bt' is your backer 
threshold so that's the 'toad:' of two that we saw.

0:42:00.480,0:42:07.520
Here's the rotation event that "did a 'br'" or backer remove,
so this cut that witness from the list

0:42:08.320,0:42:11.680
and then this is the third 
rotation, of a second rotation event

0:42:12.240,0:42:17.040
that "did a 'ba'", so it added 
that backer back into the list

0:42:17.040,0:42:22.000
and when we did the '--verbose', you can see that he 
lists, he's now back up to, those three witnesses

0:42:24.560,0:42:29.120
All right, so that's using witnesses with an 
identifier, again I don't think that I show

0:42:29.120,0:42:35.360
that yeah I showed this yeah yeah so you just 
specify your witnesses in the 'wits' configuration,

0:42:35.360,0:42:38.320
in the 'wits' field of the configuration 
file, when creating an identifier

0:42:38.880,0:42:46.000
and that's in the demo script, when we did the 
'incept', we specified that file 'trans-wits' sample,

0:42:48.400,0:42:51.120
and I used to do a query in this. That's 
why we're creating this guy "inquisitor"

0:42:51.120,0:42:57.840
here, but we don't do anything with it, 
but we can take a look at the 'kli list'

0:42:59.040,0:43:03.280
and you can see I have two aliases inquisitor 
and trans-wits, so I have two identifiers in

0:43:03.280,0:43:08.640
this one key store. And that's who they are 
and then from there, I could do a 'status' to

0:43:08.640,0:43:14.640
see what each one looks like. All right we 
got 15 minutes left. We're probably only

0:43:14.640,0:43:17.440
going to get through delegation because, 
I want to show you the agent real quickly.

0:43:21.120,0:43:27.200
Okay, so we'll go over here, we'll start closing 
some windows, all right, so let's go over delegation

0:43:31.440,0:43:35.120
So with delegation we're going to 
create two identifiers. One is the

0:43:35.120,0:43:40.960
delegate, and the other is the delegator. 
So we create both key stores then we run

0:43:40.960,0:43:45.200
an 'incept' command for. The delegator, using
this configuration file,

0:43:50.160,0:43:52.560
he should look familiar, this is just like

0:43:52.560,0:43:55.280
the transferable guy we just 
created; all the same features.

0:43:59.440,0:44:03.600
Oh yes, here's where we're specifying a salt for

0:44:03.600,0:44:07.840
each of these. So that we know what their 
identifier will be when we generate them.

0:44:09.360,0:44:14.000
And then we do an 'incept' command for him, I just 
said that, and then the delegate keystore is

0:44:14.000,0:44:20.800
resolving the OOBI for the delegator. Now this 
OOBI is different. This OOBI is a witness OOBI.

0:44:20.800,0:44:25.760
So because, as you saw in the configuration file, 
I'm using these three witnesses, he can generate

0:44:25.760,0:44:32.000
an OOBI which tells anyone interested how to 
contact him through his witness. So it starts

0:44:32.000,0:44:38.400
with OOBI, just like the other, it starts with the 
AID or the identifier for whom this OOBI is about,

0:44:38.400,0:44:43.200
and then the role. In this case it's "witness" and 
then it specifies the identifier of the witness.

0:44:45.440,0:44:45.940
All right

0:44:48.480,0:44:49.840
so let's get started...

0:44:52.960,0:44:55.680
Yeah, so I guess I just I have to run this

0:44:58.800,0:45:02.160
kill and restart, because we want to clean 
data store. Actually, I don't technically

0:45:02.160,0:45:06.320
for this one, I don't have to, but i'd like to do. 
(then we hear my grandson crying in the background)

0:45:11.040,0:45:15.680
all right oh sorry one thing I forgot to 
point out is, this command here when you inset

0:45:15.680,0:45:19.040
let's let's open him so we'll 
look at delegate.delegatee.json

0:45:21.360,0:45:26.320
so the only difference with him from all of 
the others that we've done before is that he

0:45:26.320,0:45:32.800
specifies a 'delpre:' so he's saying any key event 
that I do, any key management event that I do

0:45:32.800,0:45:39.440
an 'inception' or 'rotation' needs to be approved via 
an anchor by this identifier and the anchors are

0:45:39.440,0:45:43.760
what we saw earlier. You do a rotation event or an 
interaction event, and you put that data in there.

0:45:43.760,0:45:47.280
And by signing that key event and anchoring 
it to your key event log (KEL, ed.), You're making a

0:45:47.280,0:45:51.360
cryptographic commitment approving 
this whatever event he's requesting.

0:45:53.280,0:45:57.920
And we'll take a look at that data, as soon as 
this is done, so he's only using one witness just

0:45:57.920,0:46:05.040
because I'm lazy, so he will then wait because 
he has a delegator he'll wait to finish

0:46:05.920,0:46:11.280
until a delegator approves him this command 
is actually reentrant so if you control see it

0:46:12.240,0:46:16.240
go away call your guy say hey I just sent you a 
delegation event can you approve it he approves

0:46:16.240,0:46:20.240
it you can come back and rerun it and it'll finish 
the event propagate the receipts of the witnesses

0:46:20.240,0:46:25.360
et cetera but in the meantime we'll just leave him 
running and we'll go to another window and then

0:46:25.360,0:46:32.400
Steven: How does it delegate, how does the .., how does
that person know, that they're waiting on it?

0:46:33.840,0:46:38.080
This aside from you saying
"get on there and approve it", is

0:46:38.080,0:46:43.920
there some messaging? Phil: yes so this 'incept'
command will actually notice that he has

0:46:43.920,0:46:51.120
a delegator listed in here, and he will 
send his key event for his inception event

0:46:51.120,0:46:55.840
to the OOBI, that he was up to the endpoint 
that he found from OOBI resolution here.

0:46:56.800,0:47:02.400
And the delegator or any identifier, when 
they receive a key event and they process it

0:47:03.360,0:47:06.640
and they're listed as the delegator,
it's a trigger that they have

0:47:07.200,0:47:11.680
something to do and that's what this delegate
confirmed command is he wakes up checks his

0:47:11.680,0:47:18.000
mailbox and in his mailbox he finds this event 
notices that he's listed as the delegator.

0:47:18.560,0:47:24.080
And so then he will ask, you'll see on the 
command line, he'll ask "Hey so-and-so wants

0:47:24.080,0:47:26.880
you to be their delegate, and 
you can either approve it or deny it".

0:47:29.200,0:47:35.200
I guess "reject" is the better word, so 
did I do this yet, I'm pretty sure again

0:47:36.720,0:47:39.520
All right so we're going to run 
this, he's resolving the OOBIs

0:47:41.600,0:47:46.560
for the witnesses, and you can see that he 
resolved the delegator's OOBI right here.

0:47:46.560,0:47:50.000
And then he says waiting for delegation 
approval so he's just sitting here,

0:47:50.000,0:47:56.880
waiting scanning for someone , for this person, to 
approve his event, so I'll just copy and paste this.

0:47:59.840,0:48:05.840
So he wakes up, he discovers the inception 
event, so he says a delegation inception request,

0:48:07.360,0:48:13.200
a delegation inception request from this 
identifier, "accept or deny, I will accept it". He

0:48:13.200,0:48:19.680
signs the event, he propagates his own event to his 
witnesses and then sends the fully receded event

0:48:19.680,0:48:25.600
back to the delegator, but to the delegate 
who then says "Okay, I am now an approved event

0:48:25.600,0:48:28.800
and I'm going to get my witness 
receipts, and here is my new identifier"

0:48:30.320,0:48:34.880
We'll look at two different 
status, so we'll do 'kli status'

0:48:38.080,0:48:39.040
I think it's delegate

0:48:41.760,0:48:46.320
It is. So you can see because he's a delegated 
identifier. The status command now prints out

0:48:46.320,0:48:51.040
this bit of information: here's my delegator 
and the fact that he's anchored, and this is

0:48:51.040,0:48:55.360
important, because if I were to control scene 
and "do a 'status'" I could come back in three

0:48:55.360,0:48:58.720
days later and do a status it doesn't say 
"shoot, he hasn't been anchored yet". I need to

0:48:58.720,0:49:02.400
get on the phone and bug him or whatever or run 
the incept command again and see if the anchor

0:49:02.400,0:49:07.680
is out there for me to process and then he's 
done his witnesses. So if we look at a '--verbose'

0:49:08.720,0:49:13.520
here, this is his inception event because it's 
a delegated identifier, it's a different tag,

0:49:13.520,0:49:18.560
or sorry, different type for the 
inception event, a 'dip' instead of an 'icp'

0:49:20.000,0:49:25.520
and the only other difference here is the last 
field is a 'di' which is the delegating identifier

0:49:26.480,0:49:31.680
and that is the delegator, so then anyone 
processing this will know that this is a delegated

0:49:31.680,0:49:36.800
identifier and any event that he processes has to 
be approved by this guy, for it to be a valid event

0:49:37.360,0:49:44.880
Now notice here his identifier is 'EY7' because 
it's an inception event, I said that backwards,

0:49:44.880,0:49:49.120
{tries again: -> } This is the identifier, because there's 
an inception event, the SAID of this is the same,

0:49:49.680,0:49:57.840
so these are the two, and here's a sequence number 
'0'. So now, if we take a look at the delegator

0:50:02.400,0:50:09.280
you can see his rotation event here, 
this is the approval and that 'EY7'

0:50:09.280,0:50:15.040
is the identifier as well as the SAID or 
digest of the event that he approved and

0:50:15.040,0:50:20.640
he has anchored that data; thus approving 
the delegation request from the other guy.

0:50:24.240,0:50:29.520
All right so that makes sense? Steven: Maybe 
one day, yeah, that's what I'm feeding,

0:50:31.200,0:50:35.200
it's so inspiring. Phil (laughing): "yes there's 
a lot, there's a lot here.

0:50:37.040,0:50:41.360
All right we have eight minutes I will try and 
get through multisig actually you know what no

0:50:41.360,0:50:45.920
Steven: No rushing in my account, I mean, I understand 
you're on vacation here, but don't worry

0:50:45.920,0:50:51.440
about my time. Phil: Yeah, I know, I have 
another meeting, I have to get to. Steven: Oh okay, not only

0:50:51.440,0:50:57.120
for visiting the family? Phil: yeah exactly, yeah but not 
only that, but I'm out here buying a house,

0:50:57.120,0:51:08.240
because we're moving out here, so all that, 
as well as work, it's been very very busy.

0:51:08.240,0:51:09.920
All right, so let me show 
you the agent really quickly.

0:51:12.640,0:51:21.840
So here we start actually. I don't need the 
witnesses but anyway so we will run 'kli'

0:51:25.760,0:51:31.200
So I'm running 'kli agent demo', just like 
the demo command down here, he starts,

0:51:32.480,0:51:37.040
except in this case, he starts four well-known 
agents and that's because, well I needed to test

0:51:37.040,0:51:43.440
multi-sig delegation with two participants in the 
delegator, and two participants in the delegatee.

0:51:44.320,0:51:52.960
delegation coordination I start him with 
a ... (that's not gonna work) Well that's fine, I

0:51:52.960,0:51:59.840
started him with a configuration file that tells 
him where these three witnesses are and he starts

0:51:59.840,0:52:05.200
four agents on these well-known ports again with 
actually he doesn't have well-known salts because

0:52:05.840,0:52:12.720
you do those via the CURL commands so once 
you start those agents, let's see, here we go,

0:52:14.960,0:52:22.640
you get on each of those ports a Swagger U/I
which contains the available API calls.

0:52:22.640,0:52:29.200
For the agent depending on his state. Every 
agent initially starts off in a locked state.

0:52:29.200,0:52:33.280
so think of a ..., remember when we did the 'kli 
init' commands and created the data store

0:52:34.880,0:52:38.160
that data store is now encrypted 
and locked, if you gave it a passcode.

0:52:38.720,0:52:43.200
So in this case we don't have any data stores 
yet, so you can start an agent with no data stores

0:52:43.200,0:52:51.840
around and that's when you end up in this state. So 
in order our passcode requirement for creating an

0:52:51.840,0:52:56.800
encrypted key store is a 22 character passcode we 
give you just a little helper function. This isn't

0:52:56.800,0:53:01.600
really part of KERI, but we give you a little 
helper function for, (my grandson is really unhappy),

0:53:04.320,0:53:09.520
for just generating random passcodes if you need 
that, you can also use "OnePass" or whatever to

0:53:09.520,0:53:16.640
create them and then store them in OnePass, so 
now just like 'kli init' that creates a key store

0:53:16.640,0:53:23.600
we have a POST to '/boot' which will create 
a key store for you, you call it, let's try it

0:53:23.600,0:53:29.920
out, let's not type into the sample I did that 
during the demo too, 'Agent0', and spell agent right

0:53:32.320,0:53:35.440
and give it the passcode, 
that you saved and execute,

0:53:36.720,0:53:44.160
and you can see the 'agent0' and key 
store created and he resolved a whole bunch

0:53:44.160,0:53:47.920
of OOBIs, that's part of the configuration 
file, I guess I do have running the ...,

0:53:48.720,0:53:54.800
So, one thing to note about here, is several of 
the OOBIs are actually data OOBIs. And we can also

0:53:54.800,0:53:59.440
use OOBIs to resolve things like credential 
schema. So that's a whole separate topic.

0:54:01.520,0:54:06.880
So, now that we've created the key store the 
next step is to unlock it, and so this is like

0:54:07.600,0:54:12.560
if you ..., so we ran this demo at IIW after 
doing our demo hour where we demo-ed the U/I

0:54:12.560,0:54:15.680
that we have sitting on top of this to 
Keep, and so when you get into the Keep,

0:54:15.680,0:54:19.280
you get a nice screen that says "hey, create 
your passcode", which is that first API call.

0:54:19.280,0:54:23.840
And it uses the top API called to generate 
random keystore keys for people who want samples

0:54:24.480,0:54:29.040
to use and then we do a PUT against
'/boot' for unlocking. And that's the next

0:54:29.040,0:54:33.040
nice block in the U/I that says "now unlock your 
key store" Every time you come back into the agent,

0:54:33.040,0:54:37.840
because you already have a key store, you just have 
to unlock, right, because you've already created it

0:54:41.680,0:54:46.240
So we're going to try it out,
here we called him 'agent0',

0:54:48.400,0:54:53.600
and there's the passcode that we use, and we're 
going to execute this and he says "'agent0' is

0:54:53.600,0:54:58.560
now unlocked", and the cool thing about unlocking 
an agent, is you just reload and you now have a

0:54:58.560,0:55:03.360
whole new set of APIs for doing all the things 
you would want to do with an agent, and these all

0:55:03.360,0:55:09.520
marry up very nicely with the 'kli' commands that 
we've been running. Get your list of identifiers,

0:55:11.360,0:55:15.280
get information about a specific identifier, 
you can create a new identifier, this would be

0:55:15.280,0:55:23.600
like 'kli incept', you can update, so again not part 
of KERI but to support a user interface, a wallet

0:55:23.600,0:55:26.960
for example, where you're going to have a ton 
of different identifiers, you need to associate

0:55:26.960,0:55:32.160
metadata with those. You give yourself context 
to remember, you know what organization, who ...,

0:55:32.160,0:55:36.560
Just think of a standard contact book; that's 
what this API is for us; for updating that.

0:55:37.600,0:55:42.160
And because we're "zero trust", all that data is 
signed at REST, so that if you lose control of

0:55:42.160,0:55:47.680
your database, people can't put in like, you know, 
change the name of the contact and fake you out,

0:55:47.680,0:55:52.960
because we verify the data when we reload it, and 
then you can do a rotation or an interaction event.

0:55:53.840,0:55:58.400
This is for creating and listing your credential 
registries so the public transaction event logs

0:55:58.400,0:56:03.520
for anchoring issuance and revocation events 
a presentation request, you can generate

0:56:03.520,0:56:07.520
your own OOBI or resolve other people's 
OOBIs. This is like the 'kli oobi' commands

0:56:08.400,0:56:13.360
these are the this is challenge response so one 
of the requirements of the Keep is that you do a

0:56:13.360,0:56:18.160
two-factor auth, so this is for generating like a 
list of challenge words, that's what this guy does.

0:56:18.160,0:56:23.040
Which is just randomly generated challenge words. 
You would then take those, send them to another

0:56:23.040,0:56:29.280
person using this command. They would then get 
a notification that someone has challenged them.

0:56:29.280,0:56:33.040
They sign it with that identifier and send it 
back and now you have proven that they have

0:56:33.040,0:56:38.000
control of your identifier, and that was actually a 
big part of the demo, that we did during demo hour.

0:56:41.360,0:56:45.600
This is more information about getting, about 
getting an updating contact information.

0:56:45.600,0:56:49.680
We also support images. We don't sign those yet 
and Samuel (Smith, ed.) says to me that we have to sign them.

0:56:49.680,0:56:54.720
{ some domestic situation itemised :) } And then this is 
for getting the schema, that we loaded via the

0:56:54.720,0:56:59.200
OOBIs, that I showed you at the beginning, this is 
diagnostics we're taking a look at, the escrow

0:56:59.200,0:57:03.120
status, because all events are asynchronous, 
passing events around, you can get them out

0:57:03.120,0:57:06.560
of order, you can get them without full signatures, 
without full witness receipts, and we have a whole

0:57:06.560,0:57:12.560
series of escrows, that the events just sit in, that 
we constantly check for any other event to come in,

0:57:12.560,0:57:19.920
to resolve them out of their current state, this is 
for mailbox notifications, so this is a 'server-

0:57:19.920,0:57:26.400
sent events', streaming service for the agent U/I,  
to get notifications from the KERI system itself,

0:57:28.320,0:57:33.680
these are all the APIs for performing multisig 
and these are APIs for doing credentialing with

0:57:33.680,0:57:37.040
a multi-sig identifier. And the reason why 
these have to be different, is because there's

0:57:37.040,0:57:43.120
communication involved. Someone leads the process 
that would be with a POST, and then others call PUT

0:57:43.120,0:57:48.720
to participate in the process. And so, for example 
if I have an identifier, if you and I are sharing

0:57:48.720,0:57:54.480
an identifier, where you have a private key and I 
have a private key, I would initiate it and then

0:57:54.480,0:57:58.400
send, the system would send the credential to you, 
you would look at the credentials, say "Yep, this is

0:57:58.400,0:58:03.120
the one we agreed to issue". You would then do a PUT
with that credential and your signature, and then

0:58:03.120,0:58:08.240
it would become a valid credential. And we do 
have scripts, and all that, we can go through that

0:58:08.240,0:58:13.120
Maybe you and I can schedule something next week, 
and we can go forward and do the multi-sig stuff

0:58:13.920,0:58:21.200
Okay, all right, so that's most of what 
I did. We had an hour and a half, when I was at

0:58:21.200,0:58:27.920
at IIW. Because I did it over the working lunch 
session (which meant I didn't get to eat) and we

0:58:27.920,0:58:32.800
went on through the next set of scripts, which is 
multi-sig and then multi-sig delegation on both

0:58:32.800,0:58:36.560
the delegator and the delegatee. And that was fun 
because you get four windows running, and they're

0:58:36.560,0:58:40.880
all waiting for each other. And when you're to 
finally fire off the final one, they all just resolve,

0:58:40.880,0:58:45.440
with signed events everywhere, It's really cool so 
maybe we can do that sometime next week. Steven: okay

</div>
