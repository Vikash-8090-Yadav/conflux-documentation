"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||h[p]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",sidebar_position:13,description:"Frequently asked questions about running a node.",displayed_sidebar:"generalSidebar"},i="\u8282\u70b9\u5e38\u89c1\u95ee\u9898",l={unversionedId:"general/run-a-node/nodes-faqs",id:"general/run-a-node/nodes-faqs",title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",description:"Frequently asked questions about running a node.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/nodes-faqs.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/nodes-faqs",permalink:"/zh-CN/docs/general/run-a-node/nodes-faqs",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",sidebar_position:13,description:"Frequently asked questions about running a node.",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u8fd0\u884c\u79c1\u6709\u94fe",permalink:"/zh-CN/docs/general/run-a-node/advanced-topics/running-independent-chain"},next:{title:"\u786c\u5206\u53c9",permalink:"/zh-CN/docs/general/hardforks/"}},s={},d=[{value:"Why does synchronization take a long time after restart?",id:"why-does-synchronization-take-a-long-time-after-restart",level:3},{value:"Why does the block height stop increasing?",id:"why-does-the-block-height-stop-increasing",level:3},{value:"After the configuration is modified, do I need to clear the data when restarting the node?",id:"after-the-configuration-is-modified-do-i-need-to-clear-the-data-when-restarting-the-node",level:3},{value:"What is the size of the current archive node data?",id:"what-is-the-size-of-the-current-archive-node-data",level:3},{value:"How to get involved in mining?",id:"how-to-get-involved-in-mining",level:3},{value:"How to synchronize data quickly to run an archive node?",id:"how-to-synchronize-data-quickly-to-run-an-archive-node",level:3},{value:"How to check the error log?",id:"how-to-check-the-error-log",level:3},{value:"How to run a PoS node?",id:"how-to-run-a-pos-node",level:3}],c={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8282\u70b9\u5e38\u89c1\u95ee\u9898"},"\u8282\u70b9\u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h3",{id:"why-does-synchronization-take-a-long-time-after-restart"},"Why does synchronization take a long time after restart?"),(0,o.kt)("p",null,"After a node is restarted, it synchronizes data from the last checkpoint and replays block data. It will take different amounts of time according to the distance to the last checkpoint. After that, it will start synchronizing from the latest block."),(0,o.kt)("p",null,"It\u2019s normal, generally it will take a few minutes to more than ten minutes."),(0,o.kt)("h3",{id:"why-does-the-block-height-stop-increasing"},"Why does the block height stop increasing?"),(0,o.kt)("p",null,"If the block height stops increasing, you can check the log or terminal to determine whether there is any error. If there is no error, it is most likely due to network reasons, you can try to restart the node."),(0,o.kt)("h3",{id:"after-the-configuration-is-modified-do-i-need-to-clear-the-data-when-restarting-the-node"},"After the configuration is modified, do I need to clear the data when restarting the node?"),(0,o.kt)("p",null,"Depending on the situation, sometimes it does, sometimes it doesn\u2019t. If the configuration involves data store or data index, you need to restart the node if the configuration changes, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"persist_tx_index")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"executive_trace")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"persist_block_number_index"))),(0,o.kt)("p",null,"Other restart are generally not required."),(0,o.kt)("h3",{id:"what-is-the-size-of-the-current-archive-node-data"},"What is the size of the current archive node data?"),(0,o.kt)("p",null,"Up to 2023.10.30, the block data compression package size is around 950 GB"),(0,o.kt)("h3",{id:"how-to-get-involved-in-mining"},"How to get involved in mining?"),(0,o.kt)("p",null,"Mining requires GPU, you can see here for\xa0",(0,o.kt)("a",{parentName:"p",href:"https://forum.conflux.fun/t/conflux-tethys-gpu-mining-instruction-v1-1-4/3775"},"details")),(0,o.kt)("h3",{id:"how-to-synchronize-data-quickly-to-run-an-archive-node"},"How to synchronize data quickly to run an archive node?"),(0,o.kt)("p",null,"You can use\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/conflux-fans/fullnode-tool"},"fullnode-node\xa064"),"\xa0to download the data snapshot of the archive node, node data can be quickly synchronized to the latest data using a snapshot."),(0,o.kt)("h3",{id:"how-to-check-the-error-log"},"How to check the error log?"),(0,o.kt)("p",null,"If you run the node through\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"start.sh"),", you can check the error log in\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"stderr.txt"),"\xa0in the same directory."),(0,o.kt)("h3",{id:"how-to-run-a-pos-node"},"How to run a PoS node?"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"../mine-stake/stake/run-pos-node-on-aws"},"THIS")," section."))}h.isMDXComponent=!0}}]);