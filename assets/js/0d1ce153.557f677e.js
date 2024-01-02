"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[53786],{3905:(e,t,i)=>{i.d(t,{Zo:()=>f,kt:()=>m});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},f=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=c(i),u=r,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||n;return i?a.createElement(m,o(o({ref:t},f),{},{components:i})):a.createElement(m,o({ref:t},f))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<n;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},50883:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=i(87462),r=(i(67294),i(3905));const n={},o="validator",s={unversionedId:"glossary/validator",id:"glossary/validator",title:"validator",description:"Definition",source:"@site/docs/04_glossary/validator.md",sourceDirName:"04_glossary",slug:"/glossary/validator",permalink:"/WOT-terms/docs/glossary/validator",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"validate",permalink:"/WOT-terms/docs/glossary/validate"},next:{title:"vcp",permalink:"/WOT-terms/docs/glossary/vcp"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Example",id:"example",level:2},{value:"To be Sam-Smith precise in KERI",id:"to-be-sam-smith-precise-in-keri",level:2},{value:"ESSIF-lab definitions",id:"essif-lab-definitions",level:2}],f={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validator"},"validator"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"determines current authoritative key set for identifier from at least one key event (receipt) log. Types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Validator of any verifiable data structure"),(0,r.kt)("li",{parentName:"ul"},"Validator as a node in distributed consensus or participant")),(0,r.kt)("p",null,"Validator and ",(0,r.kt)("a",{parentName:"p",href:"verifier"},"verifier")," are close to synonyms for our purposes."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"validator")," in ",(0,r.kt)("a",{parentName:"p",href:"key-event-receipt-infrastructure"},"KERI")," and ",(0,r.kt)("a",{parentName:"p",href:"authentic-chained-data-container"},"ACDC"),' is anybody that wants to establish control-authority over an identifier, created by the controller of the identifier. Validators verify the log, they apply duplicity detection or they leverage somebody else\'s duplicity detection or apply any other logic so they can say "Yes, these are events I can trust".'),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"During validation of virtual credentials for example, a ",(0,r.kt)("a",{parentName:"p",href:"verifier"},"verifier")," checks to see if a verifiable ",(0,r.kt)("a",{parentName:"p",href:"credential"},"credential")," (",(0,r.kt)("a",{parentName:"p",href:"VC"},"VC"),") has been signed by the controller of this VC using the applicable verification method."),(0,r.kt)("h2",{id:"to-be-sam-smith-precise-in-keri"},"To be Sam-Smith precise in KERI"),(0,r.kt)("p",null,"Any entity or agent that evaluates whether or not a given signed statement as attributed to an identifier is valid at the time of its issuance. A valid statement MUST be verifiable, that is, has a verifiable signature from the current controlling keypair(s) at the time of its issuance. Therefore a Validator must first act as a Verifier in order to establish the root authoritative set of keys. Once verified, the Validator may apply other criteria or constraints to the statement in order to determine its validity for a given use case. When that statement is part of a verifiable data structure then the cryptographic verification includes verifying digests and any other structural commitments or constraints. To elaborate, with respect to an AID, for example, a Validator first evaluates one or more KELs in order to determine if it can rely on (trust) the key state (control authority) provided by any given KEL. A necessary but insufficient condition for a valid KEL is it is verifiable i.e. is internally inconsistent with respect to compliance with the KERI protocol. An invalid KEL from the perspective of a Validator may be either unverifiable or may be verifiable but duplicitous with respect to some other verifiable version of that KEL. Detected duplicity by a given validator means that the validator has seen more than one verifiable version of a KEL for a given AID. Reconciliable duplicity means that one and only one version of a KEL as seen by a Validator is accepted as the authoritative version for that validator. Irreconcilable duplicity means that none of the versions of a KEL as seen by a validator are accepted as the authoritative one for that validator. The conditions for reconcilable duplicity are described later.",(0,r.kt)("br",{parentName:"p"}),"\n","Source ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")),(0,r.kt)("h2",{id:"essif-lab-definitions"},"ESSIF-lab definitions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://essif-lab.github.io/framework/docs/essifLab-glossary#verify"},"verify"))," definition is in sync with the definition in the KERI/ACDC vocabulary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://essif-lab.github.io/framework/docs/essifLab-glossary#verifier"},"verifier"))," definition is in sync with the definition in the KERI/ACDC vocabulary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://essif-lab.github.io/framework/docs/essifLab-glossary#validate"},"validate"))," definition is very general, however in the KERI/ACDC vocabulary 'validate' currently has diverse meanings including this one"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"https://essif-lab.github.io/framework/docs/essifLab-glossary#validator"},"validator"))," definition is a generalisation of the much more specific definition in the KERI/ACDC vocabulary")))}p.isMDXComponent=!0}}]);