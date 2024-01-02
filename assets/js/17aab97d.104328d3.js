"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[1988],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),h=n,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},32001:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={},a="threshold of accountable duplicity",l={unversionedId:"glossary/threshold-of-accountable-duplicity",id:"glossary/threshold-of-accountable-duplicity",title:"threshold of accountable duplicity",description:"Definition",source:"@site/docs/04_glossary/threshold-of-accountable-duplicity.md",sourceDirName:"04_glossary",slug:"/glossary/threshold-of-accountable-duplicity",permalink:"/WOT-terms/docs/glossary/threshold-of-accountable-duplicity",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tholder",permalink:"/WOT-terms/docs/glossary/tholder"},next:{title:"threshold signature scheme",permalink:"/WOT-terms/docs/glossary/threshold-signature-scheme"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"TOAD in KEL",id:"toad-in-kel",level:2},{value:"Purpose of TOAD",id:"purpose-of-toad",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"threshold-of-accountable-duplicity"},"threshold of accountable duplicity"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"The threshold of accountable duplicity (TOAD) is a threshold number ",(0,n.kt)("inlineCode",{parentName:"p"},"M")," that the controller declares to accept accountability for an event when any subset ",(0,n.kt)("inlineCode",{parentName:"p"},"M")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"N")," witnesses confirm that event. The threshold ",(0,n.kt)("inlineCode",{parentName:"p"},"M")," indicates the minimum number of confirming witnesses the controller deems sufficient given some number ",(0,n.kt)("inlineCode",{parentName:"p"},"F")," of potentially faulty witnesses, given that ",(0,n.kt)("inlineCode",{parentName:"p"},"M >= N - F"),". This enables a controller to provide itself with any degree of protection it deems necessary given this accountability."),(0,n.kt)("p",null,"Note that what may be sufficient for a controller may not be sufficient for a validator. To clarify, let ",(0,n.kt)("inlineCode",{parentName:"p"},"MC")," denote the threshold size of a sufficient agreement from the perspective of a controller and let ",(0,n.kt)("inlineCode",{parentName:"p"},"MV")," denote the threshold size of a sufficient agreement from the perspective of a validator. Typically, ",(0,n.kt)("inlineCode",{parentName:"p"},"MV >= MC"),". "),(0,n.kt)("h2",{id:"toad-in-kel"},"TOAD in KEL"),(0,n.kt)("p",null,"A controller declares TOAD in its ",(0,n.kt)("a",{parentName:"p",href:"key-event-log"},"key event log (KEL)")," during the ",(0,n.kt)("a",{parentName:"p",href:"inception-event"},"key inception event")," and may edit it during subsequent ",(0,n.kt)("a",{parentName:"p",href:"rotation-event"},"key rotation events"),"."),(0,n.kt)("h2",{id:"purpose-of-toad"},"Purpose of TOAD"),(0,n.kt)("p",null,"A highly available system needs some degree of fault tolerance. The purpose of the threshold of accountability is to enable fault tolerance of the key event service with respect to faulty behavior by either the controller or witnesses. The principal controller fault exhibits duplicitous behavior in the use of its keys. In this case, the threshold serves as the threshold of accountable duplicity. The threshold lets a validator know when it may hold the controller accountable for duplicitous behavior. Without a threshold, a validator may choose to hold a controller accountable upon any evidence of duplicity which may make the service fragile in the presence of any degree of such faulty behavior. The primary way that a validator may hold a controller accountable is to stop trusting any use of the associated identifier. This destroys any value in the identifier and does not allow the controller to recover from an exploit. Recall that the one purpose of rotation keys (pre-rotated unexposed) is to enable recovery from compromised interaction signing keys. A compromised interaction signing key may exhibit duplicitous behavior on the part of the controller. A threshold of accountable duplicity enables a validator to distinguish between potentially recoverable duplicity such as the use of a compromised signing key and non-recoverable duplicity such as the use of a compromised rotation key. This better protects both the validator and the controller and improves the robustness of the service."))}d.isMDXComponent=!0}}]);