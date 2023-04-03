"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),g=r,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2,title:"Installing a Wallet",keywords:["wallet"]},o=void 0,i={unversionedId:"core/learn/getting-started/installing-a-wallet",id:"core/learn/getting-started/installing-a-wallet",title:"Installing a Wallet",description:"To interact with Conflux Core Space, you'll first need to create an account. Usually accounts in Conflux Core Space are created and managed through the Fluent wallet.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/learn/getting-started/installing-a-wallet.md",sourceDirName:"core/learn/getting-started",slug:"/core/learn/getting-started/installing-a-wallet",permalink:"/zh-Hans/docs/core/learn/getting-started/installing-a-wallet",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/learn/getting-started/installing-a-wallet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Installing a Wallet",keywords:["wallet"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/zh-Hans/docs/core/learn/getting-started/"},next:{title:"Funding Your Account on Testnet",permalink:"/zh-Hans/docs/core/learn/getting-started/funding-your-account"}},c={},s=[{value:"Installing Fluent Wallet",id:"installing-fluent-wallet",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To interact with Conflux Core Space, you'll first need to create an account. Usually accounts in Conflux Core Space are created and managed through the Fluent wallet."),(0,r.kt)("h3",{id:"installing-fluent-wallet"},"Installing ",(0,r.kt)("a",{parentName:"h3",href:"https://fluentwallet.com/"},"Fluent Wallet")),(0,r.kt)("p",null,"Fluent is a browser plug-in wallet, similar to Ethereum's MetaMask wallet. It is currently supported by Chrome, Firefox and Edge. Users can directly search for ",(0,r.kt)("inlineCode",{parentName:"p"},"Fluent Wallet")," in the browser plug-in market, select and install it. Or find it in ",(0,r.kt)("a",{parentName:"p",href:"https://fluentwallet.com/"},"Fluent official website")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fluent",src:n(8811).Z,width:"373",height:"605"})),(0,r.kt)("p",null,"After the Fluent wallet is installed, the first step is to set the password:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fluent",src:n(4487).Z,width:"373",height:"601"})),(0,r.kt)("p",null,"The next step is to create or import an account seed phrase. The account seed phrase can be used to generate or restore an account, so it is very important and needs to be kept properly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CreateImportAccount.png",src:n(1635).Z,width:"374",height:"601"})),(0,r.kt)("p",null,"After the seed phrase is created, Fluent will automatically create an account through it and you can see the name, address, balance and other information of the account. You can also see the CFX ",(0,r.kt)("inlineCode",{parentName:"p"},"Send")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Deposit")," buttons, click to send or receive CFX."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NewAccount.png",src:n(4138).Z,width:"373",height:"604"})))}d.isMDXComponent=!0},1635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CreateImportAccount-1-f1c98463ba777c1228e9525a141a79a4.bin"},8811:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Fluent-Create-1-344aa1a56a898bb4938aaab1da9df14c.bin"},4138:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NewAccount-28623549ea9b7c107b2c7c6738a16607.bin"},4487:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SetPassword-2-45a39361ddc090bcae3cdb50ea992716.bin"}}]);