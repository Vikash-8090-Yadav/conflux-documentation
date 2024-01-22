"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6118],{48679:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=c(85893),o=c(11151);const s={sidebar_position:4,title:"Accounts",displayed_sidebar:"coreSidebar"},a=void 0,r={id:"core/core-space-basics/accounts",title:"Accounts",description:"This page is created to provide information for CORE SPACE ACCOUNTS. Refer to General-Accounts for the overall introduction of the concept of ACCOUNTS.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/core-space-basics/accounts.md",sourceDirName:"core/core-space-basics",slug:"/core/core-space-basics/accounts",permalink:"/es/docs/core/core-space-basics/accounts",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Accounts",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Sponsorship Mechanism",permalink:"/es/docs/core/core-space-basics/sponsor-mechanism"},next:{title:"Overview",permalink:"/es/docs/core/core-space-basics/transactions/overview"}},i={},d=[{value:"Account Address",id:"account-address",level:2},{value:"Account State",id:"account-state",level:2},{value:"Query",id:"query",level:3},{value:"Illustration",id:"illustration",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["This page is created to provide information for CORE SPACE ACCOUNTS. Refer to ",(0,n.jsx)(t.a,{href:"/es/docs/general/conflux-basics/accounts",children:"General-Accounts"})," for the overall introduction of the concept of ACCOUNTS."]})}),"\n",(0,n.jsx)(t.h2,{id:"account-address",children:"Account Address"}),"\n",(0,n.jsxs)(t.p,{children:["An account is identified by its address. For more information, refer to ",(0,n.jsx)(t.a,{href:"/es/docs/core/core-space-basics/addresses",children:"Address"})]}),"\n",(0,n.jsx)(t.h2,{id:"account-state",children:"Account State"}),"\n",(0,n.jsx)(t.h3,{id:"query",children:"Query"}),"\n",(0,n.jsxs)(t.p,{children:["The account state can be queried using ",(0,n.jsx)(t.a,{href:"/es/docs/core/build/json-rpc/cfx-namespace#cfx_getaccount",children:"cfx_getAccount RPC"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'// Request\ncurl --data \'{"jsonrpc":"2.0","method":"cfx_getAccount","params":["cfx:type.contract:acc7uawf5ubtnmezvhu9dhc6sghea0403y2dgpyfjp", "latest_state"],"id":1}\' -H "Content-Type: application/json" localhost:12539\n\n// Result\n{\n  "jsonrpc": "2.0",\n  "result": {\n    "accumulatedInterestReturn": "0x0",\n    "admin": "CFX:TYPE.USER:AARC9ABYCUE0HHZGYRR53M6CXEDGCCRMMYYBJGH4XG",\n    "balance": "0x0",\n    "codeHash": "0x45fed62dd2b7c5ed76a63628ddc811e69bb5770cf31dd55647ca219aaee5434f",\n    "collateralForStorage": "0x0",\n    "nonce": "0x1",\n    "stakingBalance": "0x0"\n  },\n  "id": 1\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"illustration",children:"Illustration"}),"\n",(0,n.jsx)(t.p,{children:"The global state of Conflux is composed of individual account states, each of which is an address-state pair (key pair)."}),"\n",(0,n.jsx)(t.p,{children:"A Conflux account state includes five parts:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Basic state"})," is the basic state of the account."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Storage state"})," is a key/value database or storage space that can be used to store custom states or data of smart contracts."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Code information"})," is the code information of the smart contract account. It includes the contract codes and the ",(0,n.jsx)(t.code,{children:"address"})," of the account that paid the fee for the storage space occupied by the codes."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Staking deposit list"})," is the list of Staking operations of the accounts (it will be removed in the next Hardfork)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Staking vote lock list"})," is the list of lock operations performed by the account to participate in DAO voting."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The basic status of the account consists of eight fields as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Nonce"})," is a counter to keep track of the number of transactions sent by an account. It is also used to ensure that each transaction can only be executed once. For contract accounts, this value indicates the number of ",(0,n.jsx)(t.code,{children:"contracts created by this contract"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Balance"})," is the number of CFX of the address in Drip. Drip is the smallest unit of CFX, where 1CFX=1018 Drip."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"CodeHash"})," is the hash of the code of the contract account. The user can reference the contract code, the code cannot be modified after the contract is created. The code will be executed when the contract receives a message call. For external accounts, codeHash is a hash of an empty string."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"StakingBalance"})," is the balance of the staked amount. Similarly, the unit is Drip."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Admin"})," is the administrator address of the ",(0,n.jsx)(t.code,{children:"contract account"})," recorded in the AdminControl internal contract. In default, the contract administrator is set to the account which deployed this contract when it is created. The administrator can destroy the contract it manages through the internal contract AdminControl, or give the administrator role to another account. The administrator address of an external account is itself."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"SponsorInfo"})," is the information of the contract sponsor. It contains ",(0,n.jsx)(t.code,{children:"sponsor for gas"}),", ",(0,n.jsx)(t.code,{children:"sponsor for collateral"}),", ",(0,n.jsx)(t.code,{children:"sponsor gas limit"}),", ",(0,n.jsx)(t.code,{children:"sponsor balance for gas"}),", and ",(0,n.jsx)(t.code,{children:"sponsor balance for collateral"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"StorageCollateral"})," is the amount of Drip staked to use the storage spaces."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"AccumulatedInterestReturn"})," is the amount of cumulative reward of the account from Staking. The unit of it is Drip. Starting with Conflux 2.0, users must also participate in PoS in order to receive the reward."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For more details about accounts, please refer to the ",(0,n.jsx)(t.code,{children:"Accounts"})," section in ",(0,n.jsx)(t.a,{href:"https://www.confluxnetwork.org/files/Conflux_Protocol_Specification.pdf",children:"Conflux Protocol Specification"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,c)=>{c.d(t,{Z:()=>r,a:()=>a});var n=c(67294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);