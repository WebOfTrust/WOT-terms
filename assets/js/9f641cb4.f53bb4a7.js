"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[57262],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const i={},o="salty nonce blinding factor",l={unversionedId:"glossary/salty-nonce-blinding-factor",id:"glossary/salty-nonce-blinding-factor",title:"salty nonce blinding factor",description:"Definition",source:"@site/docs/04_glossary/salty-nonce-blinding-factor.md",sourceDirName:"04_glossary",slug:"/glossary/salty-nonce-blinding-factor",permalink:"/WOT-terms/docs/glossary/salty-nonce-blinding-factor",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"salter",permalink:"/WOT-terms/docs/glossary/salter"},next:{title:"schema namespace registry",permalink:"/WOT-terms/docs/glossary/schema-namespace-registry"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"How",id:"how",level:2},{value:"Example",id:"example",level:2},{value:"More info",id:"more-info",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"salty-nonce-blinding-factor"},"salty nonce blinding factor"),(0,a.yg)("h2",{id:"definition"},"Definition"),(0,a.yg)("p",null,"For ease of sharing a secret and hiding information with this secret of Blindable State TELs we use a Salty Nonce Blinding Factor. You\u2019d like to hide the state of certain credentials to some verifiers in the future, while keeping the state verifiable for others."),(0,a.yg)("h2",{id:"how"},"How"),(0,a.yg)("p",null,"A way to share the key to blind/unblind the state of a TEL is"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6238"},"HTOP, HMAC-Based One-Time Password")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6238"},"Time-Based One-Time Password")),(0,a.yg)("li",{parentName:"ul"},"HDKM, Hierarchical Deterministic Key Management, based on a shared master key you could split off subkeys in a predictable manner.")),(0,a.yg)("p",null,"The blinding is performed by the issuer, the issuee could request the blinding."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"I don\u2019t want my employment states shared in the future with former possible employers."),(0,a.yg)("h2",{id:"more-info"},"More info"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/trustoverip/tswg-acdc-specification/blob/main/draft-ssmith-acdc.md#blindable-state-tel"},"Blindable State TEL")))}d.isMDXComponent=!0}}]);