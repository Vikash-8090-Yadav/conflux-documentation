"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7518],{75543:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(85893),A=t(11151),r=t(73992),s=t(18679);const i={title:"\u4ea4\u6613",sidebar_position:9,keywords:["transaction"],displayed_sidebar:"generalSidebar"},o=void 0,c={id:"general/conflux-basics/transactions",title:"\u4ea4\u6613",description:"\u4e00\u7b14\u4ea4\u6613\u662f\u7531\u5177\u6709Conflux\u8d26\u6237\u7684\u5916\u90e8\u53c2\u4e0e\u8005\u521b\u5efa\u7684\u5355\u4e00\u6307\u4ee4\uff0c\u8be5\u6307\u4ee4\u4f7f\u7528\u53d1\u9001\u8005\u8d26\u6237\u7684\u79c1\u94a5\u8fdb\u884c\u4e86\u6570\u5b57\u7b7e\u540d\u3002 A transaction can involve a simple transfer of CFX (the native currency of Conflux), a transfer of tokens (such as ERC20 or ERC721), a deployment of a new smart contract, or an execution of a function on an existing smart contract. \u4ea4\u6613\u662f\u5728\u533a\u5757\u94fe\u4e0a\u5b58\u50a8\u6216\u66f4\u65b0\u6570\u636e\u7684\u552f\u4e00\u65b9\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/transactions.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/transactions",permalink:"/zh-CN/docs/general/conflux-basics/transactions",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u4ea4\u6613",sidebar_position:9,keywords:["transaction"],displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u667a\u80fd\u5408\u7ea6",permalink:"/zh-CN/docs/general/conflux-basics/contracts"},next:{title:"\u8d26\u6237\u548c\u5730\u5740",permalink:"/zh-CN/docs/general/conflux-basics/accounts"}},l={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"What&#39;s a Transaction?",id:"whats-a-transaction",level:2},{value:"Gas Fee",id:"gas-fee",level:2},{value:"\u4ea4\u6613\u751f\u547d\u5468\u671f",id:"\u4ea4\u6613\u751f\u547d\u5468\u671f",level:2},{value:"Transaction Status",id:"transaction-status",level:2},{value:"Details",id:"details",level:2},{value:"Intro Video",id:"intro-video",level:2}];function u(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,A.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u4e00\u7b14\u4ea4\u6613\u662f\u7531\u5177\u6709Conflux\u8d26\u6237\u7684\u5916\u90e8\u53c2\u4e0e\u8005\u521b\u5efa\u7684\u5355\u4e00\u6307\u4ee4\uff0c\u8be5\u6307\u4ee4\u4f7f\u7528\u53d1\u9001\u8005\u8d26\u6237\u7684\u79c1\u94a5\u8fdb\u884c\u4e86\u6570\u5b57\u7b7e\u540d\u3002 A transaction can involve a ",(0,a.jsx)(n.strong,{children:"simple transfer of CFX"})," (the native currency of Conflux), a ",(0,a.jsx)(n.strong,{children:"transfer of tokens"})," (such as ERC20 or ERC721), a ",(0,a.jsx)(n.strong,{children:"deployment of a new smart contract"}),", or an ",(0,a.jsx)(n.strong,{children:"execution of a function on an existing smart contract"}),". \u4ea4\u6613\u662f\u5728\u533a\u5757\u94fe\u4e0a\u5b58\u50a8\u6216\u66f4\u65b0\u6570\u636e\u7684\u552f\u4e00\u65b9\u5f0f\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,a.jsxs)(n.p,{children:["To help you better understand this page, we recommend you first read ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/general/conflux-basics/accounts",children:"Accounts"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"whats-a-transaction",children:"What's a Transaction?"}),"\n",(0,a.jsx)(n.p,{children:"An transaction refers to an action initiated by an externally-owned account, in other words an account managed by a human, not a contract. For example, if Bob sends Alice 1 CFX, Bob's account must be debited and Alice's must be credited. This state-changing action takes place within a transaction."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(19626).Z+"",width:"1080",height:"607"})}),"\n",(0,a.jsx)(n.p,{children:"Transactions, which change the state of the EVM, need to be broadcast to the whole network. Any node can broadcast a request for a transaction to be executed on the EVM; after this happens, a validator will execute the transaction and propagate the resulting state change to the rest of the network."}),"\n",(0,a.jsx)(n.p,{children:"A submitted transaction includes the following information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"from \u2013 the address of the sender, that will be signing the transaction. This will be an externally-owned account as contract accounts cannot send transactions."}),"\n",(0,a.jsx)(n.li,{children:"recipient \u2013 the receiving address (if an externally-owned account, the transaction will transfer value. If a contract account, the transaction will execute the contract code)"}),"\n",(0,a.jsx)(n.li,{children:"signature \u2013 the identifier of the sender. This is generated when the sender's private key signs the transaction and confirms the sender has authorized this transaction"}),"\n",(0,a.jsx)(n.li,{children:"nonce - a sequentially incrementing counter which indicates the transaction number from the account"}),"\n",(0,a.jsx)(n.li,{children:"value \u2013 amount of CFX to transfer from sender to recipient (denominated in Drip, where 1CFX equals 1e+18Drip)"}),"\n",(0,a.jsx)(n.li,{children:"input data \u2013 optional field to include arbitrary data"}),"\n",(0,a.jsx)(n.li,{children:"gasLimit \u2013 the maximum amount of gas units that can be consumed by the transaction. The EVM specifies the units of gas required by each computational step"}),"\n",(0,a.jsx)(n.li,{children:"gasPrice - the price of the consumed gas to be included as a tip to the validator"}),"\n",(0,a.jsx)(n.li,{children:"chainId - the id of the blockchain, which is used to prevent replay attacks"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The Core Space transaction includes the following additional information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"storageLimit - the maximum amount of storage space that can be consumed by the transaction."}),"\n",(0,a.jsx)(n.li,{children:"epochHeight - the epoch number of the blockchain, which is used to sets an expiration time for the transaction"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"gas-fee",children:"Gas Fee"}),"\n",(0,a.jsx)(n.p,{children:"Transactions require a fee and must be included in a validated block. The fee is paid in CFX and is calculated by multiplying the gasCharged by the gasPrice."}),"\n",(0,a.jsx)(n.p,{children:"Gas fees are used to compensate miners, motivating them to package, validate blocks, and maintain the security of the blockchain."}),"\n",(0,a.jsxs)(n.p,{children:["For specific calculation details, please refer to ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/general/conflux-basics/gas",children:"Transaction Fee"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"\u4ea4\u6613\u751f\u547d\u5468\u671f",children:"\u4ea4\u6613\u751f\u547d\u5468\u671f"}),"\n",(0,a.jsx)(n.p,{children:"Once the transaction has been submitted the following happens:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"A transaction hash is cryptographically generated: 0x97d99bc7729211111a21b12c933c949d4f31684f1d6954ff477d0477538ff017"}),"\n",(0,a.jsx)(n.li,{children:"The transaction is then broadcasted to the network and added to a transaction pool consisting of all other pending network transactions."}),"\n",(0,a.jsx)(n.li,{children:'A validator must pick your transaction and include it in a block in order to verify the transaction and consider it "successful".'}),"\n",(0,a.jsx)(n.li,{children:'As time passes the block containing your transaction will be upgraded to "justified" then "finalized". These upgrades make it much more certain that your transaction was successful and will never be altered. Once a block is "finalized" it could only ever be changed by a network level attack that would cost many billions of dollars.'}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For a more detailed understanding of the transaction lifecycle, you can refer to ",(0,a.jsx)(n.a,{href:"/docs/core/core-space-basics/transactions/lifecycle.md",children:"Transaction Lifecycle"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"transaction-status",children:"Transaction Status"}),"\n",(0,a.jsxs)(n.p,{children:["The transactions that are included in a block will eventually be executed, generating a ",(0,a.jsxs)(n.a,{href:"/docs/core/core-space-basics/transactions/receipt.md",children:["transaction ",(0,a.jsx)(n.strong,{children:"Receipt"})]}),". However, not all transactions will be executed successfully; typically, transactions can have two states: ",(0,a.jsx)(n.strong,{children:"Success"})," or ",(0,a.jsx)(n.strong,{children:"Failure"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For eSpace transactions, you can determine the execution status through the ",(0,a.jsx)(n.strong,{children:"status"})," field in the Receipt, where ",(0,a.jsx)(n.strong,{children:"1 represents success, and 0 represents failure"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For Core transactions, you can check the execution status through the ",(0,a.jsx)(n.strong,{children:"outcomeStatus"})," field in the Receipt, where ",(0,a.jsx)(n.strong,{children:"0 represents success, and 1 represents failure"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"In addition to this, the Receipt also includes other information about the transaction execution, such as block information and event details."}),"\n",(0,a.jsx)(n.h2,{id:"details",children:"Details"}),"\n",(0,a.jsxs)(n.p,{children:["If you want to learn details about transactions, you can refer to the transaction explanation in the ",(0,a.jsx)(n.a,{href:"/docs/core/core-space-basics/transactions/overview.md",children:"Core Space"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"intro-video",children:"Intro Video"}),"\n","\n","\n",(0,a.jsx)(r.Z,{children:(0,a.jsx)(s.Z,{value:"youtube",label:"Transactions on Conflux Network",children:(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GIeD2khbbXs?si=cTRZo6DalLkLguXi",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]})}function h(e={}){const{wrapper:n}={...(0,A.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},18679:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(36905);const A={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(A.tabItem,s),hidden:t,children:n})}},73992:(e,n,t)=>{t.d(n,{Z:()=>D});var a=t(67294),A=t(36905),r=t(72957),s=t(16550),i=t(81270),o=t(75238),c=t(33609),l=t(92560);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:A}}=e;return{value:n,label:t,attributes:a,default:A}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const A=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(A.location.search);n.set(r,e),A.replace({...A.location,search:n.toString()})}),[r,A])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:A}=e,r=u(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=f({queryString:t,groupId:A}),[g,w]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[A,r]=(0,l.Nk)(t);return[A,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:A}),p=(()=>{const e=c??g;return h({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{p&&o(p)}),[p]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),w(e)}),[d,w,r]),tabValues:r}}var w=t(51048);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),l=e=>{const n=e.currentTarget,t=o.indexOf(n),A=i[t].value;A!==a&&(c(n),s(A))},d=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,A.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:l,...r,className:(0,A.Z)("tabs__item",p.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function m(e){let{lazy:n,children:t,selectedValue:A}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===A));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==A})))})}function v(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,A.Z)("tabs-container",p.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(m,{...e,...n})]})}function D(e){const n=(0,w.Z)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(n))}},19626:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(67294);const A={},r=a.createContext(A);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);