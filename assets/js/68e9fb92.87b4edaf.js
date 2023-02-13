"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5,title:"Glossary",keywords:["to modify"]},r=void 0,s={unversionedId:"general/conflux-basics/glossary",id:"general/conflux-basics/glossary",title:"Glossary",description:"In an overview, the Conflux world-state consists of a list of accounts and the associated account states, and the global state is updated via transactions. The Conflux blockchain stores all processed transactions in blocks, together with necessary information in block headers which enables a total ordering of all blocks. Below are some concepts you should know about.",source:"@site/docs/general/conflux-basics/glossary.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/glossary",permalink:"/docs/general/conflux-basics/glossary",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Glossary",keywords:["to modify"]},sidebar:"tutorialSidebar",previous:{title:"Why Introducing PoS?",permalink:"/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos"},next:{title:"Economics",permalink:"/docs/general/conflux-basics/economics"}},l={},c=[{value:"CFX",id:"cfx",level:2},{value:"units",id:"units",level:3},{value:"CFX as reward",id:"cfx-as-reward",level:3},{value:"CFX usage",id:"cfx-usage",level:3},{value:"Related Articles",id:"related-articles",level:3},{value:"chainId &amp; networkId",id:"chainid--networkid",level:2},{value:"Address",id:"address",level:2},{value:"Account",id:"account",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Transaction Types",id:"transaction-types",level:3},{value:"Transaction fields:",id:"transaction-fields",level:3},{value:"Lifecycle of a transaction",id:"lifecycle-of-a-transaction",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In an overview, the Conflux world-state consists of a list of accounts and the associated account states, and the global state is updated via transactions. The Conflux blockchain stores all processed transactions in blocks, together with necessary information in block headers which enables a total ordering of all blocks. Below are some concepts you should know about."),(0,i.kt)("h2",{id:"cfx"},"CFX"),(0,i.kt)("h3",{id:"units"},"units"),(0,i.kt)("p",null,"To incentivize the maintenance of the Conflux network and charge users for consumption of resources, Conflux has a native currency called the Conflux coin, simply denoted by CFX for short. The smallest subdenomination is denoted by Drip, in which all values processed in Conflux are integers. One Conflux is defined as 10^18 Drip. Frequently used subdenominations of Conflux are listed below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Multiplier (in Drip)"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10^0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Drip")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10^9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"GDrip")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10^12"),(0,i.kt)("td",{parentName:"tr",align:"center"},"uCFX")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10^18"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Conflux(CFX)")))),(0,i.kt)("p",null,"As a native token of the Conflux network, CFX plays a very important role in the stability of the system."),(0,i.kt)("h3",{id:"cfx-as-reward"},"CFX as reward"),(0,i.kt)("p",null,"Conflux rewards CFX both in PoW and PoS to encourage participation of the network."),(0,i.kt)("p",null,"For miners who participate in PoW, a certain amount of CFX is rewarded for each block mined. The collateral revenue generated by the collateralized CFX is also paid to the miners to cover the cost of storage. which provides an incentive for miners to continue participating in bookkeeping, and thus ensuring security for the network. The block payout bonus consists of three parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a fixed bonus of centain amount of CFX for the block (initialized to 2 CFX, and can be updated by on-chain DAO voting)"),(0,i.kt)("li",{parentName:"ol"},"a fee for all transactions in the block"),(0,i.kt)("li",{parentName:"ol"},"4% annualized return on all stored collateral ")),(0,i.kt)("p",null,"The PoS consensus generates interest in each block and distributes them to those who participate the PoS. Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/v2-hardfork/pos_overview"},"PoS overview")," for more information. The interest can also be updated by on-chain DAO voting."),(0,i.kt)("h3",{id:"cfx-usage"},"CFX usage"),(0,i.kt)("p",null,"CFX is used to pay transaction fees and to store collateral. Transactions are packaged and executed by miners. In order to incentivize miners to keep participating in the bookkeeping and provide sufficient security for the network, each transaction is charged a (gas) fee calculated as gasPrice ",(0,i.kt)("em",{parentName:"p"}," max(gasLimit ")," 3/4, gasUsed), which is paid by CFX. In addition, if the execution of a transaction takes up new storage space, a portion of the CFX is pledged for the use of the storage space (the pledged CFX can be released under certain condition)."),(0,i.kt)("p",null,"Conflux is also used for staking. Through staking and locking CFX, Users can participate in ",(0,i.kt)("a",{parentName:"p",href:"https://developer.confluxnetwork.org/v2-hardfork/pos_overview"},"PoS")," or voting, including ",(0,i.kt)("a",{parentName:"p",href:"https://confluxhub.io/governance/vote/onchain-dao-voting"},"onchain-dao voting"),", which can determine PoW base block reward and PoS base reward interest rate."),(0,i.kt)("h3",{id:"related-articles"},"Related Articles"),(0,i.kt)("p",null,"For more information on the genesis creation, distribution, and release of CFX, please refer to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://confluxnetwork.org/files/Conflux_Economic_Paper_20201230.pdf"},"Economics white paper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/conflux-network/the-role-of-the-cfx-token-in-the-conflux-network-5a56c2b43bb0"},"The Role of the CFX token in the Conflux Network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-94.md"},"On-chain DAO Vote for Chain Parameters"))),(0,i.kt)("h2",{id:"chainid--networkid"},"chainId & networkId"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"chainId")," is a number indicating where a transaction is intended to be executed. It is used to prevent transaction replay attacks.\nThe chainId of Conflux is a constant, currently:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mainnet: ",(0,i.kt)("inlineCode",{parentName:"li"},"1029")),(0,i.kt)("li",{parentName:"ul"},"testnet: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"networkId")," is used to distinguish between blockchains at the network layer. Currently Conflux mainnet/testnet's ",(0,i.kt)("inlineCode",{parentName:"p"},"networkId")," is same as ",(0,i.kt)("inlineCode",{parentName:"p"},"chainId"),".\nYou can get both of these from the ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_getStatus")," RPC method."),(0,i.kt)("h2",{id:"address"},"Address"),(0,i.kt)("p",null,"Each account in Conflux is associated with a pair of public key and the private key (pubkey,prikey), which can be identified by an ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),". Addresses are a 160-bit identifier, which is the concatenation of a 4-bit ",(0,i.kt)("inlineCode",{parentName:"p"},"type indicator")," and a 156-bit ",(0,i.kt)("inlineCode",{parentName:"p"},"digest")," of the associated public key."),(0,i.kt)("p",null,"Currently there are three types of ",(0,i.kt)("inlineCode",{parentName:"p"},"type indicator"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[0001]"," for normal accounts (a.k.a. non-contract accounts)"),(0,i.kt)("li",{parentName:"ul"},"[1000]"," for (Solidity) contracts"),(0,i.kt)("li",{parentName:"ul"},"[0000]"," for internal contracts (a.k.a. \u201cprecompiled contracts\u201d)")),(0,i.kt)("p",null,"Hex-encoded, the type indicator becomes::"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," normal address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"8")," contract address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," internal contract address")),(0,i.kt)("p",null,"Addresses can be expressed as hex-encoded strings like this: 0x1292d4955bb47f5153b88ca12c7a9e4048f09839. However, addresses in this format are easy to mix up with addresses on Ethereum and some other blockchains, which might lead to asset loss.\nTo address this issue, Conflux introduced a new base32-encoded address format in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"},"CIP37"),". For instance, the address above can be converted to the following base32 address: cfx:aakkfzezns4h8ymx1cgmcnd4x3aev6e2hexz250ym5. The new format contains a network prefix which makes it easy to distinguish Conflux addresses from other networks."),(0,i.kt)("p",null,"It is important to understand that both addresses correspond to the same 160-bit identifier and thus to the same account. Each hex-address can be converted to a corresponding base32-address (and vice versa).\nCIP37 address is supported by ",(0,i.kt)("inlineCode",{parentName:"p"},"Conflux-rust")," from version ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.1.1"),"."),(0,i.kt)("p",null,"Note: mainnet and testnet addresses use different address prefixes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mainnet: ",(0,i.kt)("inlineCode",{parentName:"li"},"cfx")),(0,i.kt)("li",{parentName:"ul"},"testnet: ",(0,i.kt)("inlineCode",{parentName:"li"},"cfxtest"))),(0,i.kt)("h2",{id:"account"},"Account"),(0,i.kt)("p",null,"The Conflux global state is described in an account model, with the basic storage component called an account. Every actor, which is either a person or an entity that is able to interact with the Conflux world, has its necessary information stored in an account as a key/value pair (address, state) of address and corresponding states."),(0,i.kt)("p",null,"The account state consists of five components (",(0,i.kt)("inlineCode",{parentName:"p"},"basic"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"storage"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"vote"),"). The basic state is very important, it consists of the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nonce"),": A scalar counter recording the number of previous activities initiated by this account. For example, the number of transactions send from account's address, or the number of contract-creations if the account represents a smart contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"balance"),": A scalar value equal to the number of Drip owned by this account. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"codeHash"),": The hash of the EVM code that gets executed when address receives a message call. Unlike other fields, it\nis immutable once established. The actual code (a series of EVM instructions) is also stored in the global state. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stakingBalance"),": A scalar value equal to the number of Drip staked. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storageCollateral"),": A scalar value equal to the number of Drip used as collateral for storage, which will be returned to the account's balance if the corresponding storage is released. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accumulatedInterestReturn"),": A scalar value equal to the number of Drip in accumulated interest return. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"admin"),": The address of the administrator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sponsorInfo"),": The sponsor information contains five components: ",(0,i.kt)("inlineCode",{parentName:"li"},"sponsor for gas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sponsor for collateral"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sponsor gas\nlimit"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sponsor balance for gas")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sponsor balance for collateral"),". ")),(0,i.kt)("h2",{id:"transactions"},"Transactions"),(0,i.kt)("p",null,"A Conflux transaction is a single instruction composed by an external actor with a Conflux account, and this instruction is cryptographically signed using the sender account's private key. The authentication key, i.e. the sending account\u2019s associated public key, is also included in the transaction for verification."),(0,i.kt)("h3",{id:"transaction-types"},"Transaction Types"),(0,i.kt)("p",null,"There are two types of transactions depending on the \u201cdestinations\u201d:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"to an account address: these are normal transactions that may transfer value and/or result in message calls, known as\naction transactions;"),(0,i.kt)("li",{parentName:"ol"},"to \u201cnowhere\u201d: these transactions are used to create new contracts, known as contract creation transactions.")),(0,i.kt)("h3",{id:"transaction-fields"},"Transaction fields:"),(0,i.kt)("p",null,"Both types of transactions share the following common fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),": An address indicating the transaction sender."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to"),": An address indicating the transaction receiver."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nonce"),": A scalar value equal to the number of previously sent transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gasPrice"),": A scalar value indicating the number of Drip to be paid per unit of gas that is consumed as a result of the\nexecution of transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas"),": A scalar value indicating the total amount of gas paid for the cost of the execution of transaction. This is paid up-front,\nbefore any actual computation is done, and may not be increased or refunded later. The refundable amount of gas is the minimum of the legitimately remaining gas and a quarter of the ",(0,i.kt)("inlineCode",{parentName:"li"},"gas"),". It is\nthe transaction sender\u2019s responsibility to avoid any extravagance caused by an unnecessarily high gasLimit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": A scalar value equal to the amount of Drip that the transactions sender wants to transfer to the recipient, i.e. the\naccount specified in transaction or the newly created contract. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storageLimit"),": A scalar value indicating the maximum increment of storage used in the execution of the transaction, measured in\nbytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"epochHeight"),": A scalar value specifying the range of epochs where transaction can be executed. Such that transaction can only be executed between the epochs of ","[Te \u2212 100000, Te + 100000]","."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chainId"),": A scalar value indicating the ID of the chain where the transaction is intended to be executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": A byte array specifying the input data of the message call to an existing contract (or the contract code if it is a contract creation transaction). "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"v"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"r"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"s"),": Corresponding fields of the recoverable ECDSA signature of transaction.")),(0,i.kt)("h3",{id:"lifecycle-of-a-transaction"},"Lifecycle of a transaction"),(0,i.kt)("p",null,"A transaction is composed by external account, and sent to a node by calling its ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," RPC method. After sending, the transaction will go through several different states:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Accepted by the RPC"),": After the provider received the cfx_sendRawTransaction RPC call, it would attempt to do basic verification and ",(0,i.kt)("inlineCode",{parentName:"li"},"insert it into the transaction pool"),". If there is an obvious error of the transaction, e.g., RLP decoding error, signature verification error, it will be rejected immediately. Otherwise, it will be inserted into the transaction pool and wait to be mined, and the RPC will return a transaction hash of the transaction."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Wait to be mined"),": A Conflux miner will choose valid transactions from its pool, whose nonce matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"expected one")," and the balance is enough to pay the ",(0,i.kt)("inlineCode",{parentName:"li"},"value + gas * gasPrice + storage_limit * (10^18/1024)")," that will be included in the new block. If a transaction does not meet these two requirements, then it will get stuck in the transaction tool."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Mined"),": After mining, a tx will not be executed immediately, Conflux has a deferred execution mechanism. Nodes that receive the new block are only guaranteed to execute it 5 epochs later."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Executed (success or failure)"),": Not all executed transactions have succeeded, some have failed. You can check this out by the transaction's ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," or transaction receipt's ",(0,i.kt)("inlineCode",{parentName:"li"},"outcomeStatus"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," means success, ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," means failure."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Confirmed"),": If a transaction has been executed successfully, it may still be reverted, possibly due to a pivot chain reorganization. A transaction's status is only finalized once it has been confirmed. You can determine whether a transaction is confirmed by comparing its epoch number to the latest confirmed epoch number."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"finalized"),": Conflux has a PoS finality mechanism to prevent 51% attacks, so that blocks will not be reverted in case of low hashing power. All confirmed blocks that are voted as finalized by the PoS chain will reach finality. Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"latest_finalized")," tag to request the ",(0,i.kt)("inlineCode",{parentName:"li"},"cfx_epochNumber")," method to get the latest ",(0,i.kt)("inlineCode",{parentName:"li"},"epochNumber")," that has been finalized.")))}u.isMDXComponent=!0}}]);