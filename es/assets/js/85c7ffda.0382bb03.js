"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[185],{19686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(85893),i=t(11151);const a={sidebar_position:1,title:"Transaction Fields",displayed_sidebar:"coreSidebar"},r=void 0,o={id:"core/core-space-basics/transactions/tx-fields",title:"Transaction Fields",description:"In order to encode a Core Space transaction, the following fields are required:",source:"@site/docs/core/core-space-basics/transactions/tx-fields.md",sourceDirName:"core/core-space-basics/transactions",slug:"/core/core-space-basics/transactions/tx-fields",permalink:"/es/docs/core/core-space-basics/transactions/tx-fields",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Transaction Fields",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Overview",permalink:"/es/docs/core/core-space-basics/transactions/overview"},next:{title:"Encoding & Signing",permalink:"/es/docs/core/core-space-basics/transactions/encoding-signning"}},c={},d=[{value:"Basic fields",id:"basic-fields",level:2},{value:"from",id:"from",level:3},{value:"to",id:"to",level:3},{value:"value",id:"value",level:3},{value:"nonce",id:"nonce",level:2},{value:"data",id:"data",level:2},{value:"Fee-Related Fields",id:"fee-related-fields",level:2},{value:"gas",id:"gas",level:3},{value:"gasPrice",id:"gasprice",level:3},{value:"storageLimit",id:"storagelimit",level:3},{value:"Other Fields",id:"other-fields",level:2},{value:"chainId",id:"chainid",level:3},{value:"epochHeight",id:"epochheight",level:3},{value:"Signature Fields",id:"signature-fields",level:2},{value:"References",id:"references",level:2},{value:"FAQs",id:"faqs",level:2},{value:"What&#39;s max value of transaction gas limit?",id:"whats-max-value-of-transaction-gas-limit",level:3},{value:"What&#39;s minimum value of Core Space transaction gasPrice?",id:"whats-minimum-value-of-core-space-transaction-gasprice",level:3},{value:"What&#39;s the max size of transaction data?",id:"whats-the-max-size-of-transaction-data",level:3},{value:"What Parameters are Required for Sending Transactions via SDK?",id:"what-parameters-are-required-for-sending-transactions-via-sdk",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In order to encode a Core Space transaction, the following fields are required:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from"})," - the address of the sender, that will be signing the transaction. This will be an externally-owned account as contract accounts cannot send transactions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"to"})," - the receiving address (if an externally-owned account, the transaction will transfer value. If a contract account, the transaction will execute the contract code)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"})," \u2013 amount of CFX to transfer from sender to recipient (denominated in Drip, where 1CFX equals 1e+18Drip)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nonce"})," - a sequentially incrementing counter which indicates the transaction number from the account"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," optional field to include arbitrary data"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gas"})," \u2013 the maximum amount of gas units that can be consumed by the transaction. The EVM specifies the units of gas required by each computational step"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gasPrice"})," - the price of the consumed gas to be included as a tip to the validator"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"storageLimit"})," - the maximum amount of storage space that can be consumed by the transaction."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chainId"})," - the id of the blockchain, which is used to prevent replay attacks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"epochHeight"})," - the epoch number of the blockchain, which is used to sets an expiration time for the transaction"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signature"}),"(r,s,v) \u2013 the identifier of the sender. This is generated when the sender's private key signs the transaction and confirms the sender has authorized this transaction"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-fields",children:"Basic fields"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"from"}),", ",(0,s.jsx)(n.code,{children:"to"}),", and ",(0,s.jsx)(n.code,{children:"value"})," are the basic fields of a transaction. These fields correspond to the ",(0,s.jsx)(n.strong,{children:"address of sender account"}),", ",(0,s.jsx)(n.strong,{children:"address of the receiver account"})," and the ",(0,s.jsx)(n.strong,{children:"amount to be transferred"}),", respectively."]}),"\n",(0,s.jsx)(n.h3,{id:"from",children:"from"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"from"})," field identifies the sender of the transaction. Essentially, the ",(0,s.jsx)(n.code,{children:"from"})," field tells you who is initiating the transaction and who is paying for the transaction. And in the ",(0,s.jsx)(n.a,{href:"/es/docs/core/core-space-basics/transactions/encoding-signning",children:"Signing"})," phase, the transaction will be signed with the private key of the ",(0,s.jsx)(n.code,{children:"from"})," account, so you cannot specify arbitary address as the sender."]}),"\n",(0,s.jsxs)(n.p,{children:["It is also important to remember that the account ",(0,s.jsx)(n.strong,{children:"must have a sufficient balance to cover"})," both the transfer amount (",(0,s.jsx)(n.code,{children:"value"})," field) and the ",(0,s.jsx)(n.strong,{children:"transaction fee"}),", otherwise the RPC will reject the transaction and it will not be sent."]}),"\n",(0,s.jsx)(n.p,{children:"It's worth mentioning that in some specific cases, Conflux Core Space's sponsor mechanism can allow for other accounts to pay the transaction fee, allowing accounts with 0 balance to send transactions."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["In fact, the ",(0,s.jsx)(n.code,{children:"from"})," field is not directly included in an encoded transaction. Generally speaking, tools such as SDKs will remove the ",(0,s.jsx)(n.code,{children:"from"})," field from transaction before encoding and sign the transaction using corresponding private key. Others can recover the sender from the signature of the transaction."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"to",children:"to"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"to"})," field indicates the recipient account of the transaction."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you are making a simple CFX transfer, this field should be set to the ",(0,s.jsx)(n.strong,{children:"CFX recipient's account"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If you are modifying the state of a contract, the to field should be set to ",(0,s.jsx)(n.strong,{children:"the address of the contract"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If you are deploying a new contract, the ",(0,s.jsx)(n.code,{children:"to"})," field is ",(0,s.jsx)(n.strong,{children:"left empty"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"value"})," field represents the amount of CFX to be transferred and must be set as an integer in ",(0,s.jsx)(n.strong,{children:"the unit of Drip"})," (10**-18 CFX)."]}),"\n",(0,s.jsx)(n.h2,{id:"nonce",children:"nonce"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"nonce"})," is the ",(0,s.jsx)(n.strong,{children:"execution sequence number"})," of transactions sent from an account. Normally you can get it by calling the ",(0,s.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace/#cfx_getnextnonce",children:(0,s.jsx)(n.code,{children:"cfx_getNextNonce"})})," RPC method."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to expedite transaction processing, you may want to explore the ",(0,s.jsx)(n.a,{href:"/es/docs/core/core-space-basics/transactions/nonce",children:"nonce management mechanism"})," further."]}),"\n",(0,s.jsx)(n.h2,{id:"data",children:"data"}),"\n",(0,s.jsxs)(n.p,{children:["The data field of the transaction ",(0,s.jsx)(n.strong,{children:"can be left blank"})," or set to a hex-encoded bytes. This can be roughly categorized into three situations:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Regular CFX transfer transaction: The ",(0,s.jsx)(n.code,{children:"data"})," field is usually blank, but hex-encoded data can be set as a ",(0,s.jsx)(n.strong,{children:"transaction remark or postscript"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Contract deployment transaction: ",(0,s.jsx)(n.code,{children:"data"})," needs to be set as the ",(0,s.jsx)(n.strong,{children:"contract's bytecode and the parameters of the constructor"})," (if any)"]}),"\n",(0,s.jsxs)(n.li,{children:["Contract call transaction: The ",(0,s.jsx)(n.code,{children:"data"})," field is used to store the input data for the contract to call. The data is usually the ",(0,s.jsx)(n.strong,{children:"contract method and data after parameter abi encoding"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Smart contracts are usually written in high-level contract development languages (Solidity, vyper). You can use a compiler to obtain bytecode and abi. SDK will provide abi encoding methods for the encoding of the contract method call (encoding the method name and parameters)."}),"\n",(0,s.jsx)(n.h2,{id:"fee-related-fields",children:"Fee-Related Fields"}),"\n",(0,s.jsx)(n.p,{children:"There are several fields in the transaction information related to fees, each serving a different purpose."}),"\n",(0,s.jsx)(n.h3,{id:"gas",children:"gas"}),"\n",(0,s.jsxs)(n.p,{children:["During the execution of a transaction in the EVM, each operation consumes a certain amount of gas. To prevent excessive consumption of network computing resources or being charged excessively, it is necessary to limit the gas consumption during transaction execution. The ",(0,s.jsx)(n.strong,{children:"gas"})," field in transaction information is used to specify the ",(0,s.jsx)(n.strong,{children:"upper limit of gas consumption for transaction execution"}),". If the actual total gas consumed during transaction execution exceeds this limit, the transaction will fail."]}),"\n",(0,s.jsxs)(n.p,{children:["The actual amount of gas consumed during transaction execution is related to the complexity of the transaction. A ",(0,s.jsx)(n.strong,{children:"standard CFX transfer"})," transaction (without data) typically consumes ",(0,s.jsx)(n.strong,{children:"21,000 gas"}),", while contract deployment or interaction may consume more."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace/#cfx_estimategasandcollateral",children:(0,s.jsx)(n.code,{children:"cfx_estimateGasAndCollateral"})})," method can be used to estimate the required amount of gas for transaction execution, which returns the ",(0,s.jsx)(n.code,{children:"gasUsed"}),", ",(0,s.jsx)(n.code,{children:"gasLimit"})," and ",(0,s.jsx)(n.code,{children:"storageCollaterized"})," fields. It is recommended to use ",(0,s.jsx)(n.code,{children:"gasLimit"})," as the ",(0,s.jsx)(n.code,{children:"gas"})," field."]}),"\n",(0,s.jsxs)(n.p,{children:["The gas estimated by the ",(0,s.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace/#cfx_estimategasandcollateral",children:(0,s.jsx)(n.code,{children:"cfx_estimateGasAndCollateral"})})," method may not always be accurate and could be conservative. Therefore, when setting the transaction gas, it is common to multiply the value returned by this method by a factor, such as 1.3, for added safety."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on the usage, estimation, and charging of gas, refer to ",(0,s.jsx)(n.a,{href:"/docs/general/conflux-basics/gas.md",children:"Introduction to Gas"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"gasprice",children:"gasPrice"}),"\n",(0,s.jsxs)(n.p,{children:["The gasPrice is used to set the amount of CFX that the sender is willing to pay for one unit of gas (in Drip). The total gas fee for the transaction is ",(0,s.jsx)(n.strong,{children:"gasCharged * gasPrice"}),". Miners ",(0,s.jsx)(n.strong,{children:"use the gasPrice to determine the order in which transactions are included in a block"}),". Generally, ",(0,s.jsx)(n.strong,{children:"higher gasPrice results in faster transaction inclusion"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace#cfx_gasprice",children:(0,s.jsx)(n.code,{children:"cfx_gasPrice"})})," method can be used to obtain an appropriate gas price. During periods of network congestion, it may be necessary to manually set a higher price; details can be found in ",(0,s.jsx)(n.a,{href:"/es/docs/core/core-space-basics/transactions/transaction-fee",children:"How to Set Prices"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"storagelimit",children:"storageLimit"}),"\n",(0,s.jsxs)(n.p,{children:["In Conflux Core Space, transaction execution not only consumes computing resources but also occupies storage resources. Therefore, transactions are charged for storage usage. The ",(0,s.jsx)(n.strong,{children:"storageLimit"})," field in a transaction is similar to the ",(0,s.jsx)(n.strong,{children:"gas"})," field and is used to specify the upper limit of storage space that a transaction can occupy. If this limit is exceeded, the transaction will fail."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace/#cfx_estimategasandcollateral",children:(0,s.jsx)(n.code,{children:"cfx_estimateGasAndCollateral"})})," method also estimates the storage size that a transaction execution will occupy."]}),"\n",(0,s.jsx)(n.h2,{id:"other-fields",children:"Other Fields"}),"\n",(0,s.jsx)(n.h3,{id:"chainid",children:"chainId"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"chainId"})," field in transactions is used to identify the specific chain. For example, the current chainId of the Core Space is ",(0,s.jsx)(n.strong,{children:"1029"})," and that of the Core Space testnet is ",(0,s.jsx)(n.strong,{children:"1"}),". This field is included in transactions primarily to prevent replay attacks."]}),"\n",(0,s.jsxs)(n.p,{children:["It's generally not necessary to fill in this field manually, as the SDK will automatically obtain the chainId through the ",(0,s.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace/#cfx_getstatus",children:(0,s.jsx)(n.code,{children:"cfx_getStatus"})})," method."]}),"\n",(0,s.jsx)(n.h3,{id:"epochheight",children:"epochHeight"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"epochHeight"})," field is used to specify the target epoch range for a transaction. Transactions will only be executed within the range of [epochHeight - 100000, epochHeight + 100000]. If the epoch of the current chain exceeds this range, the transaction will be discarded."]}),"\n",(0,s.jsxs)(n.p,{children:["The SDK will also automatically set this field to the current epoch obtained by the ",(0,s.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx-namespace/#cfx_epochnumber",children:(0,s.jsx)(n.code,{children:"cfx_epochNumber"})})," method."]}),"\n",(0,s.jsx)(n.h2,{id:"signature-fields",children:"Signature Fields"}),"\n",(0,s.jsxs)(n.p,{children:["The transaction signature is generated by the sender of the transaction to prove the sender's authorization of the transaction. The transaction signature consists of three fields: ",(0,s.jsx)(n.strong,{children:"r, s, and v"}),". Among them, r and s are two 256-bit integers, and v is an 8-bit integer. The process of generating a transaction signature is as follows:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Encode the basic information of the transaction using RLP, resulting in the encoded data."}),"\n",(0,s.jsx)(n.li,{children:"Perform a Keccak256 hash operation on the encoded data to obtain a 256-bit hash value."}),"\n",(0,s.jsx)(n.li,{children:"Use the hash value and the sender's private key as parameters to invoke the ECDSA signature algorithm, obtaining the signature's r, s, and v fields."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For specific generation details, refer to ",(0,s.jsx)(n.a,{href:"/es/docs/core/core-space-basics/transactions/encoding-signning",children:"Transaction Encoding and Signature"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Core Space transactions follow the definition of ",(0,s.jsx)(n.a,{href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf",children:"Conflux Protocol"})]}),"\n",(0,s.jsxs)(n.li,{children:["eSpace transactions follow the ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-155",children:"EIP-155"})," specification"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsx)(n.h3,{id:"whats-max-value-of-transaction-gas-limit",children:"What's max value of transaction gas limit?"}),"\n",(0,s.jsx)(n.p,{children:"It's half of the block gas limit, whereas 30 million gas * 0.5 (15000000)."}),"\n",(0,s.jsx)(n.h3,{id:"whats-minimum-value-of-core-space-transaction-gasprice",children:"What's minimum value of Core Space transaction gasPrice?"}),"\n",(0,s.jsx)(n.p,{children:"1 GDrip (10**9 Drip)."}),"\n",(0,s.jsx)(n.h3,{id:"whats-the-max-size-of-transaction-data",children:"What's the max size of transaction data?"}),"\n",(0,s.jsx)(n.p,{children:"It's about 200k bytes."}),"\n",(0,s.jsx)(n.h3,{id:"what-parameters-are-required-for-sending-transactions-via-sdk",children:"What Parameters are Required for Sending Transactions via SDK?"}),"\n",(0,s.jsxs)(n.p,{children:["When using the JS-SDK for basic CFX transfers, three parameters are essential: ",(0,s.jsx)(n.code,{children:"from"})," (the originating account), ",(0,s.jsx)(n.code,{children:"to"})," (the recipient account), and ",(0,s.jsx)(n.code,{children:"value"})," (the amount to be transferred, measured in Drip). Other fields can be automatically populated by SDK."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);