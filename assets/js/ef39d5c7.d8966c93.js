"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[66057],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>h});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return t?n.createElement(h,o(o({ref:r},p),{},{components:t})):n.createElement(h,o({ref:r},p))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},36024:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const i={},o="parside",s={unversionedId:"glossary/parside",id:"glossary/parside",title:"parside",description:"Definition",source:"@site/docs/04_glossary/parside.md",sourceDirName:"04_glossary",slug:"/glossary/parside",permalink:"/WOT-terms/docs/glossary/parside",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pad",permalink:"/WOT-terms/docs/glossary/pad"},next:{title:"partial disclosure",permalink:"/WOT-terms/docs/glossary/partial-disclosure"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Background",id:"background",level:2},{value:"Design ideas Feb 2023",id:"design-ideas-feb-2023",level:2},{value:"Related",id:"related",level:2},{value:"Working",id:"working",level:2}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(d,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"parside"},"parside"),(0,a.yg)("h2",{id:"definition"},"Definition"),(0,a.yg)("p",null,"is a bunch of generators. Responsible for pulling out a stream of bits from a CESR stream and parse it.\nSam Smith suggested for Parside to not iterate stuff, only parse chunks delimited by the ",(0,a.yg)("a",{parentName:"p",href:"count-code"},"count code"),". (Source Cesride: meeting Feb 2 2023)"),(0,a.yg)("h2",{id:"background"},"Background"),(0,a.yg)("p",null,"CESR primitives are self-framing (which is relatively new). That means that you can construct your parser modually. We can dispatch the parsing of the stream to an entity. The ",(0,a.yg)("a",{parentName:"p",href:"strip-parameter"},"strip parameter")," tells us what part will be parsed be which code."),(0,a.yg)("h2",{id:"design-ideas-feb-2023"},"Design ideas Feb 2023"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Parside should be concerned with parsing group codes, ",(0,a.yg)("a",{parentName:"li",href:"cesride"},"cesride")," concerned with parsing primitives."),(0,a.yg)("li",{parentName:"ol"},"Parside will contain a ",(0,a.yg)("a",{parentName:"li",href:"count-code"},"count code")," at the beginning of the stream, each cesr primitive is self framing, JSON is not; hence the ",(0,a.yg)("a",{parentName:"li",href:"version-string"},"Version string"),"."),(0,a.yg)("li",{parentName:"ol"},'Parside could "load" the tables it supports for dynamically loaded code tables'),(0,a.yg)("li",{parentName:"ol"},"Parside could look at how/if we can return an interator/generator")),(0,a.yg)("p",null,"Source Cesride: meeting Feb 2 2023 notes"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Cesride parses the CESR primitives")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Parside parses the ",(0,a.yg)("a",{parentName:"p",href:"group-code"},"group codes"))),(0,a.yg)("p",null,"| TBW |"),(0,a.yg)("h2",{id:"related"},"Related"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"version-code"},"Version code")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"version-string"},"Version string")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"strip-parameter"},"Strip parameter")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"cesride"},"Cesride")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"sniffer"},"Sniffer"))),(0,a.yg)("p",null,"Source Cesride: meeting Feb 2 2023"),(0,a.yg)("h2",{id:"working"},"Working"),(0,a.yg)("p",null,"Parside should start with a default version for CESR. Anytime it gets a version count code it changes the version and also elevates to the top level (the version count code must appear at the top level). The version count code determines which CESR table to load when parsing the stream. The ",(0,a.yg)("a",{parentName:"p",href:"sniffer"},"sniffer")," detects if CESR binary, CESR Text, JSON, CBOR, MGPK. If any of the last three then the parser regexes to find the version string inside the JSON, CBOR, and MGPK and from the version string extracts the number of characters/bytes that is the length of the JSON, CBOR, or MGPK. The parser then resumes sniffing. When the sniff is CESR then when at the top level looks for the CESR version count code or any other count codes. The interpretation of the count codes is dependent on the version count code that is why the Parser has to start with a default version count code because the stream may not begin with a version code or may have resumed after a cold restart. When a count code is parsed then the parser may descend into parsing whats inside group for a group count code which may recursively nest down a ways.",(0,a.yg)("br",{parentName:"p"}),"\n","Source Slack Cesride thread: Feb 2 2023"))}u.isMDXComponent=!0}}]);