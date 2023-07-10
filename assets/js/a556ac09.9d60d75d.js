"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[9902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,d=p["".concat(l,".").concat(g)]||p[g]||f[g]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},76462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},a=void 0,s={unversionedId:"glossary/signify",id:"glossary/signify",title:"signify",description:"Definition",source:"@site/docs/glossary/signify.md",sourceDirName:"glossary",slug:"/glossary/signify",permalink:"/WOT-terms/docs/glossary/signify",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"signify-keria-request-authentication-protocol",permalink:"/WOT-terms/docs/glossary/signify-keria-request-authentication-protocol"},next:{title:"signing-authority",permalink:"/WOT-terms/docs/glossary/signing-authority"}},l={},u=[{value:"Definition",id:"definition",level:2},{value:"Background",id:"background",level:2},{value:"Finger pointing",id:"finger-pointing",level:2}],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Signify is a web client ",(0,i.kt)("a",{parentName:"p",href:"key-event"},"(key) event")," signing - and key pair creation app that minimizes the use of ",(0,i.kt)("a",{parentName:"p",href:"KERI"},"KERI")," on the client."),(0,i.kt)("p",null,"The main reason is that we want to minimize what needs to be put in the client or the cloud. Most proofs should be cryptographically verifiable and it should not be able to be repudiated (successful ",(0,i.kt)("a",{parentName:"p",href:"#Finger-pointing"},"pointing fingers")," should be prevented), and this happens when the signatures come straight from the controller."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"On a small set of activities that need to be protected in infrastructure for key management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"key pair creation"),(0,i.kt)("li",{parentName:"ul"},"key pair storage"),(0,i.kt)("li",{parentName:"ul"},"event generating "),(0,i.kt)("li",{parentName:"ul"},"event signing"),(0,i.kt)("li",{parentName:"ul"},"event verification")),(0,i.kt)("h2",{id:"finger-pointing"},"Finger pointing"),(0,i.kt)("p",null,"What are the liabilities do a cloud host has to worry about?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cloud host does not want to see keys (non-repudiation).  So we want to move event signing out of the cloud agent."),(0,i.kt)("li",{parentName:"ul"},"Key state (next ",(0,i.kt)("a",{parentName:"li",href:"digest"},"digest")," and current signing key) come from the client"),(0,i.kt)("li",{parentName:"ul"},"Cloud host ensures that the code supply chain is secure and never sees the private keys")))}f.isMDXComponent=!0}}]);