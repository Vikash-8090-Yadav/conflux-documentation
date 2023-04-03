"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[883],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1467:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"conflux_rpcs",title:"Network Endpoints",sidebar_position:3,keywords:["endpoints"]},i=void 0,o={unversionedId:"core/build/sdks-and-tools/conflux_rpcs",id:"core/build/sdks-and-tools/conflux_rpcs",title:"Network Endpoints",description:"Public available Conflux network RPC endpoints",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/build/sdks-and-tools/core-endpoints.md",sourceDirName:"core/build/sdks-and-tools",slug:"/core/build/sdks-and-tools/conflux_rpcs",permalink:"/zh-Hans/docs/core/build/sdks-and-tools/conflux_rpcs",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/build/sdks-and-tools/core-endpoints.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"conflux_rpcs",title:"Network Endpoints",sidebar_position:3,keywords:["endpoints"]},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/zh-Hans/docs/core/build/sdks-and-tools/tools"},next:{title:"Send Transactions Using SDKs",permalink:"/zh-Hans/docs/core/build/send-transactions-using-SDK"}},s={},u=[{value:"Confura",id:"confura",level:2},{value:"Public Endpoint",id:"public-endpoint",level:3},{value:"Hong Kong",id:"hong-kong",level:4},{value:"US East",id:"us-east",level:4},{value:"Rate Limits",id:"rate-limits",level:3},{value:"Common causes and mitigations",id:"common-causes-and-mitigations",level:4},{value:"Other Notes",id:"other-notes",level:3},{value:"Unifra",id:"unifra",level:2},{value:"Public Endpoint",id:"public-endpoint-1",level:3}],p={toc:u},d="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Public available Conflux network RPC endpoints"),(0,r.kt)("h2",{id:"confura"},"Confura"),(0,r.kt)("p",null,"Confura is an Ethereum Infura equivalent public JSON-RPC service on Conflux network, which is developed and maintained by Conflux foundation."),(0,r.kt)("p",null,"Our public RPC services are located in different regions globally. By utilizing geographic DNS routing, developers can request the regional RPC services which are physically closest to them."),(0,r.kt)("h3",{id:"public-endpoint"},"Public Endpoint"),(0,r.kt)("h4",{id:"hong-kong"},"Hong Kong"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Explorer"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"1029"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://confluxscan.net"},"https://confluxscan.net")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://main.confluxrpc.com"},"https://main.confluxrpc.com")," ",(0,r.kt)("br",null)," wss://main.confluxrpc.com/ws")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.confluxscan.net"},"https://testnet.confluxscan.net")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://test.confluxrpc.com"},"https://test.confluxrpc.com")," ",(0,r.kt)("br",null)," wss://test.confluxrpc.com/ws")))),(0,r.kt)("h4",{id:"us-east"},"US East"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Explorer"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"1029"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://confluxscan.io"},"https://confluxscan.io")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://main.confluxrpc.org"},"https://main.confluxrpc.org")," ",(0,r.kt)("br",null)," wss://main.confluxrpc.org/ws")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.confluxscan.io"},"https://testnet.confluxscan.io")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://test.confluxrpc.org"},"https://test.confluxrpc.org")," ",(0,r.kt)("br",null)," wss://test.confluxrpc.org/ws")))),(0,r.kt)("h3",{id:"rate-limits"},"Rate Limits"),(0,r.kt)("p",null,"To ensure the service availability, we've added several rate limiters (implemented with token bucket algorithm) to mitigate against bursts of incoming traffic. Users who send many requests in quick succession may see error responses that show up as status code ",(0,r.kt)("inlineCode",{parentName:"p"},"429"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"QPS"),(0,r.kt)("th",{parentName:"tr",align:null},"Burst"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of all requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfx_getLogs"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"cfx_getLogs")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfx_call"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"cfx_call")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfx_sendRawTransaction"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"cfx_sendRawTransaction")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfx_getNextNonce"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"cfx_getNextNonce")," requests per second")))),(0,r.kt)("p",null,"If you are have higher QPS requirements, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://confluxhub.io/payment/consumer/apps"},"Conflux Hub")," to purchase our VIP subscription plan with the following new QPS standards."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"QPS"),(0,r.kt)("th",{parentName:"tr",align:null},"Burst"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of all requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfx_getLogs"),(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"cfx_getLogs")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfx_call"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"cfx_call")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfx_sendRawTransaction"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"cfx_sendRawTransaction")," requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cfx_getNextNonce"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"limits the number of ",(0,r.kt)("inlineCode",{parentName:"td"},"cfx_getNextNonce")," requests per second")))),(0,r.kt)("h4",{id:"common-causes-and-mitigations"},"Common causes and mitigations"),(0,r.kt)("p",null,"Rate limiting can occur under a variety of conditions, but it\u2019s most common in these scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Issuing multiple state call requests all at once can lead to rate limitting. We recommend using ",(0,r.kt)("inlineCode",{parentName:"li"},"Multicall"),", which aggregates results from multiple contract constant function calls, and reduces the number of separate JSON RPC requests that need to be sent."),(0,r.kt)("li",{parentName:"ul"},"Running high frequency ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx_getLogs")," requests to catch up latest epoch can trigger rate limitting. As ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx_getLogs")," request calls are expensive, we recommend adapting the epoch range or block range within your log query filter to reduces request calls.")),(0,r.kt)("h3",{id:"other-notes"},"Other Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx_getLogs")," method no longer restrict the maximum gap between ",(0,r.kt)("inlineCode",{parentName:"li"},"from_epoch")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"to_epoch")," for log query filter. Instead the query is now bounded with reasonable queryset size, 3s maximum running time and no more than 10,000 resultset size, under other circumstance you may need to narrow down your search condition.")),(0,r.kt)("h2",{id:"unifra"},"Unifra"),(0,r.kt)("p",null,"Unifra is a Web3 developer platform focused on simplifying blockchain development. It has built a suite of developer tools, enhanced APIs, and a superior node infrastructure to seamlessly build and run blockchain applications. Unifra provide API services for multiple chains including Ethereum, BNS Smart Chain, Polygon and Conflux."),(0,r.kt)("p",null,"Unifra provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open access to free public end-points"),(0,r.kt)("li",{parentName:"ul"},"Real-time webhook alerts via Notify"),(0,r.kt)("li",{parentName:"ul"},"Best-in-class support and reliability / stability"),(0,r.kt)("li",{parentName:"ul"},"Unifra's NFT API"),(0,r.kt)("li",{parentName:"ul"},"Dashboard with Request Explorer")),(0,r.kt)("p",null,"To use Unifra's service, developer need to register an account first and find the RPC endpoint in ",(0,r.kt)("a",{parentName:"p",href:"https://console.unifra.io/"},"Unifra console"),". For detail infomation check ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unifra.io/"},"Unifra's documentation")),(0,r.kt)("h3",{id:"public-endpoint-1"},"Public Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Explorer"),(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"1029"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://confluxscan.net"},"https://confluxscan.net")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://conflux-core-public.unifra.io"},"https://conflux-core-public.unifra.io"))))))}c.isMDXComponent=!0}}]);