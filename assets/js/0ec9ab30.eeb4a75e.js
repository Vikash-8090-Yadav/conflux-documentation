"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8367],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>h});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),c=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=t,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(h,s(s({ref:n},d),{},{components:a})):r.createElement(h,s({ref:n},d))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:t,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7681:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),t=(a(7294),a(3905));const o={sidebar_position:2,title:"Common Errors"},s="Common Error",i={unversionedId:"core/learn/core-space-basics/transactions/common-errors",id:"core/learn/core-space-basics/transactions/common-errors",title:"Common Errors",description:"When sending a transaction via method `cfx_sendRawTransaction`, if the transaction is not constructed correctly, the sending will fail. Some of the common errors are:",source:"@site/docs/core/learn/core-space-basics/transactions/common-errors.md",sourceDirName:"core/learn/core-space-basics/transactions",slug:"/core/learn/core-space-basics/transactions/common-errors",permalink:"/docs/core/learn/core-space-basics/transactions/common-errors",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Common Errors"},sidebar:"tutorialSidebar",previous:{title:"Core Space Transactions",permalink:"/docs/core/learn/core-space-basics/transactions/transaction_explain"},next:{title:"Why Transaction is Pending?",permalink:"/docs/core/learn/core-space-basics/transactions/why-transaction-is-pending"}},l={},c=[{value:"Nonce Usage Error",id:"nonce-usage-error",level:2},{value:"using a nonce that has already been executed",id:"using-a-nonce-that-has-already-been-executed",level:3},{value:"using a nonce that has already been sent to the transaction pool",id:"using-a-nonce-that-has-already-been-sent-to-the-transaction-pool",level:3},{value:"using a too large nonce",id:"using-a-too-large-nonce",level:3},{value:"Gas",id:"gas",level:3},{value:"gasPrice",id:"gasprice",level:3},{value:"Data",id:"data",level:3},{value:"epochHeight",id:"epochheight",level:3},{value:"chainId Usage Error",id:"chainid-usage-error",level:3},{value:"Encoding or Signature Error",id:"encoding-or-signature-error",level:3},{value:"Full Transaction Pool",id:"full-transaction-pool",level:3},{value:"Others",id:"others",level:2},{value:"the node is in catch-up mode",id:"the-node-is-in-catch-up-mode",level:3},{value:"internal error",id:"internal-error",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...a}=e;return(0,t.kt)(p,(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"common-error"},"Common Error"),(0,t.kt)("p",null,"When sending a transaction via method ",(0,t.kt)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction"),", if the transaction is not constructed correctly, the sending will fail. Some of the common errors are:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"using a nonce that has already been executed"),(0,t.kt)("li",{parentName:"ul"},"using a nonce that has already been sent to the transaction pool")),(0,t.kt)("p",null,"There are also several other cases where sending fails:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"The chainId is under mismatch."),(0,t.kt)("li",{parentName:"ul"},"epochHeight is too large"),(0,t.kt)("li",{parentName:"ul"},"gas exceeds 15 million (half of block gas limit)"),(0,t.kt)("li",{parentName:"ul"},"gas is less than 21000"),(0,t.kt)("li",{parentName:"ul"},"data is too large (exceeds 200K)"),(0,t.kt)("li",{parentName:"ul"},"gasPrice is set to 0"),(0,t.kt)("li",{parentName:"ul"},"Signature error"),(0,t.kt)("li",{parentName:"ul"},"Transaction pool is full")),(0,t.kt)("p",null,"The following are the RPC errors returned by the ",(0,t.kt)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," method when a transaction fails"),(0,t.kt)("h2",{id:"nonce-usage-error"},"Nonce Usage Error"),(0,t.kt)("h3",{id:"using-a-nonce-that-has-already-been-executed"},"using a nonce that has already been executed"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"Transaction 0x4a2cfa73267139d965ab86d41f2af16db09e62ff92a5abffd7f8e743f36f327c is discarded due to a too stale nonce\\""\n    }\n}\n')),(0,t.kt)("p",null,"In this case, the nonce needs to be changed to a currently available (unused) one"),(0,t.kt)("h3",{id:"using-a-nonce-that-has-already-been-sent-to-the-transaction-pool"},"using a nonce that has already been sent to the transaction pool"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"tx already exist\\""\n    }\n  }\n')),(0,t.kt)("p",null,"or"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Tx with same nonce already inserted. to replace it, you need to specify a gas price > {}"\n    }\n}\n')),(0,t.kt)("p",null,"For both cases, the transaction has already been sent to the transaction pool. If you want to update or replace it, you can use the same nonce, modify the corresponding field, and resend it with a higher gasPrice value."),(0,t.kt)("h3",{id:"using-a-too-large-nonce"},"using a too large nonce"),(0,t.kt)("p",null,"The nonce for sending a transaction cannot be too large for the user's current nonce. If it exceeds 2000, the following error will be found:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data":"\\"Transaction 0xc875a03e1ce01268931a1a428d8f8313714ab5eb9c2b626bd327af7e5c3e8c03 is discarded due to in too distant future\\""\n    }\n  }\n')),(0,t.kt)("h3",{id:"gas"},"Gas"),(0,t.kt)("p",null,"If the gas traded is too small (",(0,t.kt)("inlineCode",{parentName:"p"},"<21000"),") or too large (",(0,t.kt)("inlineCode",{parentName:"p"},">15m"),") the following error is returned:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"NotEnoughBaseGas { required: 21000, got: 2000 }\\""\n    }\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"transaction gas 20000000 exceeds the maximum value 15000000, the half of pivot block gas limit\\""\n    }\n}\n')),(0,t.kt)("h3",{id:"gasprice"},"gasPrice"),(0,t.kt)("p",null,"The gasPrice of the transaction cannot be set to 0:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"ZeroGasPrice\\""\n    }\n}\n')),(0,t.kt)("h3",{id:"data"},"Data"),(0,t.kt)("p",null,"The transaction has a size limit. The maximum is 200k."),(0,t.kt)("h3",{id:"epochheight"},"epochHeight"),(0,t.kt)("p",null,"If the epochHeight of a transaction is smaller than the epochNumber of the current network by more than 100k, the following error will be found."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"EpochHeightOutOfBound { block_height: 53800739, set: 0, transaction_epoch_bound: 100000 }\\""\n    }\n}\n')),(0,t.kt)("h3",{id:"chainid-usage-error"},"chainId Usage Error"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "\\"ChainIdMismatch { expected: 1, got: 2 }\\""\n    }\n}\n')),(0,t.kt)("h3",{id:"encoding-or-signature-error"},"Encoding or Signature Error"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: raw",\n        "data": "\\"RlpIncorrectListLen\\""\n    }\n}\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Can not recover pubkey for Ethereum like tx"\n    }\n}\n')),(0,t.kt)("h3",{id:"full-transaction-pool"},"Full Transaction Pool"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "txpool is full"\n    }\n}\n')),(0,t.kt)("p",null,"or"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Failed imported to deferred pool: Transaction Pool is full"\n    }\n}\n')),(0,t.kt)("p",null,"In this case, you can wait for a while to resend the transaction and increase the gasPrice of the transaction to help improve the chances of sending"),(0,t.kt)("h2",{id:"others"},"Others"),(0,t.kt)("h3",{id:"the-node-is-in-catch-up-mode"},"the node is in catch-up mode"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32077,\n        "message": "Request rejected due to still in the catch up mode,\n        "data": null\n    }\n}\n')),(0,t.kt)("p",null,"Wait for the node data to sync to the latest before sending"),(0,t.kt)("h3",{id:"internal-error"},"internal error"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "error": {\n        "code": -32602,\n        "message": "Invalid parameters: tx",\n        "data": "Failed to read account_cache from storage: {}"\n    }\n}\n')))}u.isMDXComponent=!0}}]);