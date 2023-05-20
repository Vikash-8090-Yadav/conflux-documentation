"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5333],{4137:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},130:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(7462),o=(r(7294),r(4137));const a={sidebar_position:1,title:"Node Requirements"},i=void 0,l={unversionedId:"general/run-a-node/node-requirements",id:"general/run-a-node/node-requirements",title:"Node Requirements",description:"Conflux is a fully decentralized network based on PoW (proof of work). If you want to participate in mining of this decentralized network, or have your own RPC service, you need to run a Node (also called a client).This article shows you how to run a Conflux node.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/node-requirements.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/node-requirements",permalink:"/zh-CN/docs/general/run-a-node/node-requirements",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Node Requirements"},sidebar:"tutorialSidebar",previous:{title:"Run a Node",permalink:"/zh-CN/docs/category/run-a-node"},next:{title:"Downloading the Conflux Client",permalink:"/zh-CN/docs/general/run-a-node/downloading-conflux-client"}},u={},c=[{value:"Archivenode VS fullnode",id:"archivenode-vs-fullnode",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2}],s={toc:c},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Conflux is a fully decentralized network based on PoW (proof of work). If you want to participate in mining of this decentralized network, or have your own RPC service, you need to run a Node (also called a client).This article shows you how to run a Conflux node."),(0,o.kt)("h2",{id:"archivenode-vs-fullnode"},"Archivenode VS fullnode"),(0,o.kt)("p",null,"Conflux \u8282\u70b9\u5206\u4e3a\u4e09\u79cd\u7c7b\u578b\uff1a\u6863\u6848\u8282\u70b9\u3001\u5168\u8282\u70b9 \u548c \u8f7b\u8282\u70b9\u3002 \u4e09\u79cd\u7c7b\u578b\u7684Conflux\u8282\u70b9\u4e4b\u95f4\u7684\u5dee\u5f02\u5728\u4e8e\u5176\u50a8\u5b58\u7684\u6570\u636e\u91cf\u4e0d\u540c\u3002 The archive node takes the most and the light node takes the least. Of course, more data consumes more hardware resources. Click here for detailed information of nodes."),(0,o.kt)("p",null,"In general, if you want to participate in mining, a fullnode will suffice . you need to run an archivenode if you want to use it as RPC service. The lightnode is mainly used as a wallet."),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The hardware requirement to run an archivenode are roughly as follows:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CPU: 4 Cores")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"RAM: 16GB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Hard Disk: 1,5TB"))),(0,o.kt)("p",null,"Fullnode has a lower HDD requirement (1TB) and requires a discrete graphics card if you want to participate in mining."),(0,o.kt)("p",null,"In addition, the maximum number of open files are advised to set to 10000. In Linux, the default value is 1024, which is insufficient."))}p.isMDXComponent=!0}}]);