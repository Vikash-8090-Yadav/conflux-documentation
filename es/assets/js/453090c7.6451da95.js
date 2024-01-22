"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3385],{99642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=t(85893),s=t(11151),i=t(73992),r=t(18679);const o={title:"Transactions",sidebar_position:9,keywords:["transaction"],displayed_sidebar:"generalSidebar"},c=void 0,l={id:"general/conflux-basics/transactions",title:"Transactions",description:"This section introduces transaction concepts from a high level. For more details on core space transactions, please refer to core space transactions. For espace transactions, you may find it helpful to refer to Ethereum transactions as they are almost exactly same in format and functionality.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/conflux-basics/transactions.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/transactions",permalink:"/es/docs/general/conflux-basics/transactions",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Transactions",sidebar_position:9,keywords:["transaction"],displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Contracts",permalink:"/es/docs/general/conflux-basics/contracts"},next:{title:"Cuentas y Direcciones",permalink:"/es/docs/general/conflux-basics/accounts"}},d={},h=[{value:"Conflux Transaction Video",id:"conflux-transaction-video",level:2},{value:"Concept of Transaction",id:"concept-of-transaction",level:2},{value:"Transaction Fields",id:"transaction-fields",level:2},{value:"Transaction Lifecycle",id:"transaction-lifecycle",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This section introduces transaction concepts from a high level. For more details on core space transactions, please refer to ",(0,a.jsx)(n.a,{href:"../../core/core-space-basics/core-transactions.md",children:"core space transactions"}),". For espace transactions, you may find it helpful to refer to ",(0,a.jsx)(n.a,{href:"https://ethereum.org/developers/docs/transactions/",children:"Ethereum transactions"})," as they are almost exactly same in format and functionality."]})}),"\n",(0,a.jsx)(n.h2,{id:"conflux-transaction-video",children:"Conflux Transaction Video"}),"\n",(0,a.jsx)(n.p,{children:"To learn about transactions in Conflux Network you can start with the following video:"}),"\n","\n","\n",(0,a.jsx)(i.Z,{children:(0,a.jsx)(r.Z,{value:"youtube",label:"Transactions on Conflux Network",children:(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GIeD2khbbXs?si=cTRZo6DalLkLguXi",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})}),"\n",(0,a.jsx)(n.h2,{id:"concept-of-transaction",children:"Concept of Transaction"}),"\n",(0,a.jsx)(n.p,{children:"A transaction is a single instruction composed by an external actor with a Conflux account, and this instruction is cryptographically signed using the sender account\u2019s private key. A transaction can involve a simple transfer of CFX (the native currency of Conflux), a transfer of tokens (such as ERC20 or ERC721), a deployment of a new smart contract, or an execution of a function on an existing smart contract. Transactions are the only way to store or update data on the blockchain."}),"\n",(0,a.jsx)(n.h2,{id:"transaction-fields",children:"Transaction Fields"}),"\n",(0,a.jsx)(n.p,{children:"Generally speaking, a transaction contains:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Who send the transaction: A ",(0,a.jsx)(n.code,{children:"from"})," field in an unsigned transaction or the transaction signature fields indicating the signer. This tells the network who is responsible for initiating the transaction and who will pay for the fees."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"What this transaction will do, including:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Who will be the transaction receiver or which smart contract to interact with(",(0,a.jsx)(n.code,{children:"to"})," field). This specifies the destination address of the transaction, which can be either user account or a smart contract that can execute some logic or empty to create a contract."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["How much native token will be send(",(0,a.jsx)(n.code,{children:"value"})," field). This indicates how much CFX (the native token of Conflux) will be transferred from the sender to the receiver. If the receiver is a smart contract, this value can also be used as an input parameter for its logic."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["How to interact with a smart contract(",(0,a.jsx)(n.code,{children:"data"})," field). This contains additional information for calling a smart contract function or deploying a new smart contract. It can encode the name and arguments of the function to be invoked or the bytecode of the new contract to be created."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Transaction fee information, including:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Field(s) indicating base transaction fee (",(0,a.jsx)(n.code,{children:"gas"})," in both spaces, and extra ",(0,a.jsx)(n.code,{children:"storageLimit"})," field in core space). These fields is determine according to how much computational resources are required to execute the transaction and (in core space) how much storage space are occupied by its effects."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:['Field indicating how much "tip" sender is willing to pay to miner(',(0,a.jsx)(n.code,{children:"gasPrice"})," field). This field allows senders to adjust their priority in getting their transactions packed by miners. A higher ",(0,a.jsx)(n.code,{children:"gasPrice"})," means a higher chance of being included in a block sooner."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:['Field indicating when or where the transaction is "valid" (',(0,a.jsx)(n.code,{children:"chainId"}),", ",(0,a.jsx)(n.code,{children:"nonce"})," in both spaces, and ",(0,a.jsx)(n.code,{children:"epochHeight"})," in core space). ",(0,a.jsx)(n.code,{children:"chainId"})," prevents a transaction being executed on another chain and ",(0,a.jsx)(n.code,{children:"nonce"})," field ensures the sent transactions are executed in the expected order. ",(0,a.jsx)(n.code,{children:"epochHeight"}),' field sets an expiration time for the transaction based on the epoch number (a concept similar to "block number" in Ethereum). A transaction can only be executed within an epoch range associated with ',(0,a.jsx)(n.code,{children:"epochHeight"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Transaction fields are slightly different between ",(0,a.jsx)(n.a,{href:"/es/docs/general/conflux-basics/spaces",children:"spaces"}),". Core space transactions follow the definition of ",(0,a.jsx)(n.a,{href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf",children:"Conflux Protocol"}),". Espace transactions follow the ",(0,a.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-155",children:"EIP-155"})," specification."]})}),"\n",(0,a.jsx)(n.h2,{id:"transaction-lifecycle",children:"Transaction Lifecycle"}),"\n",(0,a.jsx)(n.p,{children:"Transactions go through several stages from the time they are constructed to the time they are finally confirmed on the chain. A good understanding of these stages will help users and developers better identify problems with sending transactions and ultimately ensure that transactions are successfully confirmed."}),"\n",(0,a.jsx)(n.p,{children:"The following are the main stages of a transaction from construction to confirmation."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Transaction construction"}),': This is the stage where users or developers create a transaction with all the necessary fields and parameters and get it signed. The transaction object can be created using various tools or libraries, such as Fluent Wallet, Conflux SDK, etc. The transaction will be encoded into a hex string as "rawTransaction" before it is sent.']}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Broadcast"}),": This is the stage where users or developers send their signed transaction to a Conflux node via RPC or WebSocket. The node will validate the transaction and broadcast it to other nodes in the network if it passes the validation. The node will also return a transaction hash (a unique identifier) to the sender for tracking purposes."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Packed into a block -> Mined"}),": This is the stage where miners select transactions from their mempool (a pool of pending transactions) and include them in their blocks. Miners will prioritize transactions with higher ",(0,a.jsx)(n.code,{children:"gasPrice"}),". Once a block containing a transaction is mined, it will be propagated to other nodes in the network."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Deferring 5 epochs -> Executed"}),": This is the stage where transactions are executed by nodes after being deferred for 5 epochs (about 5 seconds). This means that nodes will run the logic of the transactions and update their state accordingly. The execution results of each transaction will be recorded in a receipt, which contains information such as status (success or failure), gas used, logs and events emitted by smart contracts and can be retrieved using transaction hash."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Waiting for about 50 epochs -> Confirmed"}),': This is the stage where transactions are confirmed by nodes after being executed for about 50 epochs (about 50 seconds). A transaction is executed does not mean that the status of the transaction will not change anymore. Due to the structure of blockchain, the blockchain may fork or shift the main chain due to the arrival or creation of new blocks, which may revert certain transactions. A confirmed transaction means that it has been included in a "deep" enough block and has a extremely low probability of being reverted.']}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Waiting for PoS chain Finalization -> Finalized"}),": This is the final stage where transactions are finalized after specific PoW block being referenced by Conflux's ",(0,a.jsx)(n.a,{href:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview",children:"PoS chain"}),". Conflux's PoS chain periodically refers a stable PoW block to provide finality for transactions. A finalized transaction means that it has zero probability of being reverted unless the attacker possesses more than 67% of the CFX staked in PoS. It takes approximately 4-5 minutes to finalize a transaction since it is included in a block (after ",(0,a.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-113.md",children:"CIP-113"})," activation)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Transaction",src:t(52571).Z+"",width:"1434",height:"1900"})})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},18679:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(36905);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,r),hidden:t,children:n})}},73992:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),s=t(36905),i=t(72957),r=t(16550),o=t(81270),c=t(75238),l=t(33609),d=t(92560);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,h]=p({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=l??m;return f({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=t(51048);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function w(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==a&&(l(n),r(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(w,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},52571:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/transaction-stages-8bcdab5873c9062a0705324908afa456.bin"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);