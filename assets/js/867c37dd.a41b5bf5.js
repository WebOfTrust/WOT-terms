"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[52600],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,y=l["".concat(p,".").concat(f)]||l[f]||m[f]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"glossary/post-quantum",id:"glossary/post-quantum",title:"post-quantum",description:"Definition",source:"@site/docs/04_glossary/post-quantum.md",sourceDirName:"04_glossary",slug:"/glossary/post-quantum",permalink:"/WOT-terms/docs/glossary/post-quantum",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"post-pad",permalink:"/WOT-terms/docs/glossary/post-pad"},next:{title:"pre-pad",permalink:"/WOT-terms/docs/glossary/pre-pad"}},p={},u=[{value:"Definition",id:"definition",level:2},{value:"KERI pre-rotation related",id:"keri-pre-rotation-related",level:2}],c={toc:u},l="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"In cryptography, post-quantum cryptography (PQC) (sometimes referred to as quantum-proof, quantum-safe or quantum-resistant) refers to cryptographic algorithms (usually public-key algorithms) that are thought to be secure against a cryptanalytic attack by a quantum computer.",(0,o.kt)("br",{parentName:"p"}),"\n","More on source ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Post-quantum_cryptography"},"Wikipedia")),(0,o.kt)("h2",{id:"keri-pre-rotation-related"},"KERI pre-rotation related"),(0,o.kt)("p",null,"Although individual public-private key pairs are most probably not post-quantum proof, by design the pre-rotation mechanism in KERI is post-quantum proof; which means that in the projected future presence of quantum computers KERI will still be safe. Basically, this safety is established by rotating keys before a brute force quantum attack can be effective. As quantum computers might get faster or more effective over time, the rotation intervals simply become shorter and/or increased ",(0,o.kt)("a",{parentName:"p",href:"entropy"},"entropy")," might be used for key generation."))}m.isMDXComponent=!0}}]);