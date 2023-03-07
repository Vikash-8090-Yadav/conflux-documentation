"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9564],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=c(a),p=i,g=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return a?n.createElement(g,r(r({ref:t},h),{},{components:a})):n.createElement(g,r({ref:t},h))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const s={sidebar_position:10,title:"Gas"},r="Gas",o={unversionedId:"general/conflux-basics/gas",id:"general/conflux-basics/gas",title:"Gas",description:"Conflux users usually see fields like `gasFee`, `gas`, and `gasPrice` when they are sending transactions using their wallets (Fluent) or SDK. This article is going to explain in detail about what these concepts mean and how to set the values properly.",source:"@site/docs/general/conflux-basics/gas.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/gas",permalink:"/docs/general/conflux-basics/gas",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Gas"},sidebar:"tutorialSidebar",previous:{title:"Contracts",permalink:"/docs/general/conflux-basics/contracts"},next:{title:"Overview",permalink:"/docs/general/conflux-basics/conflux-governance/governance-overview"}},l={},c=[{value:"gasFee",id:"gasfee",level:2},{value:"Why Pay Fees",id:"why-pay-fees",level:2},{value:"What is Gas",id:"what-is-gas",level:2},{value:"Gas Limit",id:"gas-limit",level:2},{value:"gasPrice",id:"gasprice",level:2},{value:"How gasFee is Calculated",id:"how-gasfee-is-calculated",level:2},{value:"How to Set gas and gasPrice Properly",id:"how-to-set-gas-and-gasprice-properly",level:2},{value:"gasPrice",id:"gasprice-1",level:3},{value:"gas",id:"gas-1",level:3},{value:"FAQs",id:"faqs",level:2},{value:"1. Are there any EIP-1559 transactions in the Conflux network?",id:"1-are-there-any-eip-1559-transactions-in-the-conflux-network",level:3},{value:"Further Readings",id:"further-readings",level:2}],h={toc:c},u="wrapper";function d(e){let{components:t,...s}=e;return(0,i.kt)(u,(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gas"},"Gas"),(0,i.kt)("p",null,"Conflux users usually see fields like ",(0,i.kt)("inlineCode",{parentName:"p"},"gasFee"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gas"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice")," when they are sending transactions using their wallets (Fluent) or SDK. This article is going to explain in detail about what these concepts mean and how to set the values properly."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign Transaction",src:a(7992).Z,width:"800",height:"638"})),(0,i.kt)("h2",{id:"gasfee"},"gasFee"),(0,i.kt)("p",null,"In real life, when we send money to someone else at a bank, we usually have to pay transaction fees. It is the same for sending transactions in blockchains (Bitcoin, Ethereum, Conflux). ",(0,i.kt)("inlineCode",{parentName:"p"},"gasFee")," is the fee for sending a transaction. Usually, it needs to be paid by the native token of the chain. Take Conflux as an example, CFX is needed for paying the transaction fee (gas fee)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tx gas charged",src:a(1685).Z,width:"1680",height:"899"})),(0,i.kt)("h2",{id:"why-pay-fees"},"Why Pay Fees"),(0,i.kt)("p",null,"As we all know, blockchain is in fact a decentralized ledger, which is maintained by miners. There is a cost for miners to store data and generate blocks (calculating hashes). Therefore, in order to motivate miners to actively participate in the chain maintenance and protect the network security, the blockchain consensus system is designed to include a reward mechanism for miners, and the transaction fee is one of the rewards for miners, which will be paid to miners who participate in generating blocks. This mechanism can ensure the sustainability of the entire decentralized network."),(0,i.kt)("p",null,"In addition, the gas fee mechanism can also prevent abusive transactions and thus improve the efficiency of blockchain utilization."),(0,i.kt)("h2",{id:"what-is-gas"},"What is Gas"),(0,i.kt)("p",null,"The concept of gas is borrowed from the real 'gas', petrol. Vehicles consume gasoline to drive. The further a car travels, the more gasoline it consumes. In EVM blockchains, gas represents the work amount required to execute a transaction. Therefore, it is a unit that measures the amount of computation required to perform certain operations."),(0,i.kt)("p",null,"To provide more details, all Conflux transactions are executed by EVM, including regular CFX transfers and smart contract method calls. When these operations are executed, they are compiled into individual OPCodes. The amount of work required to execute each OPCode varies. More information for OPCode gas fees can be found ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/opcodes/"},"here"),"."),(0,i.kt)("p",null,"Usually, the gas consumed for a regular CFX transfer is ",(0,i.kt)("inlineCode",{parentName:"p"},"21000"),". A smart contract transaction usually needs more, depending on the complexity of the contract execution."),(0,i.kt)("h2",{id:"gas-limit"},"Gas Limit"),(0,i.kt)("p",null,"When constructing a transaction, the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," field is very important, as the field itself means the ",(0,i.kt)("inlineCode",{parentName:"p"},"maximum amount of gas")," that can be consumed by the execution of the transaction."),(0,i.kt)("p",null,"It is very important to fill the gas field correctly. If the gas limit is set to a value less than the actual amount of gas needed, the transaction will fail. If the gas limit is set too high, you may pay more gas than you actually need to."),(0,i.kt)("p",null,"The maximum gas limit for a single transaction in the Conflux network is 15M. This ensures that the transactions will not overconsume EVM resources."),(0,i.kt)("h2",{id:"gasprice"},"gasPrice"),(0,i.kt)("p",null,"The gasPrice of a transaction is specified by the sender of the transaction and represents the fee that the person is willing to pay per unit of gas. The unit of gasPrice is GDrip, where 1 GDrip is equal to 0.000000001 CFX (10-9 CFX)."),(0,i.kt)("p",null,"A transaction's gasPrice value affects how fast the transaction is packaged by miners, as miners will prioritize packaging transactions with higher gasPrice in order to make more profits. When the network is not congested, setting gasPrice to ",(0,i.kt)("inlineCode",{parentName:"p"},"1Gdrip")," is enough to be packed normally. However, when the network is congested, more transactions are waiting to be packed. At this time, if the gasPrice is set to be less than most other transactions, it will not be packed but keep waiting."),(0,i.kt)("p",null,"Therefore, if you want the transaction to be packaged quickly, you can set the gasPrice higher. Usually setting it to 10G-1000G is high enough in Conflux to ensure it is executed quickly."),(0,i.kt)("p",null,"NOTE: Do not set gasPrice too high. It may lead to sky-high transaction fees. If gasPrice is set to 1CFX, then the fee for a regular transfer is 21000 CFX, which is quite a lot for a transaction."),(0,i.kt)("h2",{id:"how-gasfee-is-calculated"},"How gasFee is Calculated"),(0,i.kt)("p",null,"gasFee is the total gas fee paid for a transaction. It is calculated as ",(0,i.kt)("inlineCode",{parentName:"p"},"gasFee = gasUsed * gasPrice"),". gasFee takes the smallest unit of CFX, Drip."),(0,i.kt)("p",null,"Suppose there is a regular transfer of 1 CFX, the gas limit can be set to 21,000. If the gasPrice is set to 1GDrip, then the total cost of the transaction is ",(0,i.kt)("inlineCode",{parentName:"p"},"1 + 21000 * 0.000000001 = 1.000021 CFX"),", where 1 CFX is transferred to the recipient's account, and 0.000021 CFX is the reward for the miner."),(0,i.kt)("p",null,"In addition, in a Conflux transaction, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas limit")," is more than the actual amount of gas consumed (",(0,i.kt)("inlineCode",{parentName:"p"},"gasUsed"),"), the exceeding part will be returned. The returning amount of gas can only be up to a quarter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas limit"),"."),(0,i.kt)("p",null,"Suppose the gas limit for a regular CFX transfer is set to 100k and the actual execution consumed 21,000, since the gas limit for the transaction is set too high, at most 25,000 of the gas fee will be returned(25% of the gas limit). The gas used for the transaction will be ",(0,i.kt)("inlineCode",{parentName:"p"},"0.000075 CFX"),"."),(0,i.kt)("p",null,"If the gas limit setting of the transaction is not that high, take the same example as above but set the gas limit to 25000, which is 4000 more than the actual amount used, the exceeding part is not more than a quarter of the gas limit. This part will be returned fully, and the final amount of fees charged will still be ",(0,i.kt)("inlineCode",{parentName:"p"},"0.000021 CFX"),"."),(0,i.kt)("h2",{id:"how-to-set-gas-and-gasprice-properly"},"How to Set gas and gasPrice Properly"),(0,i.kt)("h3",{id:"gasprice-1"},"gasPrice"),(0,i.kt)("p",null,"Usually, gasPrice can be set within the range of 1G to 10,000G. If the network is not congested, 1G would be enough. If the waiting time after sending the transaction is too long, you can set the gasPrice to 10G or 100G."),(0,i.kt)("h3",{id:"gas-1"},"gas"),(0,i.kt)("p",null,"For regular CFX transfers, setting the gas to 21,000 is enough."),(0,i.kt)("p",null,"For contract interactions, you can estimate the gas value by using the method ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral"),", which simulates the execution of the transaction and returns the actual amount of gas used for the transaction. In most cases the value returned by this method is accurate, but sometimes there could be underestimations. A safe way of dealing with this is to multiply the result of the estimation by a factor ",(0,i.kt)("inlineCode",{parentName:"p"},"1.3"),". This ensures that the gas limit is sufficient for the transaction, and any excessive gas fee will be refunded."),(0,i.kt)("h2",{id:"faqs"},"FAQs"),(0,i.kt)("h3",{id:"1-are-there-any-eip-1559-transactions-in-the-conflux-network"},"1. Are there any EIP-1559 transactions in the Conflux network?"),(0,i.kt)("p",null,"Currently, in the Conflux network, there are only transactions that correspond to the EIP-155 standard."),(0,i.kt)("h2",{id:"further-readings"},"Further Readings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/gas/"},"Ethereum Developer Documentation: Gas and Fees")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ethgas.io/index.html"},"Ethereum Gas Explained"))))}d.isMDXComponent=!0},7992:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gas1-7cc4ad4cf93fd42551f35d2edf9566cf.png"},1685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx-gas-charged-631705fab32539aea535cfd7c829ba48.jpeg"}}]);