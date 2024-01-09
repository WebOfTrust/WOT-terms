# Roadmap to know what's coming
People want to know when new code will be ready, who will produce it, where it'll be and how they can rely on the code they currently use and / or create extensions or modification too. For this reason, we'ld like to know the work planning and how certain tasks are (inter)dependent of other tasks. 
- Will changes break the current code?
- Have black swans appeared?
- When will the work start and when is it ready?
- How do reported bugs relate to developments?
- Who is responsible for what in the process?
Before we can answer these questions we need to step back for a moment and consider the *relationship-procedure-content* funnel.

## Relationship
People in the community are related to each other in a different way than between members of hierarchical organizations.

The KERI development team anno 2024 isn't a big fully funded development team. Currently we have to rely on a handful of very dedicated developers and we do so happily and gratefully.

You might reason 
> "well, no, pay them better and they can be held accountable and responsible for meeting deadlines and meet the definition of done."
> "Isn't there proper project management on top of this?!".

**How wrong you can be** illustrates the following:
- The KERI Suite is fully open source and publicly available under the Apache2 license. Open source development is not comparable to a commercial time-based implementation project. It's done when it's done, scratch your own itch, are just two examples of adagia related to open source development. Study these and more of them; for example in the classic book 'The Cathedral and The Bazaar';
- Architects and developers of KERI are totally independent, they might not need your money, they need your input, you effort, your Pull Requests;
- Developers already have a strong sense of duty in the job they have accepted, which is in nearly all cases directly or indirectly related to KERI core development;
- Moreover, most core team developers additionally spend a significant amount of their free time on freely available KERI growth;
- Self-imposed pressure to make KERI work the way it can work is strong enough to keep us going, we don't need pushy critics on the side line to be motivated.

The roles in the team may vary; one individual could have multiple roles and an individual can have different roles in different repositories:
1. Founder
2. Architects
3. Core developers
4. Developers and developers to be
5. Documenters
6. Facilitators
7. Launching partners
8. Governance officers
9. Implementers
10. Laymen

## Procedure
With respect to the above-mentioned relationship in the team, and if you're in the role 4 to role 10,  please mind your words and tone of voice in your claims, request and comments, because the roles 1. to 3. could be very sensitive for paternalizing ignorance. Educate yourself first, then contribute substantially. Maybe surprisingly, we value your hands-on work far more than your money. Because in the end nobody can boss the team around, but people will respect the extend and quality of your contribution.

### Goals for 2024 and onwards
1. Focus on repository *Keripy*, then
2. Feature complete to the KERI core spec and the Trust-over-IP Technological Stack, then
3. Versioning of the KERI core functionality.

### For whom
- A. developers building on stable version and development versions of the KERI suite
- B. implementers that rely on stable versions of KERI.

### Why mind the roadmap
- A. breaking changes, conflicting concepts and merge conflicts of development branches
- B. breaking changes to older stable versions that are already in use.

### Issues
To modify and update our Roadmap, we regularly go through Keripy Issues (start of 2024: 130+):
1. what is obsolete / done already (status)
2. what needs to preceed other issues (triggers)
3. Most important / most urgent:
  - Important and Urgent
  - Important not Urgent
  - Not Important but Urgent
  - Not Important and Not Urgent
4. When to start and lead time (week number, days or weeks)
5. Where does the development take place (branch)
6. What type of test is needed?

#### Defaults
1. open
2. none in, none out
3. Not Important and Not Urgent
4. Not planned, Not specified
5. development
6. regular unit test

### Flow
The procedure we have in place, step by step.

#### Role 1. to 4. 
- Go through the issues and change dependencies, effects, timing, importance and urgency according to the current situation
- Create, Update, Split Issues and Merge Issues at will, but never Delete an Issue.
- Launch Github Action "Roadmap" that has consistency checks
- Resolve inconsistencies, e.g. A trigger-issue for many other issues can be "Not Important"?!

#### Role 5. to 10.
- Look at the Roadmap document, drill down the issues
- Make comments to Issues
- Create new issues only if there's no existing issue covering the topic / bug

The nature of this project, its status of implementation and the resources to move forward combined, means we can't expect the impossible from people. These are a few examples of which we are simply not able to comply with:
- backward compatibility of the codebase
- feature-synced codebases in several programming languages
- fully operational CDCI strategies

Having writing this, we are still able to make some predictions about what'll be happening in the next year and there after. Mind you, garantueed to the front door and we're always happy to see PR requests coming in to smoothen the path to KERI Suite's maturity.

## Content
In open source development there's a balance between speed of development and backward compatibility on one hand and a reliable codebase for production purposes on the other.

Please read the sections *Relationship* and *Procedure* if you haven't done so before.

## Roadmap
Below we present timing and links to the actual issues in the [Keripy github repo](https://github.com/WebOfTrust/keripy). 

### How the roadmap is created
Plan: when we plan the activity, not the result. However, if we plan an activity that has a preceding trigger activity you could rightfully understand that we plan to have completed the prior activity (enough) to be able to move forward. We stack lead times.

### How to read the roadmap
Again, mind you, no guarantees can be given, we cannot take responsibility for commitments / expectations you derive from our roadmap.

| TBW: the actual roadmap in a Direct Acyclic Graph representation? |

### How the roadmap is updated
- A github action script will automaticly update the status of the current roadmap
- The roadmap will rely on Issue Number for a life time
