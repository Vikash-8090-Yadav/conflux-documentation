"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(f,r(r({ref:t},h),{},{components:n})):a.createElement(f,r({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={id:"transaction_stage",title:"Transaction Stages",keywords:["transaction"]},r=void 0,s={unversionedId:"learn/conflux-basics/transactions/transaction_stage",id:"learn/conflux-basics/transactions/transaction_stage",title:"Transaction Stages",description:"Sending transactions is one of the most frequent operations in the blockchain world. Transactions go through several stages from the time they are constructed to the time they are finally cofirmed on the chain. A good understanding of the stages of a transaction will help users and developers better identify problems with sending transactions and ultimately ensure that transactions are successfully confirmed.",source:"@site/docs/learn/conflux-basics/transactions/transaction-stage.md",sourceDirName:"learn/conflux-basics/transactions",slug:"/learn/conflux-basics/transactions/transaction_stage",permalink:"/docs/learn/conflux-basics/transactions/transaction_stage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learn/conflux-basics/transactions/transaction-stage.md",tags:[],version:"current",frontMatter:{id:"transaction_stage",title:"Transaction Stages",keywords:["transaction"]},sidebar:"tutorialSidebar",previous:{title:"Transaction Explanation",permalink:"/docs/learn/conflux-basics/transactions/transaction_explain"},next:{title:"Why Transaction is Pending?",permalink:"/docs/learn/conflux-basics/transactions/why_tx_is_pending"}},c={},l=[{value:"Detailed Explanation of the Transaction Stages",id:"detailed-explanation-of-the-transaction-stages",level:2},{value:"Preparing the account\u2018s private key and address",id:"preparing-the-accounts-private-key-and-address",level:3},{value:"Prepare the transaction metadata, sign, and encode it",id:"prepare-the-transaction-metadata-sign-and-encode-it",level:3},{value:"Send RawTransaction to the node transaction pool",id:"send-rawtransaction-to-the-node-transaction-pool",level:3},{value:"Packing transactions by miners",id:"packing-transactions-by-miners",level:3},{value:"Delay block execution",id:"delay-block-execution",level:3},{value:"Confirm the transaction after a certain number of Epochs",id:"confirm-the-transaction-after-a-certain-number-of-epochs",level:3},{value:"Transaction finalized because of PoS chain",id:"transaction-finalized-because-of-pos-chain",level:3},{value:"FAQ",id:"faq",level:2},{value:"Why is the transaction failed to send?",id:"why-is-the-transaction-failed-to-send",level:3},{value:"Why has the transaction not been executed on the chain?",id:"why-has-the-transaction-not-been-executed-on-the-chain",level:3},{value:"Can a transaction be canceled or replaced?",id:"can-a-transaction-be-canceled-or-replaced",level:3},{value:"How to speed up a transaction?",id:"how-to-speed-up-a-transaction",level:3}],h={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sending transactions is one of the most frequent operations in the blockchain world. Transactions go through several stages from the time they are constructed to the time they are finally cofirmed on the chain. A good understanding of the stages of a transaction will help users and developers better identify problems with sending transactions and ultimately ensure that transactions are successfully confirmed."),(0,o.kt)("p",null,"Transactions go through the following stages from construction to confirmation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Preparing the private key and address of the sender (from) of the transaction"),(0,o.kt)("li",{parentName:"ol"},"Preparing the metadata of the transaction, assemble it, then sign it and encode it -> RawTransaction"),(0,o.kt)("li",{parentName:"ol"},"Sending RawTransaction to fullnode via cfx_sendRawTransaction RPC method -> transaction is put into transaction pool"),(0,o.kt)("li",{parentName:"ol"},"The transaction is packed into a block by a miner -> Minded in Block"),(0,o.kt)("li",{parentName:"ol"},"Deferring 5 epochs -> Executed"),(0,o.kt)("li",{parentName:"ol"},"Waiting for about 50 epochs -> Confirmed"),(0,o.kt)("li",{parentName:"ol"},"Waiting to be referenced by PoS chain -> Finalized")),(0,o.kt)("h2",{id:"detailed-explanation-of-the-transaction-stages"},"Detailed Explanation of the Transaction Stages"),(0,o.kt)("h3",{id:"preparing-the-accounts-private-key-and-address"},"Preparing the account\u2018s private key and address"),(0,o.kt)("p",null,"All transactions sent need to be signed with a private key in order to be accepted and successfully executed by the blockchain. Therefore, before sending a transaction, you need to prepare the private key of the sender, which can be used to derive the address of the account."),(0,o.kt)("p",null,"In addition, a certain CFX fee is required to send a transaction, so the sender's account needs to have some CFX in order to send the transaction successfully. The CFX of the testnet can be obtained through the faucet."),(0,o.kt)("p",null,"There is one situation in the Conflux network that does not require the sender to pay the transaction fee."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The recipient of the transaction is a contract, and"),(0,o.kt)("li",{parentName:"ol"},"Someone has sponsored the gas and storage of the contract, and"),(0,o.kt)("li",{parentName:"ol"},"The address of the sender of the transaction is on the contract's gas whitelist (the whitelist can be fully opened so that everyone can be sponsored), and"),(0,o.kt)("li",{parentName:"ol"},"The gas fee for the transaction is less than the maximum amount of gas sponsorship set by the contract sponsor")),(0,o.kt)("p",null,"To learn more details about Conflux sponsorship, you can refer to the introduction of the SponsorWhitelistControl in the built-in contract."),(0,o.kt)("h3",{id:"prepare-the-transaction-metadata-sign-and-encode-it"},"Prepare the transaction metadata, sign, and encode it"),(0,o.kt)("p",null,"After preparing the private key for the sending account, you need to construct the transaction. The first step in constructing the transaction is to determine the meta information of the transaction according to the transaction details, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to: the recipient of the transaction"),(0,o.kt)("li",{parentName:"ul"},"nonce: the sequence number of the transaction"),(0,o.kt)("li",{parentName:"ul"},"value: the transaction amount, valued in Drip"),(0,o.kt)("li",{parentName:"ul"},"data: transaction data"),(0,o.kt)("li",{parentName:"ul"},"chainId: the chain ID of the transaction execution"),(0,o.kt)("li",{parentName:"ul"},"epochHeight: the height that the transaction execution targets"),(0,o.kt)("li",{parentName:"ul"},"gas: maximum gas amount"),(0,o.kt)("li",{parentName:"ul"},"gasPrice: the gas price"),(0,o.kt)("li",{parentName:"ul"},"storageLimit: storage staking limit")),(0,o.kt)("p",null,"If you want to know the meaning of each keyword of the transaction and how to specify it, please refer to ",(0,o.kt)("a",{parentName:"p",href:"http://developer.confluxnetwork.org/sending-tx/en/transaction_explain/?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhY2Nlc3NfcmVzb3VyY2UiLCJleHAiOjE2MzkzNjIyNTAsImciOiJrM3RkMzl3UmNydHZZNnlUIiwiaWF0IjoxNjM5MzYxOTUwLCJ1c2VySWQiOjUzMDEyMDA1fQ.OGlihO7cyqo_5UqcFlB8BGugCywJ_Sb3g95r2IwO4Gs"},"Conflux Transaction Explanation")),(0,o.kt)("p",null,"After the meta-information is prepared, they need to be encoded in a fixed order by RLP encoding and generate the hash. Then the transaction signature is obtained from the secp256k1 signing operation by using the private key."),(0,o.kt)("p",null,"Finally, the meta information and signature are combined for RLP encoding and converted to hex format to get the raw transaction (RawTransaction) that can be sent to the Conflux nodes."),(0,o.kt)("p",null,"Usually, the wallet and SDK will automatically assemble, sign, and encode the transactions without manual processing."),(0,o.kt)("h3",{id:"send-rawtransaction-to-the-node-transaction-pool"},"Send RawTransaction to the node transaction pool"),(0,o.kt)("p",null,"The raw transaction is sent to the nodes via the full node's cfx_sendRawTransaction RPC method. The node will first check the transaction. If there is a problem with the constructed transaction, it will fail. Possible failures are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"set nonce incorrectly (reuse it or set a too large value)"),(0,o.kt)("li",{parentName:"ol"},"set a too large value to gas, generally more than 1500w"),(0,o.kt)("li",{parentName:"ol"},"created wrong signature"),(0,o.kt)("li",{parentName:"ol"},"used a wrong chainId"),(0,o.kt)("li",{parentName:"ol"},"set epochHeight more than 100,000 away from the current value"),(0,o.kt)("li",{parentName:"ol"},"Other: the transaction pool is full")),(0,o.kt)("p",null,"If the check passes, the transaction will be put into the node's transaction pool and the hash of the transaction will be returned."),(0,o.kt)("p",null,"At this point, the transaction can be retrieved through the RPC method cfx_getTransactionByHash, but since the transaction has yet been packaged, fields related to the block information (blockHash) and the execution result (contractCreated, status, transactionIndex) of the transaction are empty."),(0,o.kt)("p",null,"Since the transaction has not been executed, the receipt for the transaction has not been generated."),(0,o.kt)("h3",{id:"packing-transactions-by-miners"},"Packing transactions by miners"),(0,o.kt)("p",null,"Transactions in the transaction pool may have three states."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"nonce skipping"),(0,o.kt)("li",{parentName:"ol"},"ready to pack")),(0,o.kt)("p",null,"Transactions in the first two states will be considered as pending in the pool and will not become ready to pack until all the nonces before this transaction nonce have been executed."),(0,o.kt)("p",null,"Transactions that fulfill the packing condition will be packed into blocks by miners in roughly the order of gasPrice, from highest to lowest."),(0,o.kt)("h3",{id:"delay-block-execution"},"Delay block execution"),(0,o.kt)("p",null,"The Conflux network has a block execution delaying mechanism, which means that after a block is packed, it will not be executed immediately, but be delayed by 5 Epochs before it is executed. The essence of block execution is that all transactions in the block are executed."),(0,o.kt)("p",null,"The transaction information, obtained by the cfx_getTransactionByHash method after the transaction execution, contains the blockHash, status, and other keywords."),(0,o.kt)("p",null,"At this point, you can also get the receipt of the transaction via the cfx_getTransactionReceipt method."),(0,o.kt)("p",null,"The execution of a transaction won't be always successful. The status of the transaction can be determined by the status field of the transaction or the outcomeStatus field of the receipt."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0 - execution succeeded"),(0,o.kt)("li",{parentName:"ul"},"1 - execution failed"),(0,o.kt)("li",{parentName:"ul"},"2 or null - the transaction is not executed and is skipped")),(0,o.kt)("h3",{id:"confirm-the-transaction-after-a-certain-number-of-epochs"},"Confirm the transaction after a certain number of Epochs"),(0,o.kt)("p",null,"That a transaction is executed does not mean that the status of the transaction will not change anymore. Due to the chain structure of blockchain, the blockchain may fork or shift the main chain due to the arrival or creation of new blocks, which may revert certain transactions."),(0,o.kt)("p",null,"Usually, after the transaction blocks are packaged, the transaction cannot be finally confirmed until a certain number of new blocks are generated."),(0,o.kt)("p",null,"In the Conflux network, you can compare the epochNumber in the transaction receipt with the latest confirmed epochNumber. If the latest confirmed epochNumber is larger, then the transaction is confirmed."),(0,o.kt)("p",null,"You can use the cfx_epochNumber method and pass the latest_confirmed parameter, to get the latest confirmed EpochNumber"),(0,o.kt)("h3",{id:"transaction-finalized-because-of-pos-chain"},"Transaction finalized because of PoS chain"),(0,o.kt)("p",null,"Conflux introduces a PoS finality mechanism to prevent 51% attacks, so that blocks will not be reverted in case of low hashing power."),(0,o.kt)("p",null,"By introducing a separate PoS chain to finalize the PoW blocks, the state of all the blocks that are voted as finalized will reach finality."),(0,o.kt)("p",null,"Starting from v1.2.0, a new tag latest_finalized will be introduced. You can use this tag to request the cfx_epochNumber method to get the latest epochNumber that has been finalized."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"why-is-the-transaction-failed-to-send"},"Why is the transaction failed to send?"),(0,o.kt)("p",null,"If a transaction failed by calling the cfx_sendRawTransaction method, it is likely that there is a problem with the transaction construction and the meta-information of the transaction needs to be adjusted."),(0,o.kt)("p",null,'If the error message returned is "txpool is full", you can wait for a moment and try to resend the transaction with a slightly higher gasPrice.'),(0,o.kt)("h3",{id:"why-has-the-transaction-not-been-executed-on-the-chain"},"Why has the transaction not been executed on the chain?"),(0,o.kt)("p",null,"After the transaction is successfully sent, but the transaction does not show as successfully executed on Conflux Scan, then the transaction is probably pending in the transaction pool. There are three possible cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The transaction does not use a continuous nonce: the nonce of the transaction needs to be set correctly"),(0,o.kt)("li",{parentName:"ol"},"The network is congested: If the network is congested, miners will pack the transactions roughly in order of gasPrice from highest to lowest. You can speed up transaction execution by increasing the gasPrice of the transaction")),(0,o.kt)("p",null,"You can use the cfx_getAccountPendingTransactions method to get the user's current Pending transactions and the reason for them."),(0,o.kt)("h3",{id:"can-a-transaction-be-canceled-or-replaced"},"Can a transaction be canceled or replaced?"),(0,o.kt)("p",null,"If a transaction has not been packed into a block and is in the transaction pool, it can be replaced by sending a new transaction with the same nonce and a higher gasPrice."),(0,o.kt)("p",null,"Transactions cannot be canceled but can be replaced with a transaction of value 0. This is a way to reach the same result as canceling the transaction."),(0,o.kt)("h3",{id:"how-to-speed-up-a-transaction"},"How to speed up a transaction?"),(0,o.kt)("p",null,"If you want to speed up the execution of a transaction, you can increase the gasPrice of the transaction and resend it."))}d.isMDXComponent=!0}}]);