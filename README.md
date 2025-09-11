# What 
## WOT-terms 
WOT is "WebofTrust". It's the home of all KERI-related open-source code. The umbrella term is *KERI Suite*. It covers KERI core, ACDC, CESR, OOBI, and all other parts.

### What is this?
This repo manages the content and functionality of all concepts and terminology behind the KERI Suite. It offers a glossary with definitions and links to the terminology source management tools. It also feeds the dictionary tool Kerific.

## Documentation subsystems and their technologies
- **This repo handles concepts and terminology** resulting in a glossary run as a Docusaurus site (GitHub pages)
- The [KERI Suite documentation](https://github.com/WebOfTrust/keridoc/), which is also a Docusaurus site (GitHub pages)
- The [KERI Suite Search Engine](https://github.com/WebOfTrust/kerisse/), which is Typesense-based GitHub pages; custom-made Bootstrap.
- The [Kerific SSI dictionary](https://github.com/WebOfTrust/kerific): Self-Sovereign Identity dictionary *including* KERI terms (browser extension for Brave/Edge/Chrome).

## WOT-terms
Is the **data** part of this site and consists of:
- Glossary
- Concepts behind the KERI Suite

### Why
Clear criteria for term definitions around KERI are needed.

### For who
The WOT-terms repo is primarily aimed at people trying to understand the inner workings of the KERI Suite and how the suite relates to other identifier systems in the SSI field.

### Policy

See the documents in this repo titled [LICENSE.md](https://github.com/WebOfTrust/Keri/blob/main/LICENSE.md) and [CONTRIBUTING.md](https://github.com/WebOfTrust/Keri/blob/main/CONTRIBUTING.md) for licensing and contributing policy. Besides the IETF licensing terms, these include the comprehensive Apache2 license for all associated intellectual property (IP) including patents. The advantage of one comprehensive license for all contributions is that there will always be alignment between all contributors and for any type of contribution. This alignment includes an **inbound=outbound** [policy](https://opensource.guide/legal/) for all related IP. We only want contributions to KERI made here in the WebOfTrust project that are licensed as free, and [nonreciprocal](https://opensource.org/node/875) open source be it software or specification.

### Meetings

We have technical meetings twice a week on Monday and Thursdays. 

The Edu Meetings held every other Thursday (First meeting was on 2022 July 28), stopped April 2023.

The meeting agenda of the Technical Meeting may be found [here](https://hackmd.io/2C8ch1meS6ad3F3g2aEewg). The Zoom link is also at the top of that page.

## Related Meetings

### Technical

ACDC leverages KERI. The [ACDC Task Force meeting](https://wiki.trustoverip.org/display/HOME/ACDC+%28Authentic+Chained+Data+Container%29+Task+Force) is hosted at ToIP and meets on the alternate weeks at the same time as the [KERI meetings](https://github.com/WebOfTrust/keri/blob/main/agenda.md). The ACDC meetings complement the KERI meetings. Both meetings are focussed on technicalities, specifications and code developments.

### Conceptual

There also is the [Concepts and terminology](https://wiki.trustoverip.org/pages/viewpage.action?pageId=65700) of Trust over IP. It's a meeting that aligns Trust over IP (North America) and eSSIF (Europe) efforts in getting understood: concepts, terminology and glossaries and importantly being able to use and reference each others work.

## Install this project

This repo is a GitHub pages website based on Docusaurus that manages terminology through a source management tool, which currently is the [wiki of WOT-terms](https://github.com/WebOfTrust/WOT-terms/wiki).

This website is built in Docusaurus ( https://docusaurus.io ).

### Run website

What should you do to install this project:

* Run `git clone url`

* Run `npm install`

* Create `.env` based on `.env.example` and secret info

* Now you can run a local version of the **Docusaurus website**:
`$ npx docusaurus start`. The search engine also works now.

{ Kor, change link pls [How we did](https://weboftrust.github.io/WOT-terms/docs/category/how-we-did) } describes the follow-up steps.

## Origin

Mid 2024 we've split up old WOT-terms repo into:

- [kerisse](https://github.com/WebOfTrust/kerisse) : search engine (Typesense-based [github.io site](https://weboftrust.github.io/kerisse/))
- new [WOT-terms](https://github.com/WebOfTrust/WOT-terms): glossary, solely focussed on terminology, filtering, and connect to source management (Docusaurus-based [github.io site](https://weboftrust.github.io/WOT-terms/?level=2))
- [keridoc:](https://github.com/WebOfTrust/keridoc) KERI documentation site (Docusaurus-based: [github.io site](https://weboftrust.github.io/keridoc/?level=2))

Apart from this, we still have:
- [kerific](https://github.com/WebOfTrust/kerific): SSI-terminology dictionary including KERI terms (browser extension for Brave/Edge/Chrome).
