"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),h=r,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5,title:"Running a Light Node"},l="Running a Light Node",c={unversionedId:"general/run-a-node/running-light-node",id:"general/run-a-node/running-light-node",title:"Running a Light Node",description:"Note: Currently, eSpace (EVM full-compatible space) RPC methods are not supported on the Conflux Light Node.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/running-light-node.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/running-light-node",permalink:"/zh-Hans/docs/general/run-a-node/running-light-node",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/run-a-node/running-light-node.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Running a Light Node"},sidebar:"tutorialSidebar",previous:{title:"Running a Full Node",permalink:"/zh-Hans/docs/general/run-a-node/running-full-node"},next:{title:"Running an Archive Node",permalink:"/zh-Hans/docs/general/run-a-node/running-archive-node"}},s={},i=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"Running a light node",id:"running-a-light-node-1",level:2},{value:"Interacting with a light node",id:"interacting-with-a-light-node",level:2},{value:"RPC queries",id:"rpc-queries",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Other SDKs",id:"other-sdks",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Why do I get an error when calling a contract method?",id:"why-do-i-get-an-error-when-calling-a-contract-method",level:3},{value:"Why do I see timeout instead of null",id:"why-do-i-see-timeout-instead-of-null",level:3},{value:"I&#39;m searching through event logs, why is it so slow?",id:"im-searching-through-event-logs-why-is-it-so-slow",level:3},{value:"RPC availability",id:"rpc-availability",level:2}],d={toc:i},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-light-node"},"Running a Light Node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Currently, eSpace (EVM full-compatible space) RPC methods are not supported on the Conflux Light Node.")),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Node version: ",(0,r.kt)("inlineCode",{parentName:"strong"},"conflux-rust v2.1.0")),"."),(0,r.kt)("p",null,"Light nodes are special nodes in the Conflux network that store block headers only and retrieve everything else from their peers on-demand. This means that by default light nodes do not store transactions nor do they store state trees either. This can drastically reduce the disk and bandwidth use of light nodes compared to full and archive nodes, especially under high TPS. As a trade-off RPC queries have a higher latency on light nodes."),(0,r.kt)("p",null,"Light nodes execute ",(0,r.kt)("strong",{parentName:"p"},"GHAST")," consensus on their local header graph and they also verify each item retrieved on-demand using Merkle proofs and other similar mechanisms. Items retrieved on-demand include accounts, bloom filters, transactions, and transaction receipts. While light nodes need to rely on their peers to fulfill RPC queries they do this in a trustless way."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The current light node implementation is still considered experimental therefore bugs are expected to exist. If you encounter any issues please let us know by opening an issue on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/issues"},"conflux-rust")," repository.")),(0,r.kt)("h2",{id:"running-a-light-node-1"},"Running a light node"),(0,r.kt)("p",null,"Light nodes can be enabled in the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.toml")," settings file (",(0,r.kt)("inlineCode",{parentName:"p"},"testnet.toml")," for testnet) in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_type")," variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'node_type = "light"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Alternatively Light nodes can be enabled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--light")," command line flag:")),(0,r.kt)("p",null,"Start by downloading the latest release from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/"},"conflux-rust")," repository or by building from source code following this guide. Then, you can simply run the node using these commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> cd run\n> ./conflux --config hydra.toml\n")),(0,r.kt)("p",null,"Similarly to full nodes you will know when your node is fully synced with the network once the ",(0,r.kt)("inlineCode",{parentName:"p"},"console")," prints:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash+"},"Catch-up mode: false\n")),(0,r.kt)("h2",{id:"interacting-with-a-light-node"},"Interacting with a light node"),(0,r.kt)("p",null,"Similarly to full and archive nodes, you can interact with a light node through an ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TCP"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket")," connection. By default local HTTP queries are enabled through ",(0,r.kt)("inlineCode",{parentName:"p"},"port 12539"),". For details, please refer to the JSON-RPC documentation."),(0,r.kt)("h3",{id:"rpc-queries"},"RPC queries"),(0,r.kt)("p",null,"Light nodes support most Conflux RPC APIs and support for the rest is also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"},"on the way"),". As light nodes need to query their peers to fulfill RPC requests, the overall latency is slightly larger. (It is significantly larger for ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_getLogs"),".)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'> curl -X POST --data \'{ "jsonrpc": "2.0", "method": "cfx_clientVersion", "id": 1 }\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": "conflux-rust-1.0.0", "id": 1 }\n\n> curl -X POST --data \'{ "jsonrpc":"2.0", "method":"cfx_getBalance", "params": ["cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg"], "id": 2 }\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": "0x5fc346d4363f84249d4a", "id": 2 }\n\n> curl -X POST --data \'{ "jsonrpc": "2.0", "method": "cfx_getLogs", "params": [{ "address": "cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp", "fromEpoch": "0x1c8b8", "toEpoch": "0x1c8d6" }], "id": 3}\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": [{ "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x694898c77602511b6c411860ec230ac7ca58c08a4cbe3cad904e724b2eb97fee", "data": "0x0000000000000000000000000000000000000000000000049b9ca9a694340000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000141da5f533abef1b82a4a6d698415b8a56894b7b410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "epochNumber": "0x1c8bf", "logIndex": "0x0", "topics": ["0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x00000000000000000000000080bb30efc5683758128b404fe5da03432eb16634"], "transactionHash": "0x7dcfeb245369e509f2d154f2d5523e3ebe0b54f1d420e02edf56c70cdcae278d", "transactionIndex": "0x0", "transactionLogIndex": "0x0" },{ "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x694898c77602511b6c411860ec230ac7ca58c08a4cbe3cad904e724b2eb97fee", "data": "0x0000000000000000000000000000000000000000000000049b9ca9a694340000", "epochNumber": "0x1c8bf", "logIndex": "0x1", "topics": ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x00000000000000000000000080bb30efc5683758128b404fe5da03432eb16634"], "transactionHash": "0x7dcfeb245369e509f2d154f2d5523e3ebe0b54f1d420e02edf56c70cdcae278d", "transactionIndex": "0x0", "transactionLogIndex": "0x1" }], "id": 3 } -H "Content-Type: application/json" localhost:12539\n')),(0,r.kt)("h3",{id:"javascript"},"JavaScript"),(0,r.kt)("p",null,"Light nodes support most of the functionalities of the JavaScript SDK (",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/js-conflux-sdk"},"js-conflux-sdk"),"). You can install the SDK using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save js-conflux-sdk\n")),(0,r.kt)("p",null,"Then, you can query the blockchain and send transactions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst PRIVATE_KEY = '0x...';\nconst RECEIVER = 'cfx:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg';\n\nasync function main() {\n  const conflux = new Conflux({ url: 'http://localhost:12539' });\n\n  // query node version\n  const client_version = await conflux.provider.call('cfx_clientVersion');\n  console.log('client_version:', client_version);\n\n  // query account balance\n  const balance = await conflux.getBalance('cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg');\n  console.log('balance:', balance.toString(10));\n\n  // query smart contract logs\n  const logs = await conflux.getLogs({\n    address: 'cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp',\n    fromEpoch: 116920,\n    toEpoch: 116950,\n  });\n\n  console.log('logs:', logs);\n\n  // send transaction\n  const account = conflux.wallet.addPrivateKey(PRIVATE_KEY);\n\n  const tx = {\n    from: account.address,\n    to: RECEIVER,\n    value: Drip.fromCFX(0.1),\n    gasPrice: 1000000000,\n  };\n\n  try {\n    const receipt = await conflux.sendTransaction(tx).executed();\n    console.log('receipt:', receipt);\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nmain();\n")),(0,r.kt)("h3",{id:"other-sdks"},"Other SDKs"),(0,r.kt)("p",null,"While it has not been tested, light nodes are expected to work with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/java-conflux-sdk"},"Java"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/python-conflux-sdk"},"Python")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/go-conflux-sdk"},"Go")," SDKs as well."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"why-do-i-get-an-error-when-calling-a-contract-method"},"Why do I get an error when calling a contract method?"),(0,r.kt)("p",null,"If you run the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const admin = await cfx.InternalContract('AdminControl').getAdmin('cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp');\nconsole.log('admin:', admin);\n")),(0,r.kt)("p",null,"...You will get this error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"RPCError: This API is not implemented yet\n    at HttpProvider.call\n    at processTicksAndRejections\n    at async Conflux.call\n    at async MethodTransaction.call\n    at async MethodTransaction.then {\n  code: -32000,\n  data: 'Tracking issue: https://github.com/Conflux-Chain/conflux-rust/issues/1461'\n}\n")),(0,r.kt)("p",null,"This is because contract calls use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_call")," RPC API which is not yet supported on light nodes."),(0,r.kt)("p",null,"Suppose you would like to send a transaction to a smart contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"conflux.InternalContract('AdminControl').setAdmin('cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp', 'cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg').sendTransaction({\n  from: account,\n}).executed();\n")),(0,r.kt)("p",null,"You will get a similar error. This is because for contract transactions, ",(0,r.kt)("inlineCode",{parentName:"p"},"js-conflux-sdk")," will automatically attempt to estimate the gas limit and storage limit using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," RPC which is not yet supported on light nodes. You can address this by manually setting these parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"conflux.InternalContract('AdminControl').setAdmin('cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp', 'cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg').sendTransaction({\n  from: account,\n  gas: 1000000000,\n  storageLimit: '0x0',\n  gasPrice: '0x1',\n}).executed();\n")),(0,r.kt)("p",null,"If you encounter a ",(0,r.kt)("inlineCode",{parentName:"p"},"This API is not implemented yet")," error, you can set the debug logger on the conflux object to find out which RPC is causing it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cfx = new Conflux({\n  url: 'http://localhost:12539',\n  logger: console,\n});\n")),(0,r.kt)("h3",{id:"why-do-i-see-timeout-instead-of-null"},"Why do I see timeout instead of null"),(0,r.kt)("p",null,"For most operations, you might sometimes see a timeout error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'RPCError: Operation timeout: "Timeout while retrieving transaction with hash 0x497755f45baef13a35347933c48c0b8940f2cc3347477b5ed9f165581b082699"\n')),(0,r.kt)("p",null,"This is because light nodes have to retrieve transactions and other items from their peers. If no peer responds within 4 seconds, you will get a timeout error. In most cases, retrying the query will succeed."),(0,r.kt)("p",null,"You will also get a timeout if you call ",(0,r.kt)("inlineCode",{parentName:"p"},"conflux.getTransactionByHash"),' and pass a transaction hash that does not exist. This is because the "non-existence" or transactions is not something light nodes can verify, so returning ',(0,r.kt)("inlineCode",{parentName:"p"},"null")," might be misleading. This behavior might change in the future."),(0,r.kt)("h3",{id:"im-searching-through-event-logs-why-is-it-so-slow"},"I'm searching through event logs, why is it so slow?"),(0,r.kt)("p",null,"Log filtering is a very expensive operation on light nodes. For each epoch in the range you specify, the node needs to perform 1 to 3 queries. We recommend you make multiple queries with smaller epoch ranges."),(0,r.kt)("p",null,"instead of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fromEpoch = 110000;\nconst toEpoch = 119999;\n\n// NOT RECOMMENDED\nconst logs = await cfx.getLogs({ fromEpoch, toEpoch, address: 'cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp' });\nconsole.log('logs:', logs);\n")),(0,r.kt)("p",null,"You are encouraged to do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for (ii = 0; ii < 10; ++ii) {\n  const fromEpoch = 110000 + ii * 1000;\n  const toEpoch = 110000 + (ii + 1) * 1000 - 1;\n  const logs = await cfx.getLogs({ fromEpoch, toEpoch, address: 'cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp' });\n  console.log('logs:', logs);\n}\n")),(0,r.kt)("h2",{id:"rpc-availability"},"RPC availability"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC"),(0,r.kt)("th",{parentName:"tr",align:null},"status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_call"},"cfx_call")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c Not supported yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_checkbalanceagainsttransaction"},"cfx_checkBalanceAgainstTransaction")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_clientversion"},"cfx_clientVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_epochnumber"},"cfx_epochNumber")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_estimategasandcollateral"},"cfx_estimateGasAndCollateral")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c Not supported yed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_gasprice"},"cfx_gasPrice")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getaccount"},"cfx_getAccount")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getaccumulateinterestrate"},"cfx_getAccumulateInterestRate")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getadmin"},"cfx_getAdmin")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getbalance"},"cfx_getBalance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getbestblockhash"},"cfx_getBestBlockHash")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getblockbyepochnumber"},"cfx_getBlockByEpochNumber")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getblockbyhash"},"cfx_getBlockByHash")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getblockbyhashwithpivotassumption"},"cfx_getBlockByHashWithPivotAssumption")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getblockrewardinfo"},"cfx_getBlockRewardInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c Not supported yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getblocksbyepoch"},"cfx_getBlocksByEpoch")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getcode"},"cfx_getCode")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getcollateralforstorage"},"cfx_getCollateralForStorage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getconfirmationriskbyhash"},"cfx_getConfirmationRiskByHash")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getinterestrate"},"cfx_getInterestRate")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getlogs"},"cfx_getLogs")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getnextnonce"},"cfx_getNextNonce")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getskippedblocksbyepoch"},"cfx_getSkippedBlocksByEpoch")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getsponsorinfo"},"cfx_getSponsorInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getstakingbalance"},"cfx_getStakingBalance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getstatus"},"cfx_getStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getstorageat"},"cfx_getStorageAt")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getstorageroot"},"cfx_getStorageRoot")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_gettransactionbyhash"},"cfx_getTransactionByHash")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_gettransactionreceipt"},"cfx_getTransactionReceipt")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_sendrawtransaction"},"cfx_sendRawTransaction")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705 Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-Hans/docs/core/build/json-rpc/json_rpc#cfx_getsupplyinfo"},"cfx_getSupplyInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c Not supported yet")))))}u.isMDXComponent=!0}}]);