"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[37992],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>c});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},g=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,c=p["".concat(s,".").concat(h)]||p[h]||y[h]||i;return r?a.createElement(c,n(n({ref:t},g),{},{components:r})):a.createElement(c,n({ref:t},g))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,n[1]=l;for(var u=2;u<i;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},86636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(58168),o=(r(96540),r(15680));const i={status:"pre-final"},n="Load weboftrust glossary in weboftrust github page",l={unversionedId:"how-we-did/load-glossary-weboftrust-in-docusaurus",id:"how-we-did/load-glossary-weboftrust-in-docusaurus",title:"Load weboftrust glossary in weboftrust github page",description:"Why how-we-did this: We'ld like to have a straightforward editting tool that authenticates users that Create Update and/or Delete the content of the terms repo. With the use of git it will register all changes and done by whom, which facilitates curation and adds reputation.",source:"@site/docs/how-we-did/load-glossary-weboftrust-in-docusaurus.md",sourceDirName:"how-we-did",slug:"/how-we-did/load-glossary-weboftrust-in-docusaurus",permalink:"/WOT-terms/docs/how-we-did/load-glossary-weboftrust-in-docusaurus",draft:!1,tags:[],version:"current",frontMatter:{status:"pre-final"},sidebar:"tutorialSidebar",previous:{title:"Kerific Discord bot",permalink:"/WOT-terms/docs/how-we-did/kerific-discord-bot"},next:{title:"Github Actions",permalink:"/WOT-terms/docs/how-we-did/organization-of-Github-Action-scripts"}},s={},u=[{value:"Input",id:"input",level:2},{value:"Strongly recommended",id:"strongly-recommended",level:2},{value:"In Sync with original ToIP ACDC glossary?",id:"in-sync-with-original-toip-acdc-glossary",level:2},{value:"Why would we sync with ToIP glossary",id:"why-would-we-sync-with-toip-glossary",level:3},{value:"Why sync with ToIP glossary and not something else.",id:"why-sync-with-toip-glossary-and-not-something-else",level:3},{value:"Software environment",id:"software-environment",level:2},{value:"Steps",id:"steps",level:2},{value:"Legacy Steps",id:"legacy-steps",level:2},{value:"Legacy Pull the WebofTrust wiki by hand",id:"legacy-pull-the-weboftrust-wiki-by-hand",level:3},{value:"Legacy: Initial clone of the WOT-terms.wiki repo to local",id:"legacy-initial-clone-of-the-wot-termswiki-repo-to-local",level:4},{value:"Legacy: Refresh the WOT-terms.wiki repo to local",id:"legacy-refresh-the-wot-termswiki-repo-to-local",level:4},{value:"Legacy: Copy the WebofTrust glossary resources into the Docusaurus file structure",id:"legacy-copy-the-weboftrust-glossary-resources-into-the-docusaurus-file-structure",level:3},{value:"Github Action Script deploy.yml to put WOT-terms sheet into JSON structure",id:"github-action-script-deployyml-to-put-wot-terms-sheet-into-json-structure",level:3},{value:"Constraint on WOT-terms sheet",id:"constraint-on-wot-terms-sheet",level:3},{value:"Level",id:"level",level:4},{value:"Github Repo",id:"github-repo",level:4},{value:"Static pages generator",id:"static-pages-generator",level:4},{value:"Result",id:"result",level:2}],g={toc:u},p="wrapper";function y(e){let{components:t,...i}=e;return(0,o.yg)(p,(0,a.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"load-weboftrust-glossary-in-weboftrust-github-page"},"Load weboftrust glossary in weboftrust github page"),(0,o.yg)("p",null,"Why ",(0,o.yg)("em",{parentName:"p"},"how-we-did")," this: We'ld like to have a straightforward editting tool that authenticates users that Create Update and/or Delete the content of the terms repo. With the use of ",(0,o.yg)("inlineCode",{parentName:"p"},"git")," it will register all changes and done by whom, which facilitates curation and adds reputation.",(0,o.yg)("br",{parentName:"p"}),"\n","While the input is a rather basic operation in the wiki, we'ld like to enjoy all the extra's that a front-end technical dodumentation site can offer:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"levels of understanding"),(0,o.yg)("li",{parentName:"ul"},"categories"),(0,o.yg)("li",{parentName:"ul"},"pop-up"),(0,o.yg)("li",{parentName:"ul"},"formatting"),(0,o.yg)("li",{parentName:"ul"},"fold-puts"),(0,o.yg)("li",{parentName:"ul"},"etc\nAnd also add meta data to the terms definition using some kind of database table, which allows:"),(0,o.yg)("li",{parentName:"ul"},"filtering"),(0,o.yg)("li",{parentName:"ul"},"selection"),(0,o.yg)("li",{parentName:"ul"},"sorting"),(0,o.yg)("li",{parentName:"ul"},"checks")),(0,o.yg)("p",null,"For who: anyone who likes to see the results of wiki glossary input in the front-end ",(0,o.yg)("inlineCode",{parentName:"p"},"github.io")," website KERISSE. "),(0,o.yg)("p",null,"Purpose: With regard to the glossary our weboftrust github page of the WOT-terms repo serves two clearly distinctive purposes:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"conform to the ToIP and eSSIF-lab standards of generating glossaries "),(0,o.yg)("li",{parentName:"ol"},"create our own version of the glossary where we add meta data, levels, catogeries and change the layout and UI to fit the Docusaurus KERISSE image.")),(0,o.yg)("p",null,"Result: Github actions script (2024: ",(0,o.yg)("inlineCode",{parentName:"p"},"content-fetch-and-deploy-update-glossary.yml"),") transforms the source in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/weboftrust/WOT-terms/wiki"},"wiki")," to a Docusaurus webpage structure called 'Glossary' in the left menu, thereby extracting meta data from a Google sheet into a JSON file and furthermore integrating this data on the front-end of the website."),(0,o.yg)("h2",{id:"input"},"Input"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The WebofTrust glossary (all the .md files pulled from ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/weboftrust/WOT-terms/wiki"},"repo wiki"),")"),(0,o.yg)("li",{parentName:"ol"},"Terms WOT manage ",(0,o.yg)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/18IUa-1NSJ_8Tz_2D-VSuSQa_yf3ES1s_hovitm3Clvc/edit#gid=209150977"},"Google Sheet")),(0,o.yg)("li",{parentName:"ol"},"Version control (git & Github)")),(0,o.yg)("div",{class:"alert alert-info",role:"alert"},(0,o.yg)("h2",{id:"strongly-recommended"},"Strongly recommended"),(0,o.yg)("p",null,"Be sure to leave the following files in tact when overwriting glossary items in Docusaurus dir ",(0,o.yg)("inlineCode",{parentName:"p"},"nn-glossary")," (",(0,o.yg)("inlineCode",{parentName:"p"},"nn"),'  will be any sequence number before "glossary to instruct the order") from the source WOT-terms wiki:'),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"_","category","_",".json")," "),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"intro.md"))),(0,o.yg)("p",null,"These are vital for Docusaurus to offer links from various parts of the documentation straight to the glossary.")),(0,o.yg)("h2",{id:"in-sync-with-original-toip-acdc-glossary"},"In Sync with original ToIP ACDC glossary?"),(0,o.yg)("p",null,"Yes, the WebofTrust wiki glossary is the new home of our glossary. But we can sync with ToIP ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/trustoverip/acdc/wiki"},"acdc wiki")," anytime. For example by offering PRs to the ToIP version or vice versa."),(0,o.yg)("p",null,"We use local repo's or PR to sync Weboftrust ",(0,o.yg)("inlineCode",{parentName:"p"},"WOT-terms.wiki")," and TrustoverIP ",(0,o.yg)("inlineCode",{parentName:"p"},"acdc.wiki"),". Note that the wiki pages of a github repo are manifest in a seperate repo. "),(0,o.yg)("h3",{id:"why-would-we-sync-with-toip-glossary"},"Why would we sync with ToIP glossary"),(0,o.yg)("p",null,"The main reason is interoperability. We want to join in the effort to create cross-referencing concepts, terms and glossary resources at WebofTrust."),(0,o.yg)("h3",{id:"why-sync-with-toip-glossary-and-not-something-else"},"Why sync with ToIP glossary and not something else."),(0,o.yg)("p",null,"From our WebofTrust view ToIP is our umbrella organisation that has similar objectives and principles. ToIP has good working relations with the European umbrella organisation eSSIF-lab too, who in 2023 can be considered as the global front runners of getting the terminology sorted out for Self-Sovereign Identity."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"}," How our own repo ",(0,o.yg)("a",{parentName:"strong",href:"https://github.com/WebOfTrust"},"WebofTrust")," came to be "),"\nIn 2022 we reasoned:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"we would to have to build similar Github Actions tooling like ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.trustoverip.org/display/HOME/Terms+Wikis"},"ToIP")," already has."),(0,o.yg)("li",{parentName:"ul"},"we can't join the synchronization effort already taking place with ",(0,o.yg)("a",{parentName:"li",href:"https://essif-lab.github.io/framework"},"eSSIF-lab")),(0,o.yg)("li",{parentName:"ul"},"we would have to maintain these auxiliary which keeps us off other important work")),(0,o.yg)("p",null,"In 2023 we experienced:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"lagtime by ToIP and Linux Foundation internal github governance rules"),(0,o.yg)("li",{parentName:"ul"},'the knowledge and skills needed to "roll our own" had been acquired')),(0,o.yg)("p",null,"Mid 2023 we decided:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"to start using ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/WebOfTrust/WOT-terms/wiki"},"Weboftrust wiki")),(0,o.yg)("li",{parentName:"ul"},"to sync at will with ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/trustoverip/acdc/wiki"},"ToIP wiki"))),(0,o.yg)("h2",{id:"software-environment"},"Software environment"),(0,o.yg)("p",null,"For Github pages Docusaurus runs locally and remotely (Github Actions). ",(0,o.yg)("strong",{parentName:"p"},"Be sure to"),":"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Have the same version of Docusaurus installed locally as Github currently uses remotely"),(0,o.yg)("li",{parentName:"ol"},"study ",(0,o.yg)("a",{parentName:"li",href:"https://docusaurus.io/docs/advanced/routing#file-paths-and-url-paths"},"this guide")," to avoid frustration with paths.")),(0,o.yg)("h2",{id:"steps"},"Steps"),(0,o.yg)("p",null,"Because the glossary is maintained in Github wiki using Github userinterface here: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/WebOfTrust/WOT-terms/wiki"},"Weboftrust wiki"),", the most recent version is a remote repo. We have to pull this wiki-repo (be sure to have the ",(0,o.yg)("strong",{parentName:"p"},"wiki"),' repo not the "normal" WOT-terms repo!) to local to be able to create our own glossary and Docusaurus static site from this. The static site is then run as a github project page (branch ',(0,o.yg)("em",{parentName:"p"},"gh-pages"),")."),(0,o.yg)("p",null,"This is performed by this section in the Github Actions script ","[Deploy to GitHub Pages]","(WOT-terms/.github/workflows\n/deploy.yml):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"      ##############################\n      # Clones the wiki\n      ##############################\n\n      - name: Checkout wiki\n        run: |\n          git clone https://github.com/WebOfTrust/WOT-terms.wiki.git wiki\n\n      # Copies the wiki contents to the /docs/04_glossary/ directory\n      - name: Copy Wiki To Docusaurus Glossary directory\n        run: |\n          mkdir -p docs/04_glossary  # Create the directory if it doesn't exist\n          \n          # Files that are already in the /docs/04_glossary/ directory will not be overwritten\n          rsync -a wiki/ docs/04_glossary/  # Synchronize wiki contents to /docs/04_glossary/\n          \n          # The /wiki directory is not needed anymore\n          rm -rf wiki/  # Remove the /wiki directory\n      ##############################\n")),(0,o.yg)("h2",{id:"legacy-steps"},"Legacy Steps"),(0,o.yg)("h3",{id:"legacy-pull-the-weboftrust-wiki-by-hand"},"Legacy Pull the WebofTrust wiki by hand"),(0,o.yg)("p",null,"Because the glossary is maintained in Github wiki using Github userinterface here: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/WebOfTrust/WOT-terms/wiki"},"Weboftrust wiki"),", the most recent version is a remote repo. We used to pull this wiki-repo (and had to be sure to have the ",(0,o.yg)("strong",{parentName:"p"},"wiki"),' repo not the "normal" WOT-terms repo!) to local to be able to create our own glossary and Docusaurus static site from this. All done by hand. '),(0,o.yg)("h4",{id:"legacy-initial-clone-of-the-wot-termswiki-repo-to-local"},"Legacy: Initial clone of the WOT-terms.wiki repo to local"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git clone https://github.com/weboftrust/WOT-terms.wiki.git\ncd WOT-terms.wiki\ngit remote get-url origin\nls\n")),(0,o.yg)("img",{src:r(48657).A,alt:"wiki-repo-ls-result"}),(0,o.yg)("h4",{id:"legacy-refresh-the-wot-termswiki-repo-to-local"},"Legacy: Refresh the WOT-terms.wiki repo to local"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"git pull origin master\n")),(0,o.yg)("h3",{id:"legacy-copy-the-weboftrust-glossary-resources-into-the-docusaurus-file-structure"},"Legacy: Copy the WebofTrust glossary resources into the Docusaurus file structure"),(0,o.yg)("p",null,"To able to generate a tailor made explanation site we use two inputs (see full list of inputs ",(0,o.yg)("a",{parentName:"p",href:"#input"},"here"),"):"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The WebofTrust glossary locally (all the .md files pulled from ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/WebOfTrust/WOT-terms/wiki"},"Weboftrust wiki")),(0,o.yg)("li",{parentName:"ol"},"Terms WOT manage (xls or csv) table, currently maintained in Google Sheets (mid 2023)")),(0,o.yg)("p",null,"Step into the Docusaurus dir structure to ",(0,o.yg)("inlineCode",{parentName:"p"},"WOT-terms/docs/glossary"),"\nand execute the command ",(0,o.yg)("inlineCode",{parentName:"p"},"cp ../../../WOT-terms.wiki/*  .")," to finish what we'd like to achieve: Copy the glossary resources into the Docusaurus file structure."),(0,o.yg)("h3",{id:"github-action-script-deployyml-to-put-wot-terms-sheet-into-json-structure"},"Github Action Script deploy.yml to put WOT-terms sheet into JSON structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"##############################\n      # Google sheet: WOT-terms, tab: Terms-WOT-manage\n      ##############################\n\n      # Fetches data from WOT-terms (Google sheet) and generates an overview file that takes all the terms and their definitions and puts them into a single file. \n      - name: Import Google Sheet \u201cWOT-terms\u201d, tab \u201cTerms-WOT-manage\u201d data into markdown file\n        run: node fetchExternalContent/fetchTermsWOTmanage/fetchTermsWOTmanage.js\n      ##############################\n")),(0,o.yg)("p",null,"Inner working:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"it reads the input file (2.) per line."),(0,o.yg)("li",{parentName:"ul"},"each row describes a term and its resource file"),(0,o.yg)("li",{parentName:"ul"},"we create a proper file name"),(0,o.yg)("li",{parentName:"ul"},"we try to match the terms in the ToIP glossary resources and bind them")),(0,o.yg)("p",null,"Docusaurus takes care of"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"writing ",(0,o.yg)("inlineCode",{parentName:"li"},".md")," files with Front matter code and includes")),(0,o.yg)("h3",{id:"constraint-on-wot-terms-sheet"},"Constraint on WOT-terms sheet"),(0,o.yg)("p",null,"Columns"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"key"),(0,o.yg)("li",{parentName:"ul"},"(WWWWW-key) multiple foreign keys"),(0,o.yg)("li",{parentName:"ul"},"term"),(0,o.yg)("li",{parentName:"ul"},"text"),(0,o.yg)("li",{parentName:"ul"},"level"),(0,o.yg)("li",{parentName:"ul"},"link"),(0,o.yg)("li",{parentName:"ul"},"(Cat-CCCC) multiple categories")),(0,o.yg)("p",null,"Explanation"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"key")," needs to be unique and once established it should not change."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Term"),"s are words used in the resource, "),(0,o.yg)("li",{parentName:"ul"},"you can provide a ",(0,o.yg)("strong",{parentName:"li"},"link")," to more explanation, mainly to the ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/weboftrust/WOT-terms/wiki/"},"WOT glossary"),". "),(0,o.yg)("li",{parentName:"ul"},"Then the ",(0,o.yg)("strong",{parentName:"li"},"level")," of understanding at which this term might need explanation, and finally "),(0,o.yg)("li",{parentName:"ul"},"a ",(0,o.yg)("em",{parentName:"li"},"brief explanation")," in field ",(0,o.yg)("strong",{parentName:"li"},"text")," of the term in the first column.")),(0,o.yg)("h4",{id:"level"},"Level"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"As of mid 2023 temporarily disabled")),(0,o.yg)("p",null,"Since KERI Suite education starts off at the level of SSI-expert, a ",(0,o.yg)("em",{parentName:"p"},"beginner")," is not a layman, but somebody with a good common understanding of IT and digital identity."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"1=general digital identity expert"),(0,o.yg)("li",{parentName:"ul"},"2=advanced self-sovereign identity expert"),(0,o.yg)("li",{parentName:"ul"},"3=autonomic identifier & KERI experts")),(0,o.yg)("h4",{id:"github-repo"},"Github Repo"),(0,o.yg)("p",null,"Push the locally updated files to the remote WebofTrust repo:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'git status\ngit add .\ngit commit -m "update the WebofTrust glossary"\ngit push <remote> gh-pages\n')),(0,o.yg)("h4",{id:"static-pages-generator"},"Static pages generator"),(0,o.yg)("p",null,"The push will activate Github Actions and the resources will be input to a static site generator."),(0,o.yg)("h2",{id:"result"},"Result"),(0,o.yg)("p",null,"This is the Github pages result from the step by step above:"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"../category/glossary"},"glossary")))}y.isMDXComponent=!0},48657:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/wiki-repo-ls-68875431943122e705931e7a87d6d708.png"}}]);