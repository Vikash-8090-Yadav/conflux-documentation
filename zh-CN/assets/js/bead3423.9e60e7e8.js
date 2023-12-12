"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7319],{3905:(e,a,n)=>{n.d(a,{Zo:()=>b,kt:()=>u});var c=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function d(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,c)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?d(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,c,t=function(e,a){if(null==e)return{};var n,c,t={},d=Object.keys(e);for(c=0;c<d.length;c++)n=d[c],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(c=0;c<d.length;c++)n=d[c],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=c.createContext({}),p=function(e){var a=c.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},b=function(e){var a=p(e.components);return c.createElement(s.Provider,{value:a},e.children)},i="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return c.createElement(c.Fragment,{},a)}},l=c.forwardRef((function(e,a){var n=e.components,t=e.mdxType,d=e.originalType,s=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),i=p(n),l=t,u=i["".concat(s,".").concat(l)]||i[l]||f[l]||d;return n?c.createElement(u,r(r({ref:a},b),{},{components:n})):c.createElement(u,r({ref:a},b))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var d=n.length,r=new Array(d);r[0]=l;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[i]="string"==typeof e?e:t,r[1]=o;for(var p=2;p<d;p++)r[p]=n[p];return c.createElement.apply(null,r)}return c.createElement.apply(null,n)}l.displayName="MDXCreateElement"},48229:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var c=n(87462),t=(n(67294),n(3905));const d={id:"pubsub",title:"\u53d1\u5e03/\u8ba2\u9605 API",description:"The Publish-Subscribe API of Conflux Core Space",sidebar_position:6,keywords:["conflux","pubsub","sdk"],displayed_sidebar:"coreSidebar"},r=void 0,o={unversionedId:"core/build/json-rpc/pubsub",id:"core/build/json-rpc/pubsub",title:"\u53d1\u5e03/\u8ba2\u9605 API",description:"The Publish-Subscribe API of Conflux Core Space",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/build/json-rpc/pub-sub.md",sourceDirName:"core/build/json-rpc",slug:"/core/build/json-rpc/pubsub",permalink:"/zh-CN/docs/core/build/json-rpc/pubsub",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"pubsub",title:"\u53d1\u5e03/\u8ba2\u9605 API",description:"The Publish-Subscribe API of Conflux Core Space",sidebar_position:6,keywords:["conflux","pubsub","sdk"],displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"trace \u547d\u540d\u7a7a\u95f4",permalink:"/zh-CN/docs/core/build/json-rpc/trace_rpc"},next:{title:"cfx_sendRawTransaction \u63a5\u53e3\u9519\u8bef",permalink:"/zh-CN/docs/core/build/json-rpc/cfx_sendTransaction-errors"}},s={},p=[{value:"\u8ba2\u9605",id:"\u8ba2\u9605",level:2},{value:"<code>newHeads</code>",id:"newheads",level:2},{value:"<code>epochs</code>",id:"epochs",level:2},{value:"<code>logs</code>",id:"logs",level:2},{value:"Node.js \u793a\u4f8b",id:"nodejs-\u793a\u4f8b",level:2}],b={toc:p},i="wrapper";function f(e){let{components:a,...n}=e;return(0,t.kt)(i,(0,c.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Conflux \u7684\u53d1\u5e03-\u8ba2\u9605 API\uff08\u4e5f\u79f0\u4e3a pub-sub\uff09\u4f7f\u5f97\u53ef\u4ee5\u6301\u7eed\u5730\u67e5\u8be2\u7279\u5b9a\u7684\u9879\u76ee\uff0c\u800c\u4e0d\u9700\u8981\u901a\u8fc7 JSON-RPC HTTP \u63a5\u53e3\u8fdb\u884c\u8f6e\u8be2\u3002 \u4f60\u53ef\u4ee5\u5728 TCP \u6216 WebSocket \u8fde\u63a5\u4e4b\u4e0a\u4f7f\u7528 Conflux \u7684\u53d1\u5e03-\u8ba2\u9605 API\uff08\u4e5f\u79f0\u4e3a pub-sub\uff09\u3002"),(0,t.kt)("p",null,"\u4f7f\u7528\u53d1\u5e03-\u8ba2\u9605 API\uff0c\u8bf7\u786e\u4fdd\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5177\u6709 TCP \u6216 WebSocket \u7aef\u53e3\u6253\u5f00\u7684\u8282\u70b9\u3002 \u5982\u679c\u60a8\u7ef4\u62a4\u81ea\u5df1\u7684\u8282\u70b9\uff0c\u8bf7\u786e\u4fdd\u5176 TCP \u6216 WebSocket \u7aef\u53e3\u5df2\u6253\u5f00\uff0c\u4ee5\u4fbf\u4f7f\u7528\u53d1\u5e03-\u8ba2\u9605 API\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u63a5\u53e3\uff08CLI\uff09\u6807\u5fd7",(0,t.kt)("inlineCode",{parentName:"p"},"--jsonrpc-tcp-port PORT")," \u548c",(0,t.kt)("inlineCode",{parentName:"p"},"--jsonrpc-ws-port PORT"),"\uff08\u53c2\u89c1",(0,t.kt)("inlineCode",{parentName:"p"},"conflux --help"),"\uff09\uff0c\u6216\u8005\u901a\u8fc7 ",(0,t.kt)("inlineCode",{parentName:"p"},"jsonrpc_tcp_port")," \u548c ",(0,t.kt)("inlineCode",{parentName:"p"},"jsonrpc_ws_port")," \u914d\u7f6e\u53c2\u6570\uff08\u53c2\u89c1 ",(0,t.kt)("inlineCode",{parentName:"p"},"run/default.toml"),"\uff09\u8fdb\u884c\u8bbe\u7f6e\u3002 \u5728\u672c\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684 TCP \u7aef\u53e3\uff08",(0,t.kt)("inlineCode",{parentName:"p"},"12536"),"\uff09\u548c WebSocket \u7aef\u53e3\uff08",(0,t.kt)("inlineCode",{parentName:"p"},"12535"),"\uff09\u3002"),(0,t.kt)("h2",{id:"\u8ba2\u9605"},"\u8ba2\u9605"),(0,t.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.kt)("inlineCode",{parentName:"p"},"cfx_subscribe")," JSON-RPC \u8ba2\u9605\u4e3b\u9898\u3002 \u8fd9\u5c06\u8fd4\u56de\u4e00\u4e2a\u8ba2\u9605 ID\uff0c\u7a0d\u540e\u53ef\u4ee5\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"cfx_unsubscribe")," JSON-RPC \u53d6\u6d88\u8ba2\u9605\u3002"),(0,t.kt)("p",null,"\u4ee5\u4e0b\u662f\u5982\u4f55\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"nc"),"\uff08",(0,t.kt)("inlineCode",{parentName:"p"},"netcat"),"\uff09\u5728 TCP \u8fde\u63a5\u4e0a\u521b\u5efa\u8ba2\u9605\u7684\u793a\u4f8b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'> nc localhost 12536\n{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["topic"], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0x2ee8e71befef9049", "id": 1 }\n...\n{ "jsonrpc": "2.0", "method": "cfx_unsubscribe", "params": ["0x2ee8e71befef9049"], "id": 2 }\n{ "jsonrpc": "2.0", "result": true, "id": 2 }\n')),(0,t.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"websocat")," \u5728 WebSocket \u8fde\u63a5\u4e0a\u521b\u5efa\u8ba2\u9605\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'> websocat ws://localhost:12535\n{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["topic"], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0x2ee8e71befef9049", "id": 1 }\n...\n{ "jsonrpc": "2.0", "method": "cfx_unsubscribe", "params": ["0x2ee8e71befef9049"], "id": 2 }\n{ "jsonrpc": "2.0", "result": true, "id": 2 }\n')),(0,t.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u652f\u6301\u4ee5\u4e0b\u4e3b\u9898\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"newHeads"),"\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"epochs"),"\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"logs"),"\u3002"),(0,t.kt)("h2",{id:"newheads"},(0,t.kt)("inlineCode",{parentName:"h2"},"newHeads")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"newHeads")," \u4e3b\u9898\u6d41\u5f0f\u4f20\u8f93\u6240\u6709\u53c2\u4e0e\u5171\u8bc6\u7684\u65b0\u533a\u5757\u5934\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["newHeads"], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0x2ee8e71befef9049", "id": 1 }\n\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "adaptive": false, "blame": 0, "deferredLogsBloomHash": "0xd397b3b043d87fcd6fad1291ff0bfd16401c274896d8c63a923727f077b8e0b5", "deferredReceiptsRoot": "0x959684cc863003d5ac5cb31bcf5baf7e1b4fc60963fcc36fbc1bf4394a0e2e3c", "deferredStateRoot": "0x72884d26f7de73cce4a06bddb985a7d9f8406c836dffdc8000f309684e55f9f3", "difficulty": "0x4", "epochNumber": "0x6a", "gasLimit": "0xb2d05e00", "hash": "0xcdd3831280b42552c4bdfe2893892d96008f1788f37122cbccf09b172f7035df", "height": "0x6a", "miner": "CFX:TYPE.USER:AARC9ABYCUE0HHZGYRR53M6CXEDGCCRMMYYBJGH4XG", "nonce": "0xd68368be06ba1a73", "parentHash": "0x16a3dfdb6beeb91a36019efedcb4863b854d98353ed1b260e4088f3cbb6510ad", "refereeHashes": [], "stable": true, "timestamp": "0x5e478223", "transactionsRoot": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347" }, "subscription": "0x7b40ad26c24752d3" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "adaptive": false, "blame": 0, "deferredLogsBloomHash": "0xd397b3b043d87fcd6fad1291ff0bfd16401c274896d8c63a923727f077b8e0b5", "deferredReceiptsRoot": "0x959684cc863003d5ac5cb31bcf5baf7e1b4fc60963fcc36fbc1bf4394a0e2e3c", "deferredStateRoot": "0xd7bb2ad6406b7ec8c4ed3f424b5cb08f23483a6208f1c551e7f8a54e7c764462", "difficulty": "0x4", "epochNumber": "0x6b", "gasLimit": "0xb2d05e00", "hash": "0xd8f1eead32f32fdd909e3654357d90846114e26931448701af086a41fcf725ef", "height": "0x6b", "miner": "CFX:TYPE.USER:AARC9ABYCUE0HHZGYRR53M6CXEDGCCRMMYYBJGH4XG", "nonce": "0xf590aad206a65c1c", "parentHash": "0xcdd3831280b42552c4bdfe2893892d96008f1788f37122cbccf09b172f7035df", "refereeHashes": [], "stable": true, "timestamp": "0x5e478224", "transactionsRoot": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347" }, "subscription": "0x7b40ad26c24752d3" }}\n...\n')),(0,t.kt)("h2",{id:"epochs"},(0,t.kt)("inlineCode",{parentName:"h2"},"epochs")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"epochs")," \u4e3b\u9898\u6d41\u5f0f\u4f20\u8f93\u5171\u8bc6\u7ed3\u679c\uff1a\u533a\u5757\u7684\u5168\u5e8f\uff0c\u7531\u4e00\u7cfb\u5217 epoch \u8868\u793a\u3002"),(0,t.kt)("p",null,"\u8fd4\u56de\u7684\u7eaa\u5143\u6570\uff08epoch number\uff09\u5e8f\u5217\u662f\u5355\u8c03\u9012\u589e\u7684\uff0c\u6bcf\u4e2a\u6570\u5b57\u4e4b\u95f4\u589e\u52a0\u4e00\u3002 \u5982\u679c\u4f60\u770b\u5230\u540c\u4e00\u4e2a epoch \u4e24\u6b21\uff0c\u8bf4\u660e\u53ef\u80fd\u53d1\u751f\u4e86\u4e3b\u94fe\u91cd\u7ec4\uff08\u8fd9\u53ef\u80fd\u53d1\u751f\u5728\u6700\u8fd1\u7684 epoch \u4e2d\uff09\u3002"),(0,t.kt)("p",null,"\u4e00\u4e2a\u53ef\u9009\u7684\u53c2\u6570\u53ef\u4ee5\u4f20\u9012\u4ee5\u63a7\u5236\u8ba2\u9605\u7684 epoch\u3002 \u53ef\u7528\u7684\u503c\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"latest_state")," \u548c ",(0,t.kt)("inlineCode",{parentName:"p"},"latest_mined"),"\uff08\u9ed8\u8ba4\u503c\uff09\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["epochs"], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0xde5801fda9520049", "id": 1 }\n\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6a7", "epochHashesOrdered": ["0x6f21f408476f404ecc07f0a52170ffdf62ca23497bdc3e3d64429b2c26308e00"]}, "subscription": "0xcd73be4533944f33" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6a8", "epochHashesOrdered": ["0x1bb99ee21dade175959da6a0a373a6f75732a2a7ea67adbda97f1bf7b4574ff1"]}, "subscription": "0xcd73be4533944f33" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6a8", "epochHashesOrdered": ["0xd8d4ed0ff02c3d61bbcd13095b1a4d21eb43cee8c40e7e7e7c5a41a861cda409"]}, "subscription": "0xcd73be4533944f33" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6a9", "epochHashesOrdered": ["0x1bb99ee21dade175959da6a0a373a6f75732a2a7ea67adbda97f1bf7b4574ff1", "0x9df97d1c8228d33dacd7367e4db4fd29f879fcf2679f947ee90f5d4ce035a206"]}, "subscription": "0xcd73be4533944f33" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6aa", "epochHashesOrdered": ["0xe322882ee1acb79e0b7eb394db9aeede67c6198641762da8a50b4bb6b48cc2a4"]}, "subscription": "0xcd73be4533944f33" }}\n...\n')),(0,t.kt)("p",null,"\u6bcf\u4e2a epoch\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"epochHashesOrdered")," \u4e2d\u7684 ",(0,t.kt)("strong",{parentName:"p"},"\u6700\u540e\u4e00\u4e2a")," \u54c8\u5e0c\u662f\u4e3b\u94fe\u533a\u5757\u7684\u54c8\u5e0c\u3002 \u4ee5\u4e0b\u662f\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u5f53\u524d\u4e3b\u94fe\u7684\u6700\u540e\u4e00\u90e8\u5206\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"0x6f21f408476f404ecc07f0a52170ffdf62ca23497bdc3e3d64429b2c26308e00 (epoch 0x6a7)\n0xd8d4ed0ff02c3d61bbcd13095b1a4d21eb43cee8c40e7e7e7c5a41a861cda409 (epoch 0x6a8)\n0x9df97d1c8228d33dacd7367e4db4fd29f879fcf2679f947ee90f5d4ce035a206 (epoch 0x6a9)\n0xe322882ee1acb79e0b7eb394db9aeede67c6198641762da8a50b4bb6b48cc2a4 (epoch 0x6aa)\n")),(0,t.kt)("h2",{id:"logs"},(0,t.kt)("inlineCode",{parentName:"h2"},"logs")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"logs")," \u4e3b\u9898\u6309\u987a\u5e8f\u6d41\u5f0f\u4f20\u8f93\u4e0e\u7279\u5b9a\u7b5b\u9009\u6761\u4ef6\u5339\u914d\u7684\u6240\u6709\u65e5\u5fd7\u3002"),(0,t.kt)("p",null,"\u7b5b\u9009\u5668\u683c\u5f0f\u9075\u5faa ",(0,t.kt)("inlineCode",{parentName:"p"},"cfx_getLogs")," JSON-RPC API\u3002 \u8fd9\u662f\u4e00\u4e2a JSON \u5bf9\u8c61\uff0c\u5305\u542b\u4ee5\u4e0b\uff08\u53ef\u9009\uff09\u5b57\u6bb5\uff1a ",(0,t.kt)("inlineCode",{parentName:"p"},"address")," \uff08\u5408\u7ea6\u5730\u5740\uff09\u548c ",(0,t.kt)("inlineCode",{parentName:"p"},"topics")," \uff08\u6709\u5e8f\u7d22\u5f15\u65e5\u5fd7\u4e3b\u9898\u6570\u7ec4\uff09\u3002"),(0,t.kt)("p",null,"\u5982\u679c\u53d1\u751f pivot chain \u91cd\u7ec4\uff08\u53ef\u80fd\u4f1a\u5f71\u54cd\u6700\u8fd1\u7684\u65e5\u5fd7\uff09\uff0c\u5219\u4f1a\u53d1\u9001\u4e00\u4e2a\u7279\u6b8a\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"revert")," \u6d88\u606f\u3002 \u6240\u6709\u4e4b\u524d\u63a5\u6536\u5230\u7684\u5c5e\u4e8e\u5927\u4e8e\u8be5\u6d88\u606f\u4e2d\u6240\u8ff0\u7684 epochs \u7684\u65e5\u5fd7\u90fd\u5e94\u89c6\u4e3a\u65e0\u6548\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["logs", { "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f"] }], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0x2dd59588c475a772", "id": 1 }\n\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x3f3", "transactionHash": "0x89ee0aa76bc1a7c9340f3efcfc7c8263a212cadcb32f0231ef1395ef9c587899", "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x929ad718797e03cce31f66f234e12893c8be5e959dba14b8328205c9c136ddbe", "data": "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d", "logIndex": "0x0", "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f", "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d"], "transactionIndex": "0x0", "transactionLogIndex": "0x0" }, "subscription": "0x2dd59588c475a772" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x40f", "transactionHash": "0x5cf00bb4ee966c340f459c57a53e4be7357bdf23bb055a95066d4408d5ecf118", "address": "CFX:TYPE.CONTRACT:ACCKUCYY5FHZKNBXMEEXWTAJ3BXMEG25B2B50PTA6V", "blockHash": "0xede319ddfa7a9710aef627aa152052da190d3798d2ad7fd7da8d953b48a1785e", "data": "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d", "logIndex": "0x0", "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f", "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d"], "transactionIndex": "0x0", "transactionLogIndex": "0x0" }, "subscription": "0x2dd59588c475a772" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x411", "transactionHash": "0xf639c7b26df0d60bc8306c7877d7ec3c361b2157d14b12b704ea5500d70d8798", "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x3742f695f9b2270b51b9a409ff499caf298dd46dc9d3bbe8360c4997ce9b00c7", "data": "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d", "logIndex": "0x0", "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f", "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d"], "transactionIndex": "0x0", "transactionLogIndex": "0x0" }, "subscription": "0x2dd59588c475a772" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "revertTo": "0x40f" }, "subscription": "0x2dd59588c475a772" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x410", "transactionHash": "0xf639c7b26df0d60bc8306c7877d7ec3c361b2157d14b12b704ea5500d70d8798", "address": "CFX:TYPE.CONTRACT:ACCKUCYY5FHZKNBXMEEXWTAJ3BXMEG25B2B50PTA6V", "blockHash": "0x24faa39196ee34d1d04cd4c44012bd28a757b251e0551d9503bf6685b467e0d5", "data": "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d", "logIndex": "0x0", "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f", "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d"], "transactionIndex": "0x0", "transactionLogIndex": "0x0" }, "subscription": "0x2dd59588c475a772" }}\n...\n')),(0,t.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"revert")," \u6d88\u606f",(0,t.kt)("strong",{parentName:"p"},"\u4f7f\u6240\u6709\u5177\u6709\u5927\u4e8e ",(0,t.kt)("inlineCode",{parentName:"strong"},"0x40f")," \u7684 epoch \u53f7\u7684\u65e5\u5fd7\u65e0\u6548"),"\uff08\u5373 epoch ",(0,t.kt)("inlineCode",{parentName:"p"},"0x410"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"0x411")," \u7b49\uff09\u3002 \u4ea4\u6613 ",(0,t.kt)("inlineCode",{parentName:"p"},"0xf639c7b...")," \u88ab\u91cd\u65b0\u6267\u884c\u5e76\u5bf9\u5e94\u7684\u65e5\u5fd7\u88ab\u518d\u6b21\u53d1\u5e03\u3002 \u8fd9\u4e00\u6b21\uff0c\u4ea4\u6613\u7ed3\u675f\u65f6\u5904\u4e8e ",(0,t.kt)("inlineCode",{parentName:"p"},"0x410")," \u5757\u800c\u4e0d\u662f ",(0,t.kt)("inlineCode",{parentName:"p"},"0x411"),"\u3002 \u6240\u6709\u5728\u5305\u62ec ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("inlineCode",{parentName:"strong"},"0x40f"))," \u5728\u5185\u7684 epochs \u7684\u65e5\u5fd7\u4ecd\u7136\u6709\u6548\u3002"),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a\u8f7b\u8282\u70b9\u4e0d\u652f\u6301 ",(0,t.kt)("inlineCode",{parentName:"em"},"logs")," pub-sub \u4e3b\u9898\u3002")),(0,t.kt)("h2",{id:"nodejs-\u793a\u4f8b"},"Node.js \u793a\u4f8b"),(0,t.kt)("p",null,"\u4ee5\u4e0b\u662f\u901a\u8fc7 Node.js \u4f7f\u7528 pub-sub API \u7684\u7b80\u5355\u793a\u4f8b\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"epochs")," \u4e3b\u9898\u68c0\u6d4b pivot chain \u91cd\u7ec4\u3002 \u6211\u4eec\u4f9d\u8d56\u4e8e ",(0,t.kt)("inlineCode",{parentName:"p"},"js-conflux-sdk"),"\u3002 \u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0c\u6211\u4eec\u7701\u7565\u4e86\u9519\u8bef\u5904\u7406\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const sdk = require("js-conflux-sdk")\nconst cfx = new sdk.Conflux({ url: "ws://127.0.0.1:12535" });\n\n(async function () {\n    subscription = await cfx.subscribeEpochs()\n    let latest_epoch = 0;\n    subscription.on(\'data\', data => {\n        let epoch = data.epochNumber\n        console.log(`epoch ${epoch} produced`)\n        if (epoch <= latest_epoch) {\n            console.log(`chain reorg of depth ${latest_epoch - epoch} (${latest_epoch} --\x3e ${epoch})`);\n        }\n        latest_epoch = epoch;\n    })\n})()\n\n')),(0,t.kt)("p",null,"\u793a\u4f8b\u8f93\u51fa\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"epoch 3136 produced\nepoch 3137 produced\nepoch 3138 produced\nepoch 3139 produced\nepoch 3140 produced\nepoch 3141 produced\nchain reorg of depth 1 (3142 --\x3e 3141)\nchain reorg of depth 1 (3143 --\x3e 3142)\n...\n")),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"\u6ce8\u610f: \u8f7b\u5ea6\u7684 pivot chain \u91cd\u7ec4\u662f\u975e\u5e38\u5e38\u89c1\u7684\uff0c\u56e0\u4e3a\u5728\u4e3b\u94fe\u7684\u672b\u7aef\u5728\u7a33\u5b9a\u524d\u5e38\u5e38\u4f1a\u51fa\u73b0\u6ce2\u52a8\u3002")))}f.isMDXComponent=!0}}]);