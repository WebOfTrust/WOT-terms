---
tags: KERI, CESR, OOBI, ACDC, IETF, Concepts, Terminology, Education, Glossary
---

# KERI Terminology and Education Meeting Agenda
[![hackmd-github-sync-badge](https://hackmd.io/gHe_VCAwT9qmdzXe-Cx3MA/badge)](https://hackmd.io/gHe_VCAwT9qmdzXe-Cx3MA)

Host: Henk van Cann [email](h.vancann@blockchainbird.org)
Co-Host: Philip Feairheller [email](pfeairheller@gmail.com)

Meeting Bi-weekly starting on 2022-07-28 at 10 am EDT, 4PM CEST

Agenda:
- [Draft](https://github.com/henkvancann/WOT-terms/blob/main/agenda.md)
- [Definitive](https://github.com/weboftrust/WOT-terms/blob/main/agenda.md)

### Zoom Meeting

Topic: **KERI Concepts and Terms**

Time: Jul 28, 2022 08:00 AM Mountain Time (US and Canada), 4PM CEST

Every 2 weeks on Thu, until Oct 20, 2022, 7 occurrence(s)
- **Done** Jul 28, 2022 08:00 AM + Aug 11, 2022 08:00 AM + Aug 25, 2022 08:00 AM + Sep 8, 2022 08:00 AM + Sep 22, 2022 08:00 AM + Oct 6, 2022 08:00 AM + Oct 20, 2022 08:00 AM
- Nov 3, 2022 08:00 AM
- Nov 17, 2022 08:00 AM
- Dec  1, 2022 08:00 AM
- Dec 15, 2022 08:00 AM
- Dec 29, 2022 08:00 AM
- Jan 12, 2023 08:00 AM
- Jan 26, 2023 08:00 AM
- Feb  9, 2023 08:00 AM
- Feb 23, 2023 08:00 AM

Please download and import the following [iCalendar (.ics) files](./meeting-89893527631.ics) to your calendar system.
Weekly: https://us02web.zoom.us/meeting/tZ0lfuqtrDwsGdXO34oUxPbSpcf4X1Lcdmb-/ics?icsToken=98tyKuGhpjIpH9aSthqGRpx5Gor4b-_zpmZdjadls0yxDBVLUgHFJuFEZoouPNvU

#### Calendar Invite
Join Zoom Meeting
https://us02web.zoom.us/j/89893527631?pwd=S1VheVF4d2xpTTRTdERYbFFGUFdPUT09

Meeting ID: 898 9352 7631\
Passcode: 197037

KERI Slack: keriworld.slack.com
https://join.slack.com/t/keriworld/shared_invite/zt-14326yxue-p7P~GEmAZ65luGSZvbgFAQ

### Resources
[Technical Concepts](https://keri.one/keri-resources) developed by and explained by prof. Samuel M. Smith\
Direct links: All relevant [white papers](https://github.com/SmithSamuelM/Papers) and a table of [IETF-drafts](https://github.com/WebOfTrust/keri) of which the status is kept up to date.

Explanatory articles from Henk van Cann about KERI, CESR, OOBI, Autonomic identifiers:

- [Medium-articles](https://medium.com/happy-blockchains) with a bit more sophisticated layout and response options. Medium is a company.
- [Markdown alternatives](https://henkvancann.github.io) on Github userpage of Henk van Cann

[KERI](https://github.com/SmithSamuelM/Papers/blob/master/presentations/KERI_for_Muggles.pdf) and [ACDC](https://docs.google.com/presentation/d/1mO1EZa9BcjAjWEzw7DWi124uMfyNyDeM3HuajsGNoTo/edit#slide=id.ga411be7e84_0_0) for Muggles by Drummond Reed / Sam Smith

[Docs](https://github.com/WebOfTrust/keri/tree/main/docs) about technical concepts behind KERI: Questions and Answers [general](https://github.com/WebOfTrust/keri/blob/main/docs/Q-and-A.md) and focussed on [security](https://github.com/WebOfTrust/keri/blob/main/docs/Q-and-A-Security.md), [Glossary KERI](https://github.com/WebOfTrust/keri/blob/main/docs/Glossary.md) and [Glossary ACDC](https://github.com/trustoverip/acdc/wiki).

Explanation of KERI development tools and techniques (preliminary link): [KERI development environment](https://github.com/henkvancann/keri-1/blob/main/docs/keri-dev-env.md)

Howto's of WebofTrust documentation effort in github project page: [Howto](https://github.com/WebOfTrust/WOT-terms/tree/gh-pages/howto)

## Meetings
### Structure
- Agenda
1. 20 minutes - Roadmap documentation: Delta between WPs - Techn. Design and Code at various repos / branches
2. 20 minutes - Q&A
3. 10 minutes - Supported documents GLEIF use case


### Future Topics
Steven Milstein: Developer-tooling CLI, Docker containers


### Discussion items

Please provide questions you want answered about a give topic in the chat. Any question about KERI-ACDC-IPEX-CESR-OOBI. Feel free.

Are there any terms you'd like to have defined?

Reverse engineer a concepts - document. Can we still use / refer to the KIDs (comments) at DIF? Where has this content gone in WebofTrust / IETF?

CESR: https://hackmd.io/GbQO3p6QTge-8eQMGuMaeQ#First-questions

### 2022-11-03
Henk van Cann (host)\
Phil Feairheller (host)\
Mark Scott\
Kent Bull\
Joseph Hunsaker\

Recording : https://drive.google.com/file/d/1P6V_RJNL_RFY5pL8tudqTe9iTsREos1c/view?usp=share_link

### Topic
[Mental Model](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/Mental-model.md) The tables and info graphics.

#### Duplicity reconciliation must be 'detection'
Phil argues: duplicity is two key event in the KEL with same sequence number: key compromise. It can have consequences for ACDCs. The controller decides what to do (most prob key rotation), there's no automatism in place.\
The non-repudiation is the key feature that is in danger with duplicity.

#### The hard problem of reaching the public with what problem KERI solves
Phil: What problem did Linux solve? How many people know what Linux is? There will be loads of unintended consequences too, if you dare to compare KERI's impact to Linux's impact.\
Joseph: The Authentic web experience, hwo do we get that into a state of "not unconsiously"?
KERI in the end is about better **reputation**, with al lot of adjectives to add before it (non-repudiable, verifiable-to-the-root-of-trust, etc). We can build a better world future with it.
The anchoring in use-cases will happen and then we can start evangelizing.

Henk: should we drop the target groups that are more general than "Digital Identity Experts"? Should we get rid of the [Andy - diagram](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/Mental-model.md#how-can-we-break-through-blissful-ignorance) and his feeling of un-easiness with the things that happen to him on the web and that he can't pin-point yet?\
Phil: No, I'ld not do this. We need to reach out to them too.

### Analogies to be used to explain KERI
#### The Car analogy with KERIs unique problem solving capacity
- Parts, and parts manufacturers
- Automatic breaking system
- Steering wheel analogy: you are in control, but get supported by crafty technology.

#### Voting
Kent wants to look into voting as a killer app for KERI. 

#### Fake News
Phil shared the idea of a site that is an early member / part of the Authentic web where you can attest to news (target group: politicians)

Joseph elaborates in Slack on this:
> For @Phil Feairheller
’s use case about authenticating video… that got me thinking, and I just want to express my thoughts here if you don’t mind.  Usually the videos that go viral are controversial … like “I cannot believe they said that”… And you are never going to get a politician or rioter anyone someone to “sign” your video.  But this got me thinking… how can one of those videos be authenticated in general? It would take a fundamental shift in how the world works (which I am still able to believe can happen) -- It must stem from lower level (or common) attestations that people are willing to make. For example… Politician A was in location X giving a speech. They attest to time and location for that event. (maybe they should verifiably attest to their location all the time as a public servant?). The video that was taken was taken by person B also verifiably attested to be at location X. The camera C may need to have some “verifiable video” mechanism internally? Maybe another verifiable record of the purchase of camera C by person B…  So much needs to be in place, in order for someone to write a “reputation algorithm” And the algorithms could use this or any number of other types of attestations (key event logs?)\
3:23
So much needs to be in place for some of these higher level scenarios.. but even just one of these components could be valuable\
3:25
Like if we had a “time and place” signature app that attests to where your phone has been (notice I said your phone, not necessarily YOU) … but then that combined with biometric unlocks of the phone can certainly verifiably place YOU at place and time\
3:25
Just that can be something used in a court of law … “Where were you on the night of… ” type of legal questions. (edited) \
3:25
“Authentic Location” app\
3:26
I would love it if politicians had to have this :joy:\
3:26
or if they CHOSE to have it\
3:27
in order to say “I am an authentic politician and I share my authentic location” ( I suppose that could be dangerous LIVE… but it could be shared publicly from the past weeks or months)\
3:28
I know Google already tracks us. I have seen the data of where I have been\

Henk: I too believe that you could have an authentic web closing in on anyone trying to repudiate something they’ve said or done.\
10:26
Like the “alternative facts” around the inauguration of Trump. Just as an example. There was at least ‘duplicity’ in play.

### GLEIF
LEI is a universal organisational ID. vLEI is ultimately there to to sell more LEIs.

### Actions
 - [x]  Change picture with new bird logo and Dup. detection + add Non-repudiation as unique feature of singing and seals in KERI - Henk
 - [ ]  Use little britain "I don't want no" and check response - Henk


### 2022-10-20
Henk van Cann (host)\
Ruth Choueka\
Mark Scott\
Randy Warshaw\
Kent Bull\
Joseph Hunsaker\
Steven Milstein

Recording : https://drive.google.com/file/d/1NAJlSiIgYwYeiusbN-xYv7ePuAL_zBoW/view?usp=sharing

### Topics
1. [Status reporting](https://hackmd.io/yYpd2uhRTpCadsGVw3Rl-A?both) No table for CESROX yet. Were waiting fro Phil to contribute an improved structure of the tables.  
2. [Mental Model](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/Mental-model.md) Authentic Web


#### Mental model
The whole meeting has been devoted to Mental Model of the *Authentic web*. Below thoughts that have been shared and actionpoint distiled from this.

**Objective**\
The objective of the agenda point was to create more understandable language to explain the mental model as [described by Phil](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/Mental-model.md#mental-model-of-verifiable-data-structures-all-the-way-down) before.

#### Renarks made in a random order
We need a visual representation of the Mental Model - Steven\
Phil's All The Way Down description is a pseudo code definition of the model

The forest of interconnectied trees - Joseph\
We need labels to analogies we create - Joseph

What's the infratstructure I need for KERI? This is very hard to explain to the average interested person. - Randy
People start comparing to what you can't compare. Sam Smith: KERI is the [internet identifier Platypus](https://github.com/WebOfTrust/keri/blob/main/docs/Q-and-A.md#keri-the-internet-identifier-platypus) 

What are the key selling points of KERI - Kent

So you could attach your Authentic Web Tree in the forest of trees to bitcoin transaction and selectively disclose it. Adding anchored reputation to single transactions (e.g. BTC transaction hash in a TEL and sealed in a KEL). - Joseph & Henk

"the autonomous control of authentic data and relationships" Timothy Ruff [Medium article](	https://rufftimo.medium.com/web3-web5-ssi-3870c298c7b4)

Randy: KERI solves the problem of *trusted communication* where we get *good info as the basis of decisions*
Randy: KERI fully decentralized verifiability

Misinformation, fake news, cancel culture
Answers to question like Where did you here that?, Do you know what it is, where it came from and whether it's true or not.

The phone calls and text messages example: "oh yeah?, how do you know it's authentic?"

KERI solves:
- [Zero trust](https://github.com/trustoverip/acdc/wiki/zero-trust)
- [Signed at rest](https://github.com/trustoverip/acdc/wiki/authentic-web#related)
- [Keystate at rest](https://github.com/trustoverip/acdc/wiki/authentic-web#related)

Henk: When I asked people do you need what KERI solves, it's always "I don't have this problem". Steven: they're not there yet. 
Too early to be specific about a mental model - Kent
Henk: But which wording can we use to bridge the gap and raising awareness?

Joseph: it always seems to come down to personal assessment. Whereas I can or cannot trust certain *curations* of info by centralized parties like Twitter. Henk: there are certain features in the KERI suite that let's you inherit or borrow support from certain credentials in a cryptographic verifiable manner (e.g. chained credentials, OOBIs). I foresee curation algorithms on top of the KERI suite infrastructure to help you borrow trust from credentials (verifiably supported by third parties). Analogy: Tooling on top of public blockchains, the most basic being: blockchain explorers, e.g. https://www.blockchain.com/explorer/assets/btc

#### Agreement on these points
- We stick to the definition of Mental Model that eSSIF-lab has introduced and try not to integrate but stay in line with them.
- We acknowledge that KERI solves secure attribution (we're not going to argue cryptography), but not veracity, it only helps to assess it (Ruth).

#### Action 
 - [x]  More visual presentations - Henk will get in contact with a cartoonist
 - [ ] Line up with Timothy Ruff's [medium article](https://rufftimo.medium.com/web3-web5-ssi-3870c298c7b4) - Henk
 - [ ] Henk will add insights of today's meeting to[What problem does KERI solve](https://hackmd.io/2_rftT-USdys8onc8Echdw?both)?


### 2022-10-06
Henk van Cann (host)\
Philip Feairheller (host)\
Mark Scott\
Randy Warshaw\
Kent Bull\
Steven Milstein

Recording : https://drive.google.com/file/d/1MPeX8aN6D7HoWHTKDleq4QqFnyl7ozYk/view?usp=sharing

Meeting minutes

Henk reports efforts put into educational resources the last fortnight:

- **Machine Readable Glossary (MRG)** - together with eSSIF-lab. Here is an  [example](http://127.0.0.1:4000/WOT-terms/mydoc_mrg.html) how a MRG glossary can be imported into "our" documentation site in the making. Data based on YAML, Liquid-based reporting, Jekyll static site on Github project page.
- Import, filtering (levels of understanding, tags, categories), automatic site generation. [Example](http://127.0.0.1:4000/WOT-terms/mydoc_about_ruby_gems_etc.html). How can we **bring back the human scale** into the KERI-complexity equation. Next step: pimp up copies of the various whitepapers.

There was a lively discussion which you can revisit in the recording. Some interesting points highlighted (feel free to amend!):

- Which Christopher Allen paper is being referred to?
    - He wrote the 10 principles of SSI in the past:
	http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html
- The 5 Whys
	- “the autonomous control of authentic data and relationships." Timothy Ruff
	https://rufftimo.medium.com/web3-web5-ssi-3870c298c7b4\
    Added to the Which problems are solved by KERI

- Usecases seem the final most important step: what problem -> (reserved documented) design principles -> use cases (real-world examples). We chose a step by step approach, today *what problem does .... solve?*

- Not all people need to be offered solutions. The helicopter view on problem solving that can achieved with the KERI/ACDC suite (only), could choose wording that resonates with all human beings, as well as the experts. However the problems auxiliary systems solve could have a more technical nature. They serve the greater good, and you could ask yourself 'what **derived** problem does ... solve?'

- That does not absolve us from thinking about the main problem that KERI solves; indeed, we might even create a derived hierarchy with sub-problems descending from the big picture.

- [Issue](https://github.com/WebOfTrust/WOT-terms/issues/17) closed; [Draft](https://hackmd.io/2_rftT-USdys8onc8Echdw) Meaningful problem-solving opened. Feel free to amend and/or comment.

- One last topic that has only been touched sideways: we are very lucky to have Sam on board, because the hard work has already been done relentlessly over the past years: 
    - anchoring every design choice in scientific literature and/or 
    - laid out concepts in over-night written whitepapers and 
    - numerous responses in polemics with fellow experts in issues, social media, at IIWs, etc.
    - we're negotiation with Google to add a new language pair *SAM - EN* in Google Translate; the 'detection' mode is a vital feature
     
  One of my favorite quotes of Sam: "You may dislike KERI but don't tell me KERI can't do it" And next he'll tell you exactly how it can.
  So we only need to **reverse document the creation**, for KERI+ACDC's concept have already been anchored in history.\
  Does this sound biased? :)

### 2022-09-22
Henk van Cann (host)\
Philip Feairheller (host)\
Mark Scott\
Randy Warshaw\
Harold Carr\
Ruth Choueka

Recording : https://drive.google.com/file/d/1L2xVBV7xwirKn7q2RSwFFLnRN3LAjB_v/view?usp=sharing

Meeting minutes:
#### Progress
- [X] [Roadmap, Status and Resources](https://hackmd.io/yYpd2uhRTpCadsGVw3Rl-A?both)
- [X] gen-* shellscripts to generate context-adaptive glossary links: [gen-fm](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/gen-fm.sh), [gen-yml](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/gen-yml.sh), and [gen-match](https://github.com/WebOfTrust/WOT-terms/blob/gh-pages/gen-match.sh). Status? see previous bullet point :).
	- Gen-fm -> generate frontmatter, which are instruction for a static site generator ![Terms-WOT-manage.txt](https://hackmd.io/_uploads/BkvTOCtbi.png)
#### Question & Answers

Ruth Choueka : Are there different types of rotations?  For instance is it different if you rotate because your private key is compromised, or you rotate because you want to add another signing key?

Mark Scott : Another rotation type, delegation?

Henk van Cann : Reverse engineer a concepts - document. Can we still use / refer to the KIDs (comments) at DIF? Where has this content gone in 

Harold Carr : What does KIDS mean? Answer: KERI improvement documents or implementation docs. [link](https://github.com/decentralized-identity/keri/tree/master/kids)

Ruth Choueka : Are all of the ACDC field names fully documented? Answer: yes. See the [IETF ACDC draft](https://trustoverip.github.io/tswg-acdc-specification/draft-ssmith-acdc.html#section-2.1).

Questions about writing CESR adapters: https://hackmd.io/GbQO3p6QTge-8eQMGuMaeQ#First-questions  Philip Feairheller : https://github.com/WebOfTrust/ietf-cesr look at the master table and connect with Sam Smith to grant / reserve letters. We're up to 'M' now.

### 2022-09-08
Mark Scott\
Henk van Cann (host)\
Philip Feairheller (host)\
Ruth Choueka\
Kent Bull\
Steven Milstein

Recording : https://drive.google.com/file/d/1KqW82Syaelnw_AJuAwL31-FzPqn6UvA9/view?usp=sharing

Meeting minutes:

#### Additions to issues and draft
- [Roadmap draft](https://hackmd.io/yYpd2uhRTpCadsGVw3Rl-A?view)
- [What problem does ... solve?](https://github.com/WebOfTrust/WOT-terms/issues/17)
- We discussed and improved the ToC of [the envisaged roadmap](https://github.com/WebOfTrust/WOT-terms/issues/16)


#### Recovery vs. rotation
Ruth: what's the difference between recovery and rotation in KERI? Rotation is recovery, why do we use 'recovery' as a term?
Henk: In the KERI/ACDC team we have to formulate our criteria whether a certain term covers something of our interest.
Phil: In KERI recovery of an identifier is performed using rotation.

#### Base and IP of glossary terms
Steven: why do we disperse terms over various repos?\
Henk: 
- it's historically grown that we store our terms at [toip](https://github.com/trustoverip/acdc/wiki), using their software machinery (Github actions).
- we reuse terms defined by other SSI umbrella organisations (e.g. [Toip general glossary](https://github.com/trustoverip/toip/wiki)) **only if** we happen to attach the same meaning to it **or** when it's useful to put our definition and criteria in a different perspective.
- There's only one place where the glossary resides; the master glossary ([currently here](https://github.com/trustoverip/acdc/wiki))
- The resulting website is at WebofTrust and uses a harvested copy (or "slave") of the glossary and modfies the data in a semi-automatic way. Reason: to be able to present with a more sophisticated user interface: context sensitive, filtering, side menus, search, comments options etc ([here](https://weboftrust.github.io/WOT-terms/)); *status*: development - test site.  

#### Appeal
An appeal has been made to assign the task in the issues to yourself and contribute with effort (apart from much appreciated words) to the solution of the issues (and to the creation of their intended results).

---

### 2022-08-25
Ruth Choueka\
Kent Bull\
Steven Milstein\
Joseph Hunsaker\
Mark Scott\
Henk van Cann (host)

Recording : https://drive.google.com/file/d/1JNjCJQJ3V26GXYPdhYoZ40B2hfkOKjCs/view?usp=sharing

 - [ ] Actionlist
`Henk` suggests to work together (joint effort). He will therefore list actions that are still pending as a result of the former two meetings and this one. He'll use the Github issue functionality where we can assign ourselves to - or accept tasks and also track progress and completion. See the current list of [issues](https://github.com/WebOfTrust/WOT-terms/issues) and feel free to accept a task and / or create one of your own.

- Agenda of this particular meeting:
1. 20 minutes - Roadmap documentation: Delta between WPs - Techn. Design and Code at various repos / branches
2. 20 minutes - Supported documents GLEIF use case
3. 10 minutes - Q&A

 - Minutes

1. Roadmap
It's important to realize this is about the KERI / ACDC roadmap and not our own roadmap in the Concepts-Terms-Edu group. It's too early to have an Edu roadmap and "eat our own dogfood". 
Discussion
 `Ruth`: What is and what is not implemented : Watcher service (Not), revocation (is, but not working)\
 `Joseph`: where are we, so I could recommend certain parts or applications of KERI\
 `Steven`: what's GLEIF and what's KERI?\
 `Kent`: focus on Key management in the roadmap (+ storage / rotation )\
 `Kent`: 3 stages: familiar with KERI -> easy CLI to demo -> to do a basic reference implementation\
 `Steven`: 3 usecases for what hasn't been created yet: what would you do with KERI if you had it?

2. GLEIF use case
`Steven/Kent`: GLEIF is a good start, but centralized, a "phone home" solution.\
`Steven`: What is the actual problem we're trying solving? We need to find the problem - solution - fit. Can we demonstrate that we understand what their problem is?\
`Joseph`: In the past before we had Single Sign On. And people got it when we got SSO "single sign on is great". Now we have KERI, which is basically SSO on steroids. "This is my end-all-be-all SSO for life" -> that would be selling a problem.\
Steven response to Joseph: 'It's not the problem GLEIF is solving. \
`Kent`: GLEIF solves the problem of verifiable legal attestations in control of the company, but sharable in a zero trust architecture and verifiable in a decentralized manner.\
`Steven` : is a centralized trust registry which is anti-decentralized. `Ruth` : GLEIF is the root of trust, indeed.\
`Henk`: Could we describe the actual situation in the GLEIF implementation and how far away it is from the real unique value proposition KERI / ACDC has? And how it could change in the future? \
`Kent`: We need a much more spohisticated educational resources than just the recordings of a technical demo.\
`Ruth`: It's great that GLEIF is working worldwide and that vLEI is an actually used identifier.

The demo footage of Steven and Phil that's been discussed was [this one](https://www.youtube.com/watch?v=GqjsRuu0V5A&t=1020s). The essence of the discussion was that it takes a big effort to make these kinds of vids accessable. Is it really the way to go.
Maybe for our current target group (ID-, SSI- and Autonomic ID experts) but definitely not for the average citizen.

3. Q&A 
A few practical issues where raised where to find what. It is possible to comment in Hackmd.io to the text. The hosts will edit the minutes accordingly and cherry pick from the saved chat, upload the recording.
It's also possible to raise a github issue [here](https://github.com/WebOfTrust/WOT-terms/issues)

4. Chat - recommended links and podcast

15:18:00 From Steven Milstein to Everyone:
	https://www.yubico.com/solutions/cryptocurrency/ ?
15:28:09 From Kent Bull to Everyone:
	https://podcasts.google.com/feed/aHR0cHM6Ly90aGUtcnVicmljLmNhc3Rvcy5jb20vZmVlZA/episode/aHR0cHM6Ly9ydWJyaWMuY2MvP3Bvc3RfdHlwZT1wb2RjYXN0JnA9MTg5Ng?ep=14
	And
https://podcasts.google.com/feed/aHR0cHM6Ly90aGUtcnVicmljLmNhc3Rvcy5jb20vZmVlZA/episode/aHR0cHM6Ly9ydWJyaWMuY2MvP3Bvc3RfdHlwZT1wb2RjYXN0JnA9MTkwMA?ep=14


### 2022-08-11

Present:

Kent Bull\
Steven Milstein\
Petteri from Ubisecure\
Henk van Cann (host)

Comments about minutes July 28? No input, so July 28 fixed.

- Recording: {no recording made}

- Agenda\
 20 minutes - [concepts](https://github.com/WebOfTrust/WOT-terms/blob/main/concepts.md) & terms\
 20 minutes - use cases (meters-narrative: objective measuring, license plates-narrative: counterfeit obvious?:  , ...)\
 10 minutes - Q&A
 
 - Minutes\
 `Steven` stresses his focus on the actual Markdown.\
 `Kent` would like to document the difference between the white paper and the current state of KERI code\
 `Kent` offers to take CESROX down the path of what the [concepts](https://github.com/WebOfTrust/WOT-terms/blob/main/concepts.md) file intends.\
 `Kent/Steven` would want to list the major "decentralised identity" projects (inside and outside ToIP / IETF context); resulting in a mindmap for usecases of our own KERI/ACDC proposition to offer context.\
 15:18:40 From Steven Milstein to Everyone:\
	Example Mind map in markdown https://hackmd.io/@stevenmilstein/SkCKy9fC9\
 An example use case generator for KERI/ACDC would be 'Centralised won't work!", so then we HAVE TO move over from old way of thinking and creating systems to the new ones available.\
  `Petteri` would like to see 'Abstractions' in our documentation, "I don't need to understand everything of GLEIF and vLEI, just the essence"

#### Concepts.md file walk-through
15:16:40 From Henk van Cann to Everyone:
	https://hackmd.io/TYKEsJ5OQy-4w78NUGRSMA?view ; here is where you could amend the content, I'm able to push the result to the WebofTrust WOT-terms repo. It's also possible to offer a PR (pull request).

15:31:48 From Henk van Cann to Everyone:
	@steven : https://github.com/trustoverip/acdc/wiki this your KISS link to the actual MarkDown?\
    
Mind you, there is no global search available there. But here [in the resulting static site](https://trustoverip.github.io/acdc/glossary ): it is possible! you could search & find “{TBW prio ..}“, To Be Written it means, and then use the links to go to the right wiki-item to amend to my definition.

#### Discussion and change of agenda for the next meeting(s)
There was pretty soon consensus about the argumentation that someone brought up that: 
1. we must document the GLEIF use case very well. All eye will be on that and Google needs to resolve at our documentation.
2. We should attract other programmers to the project by showing a convincing roadmap and the delta between (the state of) Whitepapers, the state of technical design papers and the actual code in various branches and it's also important to have direct links to them.

The current agenda items are suitable for offline processsing:
- concepts and terms: the tools are there to amend, feel free to do it
- more usecases, less focus. We have our minds and hands full on GLEIF.



### 2022-07-28

#### ToDo
- [x] organize host rights - request sent Aug 11 by Henk to Philip/Sam

Present:\
Philip Feairheller (co-host)\
Henk van Cann (host)\
Kent Bull\
Steven Milstein\
Joseph Hunsaker\
Mijo Kaliger\
Michal Pietrus

- Recording {no recording made}

- Agenda
  1. Why are we doing the Terms & Edu call?
  2. What are the main sources of info / concepts / terms currently for KERI/ACDC
  3. How to sync glossaries with the outside world, a proposal
  4. How to set up KERI/ACDC education at various levels of understanding.

- Minutes\
  Skipped round of intros, but asked for personal motivation to join the Zoom meeting:\
  `Steven` misses the foundational work to structure the KERI and ACDC terminology: "It's a blur full of acronyms, I would like to change this"\
  `Kent` sees SSI in general and KERI/ACDC in particulier being able to change the current power dynamics (e.g. CBDC, central bank digital currencies) for the good: control over your identifiers. "I'd like to do this via strictly open source development on one hand and the development of courses as a commercial activity on the other"\
  `Joseph`'s preference is top down approach, but minimalistic. He sees Use cases as the most important stepping stone to a sophisticated Terminology base, "and from this custom made towards target groups."\
  `Philip` stresses the importance of getting the word out. "We've been working heads done to get the code ready, now it's time to document it properly"\
  `Mijo` is in de provenance team and working with on Kimi the mobile interface. That's his perspective, he recognizes the jungle of wording Steven pointed out and want to learn what KERI and ACDC is all about.\
  `Henk` presented his personal motivation during the presentation.

#### Presentation

[Google slides](https://docs.google.com/presentation/d/1Aqj8GkiLLo2bvwJK_9wU3h_1vGtYVU5zKe4KjFQ-Ga4/edit#slide=id.g13fad489b5e_0_175) meant to introduce three of four agenda items (1,3 and 4).

Main take away: What `Henk` would like participants to do is 
> think about what's important to you
> as far as adoption of KERI/ACDC is concerned
Our target groups apart from the KERI/ACDC development teams, are:
1. The participants of this Zoom meeting series
2. People working for Foundations like ToIP, eSSIF and DIF
3. SSI Experts
4. Experts working in the security and Identity field

`Henk` suggest to explicitely not target the outside world (family, friends, etc) to try and convince, because that'll be another level of complexity to achieve?

#### Get the content out

`Steven` strongly advices from his experience (with analysis paralysis) to:
1. Keep the .md harvesting manual, simple and get the content out.
`Joseph` adds:
2. Describe credible use cases and 
3. derive target groups from use cases, not the other way around.

As dicussion evolved during the meeting, we've changed this to *usecase-based* way (the voting example and the 'I control my data' narrative; by `Kent`) of thinking and to keep it *very practical and simple*.\
We need appealing narratives.

One idea was to OCR one or both presentations of `Philip` that have been recorded. 
- [Phil's demo](https://onedrive.live.com/?authkey=%21AMjKofNCEMxYC10&cid=67133A6AC26E649A&id=67133A6AC26E649A%21118&parId=root&o=OneUp)
- {the other one is??}

`Steven` express his wish for easy to use Developer-tooling CLI, and Docker containers to able to demonstrate KERI/ACDC to others. `Philip` says the status of the currently outdated Docker container of *Keripy* and *Keep*: 'to be updated soon'.

The meeting concluded with the structure of the future agenda (by `Philip`): time-slot based, and addressing the topics list under the [new agenda](./2022-08-11) for the next meeting.

