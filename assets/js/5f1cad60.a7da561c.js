"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7538],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const o={title:"v2.1",keywords:["CIPs","HardFork"]},i=void 0,l={unversionedId:"general/hardforks/v2.1",id:"general/hardforks/v2.1",title:"v2.1",description:"Conflux-Rust v2.1.0 is a small hardfork upgrade. In this upgrade 5 new CIPs will be activate, and also some improvement about storage and RPC.",source:"@site/docs/general/hardforks/v2.1.md",sourceDirName:"general/hardforks",slug:"/general/hardforks/v2.1",permalink:"/docs/general/hardforks/v2.1",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/hardforks/v2.1.md",tags:[],version:"current",frontMatter:{title:"v2.1",keywords:["CIPs","HardFork"]},sidebar:"tutorialSidebar",previous:{title:"v2.0",permalink:"/docs/general/hardforks/v2.0"},next:{title:"v2.3",permalink:"/docs/general/hardforks/v2.3"}},s={},u=[{value:"New CIPs",id:"new-cips",level:2},{value:"New InternalContract",id:"new-internalcontract",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Storage",id:"storage",level:3},{value:"RPC",id:"rpc",level:3},{value:"Update schedule",id:"update-schedule",level:2},{value:"Mainnet",id:"mainnet",level:3},{value:"Testnet",id:"testnet",level:3},{value:"Additional links",id:"additional-links",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Conflux-Rust v2.1.0 is a small hardfork upgrade. In this upgrade 5 new CIPs will be activate, and also some improvement about storage and RPC."),(0,r.kt)("h2",{id:"new-cips"},"New CIPs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-94.md"},"CIP-94"),": proposes to use on-chain DAO voting to decide and update reward parameters without hardfork."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-97.md"},"CIP-97"),": proposes to remove account's staking lists."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-98.md"},"CIP-98"),": Fix a bug in BLOCKHASH opcode in eSpace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-99.md"},"CIP-99"),": Allow more not-voting terms before we force-retire a node, and make the unlock period of a retiring node shorter to allow the node to rejoin the PoS voting faster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-105.md"},"CIP-105")," PoS staking based minimal DAO vote count.")),(0,r.kt)("h2",{id:"new-internalcontract"},"New InternalContract"),(0,r.kt)("p",null,"CIP-94 also has introduce a new InternalContract ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamControl")," at hex address ",(0,r.kt)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000007"),". This contract can be used to retrive parameter info and participate in DAO vote."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// SPDX-License-Identifier: MIT\n\npragma solidity >=0.8.0;\n\ninterface ParamsControl {\n    struct Vote {\n        uint16 topic_index;\n        uint256[3] votes;\n    }\n\n    /*** Query Functions ***/\n    /**\n     * @dev cast vote for parameters\n     * @param vote_round The round to vote for\n     * @param vote_data The list of votes to cast\n     */\n    function castVote(uint64 vote_round, Vote[] calldata vote_data) external;\n\n    /**\n     * @dev read the vote data of an account\n     * @param addr The address of the account to read\n     */\n    function readVote(address addr) external view returns (Vote[] memory);\n\n    /**\n     * @dev Current vote round\n     */\n    function currentRound() external view returns (uint64);\n\n    /**\n     * @dev read the total votes of given round\n     * @param vote_round The vote number\n     */\n    function totalVotes(uint64 vote_round) external view returns (Vote[] memory);\n\n    /**\n     * @dev read the PoS stake for the round.\n     */\n    function posStakeForVotes(uint64) external view returns (uint256);\n\n    event CastVote(uint64 indexed vote_round, address indexed addr, uint16 indexed topic_index, uint256[3] votes);\n    event RevokeVote(uint64 indexed vote_round, address indexed addr, uint16 indexed topic_index, uint256[3] votes);\n}\n")),(0,r.kt)("h2",{id:"improvements"},"Improvements"),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("p",null,"Allow snapshots to be removed during recovery. This reduces the disk space requirement for full node sync or recovery."),(0,r.kt)("p",null,"In v2.1.0 Conflux-Rust also brought support for ",(0,r.kt)("inlineCode",{parentName:"p"},"fullstate query"),", which means we can query state at any blockchain height. For example we can query an address ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx:aaketjh9tkj5g2k4zx3kfvb9vkku8nr956n0en4fhe"),"'s balance at height ",(0,r.kt)("inlineCode",{parentName:"p"},"100000")," with method ",(0,r.kt)("inlineCode",{parentName:"p"},"cfx_getBalance")," by specifying the second parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://main.confluxrpc.com\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \' {\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "method": "cfx_getBalance",\n    "params": [\n        "cfx:aaketjh9tkj5g2k4zx3kfvb9vkku8nr956n0en4fhe",\n        "0x186a0"\n    ]\n  }\'\n')),(0,r.kt)("p",null,"To support conflux fullstate query, a archive node with configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_single_mpt_storage")," enabled is required. And the node need sync data from genesis to construct all the history states. Besides nodes can also set ",(0,r.kt)("inlineCode",{parentName:"p"},'single_mpt_space = "evm"')," to only store eSpace states."),(0,r.kt)("h3",{id:"rpc"},"RPC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_subscribe")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"eth_unsubscribe")," in eSpace RPCs."),(0,r.kt)("li",{parentName:"ul"},"Add a RPC method ",(0,r.kt)("inlineCode",{parentName:"li"},"cfx_getParamsFromVote")," to return the currently used value of the voted parameters."),(0,r.kt)("li",{parentName:"ul"},"Return null for getting skipped transactions and receipts. Whether they will be returned was nondeterministic before, but now they are ensured to be null.")),(0,r.kt)("h2",{id:"update-schedule"},"Update schedule"),(0,r.kt)("h3",{id:"mainnet"},"Mainnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v2.1.0 hardfork ",(0,r.kt)("inlineCode",{parentName:"li"},"epochNumber")," has been set to ",(0,r.kt)("inlineCode",{parentName:"li"},"56800000")," (estimated on Oct. 18th, 2022 (GMT+8))"),(0,r.kt)("li",{parentName:"ul"},"CIP-94 activate ",(0,r.kt)("inlineCode",{parentName:"li"},"blockNumber")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"133800000")," (estimated on Oct. 25th, 2022 (GMT+8))"),(0,r.kt)("li",{parentName:"ul"},"CIP-99 activate ",(0,r.kt)("inlineCode",{parentName:"li"},"PoS blockNumber")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"330000")," (estimated on Oct. 25th, 2022 (GMT+8))")),(0,r.kt)("h3",{id:"testnet"},"Testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v2.1.0 hardfork ",(0,r.kt)("inlineCode",{parentName:"li"},"epochNumber")," has been set to ",(0,r.kt)("inlineCode",{parentName:"li"},"88100000")," (around 22:00 Aug.17th, 2022(GMT+8))"),(0,r.kt)("li",{parentName:"ul"},"CIP-94 activate ",(0,r.kt)("inlineCode",{parentName:"li"},"blockNumber")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"112400000")),(0,r.kt)("li",{parentName:"ul"},"CIP-99 activate ",(0,r.kt)("inlineCode",{parentName:"li"},"PoS blockNumber")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"342000"))),(0,r.kt)("h2",{id:"additional-links"},"Additional links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://forum.conflux.fun/t/conflux-v2-1-0-network-hardfork-upgrade-announcement/16571"},"Mainnet update announcement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/conflux-rust/releases/tag/v2.1.0"},"Conflux-rust v2.1.0 release")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://forum.conflux.fun/t/conflux-v2-1-0-testnet-testnet-upgrade-announcement/16075"},"Testnet update announcement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://test.confluxhub.io/governance/dashboard"},"Testnet governance dApp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/conflux-rust/releases/tag/v2.1.0-testnet"},"Conflux-rust v2.1.0 testnet release"))))}c.isMDXComponent=!0}}]);