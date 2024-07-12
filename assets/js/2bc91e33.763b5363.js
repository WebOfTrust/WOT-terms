"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[16367],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=p(r),u=o,h=l["".concat(m,".").concat(u)]||l[u]||y[u]||i;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=u;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a[l]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(58168),o=(r(96540),r(15680));const i={},c="cryptographic commitment scheme",a={unversionedId:"glossary/cryptographic-commitment-scheme",id:"glossary/cryptographic-commitment-scheme",title:"cryptographic commitment scheme",description:"Definition",source:"@site/docs/04_glossary/cryptographic-commitment-scheme.md",sourceDirName:"04_glossary",slug:"/glossary/cryptographic-commitment-scheme",permalink:"/WOT-terms/docs/glossary/cryptographic-commitment-scheme",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cryptocurrency",permalink:"/WOT-terms/docs/glossary/cryptocurrency"},next:{title:"cryptographic primitive",permalink:"/WOT-terms/docs/glossary/cryptographic-primitive"}},m={},p=[{value:"Definition",id:"definition",level:2}],s={toc:p},l="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(l,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cryptographic-commitment-scheme"},"cryptographic commitment scheme"),(0,o.yg)("h2",{id:"definition"},"Definition"),(0,o.yg)("p",null,"is a cryptographic primitive that allows one to commit to a chosen value (or chosen statement) while keeping it hidden to others, with the ability to reveal the committed value later. "),(0,o.yg)("p",null,"Commitment schemes are designed so that a party cannot change the value or statement after they have committed to it: that is, commitment schemes are ",(0,o.yg)("em",{parentName:"p"},"binding"),".",(0,o.yg)("br",{parentName:"p"}),"\n","More on ",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Commitment_scheme"},"wikipedia")))}y.isMDXComponent=!0}}]);