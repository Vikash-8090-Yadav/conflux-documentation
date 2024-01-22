"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3050],{4914:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(85893),n=t(11151);const i={sidebar_position:3,title:"Transaction Fee",displayed_sidebar:"coreSidebar",keywords:["transaction","gas","storage collateral"]},o=void 0,r={id:"core/core-space-basics/transactions/transaction-fee",title:"Transaction Fee",description:"In the Conflux Core Space, transactions are processed by miners who charge a fee for their service. This fee incentivises miners to participate in the network and keep it running smoothly. The fees are paid in CFX and are specified by the transaction initiator through the gas, gasPrice and storageLimit fields in the transaction.",source:"@site/docs/core/core-space-basics/transactions/transaction-fee.md",sourceDirName:"core/core-space-basics/transactions",slug:"/core/core-space-basics/transactions/transaction-fee",permalink:"/docs/core/core-space-basics/transactions/transaction-fee",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/core-space-basics/transactions/transaction-fee.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Transaction Fee",displayed_sidebar:"coreSidebar",keywords:["transaction","gas","storage collateral"]},sidebar:"coreSidebar",previous:{title:"Encoding & Signing",permalink:"/docs/core/core-space-basics/transactions/encoding-signning"},next:{title:"Nonce Management",permalink:"/docs/core/core-space-basics/transactions/nonce"}},c={},d=[{value:"Gas Fee in Transactions",id:"gas-fee-in-transactions",level:2},{value:"How to Set <code>gasPrice</code> field",id:"how-to-set-gasprice-field",level:3},{value:"Speeding up a transaction",id:"speeding-up-a-transaction",level:4},{value:"How to Set <code>gas</code> field",id:"how-to-set-gas-field",level:3},{value:"Storage Collateral",id:"storage-collateral",level:2},{value:"FAQs",id:"faqs",level:2},{value:"What Happens if the Set <code>gas</code> Value is Too Low?",id:"what-happens-if-the-set-gas-value-is-too-low",level:3},{value:"If the Set <code>gas</code> Value is Too High, Will Extra Gas Be Charged?",id:"if-the-set-gas-value-is-too-high-will-extra-gas-be-charged",level:3},{value:"What Occurs if the <code>storageLimit</code> is Set Too Low?",id:"what-occurs-if-the-storagelimit-is-set-too-low",level:3},{value:"If the storageLimit is Set Too High, Will Extra Charges be Incurred?",id:"if-the-storagelimit-is-set-too-high-will-extra-charges-be-incurred",level:3},{value:"What is the Relationship Between <code>gas</code> and <code>storageLimit</code>?",id:"what-is-the-relationship-between-gas-and-storagelimit",level:3},{value:"Reasons for Transaction Failure Despite Using <code>gas</code> Returned from <code>cfx_estimateGasAndCollateral</code>",id:"reasons-for-transaction-failure-despite-using-gas-returned-from-cfx_estimategasandcollateral",level:3},{value:"What are the Costs for Gas and Storage in Transactions?",id:"what-are-the-costs-for-gas-and-storage-in-transactions",level:3},{value:"How to calculate the gas fee actually used in the transaction?",id:"how-to-calculate-the-gas-fee-actually-used-in-the-transaction",level:3},{value:"How to know the amount of gas and storage used by a transaction?",id:"how-to-know-the-amount-of-gas-and-storage-used-by-a-transaction",level:3},{value:"Why has the balance not changed after interacting with a contract and the gas fee is paid for this transaction?",id:"why-has-the-balance-not-changed-after-interacting-with-a-contract-and-the-gas-fee-is-paid-for-this-transaction",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["In the Conflux Core Space, transactions are processed by miners who charge a fee for their service. This fee incentivises miners to participate in the network and keep it running smoothly. The fees are paid in CFX and are specified by the transaction initiator through the ",(0,a.jsx)(s.code,{children:"gas"}),", ",(0,a.jsx)(s.code,{children:"gasPrice"})," and ",(0,a.jsx)(s.code,{children:"storageLimit"})," fields in the transaction."]}),"\n",(0,a.jsx)(s.h2,{id:"gas-fee-in-transactions",children:"Gas Fee in Transactions"}),"\n",(0,a.jsxs)(s.p,{children:["The gas fee for a transaction in Conflux is determined by two key fields: ",(0,a.jsx)(s.code,{children:"gas"})," and ",(0,a.jsx)(s.code,{children:"gasPrice"}),"."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"gas"})}),": This field specifies the maximum amount of computing power that a transaction can consume."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"gasPrice"})}),": Indicates your willingness to pay per unit of computing power."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["The actual gas cost is calculated as ",(0,a.jsx)(s.code,{children:"gasCharged"})," multiplied by ",(0,a.jsx)(s.code,{children:"gasPrice"}),". It's important to note that ",(0,a.jsx)(s.code,{children:"gasCharged"})," will not exceed the limit set by the ",(0,a.jsx)(s.code,{children:"gas"})," field."]}),"\n",(0,a.jsxs)(s.p,{children:["For more detailed information about gas and its calculation in Conflux, please visit our ",(0,a.jsx)(s.a,{href:"/docs/general/conflux-basics/gas",children:"detailed documentation on gas"}),"."]}),"\n",(0,a.jsxs)(s.h3,{id:"how-to-set-gasprice-field",children:["How to Set ",(0,a.jsx)(s.code,{children:"gasPrice"})," field"]}),"\n",(0,a.jsx)(s.p,{children:"The Conflux consensus doesn't set a limit for transaction gas price and the minimum gas price depends on the miners' setting. Here are the minimum gas price settings of Confura, the public RPC endpoints supported by Conflux foundation:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Core space: 1 GDrip"}),"\n",(0,a.jsx)(s.li,{children:"eSpace: 20 GDrip"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Besides, it is recommended to set gas price based on Core space / eSpace RPC return value:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["core space: ",(0,a.jsx)(s.a,{href:"/docs/core/build/json-rpc/cfx-namespace#cfx_gasprice",children:(0,a.jsx)(s.code,{children:"cfx_gasPrice"})})]}),"\n",(0,a.jsxs)(s.li,{children:["eSpace: ",(0,a.jsx)(s.code,{children:"eth_gasPrice"})]}),"\n"]}),"\n",(0,a.jsx)(s.h4,{id:"speeding-up-a-transaction",children:"Speeding up a transaction"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"gasPrice"})," affects the speed at which a transaction is included in a block. Generally, the higher the ",(0,a.jsx)(s.code,{children:"gasPrice"}),", the faster the transaction is likely to be mined. However, a higher ",(0,a.jsx)(s.code,{children:"gasPrice"})," also means higher transaction fees."]}),"\n",(0,a.jsxs)(s.p,{children:["In situations of network congestion, a transaction may experience delays in being mined and added to the blockchain. In such cases, it is advisable to increase the ",(0,a.jsx)(s.code,{children:"gasPrice"})," to expedite the transaction. The gas station in the upper right corner of Scan can be used to check the current gas price situation on the network."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:t(59754).Z+"",width:"397",height:"328"})}),"\n",(0,a.jsxs)(s.p,{children:["Using the ",(0,a.jsx)(s.strong,{children:"High"})," value for ",(0,a.jsx)(s.code,{children:"gasPrice"})," corresponds to obtaining the fastest transaction processing speed. For transactions that have already been sent, it is possible to increase the ",(0,a.jsx)(s.code,{children:"gasPrice"})," and resend the transaction to replace the previous one."]}),"\n",(0,a.jsxs)(s.h3,{id:"how-to-set-gas-field",children:["How to Set ",(0,a.jsx)(s.code,{children:"gas"})," field"]}),"\n",(0,a.jsx)(s.p,{children:"For regular CFX transfers, setting the gas to 21,000 is sufficient."}),"\n",(0,a.jsx)(s.p,{children:"For contract interactions, it is recommended to set gas based on the return value of core space / espace RPC:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Core space: ",(0,a.jsx)(s.code,{children:"gasLimit"})," field of ",(0,a.jsx)(s.a,{href:"/docs/core/build/json-rpc/cfx-namespace/#cfx_estimategasandcollateral",children:(0,a.jsx)(s.code,{children:"cfx_estimateGasAndCollateral"})})]}),"\n",(0,a.jsxs)(s.li,{children:["eSpace: ",(0,a.jsx)(s.code,{children:"eth_estimateGas"})]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["These methods simulate the execution of the transaction and return the estimated amount of gas used for the transaction. Actually, in most cases, the value ",(0,a.jsx)(s.code,{children:"gasUsed"})," returned by ",(0,a.jsx)(s.a,{href:"/docs/core/build/json-rpc/cfx-namespace/#cfx_estimategasandcollateral",children:(0,a.jsx)(s.code,{children:"cfx_estimateGasAndCollateral"})})," is accurate, but it is not recommended to use ",(0,a.jsx)(s.code,{children:"gasUsed"})," due to two main reasons:"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Due to ",(0,a.jsx)(s.a,{href:"https://eips.ethereum.org/EIPS/eip-150",children:"EIP-150"}),", setting the gas to the actual gas consumption may often lead to transaction failure."]}),"\n",(0,a.jsx)(s.li,{children:"The result is based on the current blockchain state during the simulation, but the actual execution states may be different."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"gasLimit"})," field typically equals ",(0,a.jsx)(s.code,{children:"1.3 * gasUsed"}),". This ensures that the gas limit is sufficient for the transaction, and any excessive gas fee will be refunded."]}),"\n",(0,a.jsx)(s.h2,{id:"storage-collateral",children:"Storage Collateral"}),"\n",(0,a.jsx)(s.p,{children:"In addition to transaction fees, the Conflux network requires the pledging of CFX for occupying new storage space or modifying existed storage during a transaction. The pledged CFX generates a 4% annual interest, which is paid to miners to subsidise their storage costs. When the occupied space is released or modified by others, the pledged CFX is returned."}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"storageLimit"})," field specifies the upper limit of the storage space that can be occupied by a transaction. And it is recommended to use the ",(0,a.jsx)(s.code,{children:"storageCollaterized"})," field of returned value from ",(0,a.jsx)(s.a,{href:"/docs/core/build/json-rpc/cfx-namespace#cfx_estimategasandcollateral",children:(0,a.jsx)(s.code,{children:"cfx_estimateGasAndCollateral"})})," as the ",(0,a.jsx)(s.code,{children:"storageLimit"})," field."]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["Refer to ",(0,a.jsx)(s.a,{href:"/docs/core/core-space-basics/storage",children:"storage"})," for more information."]})}),"\n",(0,a.jsxs)(s.p,{children:["When sending a transaction, the sender must ensure that there is sufficient balance to cover the ",(0,a.jsx)(s.code,{children:"value + storageLimit * (10^18/1024) + gas * gasPrice"}),". If the balance is insufficient, the transaction will be rejected by nodes."]}),"\n",(0,a.jsxs)(s.p,{children:["If the specified ",(0,a.jsx)(s.code,{children:"storageLimit"})," exceeds the actual storage occupied by the transaction, ",(0,a.jsx)(s.strong,{children:"no additional fees will be incurred"}),", and the excess will be refunded."]}),"\n",(0,a.jsxs)(s.p,{children:["If the transaction is ",(0,a.jsx)(s.a,{href:"/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control",children:"sponsored"}),", the sender only needs to ensure sufficient funds for the value cost."]}),"\n",(0,a.jsxs)(s.p,{children:["The current SDK provides methods to automatically set reasonable values for ",(0,a.jsx)(s.code,{children:"gas"}),", ",(0,a.jsx)(s.code,{children:"storageLimit"}),", and ",(0,a.jsx)(s.code,{children:"gasPrice"}),", but users can also specify these values manually."]}),"\n",(0,a.jsx)(s.h2,{id:"faqs",children:"FAQs"}),"\n",(0,a.jsxs)(s.h3,{id:"what-happens-if-the-set-gas-value-is-too-low",children:["What Happens if the Set ",(0,a.jsx)(s.code,{children:"gas"})," Value is Too Low?"]}),"\n",(0,a.jsx)(s.p,{children:"If the set gas value is too low, the transaction may fail to execute."}),"\n",(0,a.jsxs)(s.h3,{id:"if-the-set-gas-value-is-too-high-will-extra-gas-be-charged",children:["If the Set ",(0,a.jsx)(s.code,{children:"gas"})," Value is Too High, Will Extra Gas Be Charged?"]}),"\n",(0,a.jsx)(s.p,{children:"If the set gas value is too high, the excess gas will be refunded, but only up to a maximum of one-fourth of the gas limit. For example, if the transaction's gas limit is 100000, but only 50000 is actually consumed during execution, only 25000 gas fees will be refunded."}),"\n",(0,a.jsxs)(s.h3,{id:"what-occurs-if-the-storagelimit-is-set-too-low",children:["What Occurs if the ",(0,a.jsx)(s.code,{children:"storageLimit"})," is Set Too Low?"]}),"\n",(0,a.jsx)(s.p,{children:"It will result in transaction execution failure."}),"\n",(0,a.jsx)(s.h3,{id:"if-the-storagelimit-is-set-too-high-will-extra-charges-be-incurred",children:"If the storageLimit is Set Too High, Will Extra Charges be Incurred?"}),"\n",(0,a.jsx)(s.p,{children:"No, the excess will be refunded."}),"\n",(0,a.jsxs)(s.h3,{id:"what-is-the-relationship-between-gas-and-storagelimit",children:["What is the Relationship Between ",(0,a.jsx)(s.code,{children:"gas"})," and ",(0,a.jsx)(s.code,{children:"storageLimit"}),"?"]}),"\n",(0,a.jsx)(s.p,{children:"There is no relationship between the two."}),"\n",(0,a.jsxs)(s.h3,{id:"reasons-for-transaction-failure-despite-using-gas-returned-from-cfx_estimategasandcollateral",children:["Reasons for Transaction Failure Despite Using ",(0,a.jsx)(s.code,{children:"gas"})," Returned from ",(0,a.jsx)(s.code,{children:"cfx_estimateGasAndCollateral"})]}),"\n",(0,a.jsxs)(s.p,{children:["When setting the ",(0,a.jsx)(s.code,{children:"gas"})," amount for a transaction based on the estimate from ",(0,a.jsx)(s.code,{children:"cfx_estimateGasAndCollateral"}),", there are key considerations to prevent failure:"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Correct Field Usage"}),": Ensure that the ",(0,a.jsx)(s.code,{children:"gasLimit"})," provided by ",(0,a.jsx)(s.code,{children:"cfx_estimateGasAndCollateral"})," is utilized, not the ",(0,a.jsx)(s.code,{children:"gasUsed"})," field."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Dynamic Execution Environments"}),": The estimation method simulates execution based on the current state of the blockchain at the time of the call. However, the actual execution environment may change, potentially requiring more gas than estimated. To mitigate the risk of failure due to these variations, you can set ",(0,a.jsx)(s.code,{children:"gas"})," that is higher than the estimated amount."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"what-are-the-costs-for-gas-and-storage-in-transactions",children:"What are the Costs for Gas and Storage in Transactions?"}),"\n",(0,a.jsxs)(s.p,{children:["When sending a transaction, you incur a gas fee and a storage fee. The gas fee, necessary for transaction processing, is calculated using the formula: ",(0,a.jsx)(s.code,{children:"gasFee"})," = ",(0,a.jsx)(s.code,{children:"gasPrice"})," * ",(0,a.jsx)(s.code,{children:"gasCharged"}),". This fee compensates miners for transaction validation and execution."]}),"\n",(0,a.jsx)(s.p,{children:"In addition to the gas fee, transactions may utilize new storage space. While there's no direct charge for this storage use, it necessitates staking a certain amount of CFX. This staked CFX, proportional to the storage used, is refunded once the storage is no longer needed. The rate is 1 CFX per 1024 bytes of storage."}),"\n",(0,a.jsx)(s.h3,{id:"how-to-calculate-the-gas-fee-actually-used-in-the-transaction",children:"How to calculate the gas fee actually used in the transaction?"}),"\n",(0,a.jsxs)(s.p,{children:["On ConfluxScan, users can view gas usage, gas price, gas fee, and other relevant information of a transaction, which is obtained through ",(0,a.jsx)(s.code,{children:"cfx_getTransactionReceipt"}),": ",(0,a.jsx)(s.code,{children:"gasFee = gasCharged * gasPrice"}),", but the gasCharged is not necessarily equal to gasUsed.\nThere is a rule in Conflux: ",(0,a.jsx)(s.code,{children:"gas"})," is used to set the upper limit of gas that can be used in a transaction. It must be greater than the actual gas used value (gasUsed).\nFor the excessive part, at most, only 1/4 will be refunded: if the excessive part is less than 1/4 of the gasLimit, all will be refunded, but if it is greater than 1/4, only 1/4 will be returned. Hence, try to give an accurate gas value when sending a transaction."]}),"\n",(0,a.jsx)(s.h3,{id:"how-to-know-the-amount-of-gas-and-storage-used-by-a-transaction",children:"How to know the amount of gas and storage used by a transaction?"}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.a,{href:"/docs/core/build/json-rpc/cfx-namespace/#cfx_estimategasandcollateral",children:(0,a.jsx)(s.code,{children:"cfx_estimateGasAndCollateral"})})," RPC can be used to estimate the amount of gas and storage that a transaction needs to use, but the estimation is not 100% accurate.\nHence, the returned gas can be adjusted manually, such as multiplying by ",(0,a.jsx)(s.code,{children:"1.3"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"why-has-the-balance-not-changed-after-interacting-with-a-contract-and-the-gas-fee-is-paid-for-this-transaction",children:"Why has the balance not changed after interacting with a contract and the gas fee is paid for this transaction?"}),"\n",(0,a.jsx)(s.p,{children:"The Conflux network has a sponsor mechanism. If a contract has a sponsor, the gas and storage fees for this contract\u2019s interactions will be paid by the sponsor."})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},59754:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t.p+"assets/images/scan-gas-price2-506fe2766a3293388eb563fd9f329898.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var a=t(67294);const n={},i=a.createContext(n);function o(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);