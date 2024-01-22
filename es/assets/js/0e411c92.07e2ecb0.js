"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[4609],{55209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(85893),a=t(11151);const o={sidebar_position:7,title:"Why TX is Pending?",keywords:["transaction"],displayed_sidebar:"coreSidebar"},i=void 0,r={id:"core/core-space-basics/transactions/why-transaction-is-pending",title:"Why TX is Pending?",description:"Because today\u2019s blockchain systems may have problems such as low throughput and high entry barriers, it is inevitable that some transactions will not be packaged when sent through the blockchain. Take Conflux as an example, the Conflux network normally produces two blocks per second. After a transaction is successfully sent, it should be packaged and executed within 20 seconds depending on the network congestion level. If the transaction is not packaged for a long time, it\u2019s very likely that something went wrong, and requires the sender to manually intervene.",source:"@site/docs/core/core-space-basics/transactions/why-transaction-is-pending.md",sourceDirName:"core/core-space-basics/transactions",slug:"/core/core-space-basics/transactions/why-transaction-is-pending",permalink:"/es/docs/core/core-space-basics/transactions/why-transaction-is-pending",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Why TX is Pending?",keywords:["transaction"],displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Send Transaction Errors",permalink:"/es/docs/core/core-space-basics/transactions/send-tx-error"},next:{title:"FAQs",permalink:"/es/docs/core/core-space-basics/transactions/faqs"}},c={},d=[{value:"How to find out the reason for a pending transaction",id:"how-to-find-out-the-reason-for-a-pending-transaction",level:2},{value:"Possible Pending Reasons",id:"possible-pending-reasons",level:2},{value:"Wrong Nonce",id:"wrong-nonce",level:3},{value:"Stale Epoch Height",id:"stale-epoch-height",level:3},{value:"Internal Error",id:"internal-error",level:3},{value:"Ready to Pack",id:"ready-to-pack",level:3},{value:"How to solve?",id:"how-to-solve",level:2},{value:"How to set gasPrice correctly",id:"how-to-set-gasprice-correctly",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Because today\u2019s blockchain systems may have problems such as low throughput and high entry barriers, it is inevitable that some transactions will not be packaged when sent through the blockchain. Take Conflux as an example, the Conflux network normally produces two blocks per second. After a transaction ",(0,s.jsx)(n.code,{children:"is successfully sent"}),", it should be packaged and executed within ",(0,s.jsx)(n.code,{children:"20 seconds"})," depending on the network congestion level. If the transaction is not packaged for a long time, it\u2019s very likely that something went wrong, and requires the sender to manually intervene."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tx Pending",src:t(60817).Z+"",width:"350",height:"402"})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-find-out-the-reason-for-a-pending-transaction",children:"How to find out the reason for a pending transaction"}),"\n",(0,s.jsxs)(n.p,{children:["If the pending transaction is successfully inserted into the transaction pool of the node used by ",(0,s.jsx)(n.a,{href:"https://www.confluxscan.io/",children:"Scan"}),", the transaction can be searched by hash on Scan, and the status of the transaction can be seen as ",(0,s.jsx)(n.code,{children:"Pending"})," on the transaction details page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tx Pending",src:t(31821).Z+"",width:"2786",height:"1408"})}),"\n",(0,s.jsxs)(n.p,{children:["At this time, we can go to the ",(0,s.jsx)(n.code,{children:"account details page"})," of the transaction sender, and view the pending transactions of the user through the ",(0,s.jsx)(n.code,{children:"View Pending Txns"})," tab on the account page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tx Pending",src:t(36637).Z+"",width:"2812",height:"1468"})}),"\n",(0,s.jsxs)(n.p,{children:["In this tab, you can see the total number of pending transactions of this user and the earliest pending transactions (up to 10). The most important thing is that you can also see the ",(0,s.jsx)(n.strong,{children:"pending reasons for the first pending transaction"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tx Pending",src:t(64348).Z+"",width:"2826",height:"1286"})}),"\n",(0,s.jsxs)(n.p,{children:["This page uses the RPC method ",(0,s.jsx)(n.a,{href:"../../../core/build/json-rpc/cfx-namespace.md#cfx_getaccountpendingtransactions",children:(0,s.jsx)(n.code,{children:"cfx_getAccountPendingTransactions"})})," to obtain the current pending transaction information of an account."]}),"\n",(0,s.jsx)(n.h2,{id:"possible-pending-reasons",children:"Possible Pending Reasons"}),"\n",(0,s.jsx)(n.p,{children:"There are four possible reasons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Wrong nonce"}),"\n",(0,s.jsx)(n.li,{children:"Stale epoch height"}),"\n",(0,s.jsx)(n.li,{children:"Internal error"}),"\n",(0,s.jsx)(n.li,{children:"Ready to pack"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"wrong-nonce",children:"Wrong Nonce"}),"\n",(0,s.jsx)(n.p,{children:"This kind of error means that the sent transaction used the wrong nonce. Normally, the transaction needs to be executed one by one in the order of nonce. If there are transactions with a smaller nonce pending in the queue or missing, this transaction will wait until all previous transactions are successfully executed."}),"\n",(0,s.jsx)(n.p,{children:"If non-consecutive nonce are used when sending a transaction or if certain transactions in the transaction pool are cleared by garbage collection (GC) during network congestion, it will result in some transactions pending in the transaction pool, unable to be packaged for an extended period."}),"\n",(0,s.jsxs)(n.p,{children:["In this case, we need to ",(0,s.jsx)(n.strong,{children:"resend the transaction with the correct nonce"}),". It should be noted that the pending transaction will be automatically executed after all previous transactions are executed (and the balance is sufficient)."]}),"\n",(0,s.jsx)(n.h3,{id:"stale-epoch-height",children:"Stale Epoch Height"}),"\n",(0,s.jsxs)(n.p,{children:["The error message tells that ",(0,s.jsx)(n.code,{children:"The epoch height of the first tx is too old to be packed. The sender needs to submit a new transaction to update the tx pool."}),". Update the corresponding transaction with a correct ",(0,s.jsx)(n.code,{children:"epochHeight"})," parameter(e.g. use ",(0,s.jsx)(n.code,{children:"cfx_epochNumber"}),") will solve the issue."]}),"\n",(0,s.jsx)(n.h3,{id:"internal-error",children:"Internal Error"}),"\n",(0,s.jsxs)(n.p,{children:["The error message tells that ",(0,s.jsx)(n.code,{children:"The full node internal error. The sender needs to submit a new transaction to update the tx pool."}),". This is typically triggered by certain complex balance setting. Make sure your account has enough balance, then submit a new transaction will solve the issue."]}),"\n",(0,s.jsx)(n.h3,{id:"ready-to-pack",children:"Ready to Pack"}),"\n",(0,s.jsx)(n.p,{children:"This situation means that the transaction itself has reached the conditions that can be packaged, but because the entire network is relatively congested or for other reasons, it has not been packaged."}),"\n",(0,s.jsx)(n.p,{children:"If the transaction is in this state for a long time, the gasPrice of the transaction can be increased appropriately to resend the transaction, which can improve the speed to package and execute a transaction."}),"\n",(0,s.jsx)(n.h2,{id:"how-to-solve",children:"How to solve?"}),"\n",(0,s.jsxs)(n.p,{children:["First make sure your account has enough balance, then if a transaction is pending for a skipped nonce, you should resend the transaction with ",(0,s.jsx)(n.strong,{children:"the correct nonce"}),". If a transaction is pending for other reasons, you can ",(0,s.jsx)(n.strong,{children:"resend the transaction with a higher gasPrice"})," and same nonce."]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-set-gasprice-correctly",children:"How to set gasPrice correctly"}),"\n",(0,s.jsx)(n.p,{children:"The speed to package and execute a transaction is mainly affected by the gasPrice of the transaction. The higher the gasPrice, the faster it is packaged by miners, so it is very important to set the gasPrice correctly."}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace#cfx_gasprice",children:(0,s.jsx)(n.code,{children:"cfx_gasPrice"})})," RPC method of fullnode to get a suggested gasPrice value. This method will give a recommended value based on the gas usage of a certain number of the latest blocks and the gasPrice of the transactions in it."]}),"\n",(0,s.jsx)(n.p,{children:"In the case of network congestion, you can check the current gasPrice situation on Scan's gasPrice panel. Using the highest gasPrice allows you to achieve the fastest transaction processing speed."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(59754).Z+"",width:"397",height:"328"})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},59754:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/scan-gas-price2-506fe2766a3293388eb563fd9f329898.png"},31821:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/scan-pending-detail-02-2e688fd1d0d2ab438274b226aefc545b.png"},36637:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/scan-pending-entry-03-e49e27948df9341d61ad8a37d684b048.png"},64348:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/scan-pending-tx-list-04-44522efa4034f309163b830b27a9e345.png"},60817:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/tx-pending-01-b1f2e9964d8aa9c0d65c697a7db0f236.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(67294);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);