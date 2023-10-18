"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5297],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,d=p["".concat(c,".").concat(h)]||p[h]||f[h]||o;return t?a.createElement(d,s(s({ref:n},u),{},{components:t})):a.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(7462),r=(t(7294),t(4137));const o={sidebar_position:1,title:"What is Conflux?"},s=void 0,i={unversionedId:"general/conflux-basics/what-is-conflux",id:"general/conflux-basics/what-is-conflux",title:"What is Conflux?",description:"Conflux stands out as a public blockchain with superior performance, a unique consensus mechanism, and an innovative dual-space design. These features enable Conflux to deliver a fast, secure, and decentralized platform that is well-suited for various applications, including decentralized finance and gaming.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/conflux-basics/what-is-conflux.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/what-is-conflux",permalink:"/es/docs/general/conflux-basics/what-is-conflux",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"What is Conflux?"},sidebar:"tutorialSidebar",previous:{title:"Conflux Basics",permalink:"/es/docs/general/conflux-basics/"},next:{title:"Consensus",permalink:"/es/docs/general/conflux-basics/consensus-mechanisms/"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Conflux stands out as a public blockchain with superior performance, a unique consensus mechanism, and an innovative dual-space design. These features enable Conflux to deliver a fast, secure, and decentralized platform that is well-suited for various applications, including decentralized finance and gaming."),(0,r.kt)("p",null,"Conflux employs a hybrid ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/general/conflux-basics/consensus-mechanisms/"},"consensus mechanism"),", combining Proof of Work (PoW) and Proof of Stake (PoS), ensuring high security, throughput, and decentralization. Conflux's PoW consensus leverages the ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/tree-graph"},"Tree-Graph ledger structure")," and ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-work/ghast"},"GHAST algorithm"),", delivering a high transaction throughput of up to 3,000 TPS and confirmation latency within 1 minute, while maintaining the same level of decentralization as Bitcoin and Ethereum. Conflux's PoS consensus offers the network finality, mitigating ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos"},"the risk of 51% attack"),". Consequently, Conflux has the capability to efficiently handle a large number of transactions, making it a robust and reliable platform for a wide range of applications."),(0,r.kt)("p",null,"The Conflux network comprises two distinct ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/general/conflux-basics/spaces"},"spaces"),": Conflux ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/"},"Core Space")," and Conflux ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/espace/learn/overview"},"eSpace"),". The Core Space is the primary blockchain network that utilizes the hybrid consensus mechanism and features a ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/internal-contracts/sponsor-whitelist-control"},"contract sponsorship mechanism"),". The sponsorship mechanism allows project users to interact with contracts without a balance, lowering the threshold for blockchain usage and expanding the user base. The eSpace is fully compatible with the Ethereum Virtual Machine (EVM), enabling developers to easily migrate their existing Ethereum smart contracts to Conflux eSpace and benefit from its high performance and scalability. Conflux Core Space and eSpace can communicate with each other via the ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/internal-contracts/crossSpaceCall"},"CrossSpaceCall")," contract, which facilitates atomic transfer of funds and atomic execution of smart contract calls between the two spaces."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We warmly welcome you to the Conflux documentation site, your starting point for learning about Conflux's basic concepts and development. Happy exploring!")))}f.isMDXComponent=!0}}]);