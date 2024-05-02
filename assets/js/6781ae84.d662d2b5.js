"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[33477],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||y[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},i="byzantine agreement",s={unversionedId:"glossary/byzantine-agreement",id:"glossary/byzantine-agreement",title:"byzantine agreement",description:"Definition",source:"@site/docs/04_glossary/byzantine-agreement.md",sourceDirName:"04_glossary",slug:"/glossary/byzantine-agreement",permalink:"/WOT-terms/docs/glossary/byzantine-agreement",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"brv",permalink:"/WOT-terms/docs/glossary/brv"},next:{title:"byzantine fault tolerance",permalink:"/WOT-terms/docs/glossary/byzantine-fault-tolerance"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Stellar",id:"stellar",level:2}],u={toc:c},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"byzantine-agreement"},"byzantine agreement"),(0,a.yg)("h2",{id:"definition"},"Definition"),(0,a.yg)("p",null,"(non PoW) Byzantine Agreement is ",(0,a.yg)("a",{parentName:"p",href:"byzantine-fault-tolerance"},"Byzantine fault tolerance")," of distributed computing systems that enable them to come to consensus despite arbitrary behavior from a fraction of the nodes in the network. BA consensus makes no assumptions about the behavior of nodes in the system. Practical Byzantine Fault Tolerance (pBFT) is the prototypical model for Byzantine agreement, and it can reach consensus fast and efficiently while concurrently decoupling consensus from resources (i.e., financial stake in PoS or electricity in PoW)."),(0,a.yg)("h2",{id:"stellar"},"Stellar"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://blockonomi.com/stellar-consensus-protocol/"},"More")," about the Stellar consensus protocol"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"What if PBFT and Stellar had a baby?\nthat was missing liveness and total ordering \nbut had safety and was completely decentralized, portable, and permission-less? \nIt would be named KERI."\nSamMSmith\n')))}y.isMDXComponent=!0}}]);