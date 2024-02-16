# Contributors' Guide

## Introduction

Welcome to kerisse's contribution guide! This project aims to develop documentation and educational resources surrounding the KERI standards, protocols, and tools developed in WebOfTrust on github. We deeply appreciate the time and effort of contributors like you!

## Legal & Licensing
This project has a split license whose details are contained [here](https://github.com/WebOfTrust/ietf-keri/blob/main/LICENSE.md)

## Prerequisites
Before you start, make sure you:

- Are somewhat familiar with the [KERI, ACDC, CESR standards and the KERI whitepapers](https://github.com/WebOfTrust/keri).  Jargon isn't always the best, but it does speed communication with maintainers whose time is often in short supply and appreciate clarity in all things.  The purpose of kerisse is really to make these digestable in small pieces to an audience that doesn't have time to pore over all those papers so any contributer should make sure that they've at least developed a passing references with the things contained in these papers.
  
## How to Start Contributing
The KERISSE (like the KERI) community welcomes [all kinds of contributions](https://opensource.guide/how-to-contribute/).

For simple contributions like fixing typos sometimes you can just submit a naked PR with a title like "I'm fixing a spelling issue in x,y,z".  If these PRs are small often times they'll just get merged without further review.  Typos or grammatical errors are human nature and probably don't require a great deal of process to fix.

A really simple way to contribute is just to use KERISSE and spread the word.  When people need educational resources, have questions about particular terms, or KERISSE has the information related to their query, linking the resource can often times be a great way to advertise that the project exists and is useful so they can help themselves in the future.  Let people know about KERISSE and create a welcoming community by actively participating and helping with what you know, and educating and contributing resources to KERISSE and talking about them is helpful to grow.

Issues and discussions are meant to be discussed and commented upon.  Even a +1 to an issue that you're also experiencing can help the core maintainers decide where to focus their energies.  Discussions can help provide clarity if things aren't exactly clear.  Feel free to contribute (but also note the homework in [PREREQUISITES](#prerequisites), its frustrating for people to explain things that are already explained elsewhere).

However, this particular file is more about contributing resources to KERISSE.  The general principal in this (and all open source really) is if you can think of a way that things might be better, instead of just suggesting it or discussing it, often times its a good idea to do some work to show what/how/when an idea might look like or contributing resources.  Educational Material >> discussion 9 times out of ten.  Balanced of course with the caveat not to go off into the ivory tower for months and do lots of work before presenting your work and finding out that the community doesn't like it.  Small examples, howtos, tutuorials, or snippets are often best.  From there we can build up to more extensive efforts.  The rest of the details of contributing resources are below.

## Contribution Guidelines

### Commit Message Guidelines
There are no hard and fast guidelines but it is helpful to:
- Descriptive, to the point messages are ideal
- Link to the issue you're trying to solve with a message of how the commit does or doesn't solve that issue.
- Be sure to note important issues for checkpoint commits like "does not build"
- Most importantly, the commit message should explain the WHY of all the code changes.  When reviewing, reviewers will be confused if code changes for things you didn't list in the commit aren't there.

### Branching Strategy
Branch from development, name your branches descriptively, something like `howto-keri-witness-instantiation` or `tutorial-keri-ssh`.  If you're fixing an issue with previously created material or changing something about kerisse that already exists, be sure to file an issue on github to discuss with maintainers your particular issue or issue you're trying to fix.  Name the branch and indicate in your PR what issue you're trying to solve.  When you have created or fixed and the work is ready for review, submit a PR to WebOfTrust/kerisse.  If you need feedback it can also be appropriate to submit a **draft** PR to this repository and ask for comments.

## Process to Submit Changes
1. Find and issue and let the maintainers on discord (in the #kerisse channnel) know you're working on it (and maybe comment on the issue to let people know you're picking it up) or what you'd like to create.
2. Create/fix
3. Submit a PR to [WebOfTrust/kerisse]
4. Let maintainers know on discord in the appropriate channel
5. Come to Thursday KERI development meeting to discuss if at all possible (sometimes its easier for maintainers to provide feedback directly rather than through async text, particularly if its a large or complex change).
6. Iterate 2-6 if your change needs some fixes/updates

## Reporting Bugs or Requesting Features
- **SEARCH FOR THE BUG OR FEATURE IN THE CURRENT ISSUES IN REPO**.  If it already exists, add a comment/script/test/+1/whatever there.  Duplicates BAD.
- If the bug/feature doesn't exist create an issue wherein you describe the bug, feature, or issue with as much detail as possible (but maybe not enough that you overload the reader with details).
- Code snippets, scripts, or test cases should be added to the issue if possible.
- Message in the appropriate discord channel to let people know about your bug/feature/issue, but remember that maintainers maintain at their own pace and discretion on issues of their choosing.  Its best not to ping them more than once a week.  As with all open source, if its an ultra critical bug/feature for you, cash bounties certainly incentivize people to pay attention and offer to help you directly.

## Code of Conduct and Respect
[From the discord channel](https://discord.com/channels/1148629222647148624/1148686277269532703/1148686279945498624)

We are committed to providing a friendly, safe and welcoming environment for all, regardless of level of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, nationality, or other similar characteristic.

Please avoid using overtly sexual aliases or other nicknames that might detract from a friendly, safe and welcoming environment for all.

Please be kind and courteous. There’s no need to be mean or rude.

Respect that people have differences of opinion and that every design or implementation choice carries a trade-off and numerous costs. There is seldom a right answer.

Please keep unstructured critique to a minimum. If you have solid ideas you want to experiment with, make a fork and see how it works.

We will exclude you from interaction if you insult, demean or harass anyone. That is not welcome behavior. We interpret the term “harassment” as including the definition in the Citizen Code of Conduct; if you have any lack of clarity about what might be included in that concept, please read their definition. In particular, we don’t tolerate behavior that excludes people in socially marginalized groups.

Private harassment is also unacceptable. No matter who you are, if you feel you have been or are being harassed or made uncomfortable by a community member, please contact one of the channel admins immediately. Whether you’re a regular contributor or a newcomer, we care about making this community a safe place for you and we’ve got your back.

Likewise any spamming, trolling, flaming, baiting or other attention-stealing behavior is not welcome.
Attribution
Adapted from the Rust Code of Conduct: [https://www.rust-lang.org/policies/code-of-conduct](https://www.rust-lang.org/policies/code-of-conduct)

## Getting Help

For questions or clarifications, reach out via:
- Discord: [https://discord.gg/edGDD632tP](https://discord.gg/edGDD632tP)
- KERI Development Meetings: [https://github.com/WebOfTrust/keri#implementors-call]
- ACDC Standards Meeting@TOIP (technically must be a member of ToIP to contribute): [https://github.com/WebOfTrust/keri#specification-call]

## Acknowledgments
Thanks to all our wonderful contributors. 

## Additional Resources
- [Related Projects](https://github.com/WebOfTrust)
