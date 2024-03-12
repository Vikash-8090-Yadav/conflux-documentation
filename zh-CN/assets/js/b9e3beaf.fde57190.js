"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5771],{37410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var n=r(85893),s=r(11151),d=r(73992),i=r(18679);const l={sidebar_position:3,title:"JSON-RPC Compatibility",description:"JSON-RPC compatibility with Ethereum",displayed_sidebar:"eSpaceSidebar"},c=void 0,a={id:"espace/build/jsonrpc-compatibility",title:"JSON-RPC Compatibility",description:"JSON-RPC compatibility with Ethereum",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/jsonrpc-compatibility.md",sourceDirName:"espace/build",slug:"/espace/build/jsonrpc-compatibility",permalink:"/zh-CN/docs/espace/build/jsonrpc-compatibility",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"JSON-RPC Compatibility",description:"JSON-RPC compatibility with Ethereum",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"EVM\u517c\u5bb9\u6027",permalink:"/zh-CN/docs/espace/build/evm-compatibility"},next:{title:"Transaction",permalink:"/zh-CN/docs/espace/build/transaction"}},h={},o=[{value:"Methods",id:"methods",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2},{value:"<code>pending</code> tag",id:"pending-tag",level:3},{value:"<code>eth_sendRawTransaction</code> errors",id:"eth_sendrawtransaction-errors",level:3},{value:"Data verifiability",id:"data-verifiability",level:2},{value:"Block",id:"block",level:3},{value:"Receipt",id:"receipt",level:3},{value:"pub/sub",id:"pubsub",level:2},{value:"ETH RPC docs",id:"eth-rpc-docs",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Conflux eSpace implements the Web3 JSON-RPC protocol."}),"\n",(0,n.jsx)(t.p,{children:"Check out the following video to get a quick overview of this topic:"}),"\n","\n","\n",(0,n.jsx)(d.Z,{children:(0,n.jsx)(i.Z,{value:"youtube",label:"JSON-RPC Compatibility Video",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/svpqUAjzdk0?si=j6Ia3OEi8Go5DTPq",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Status"}),(0,n.jsx)(t.th,{children:"Note"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"web3_clientVersion"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"net_version"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_protocolVersion"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_chainId"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_gasPrice"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_blockNumber"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getBalance"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getStorageAt"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getCode"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getTransactionCount"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_sendRawTransaction"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_submitTransaction"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_call"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_estimateGas"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getTransactionByHash"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getTransactionReceipt"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getLogs"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"The max gap between fromBlock and toBlock is limited to 1000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getBlockByHash"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getBlockByNumber"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getBlockTransactionCountByHash"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getBlockTransactionCountByNumber"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getTransactionByBlockHashAndIndex"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getTransactionByBlockNumberAndIndex"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_syncing"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_hashrate"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_coinbase"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_mining"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_maxPriorityFeePerGas"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_accounts"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_submitHashrate"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getUncleByBlockHashAndIndex"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getUncleByBlockNumberAndIndex"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getUncleCountByBlockHash"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getUncleCountByBlockNumber"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"parity_getBlockReceipts"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_pendingTransactions"}),(0,n.jsx)(t.td,{children:"\ud83d\udea7"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"web3_sha3"}),(0,n.jsx)(t.td,{children:"\ud83d\udea7"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trace_block"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Parity RPC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trace_filter"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Parity RPC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trace_transaction"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Parity RPC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_feeHistory"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getFilterChanges"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Supported at v2.1.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getFilterLogs"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Supported at v2.1.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_newBlockFilter"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Supported at v2.1.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_newFilter"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Supported at v2.1.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_newPendingTransactionFilter"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Supported at v2.1.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_uninstallFilter"}),(0,n.jsx)(t.td,{children:"\u2705"}),(0,n.jsx)(t.td,{children:"Supported at v2.1.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"net_listening"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"net_peerCount"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_compileLLL"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_compileSerpent"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_compileSolidity"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getCompilers"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getProof"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"EIP-1186"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eth_getWork"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"db_*"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"shh_*"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Legend: \u274c = not supported. \ud83d\udea7 = work in progress. \u2705 = supported."}),"\n",(0,n.jsx)(t.h2,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"eth_sendRawTransaction"})," only accept 155 transaction, ",(0,n.jsx)(t.code,{children:"1559"}),", ",(0,n.jsx)(t.code,{children:"2930"})," is not supported"]}),"\n",(0,n.jsx)(t.li,{children:"Methods not listed here are also not supported."}),"\n",(0,n.jsxs)(t.li,{children:["There is no concept of uncle (aka ommer) blocks. The ",(0,n.jsx)(t.code,{children:"eth_getUncleByBlockHashAndIndex"})," and ",(0,n.jsx)(t.code,{children:"eth_getUncleByBlockNumberAndIndex"})," methods always return ",(0,n.jsx)(t.code,{children:"null"}),". The ",(0,n.jsx)(t.code,{children:"eth_getUncleCountByBlockHash"})," and ",(0,n.jsx)(t.code,{children:"eth_getUncleCountByBlockNumber"})," methods return zero for valid block IDs and ",(0,n.jsx)(t.code,{children:"null"})," for invalid block IDs. Additionally, uncle-related block metadata such as ",(0,n.jsx)(t.code,{children:"sha3Uncles"})," is sha3 of empty hash array."]}),"\n",(0,n.jsx)(t.li,{children:"The nonstandard Geth tracing APIs are not supported at present"}),"\n",(0,n.jsx)(t.li,{children:"The nonstandard Parity tracing APIs are in progress"}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"pending-tag",children:[(0,n.jsx)(t.code,{children:"pending"})," tag"]}),"\n",(0,n.jsxs)(t.p,{children:["Only ",(0,n.jsx)(t.code,{children:"eth_getTransactionCount"})," method has supported ",(0,n.jsx)(t.code,{children:"pending"})," tag. Other method will treat ",(0,n.jsx)(t.code,{children:"pending"})," tag as ",(0,n.jsx)(t.code,{children:"latest"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"eth_getTransactionCount \u2705"}),"\n",(0,n.jsx)(t.li,{children:"eth_getBalance"}),"\n",(0,n.jsx)(t.li,{children:"eth_getCode"}),"\n",(0,n.jsx)(t.li,{children:"eth_getStorageAt"}),"\n",(0,n.jsx)(t.li,{children:"eth_call"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Note: filter related methods also not support ",(0,n.jsx)(t.code,{children:"pending"})," tag"]}),"\n",(0,n.jsxs)(t.h3,{id:"eth_sendrawtransaction-errors",children:[(0,n.jsx)(t.code,{children:"eth_sendRawTransaction"})," errors"]}),"\n",(0,n.jsxs)(t.p,{children:["The returned error message of ",(0,n.jsx)(t.code,{children:"eth_sendRawTransaction"})," is different from Ethereum. The following is the error message returned by Conflux client:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"tx already exist\\""\n    }\n  }\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The possible errors are same with ",(0,n.jsx)(t.a,{href:"/zh-CN/docs/core/build/json-rpc/rpc-behaviour/cfx_sendTransaction-errors",children:"cfx_sendTransaction errors"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"data-verifiability",children:"Data verifiability"}),"\n",(0,n.jsx)(t.p,{children:"Below fields can not guarantee the verifiability"}),"\n",(0,n.jsx)(t.h3,{id:"block",children:"Block"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"hash"}),"\n",(0,n.jsx)(t.li,{children:"stateRoot"}),"\n",(0,n.jsx)(t.li,{children:"receiptsRoot"}),"\n",(0,n.jsx)(t.li,{children:"transactionsRoot"}),"\n",(0,n.jsx)(t.li,{children:"totalDifficulty"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"receipt",children:"Receipt"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"logsBloom"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"pubsub",children:"pub/sub"}),"\n",(0,n.jsxs)(t.p,{children:["Starting from v2.1.0 ",(0,n.jsx)(t.code,{children:"newHeads"})," and ",(0,n.jsx)(t.code,{children:"logs"})," is supported"]}),"\n",(0,n.jsx)(t.h2,{id:"eth-rpc-docs",children:"ETH RPC docs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/ethereum/eth1.0-apis/assembled-spec/openrpc.json&uiSchema%5BappBar%5D%5Bui:splitView%5D=false&uiSchema%5BappBar%5D%5Bui:input%5D=false&uiSchema%5BappBar%5D%5Bui:examplesDropdown%5D=false",children:"Ethereum JSON-RPC Specification"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ethereum/execution-apis",children:"ethereum/execution-apis"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://infura.io/docs/ethereum#tag/JSON-RPC-Methods",children:"Infura JSON-RPC doc"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://eth.wiki/json-rpc/API",children:"eth RPC wiki"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://geth.ethereum.org/docs/rpc/server",children:"geth RPC doc"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://openethereum.github.io/JSONRPC",children:"Parity RPC doc"})}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},18679:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(36905);const s={tabItem:"tabItem_Ymn6"};var d=r(85893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},73992:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),s=r(36905),d=r(72957),i=r(16550),l=r(81270),c=r(75238),a=r(33609),h=r(92560);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,a.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.k6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(d),(0,n.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,d=x(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[a,o]=u({queryString:r,groupId:s}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,d]=(0,h.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:s}),m=(()=>{const e=a??p;return j({value:e,tabValues:d})?e:null})();(0,l.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),b(e)}),[o,b,d]),tabValues:d}}var b=r(51048);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function g(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.o5)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),s=l[r].value;s!==n&&(a(t),i(s))},o=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:o,onClick:h,...d,className:(0,s.Z)("tabs__item",m.tabItem,d?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const d=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=d.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:d.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function _(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,f.jsx)(_,{...e,children:o(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(67294);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);