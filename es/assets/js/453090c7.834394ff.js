"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3385],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,f=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(4137));const r={title:"Transactions",sidebar_position:9,keywords:["transaction"]},o=void 0,s={unversionedId:"general/conflux-basics/transactions",id:"general/conflux-basics/transactions",title:"Transactions",description:"This section introduces transaction concepts from a high level. For more details on core space transactions, please refer to core space transactions. For espace transactions, you may find it helpful to refer to Ethereum transactions as they are almost exactly same in format and functionality.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/conflux-basics/transactions.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/transactions",permalink:"/es/docs/general/conflux-basics/transactions",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Transactions",sidebar_position:9,keywords:["transaction"]},sidebar:"tutorialSidebar",previous:{title:"Contracts",permalink:"/es/docs/general/conflux-basics/contracts"},next:{title:"Accounts and Addresses",permalink:"/es/docs/general/conflux-basics/accounts"}},c={},l=[{value:"Concept of Transaction",id:"concept-of-transaction",level:2},{value:"Transaction Fields",id:"transaction-fields",level:2},{value:"Transaction Lifecycle",id:"transaction-lifecycle",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This section introduces transaction concepts from a high level. For more details on core space transactions, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/transaction_explain"},"core space transactions"),". For espace transactions, you may find it helpful to refer to ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/developers/docs/transactions/"},"Ethereum transactions")," as they are almost exactly same in format and functionality.")),(0,i.kt)("h2",{id:"concept-of-transaction"},"Concept of Transaction"),(0,i.kt)("p",null,"A transaction is a single instruction composed by an external actor with a Conflux account, and this instruction is cryptographically signed using the sender account\u2019s private key. A transaction can involve a simple transfer of CFX (the native currency of Conflux), a transfer of tokens (such as ERC20 or ERC721), a deployment of a new smart contract, or an execution of a function on an existing smart contract. Transactions are the only way to store or update data on the blockchain."),(0,i.kt)("h2",{id:"transaction-fields"},"Transaction Fields"),(0,i.kt)("p",null,"Generally speaking, a transaction contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Who send the transaction: A ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," field in an unsigned transaction or the transaction signature fields indicating the signer. This tells the network who is responsible for initiating the transaction and who will pay for the fees.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What this transaction will do, including:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Who will be the transaction receiver or which smart contract to interact with(",(0,i.kt)("inlineCode",{parentName:"p"},"to")," field). This specifies the destination address of the transaction, which can be either user account or a smart contract that can execute some logic or empty to create a contract.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How much native token will be send(",(0,i.kt)("inlineCode",{parentName:"p"},"value")," field). This indicates how much CFX (the native token of Conflux) will be transferred from the sender to the receiver. If the receiver is a smart contract, this value can also be used as an input parameter for its logic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to interact with a smart contract(",(0,i.kt)("inlineCode",{parentName:"p"},"data")," field). This contains additional information for calling a smart contract function or deploying a new smart contract. It can encode the name and arguments of the function to be invoked or the bytecode of the new contract to be created.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Transaction fee information, including:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Field(s) indicating base transaction fee (",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," in both spaces, and extra ",(0,i.kt)("inlineCode",{parentName:"p"},"storageLimit")," field in core space). These fields is determine according to how much computational resources are required to execute the transaction and (in core space) how much storage space are occupied by its effects.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Field indicating how much "tip" sender is willing to pay to miner(',(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice")," field). This field allows senders to adjust their priority in getting their transactions packed by miners. A higher ",(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice")," means a higher chance of being included in a block sooner.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Field indicating when or where the transaction is "valid" (',(0,i.kt)("inlineCode",{parentName:"p"},"chainId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," in both spaces, and ",(0,i.kt)("inlineCode",{parentName:"p"},"epochHeight")," in core space). ",(0,i.kt)("inlineCode",{parentName:"p"},"chainId")," prevents a transaction being executed on another chain and ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," field ensures the sent transactions are executed in the expected order. ",(0,i.kt)("inlineCode",{parentName:"p"},"epochHeight"),' field sets an expiration time for the transaction based on the epoch number (a concept similar to "block number" in Ethereum). A transaction can only be executed within an epoch range associated with ',(0,i.kt)("inlineCode",{parentName:"p"},"epochHeight"),"."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Transaction fields are slightly different between ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/general/conflux-basics/spaces"},"spaces"),". Core space transactions follow the definition of ",(0,i.kt)("a",{parentName:"p",href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf"},"Conflux Protocol"),". Espace transactions follow the ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-155"},"EIP-155")," specification.")),(0,i.kt)("h2",{id:"transaction-lifecycle"},"Transaction Lifecycle"),(0,i.kt)("p",null,"Transactions go through several stages from the time they are constructed to the time they are finally confirmed on the chain. A good understanding of these stages will help users and developers better identify problems with sending transactions and ultimately ensure that transactions are successfully confirmed."),(0,i.kt)("p",null,"The following are the main stages of a transaction from construction to confirmation."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Transaction construction"),': This is the stage where users or developers create a transaction with all the necessary fields and parameters and get it signed. The transaction object can be created using various tools or libraries, such as Fluent Wallet, Conflux SDK, etc. The transaction will be encoded into a hex string as "rawTransaction" before it is sent.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Broadcast"),": This is the stage where users or developers send their signed transaction to a Conflux node via RPC or WebSocket. The node will validate the transaction and broadcast it to other nodes in the network if it passes the validation. The node will also return a transaction hash (a unique identifier) to the sender for tracking purposes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Packed into a block -> Mined"),": This is the stage where miners select transactions from their mempool (a pool of pending transactions) and include them in their blocks. Miners will prioritize transactions with higher ",(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice"),". Once a block containing a transaction is mined, it will be propagated to other nodes in the network.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Deferring 5 epochs -> Executed"),": This is the stage where transactions are executed by nodes after being deferred for 5 epochs (about 5 seconds). This means that nodes will run the logic of the transactions and update their state accordingly. The execution results of each transaction will be recorded in a receipt, which contains information such as status (success or failure), gas used, logs and events emitted by smart contracts and can be retrieved using transaction hash.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Waiting for about 50 epochs -> Confirmed"),': This is the stage where transactions are confirmed by nodes after being executed for about 50 epochs (about 50 seconds). A transaction is executed does not mean that the status of the transaction will not change anymore. Due to the structure of blockchain, the blockchain may fork or shift the main chain due to the arrival or creation of new blocks, which may revert certain transactions. A confirmed transaction means that it has been included in a "deep" enough block and has a extremely low probability of being reverted.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Waiting for PoS chain Finalization -> Finalized"),": This is the final stage where transactions are finalized after specific PoW block being referenced by Conflux's ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview"},"PoS chain"),". Conflux's PoS chain periodically refers a stable PoW block to provide finality for transactions. A finalized transaction means that it has zero probability of being reverted unless the attacker possesses more than 67% of the CFX staked in PoS. It takes approximately 4-5 minutes to finalize a transaction since it is included in a block (after ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-113.md"},"CIP-113")," activation)."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction",src:n(2571).Z,width:"1434",height:"1900"})))}h.isMDXComponent=!0},2571:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction-stages-8bcdab5873c9062a0705324908afa456.bin"}}]);