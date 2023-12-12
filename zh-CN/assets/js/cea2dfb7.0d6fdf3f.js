"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7312],{3905:(t,e,r)=>{r.d(e,{Zo:()=>f,kt:()=>g});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),c=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},f=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,s=t.originalType,l=t.parentName,f=i(t,["components","mdxType","originalType","parentName"]),p=c(r),d=n,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return r?a.createElement(g,o(o({ref:e},f),{},{components:r})):a.createElement(g,o({ref:e},f))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41894:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:1,title:"Zero Gravity",displayed_sidebar:"generalSidebar"},o="Transfer Assets Across Chains Using Zero Gravity",i={unversionedId:"general/tutorials/transferring-funds/across-chains/zero-gravity",id:"general/tutorials/transferring-funds/across-chains/zero-gravity",title:"Zero Gravity",description:"One of the easiest ways to transfer assets between Core Space and other chains is through the use of Zero Gravity.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/tutorials/transferring-funds/across-chains/zero-gravity.md",sourceDirName:"general/tutorials/transferring-funds/across-chains",slug:"/general/tutorials/transferring-funds/across-chains/zero-gravity",permalink:"/zh-CN/docs/general/tutorials/transferring-funds/across-chains/zero-gravity",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Zero Gravity",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Across Chains",permalink:"/zh-CN/docs/category/across-chains"},next:{title:"Meson",permalink:"/zh-CN/docs/general/tutorials/transferring-funds/across-chains/transfer-stablecoins-across-chains-using-meson"}},l={},c=[{value:"Prerequisites for this tutorial",id:"prerequisites-for-this-tutorial",level:2},{value:"Transferring CFX from Conflux Core to BNB Smart Chain",id:"transferring-cfx-from-conflux-core-to-bnb-smart-chain",level:2}],f={toc:c},p="wrapper";function u(t){let{components:e,...s}=t;return(0,n.kt)(p,(0,a.Z)({},f,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transfer-assets-across-chains-using-zero-gravity"},"Transfer Assets Across Chains Using Zero Gravity"),(0,n.kt)("p",null,"One of the easiest ways to transfer assets between Core Space and other chains is through the use of ",(0,n.kt)("a",{parentName:"p",href:"https://portal.zglabs.org/"},"Zero Gravity"),".\nTo get started, we recommend setting up two wallets: Fluent for Core Space and MetaMask for the other chain of your choice.\nIn this tutorial, we will explain the steps to transfer CFX from Conflux Core Space to BNB Smart Chain."),(0,n.kt)("h2",{id:"prerequisites-for-this-tutorial"},"Prerequisites for this tutorial"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Fluent Wallet funded with at least 200 CFX."),(0,n.kt)("li",{parentName:"ul"},"A MetaMask Wallet.")),(0,n.kt)("h2",{id:"transferring-cfx-from-conflux-core-to-bnb-smart-chain"},"Transferring CFX from Conflux Core to BNB Smart Chain"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the Zero Gravity web application: https\\://portal.zglabs.org/")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Connect Wallet to connect your Fluent to Zero Gravity."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zg1",src:r(46128).Z,width:"6000",height:"3375"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Click Connect Wallet to connect your MetaMask to Zero Gravity.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zg2",src:r(29883).Z,width:"6000",height:"3375"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"In the FROM drop-down list, select the network and token that you'll transfer your assets from.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zg3",src:r(1197).Z,width:"6000",height:"3375"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zg4",src:r(98350).Z,width:"6000",height:"3375"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"In the TO drop-down list, select the network that you'll transfer your assets to.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zg5",src:r(48103).Z,width:"6000",height:"3375"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Enter the amount that you want to transfer.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zg7",src:r(6214).Z,width:"6000",height:"3375"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Click Start Transaction.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zg8",src:r(79476).Z,width:"6000",height:"3375"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Confirm the transaction details.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zg9",src:r(49979).Z,width:"6000",height:"3375"})),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"After the cross-chain transfer is completed you can use the corresponding blockchain explorers to verify the assets transfer. The assets will be displayed in your destination wallet.")))}u.isMDXComponent=!0},46128:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/zerogravity1-ff3f70649c4c8bfe4088b9cd3512dabf.png"},29883:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/zerogravity2-85a72a3496db791bbc5fc3dddcd80199.png"},1197:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/zerogravity3-c2ef96b30feacc45f268ff1299029fa1.png"},98350:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/zerogravity4-9526d685caa265751127be55630610b7.png"},48103:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/zerogravity5-2178d2f46c44f1b631ffdd52895618f6.png"},6214:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/zerogravity7-59f08f68134aab688c8b8977ed3b6960.png"},79476:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/zerogravity8-3f408dc0ffd87bde98ab257104c246c7.png"},49979:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/zerogravity9-a3d3e083dad30a1d08c7db082a7179a2.png"}}]);