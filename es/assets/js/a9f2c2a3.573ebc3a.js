"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1508],{4137:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(o),u=r,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||n;return o?a.createElement(f,s(s({ref:t},d),{},{components:o})):a.createElement(f,s({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},34:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=o(7462),r=(o(7294),o(4137));const n={sidebar_position:3,title:"Storage",keywords:["storage"]},s=void 0,i={unversionedId:"core/learn/core-space-basics/storage",id:"core/learn/core-space-basics/storage",title:"Storage",description:"Conflux introduced the Collateral for storage (CFS) mechanism as a pricing method for using storage. Compared with the one-time storage fee in Ethereum, the CFS mechanism will be more fair and reasonable. In principle, this mechanism requires a certain amount of funds to be locked as collateral to occupy storage space. Before the corresponding storage space is released or covered by others, the collateral will be locked, and the corresponding interest generated by the locked collateral will be directly allocated to the miners for the maintenance of the storage space. Therefore, the storage cost of Conflux also depends on the length of time the storage space is occupied. Conflux specifically introduced this mechanism in detail in chapter 7 of its ConfluxProtocolSpecification.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/learn/core-space-basics/storage.md",sourceDirName:"core/learn/core-space-basics",slug:"/core/learn/core-space-basics/storage",permalink:"/es/docs/core/learn/core-space-basics/storage",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Storage",keywords:["storage"]},sidebar:"tutorialSidebar",previous:{title:"Accounts",permalink:"/es/docs/core/learn/core-space-basics/accounts"},next:{title:"Internal Contracts",permalink:"/es/docs/core/learn/core-space-basics/internal-contracts/"}},l={},c=[{value:"How to use storage collateral",id:"how-to-use-storage-collateral",level:2},{value:"Sponsorship Mechanism and Storage Points",id:"sponsorship-mechanism-and-storage-points",level:3}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Conflux introduced the Collateral for storage (CFS) mechanism as a pricing method for using storage. Compared with the one-time storage fee in Ethereum, the CFS mechanism will be more fair and reasonable. In principle, this mechanism requires a certain amount of funds to be locked as collateral to occupy storage space. Before the corresponding storage space is released or covered by others, the collateral will be locked, and the corresponding interest generated by the locked collateral will be directly allocated to the miners for the maintenance of the storage space. Therefore, the storage cost of Conflux also depends on the length of time the storage space is occupied. Conflux specifically introduced this mechanism in detail in chapter 7 of its ",(0,r.kt)("a",{parentName:"p",href:"https://confluxnetwork.org/files/Conflux_Protocol_Specification_20201020.pdf"},"Conflux_Protocol_Specification"),"."),(0,r.kt)("p",null,"In the Conflux network, each storage entry occupies a space of 64B (B is Bytes, byte), which is also the size of the key/value pair in the world state. It should be noted that the key in the blockchain is generally 256bits long and the value It is also 256bits long (each is 32B long, and the total is 64B long). The deposit required for storage is proportional to the minimum multiple of 64B that can cover all stored items. For each storage entry, the last account that writes to the entry is called the owner of the storage entry. If a storage item is written during the execution of contract C, and a guarantor provides guarantee for it, then C is regarded as the writer of the item and accordingly becomes the owner of the item (see section 7.1 for details). In the world state, during the entire life cycle of a storage item, the owner of the item must lock a fixed amount of CFX as a storage deposit for the storage space. Specifically, for each storage entry with a size of 64B, its owner will be locked by 1/16CFX. For occupying ",(0,r.kt)("inlineCode",{parentName:"p"},"1KB")," space, you will pay ",(0,r.kt)("inlineCode",{parentName:"p"},"1CFX")," as a deposit, and the corresponding formula is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:o(3338).Z,width:"510",height:"136"})),(0,r.kt)("p",null,"When account \u03b1 becomes the owner of a stored entry (whether it is created or modified), \u03b1 should immediately lock 1/16 CFX for the entry. If \u03b1 has enough balance, then the required deposit will be automatically locked, otherwise if \u03b1 does not have enough balance, the operation will fail and \u03b1 cannot create or modify the entry."),(0,r.kt)("p",null,'When a storage item is deleted from the world state, the corresponding 1/16 CFX deposit will be unlocked and returned to the item owner\'s balance. If the ownership of a storage item changes, the 1/16 CFX deposit of the old owner is unlocked, and the new owner must lock 1/16 CFX as the deposit at the same time. It is worth mentioning that the deposit refund is "quietly" added to the balance, and there is no transfer transaction available for inquiry.'),(0,r.kt)("h2",{id:"how-to-use-storage-collateral"},"How to use storage collateral"),(0,r.kt)("p",null,"When users send a Conflux transaction, they need to fill in a ",(0,r.kt)("inlineCode",{parentName:"p"},"storageLimit")," field (in bytes). Storage limit plays the same role for storage as gas limit does for execution. The upper limit stipulates that the deposit increase of the deposit payer before and after the transaction is executed shall not exceed the ",(0,r.kt)("inlineCode",{parentName:"p"},"storage upper limit")," multiplied by 1/1024 CFX. If this value is filled in too low, it will cause the deposit to exceed the upper limit after execution and the execution will fail. Therefore, in general, this field needs to be set to a value larger than the actual usage, and the excess part will not generate storage mortgage. However, it is not recommended to fill in too high, because it may cause the sender's balance to be insufficient to pay the deposit, which may result in transaction failure. Fullnode provides the RPC method ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," to estimate the storage size that a transaction will use."),(0,r.kt)("p",null,"After the transaction is executed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Receipt")," contains several fields about storage changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storageCollateralized")," This is the amount of data that is stored and collateralized"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storageCoveredBySponsor")," Whether the storage mortgage for this transaction is sponsored by the sponsor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storageReleased")," The storage released by this transaction")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_getCollateralForStorage")," method to query the storage size currently mortgaged by an address, the unit is bytes, and the value divided by 1024 is the amount of CFX storage mortgaged. In addition, it can also be obtained through the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_getAccount")," method, and the returned information contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"collateralForStorage")," field."),(0,r.kt)("h3",{id:"sponsorship-mechanism-and-storage-points"},"Sponsorship Mechanism and Storage Points"),(0,r.kt)("p",null,"Conflux implements a ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/internal-contracts/sponsor-whitelist-control"},"sponsorship mechanism")," to subsidize the usage of smart contracts. Thus, a new account with zero balance is able to call smart contracts as long as the execution is sponsored."),(0,r.kt)("p",null,"As is mentioned above, CFX acts as collateral when utilizing storage space. And if the storage space in use is freed or its ownership changes, the collateralized CFX is refunded. However, circumstance slightly changes for storage collateral sponsorship with the activation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-107.md"},"CIP-107 DAO-Adjustable Burn of Storage Collateral"),"."),(0,r.kt)("p",null,"When a sponsor adds storage collateral for a contract, ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," proportion (starts at 0.5 and can be adjusted by ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/internal-contracts/params-control"},"On-Chain DAO Vote for Chain Parameters"),') of the CFX tokens will be burned and corresponding amount of "storage point" will be minted. The converted CFX is permanently burned and non-refundable under all circumstances, including situations where the contract is destroyed or the sponsor is replaced. For every 1 CFX burned, 1024 storage points will be generated. These storage points are non-transferrable and won\'t generate storage interest but can be used to cover storage collateral costs.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Sponsor collateral balances are prioritized for usage over storage points.")),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/es/docs/core/learn/core-space-basics/internal-contracts/sponsor-whitelist-control"},"sponsorship mechanism")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-107.md"},"CIP-107 DAO-Adjustable Burn of Storage Collateral")," for more information of the mentioned mechanisms."))}h.isMDXComponent=!0},3338:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/storage-formula-635173b54f6e13ba21a689cc691d4ecd-635173b54f6e13ba21a689cc691d4ecd.png"}}]);