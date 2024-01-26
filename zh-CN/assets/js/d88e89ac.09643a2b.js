"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9213],{98199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(85893),o=n(11151),s=n(73992),i=n(18679);const a={sidebar_position:3,title:"thirdweb",description:"\u4f7f\u7528 thirdweb \u90e8\u7f72\u5408\u7ea6",displayed_sidebar:"eSpaceSidebar"},l=void 0,c={id:"espace/tutorials/deployContract/thirdweb",title:"thirdweb",description:"\u4f7f\u7528 thirdweb \u90e8\u7f72\u5408\u7ea6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/tutorials/deployContract/thirdweb.md",sourceDirName:"espace/tutorials/deployContract",slug:"/espace/tutorials/deployContract/thirdweb",permalink:"/zh-CN/docs/espace/tutorials/deployContract/thirdweb",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"thirdweb",description:"\u4f7f\u7528 thirdweb \u90e8\u7f72\u5408\u7ea6",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"Remix IDE",permalink:"/zh-CN/docs/espace/tutorials/deployContract/remix"},next:{title:"Brownie",permalink:"/zh-CN/docs/espace/tutorials/deployContract/brownie"}},d={},u=[{value:"Create Contract",id:"create-contract",level:2},{value:"\u90e8\u7f72\u5408\u7ea6",id:"\u90e8\u7f72\u5408\u7ea6",level:2},{value:"\u89c6\u9891\u6559\u7a0b",id:"\u89c6\u9891\u6559\u7a0b",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"create-contract",children:"Create Contract"}),"\n",(0,r.jsx)(t.p,{children:"\u60f3\u4f7f\u7528 thirdweb \u547d\u4ee4\u884c\u521b\u5efa\u65b0\u7684\u667a\u80fd\u5408\u7ea6\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"In your CLI run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx thirdweb create contract\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Input your preferences for the command line prompts:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Give your project a name"}),"\n",(0,r.jsx)(t.li,{children:"Choose your preferred framework: Hardhat or Foundry"}),"\n",(0,r.jsx)(t.li,{children:"Name your smart contract"}),"\n",(0,r.jsxs)(t.li,{children:["Choose the type of base contract: Empty, ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc20base",children:"ERC20"}),", ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc721base",children:"ERC721"}),", or ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/solidity/base-contracts/erc1155base",children:"ERC1155"})]}),"\n",(0,r.jsxs)(t.li,{children:["Add any desired ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/solidity/extensions",children:"extensions"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Once created, navigate to your project\u2019s directory and open in your preferred code editor."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If you open the ",(0,r.jsx)(t.code,{children:"contracts"})," folder, you will find your smart contract; this is your smart contract written in Solidity."]}),"\n",(0,r.jsxs)(t.p,{children:["The following is code for an ERC721Base contract without specified extensions. It implements all of the logic inside the ",(0,r.jsx)(t.a,{href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/base/ERC721Base.sol",children:(0,r.jsx)(t.code,{children:"ERC721Base.sol"})})," contract; which implements the ",(0,r.jsx)(t.a,{href:"https://github.com/thirdweb-dev/contracts/blob/main/contracts/eip/ERC721A.sol",children:(0,r.jsx)(t.code,{children:"ERC721A"})})," standard."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@thirdweb-dev/contracts/base/ERC721Base.sol";\n\ncontract Contract is ERC721Base {\n    constructor(\n        string memory _name,\n        string memory _symbol,\n        address _royaltyRecipient,\n        uint128 _royaltyBps\n    ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"This contract inherits the functionality of ERC721Base through the following steps:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Importing the ERC721Base contract"}),"\n",(0,r.jsx)(t.li,{children:"Inheriting the contract by declaring that our contract is an ERC721Base contract"}),"\n",(0,r.jsx)(t.li,{children:"Implementing any required methods, such as the constructor."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["After modifying your contract with your desired custom logic, you may deploy it to Conflux using ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/deploy",children:"Deploy"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"Alternatively, you can deploy a prebuilt contract for NFTs, tokens, or marketplace directly from the thirdweb Explore page:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["\u8bbf\u95ee thirdweb Explore \u9875\u9762\uff1a",(0,r.jsx)(t.a,{href:"https://thirdweb.com/explore",children:"https://thirdweb.com/explore"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"thirdweb Explore page",src:n(6817).Z+"",width:"2032",height:"1167"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Choose the type of contract you want to deploy from the available options: NFTs, tokens, marketplace, and more."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Follow the on-screen prompts to configure and deploy your contract."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u60f3\u8981\u4e86\u89e3 Explore \u4e0a\u4e0d\u540c\u5408\u7ea6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/pre-built-contracts",children:"thirdweb \u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u90e8\u7f72\u5408\u7ea6",children:"\u90e8\u7f72\u5408\u7ea6"}),"\n",(0,r.jsx)(t.p,{children:"Deploy allows you to deploy a smart contract to any EVM compatible network without configuring RPC URLs, exposing your private keys, writing scripts, and other additional setup such as verifying your contract."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u60f3\u8981\u4f7f\u7528 deploy \u90e8\u7f72\u60a8\u7684\u667a\u80fd\u5408\u7ea6\uff0c\u8bf7\u5bfc\u822a\u81f3\u60a8\u9879\u76ee\u7684\u6839\u76ee\u5f55\u5e76\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx thirdweb deploy\n"})}),"\n",(0,r.jsx)(t.p,{children:"Executing this command will trigger the following actions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u7f16\u8bd1\u5f53\u524d\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u5408\u7ea6\u3002"}),"\n",(0,r.jsx)(t.li,{children:"Providing the option to select which contract(s) you wish to deploy."}),"\n",(0,r.jsx)(t.li,{children:"Uploading your contract source code (ABI) to IPFS."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"When it is completed, it will open a dashboard interface to finish filling out the parameters."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_name"}),": contract name"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_symbol"}),': symbol or "ticker"']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_royaltyRecipient"}),": wallet address to receive royalties from secondary sales"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"_royaltyBps"}),": basis points (bps) that will be given to the royalty recipient for each secondary sale, e.g. 500 = 5%"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Select ",(0,r.jsx)(t.code,{children:"TelosEvm"})," as the network"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Manage additional settings on your contract\u2019s dashboard as needed such as uploading NFTs, configuring permissions, and more."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For additional information on Deploy, please reference ",(0,r.jsx)(t.a,{href:"https://portal.thirdweb.com/deploy",children:"thirdweb\u2019s documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["\u5982\u679c\u60a8\u5728\u8fc7\u7a0b\u4e2d\u6709\u4efb\u4f55\u95ee\u9898\u6216\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u8054\u7cfb thirdweb \u5bfb\u6c42\u652f\u6301 ",(0,r.jsx)(t.a,{href:"http://support.thirdweb.com/",children:"support.thirdweb.com"}),"\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u89c6\u9891\u6559\u7a0b",children:"\u89c6\u9891\u6559\u7a0b"}),"\n",(0,r.jsx)(t.p,{children:"In the following video, you can find a hands-on demonstration on how to use thirdweb to deploy smart contracts on Conflux eSpace:"}),"\n","\n","\n",(0,r.jsx)(s.Z,{children:(0,r.jsx)(i.Z,{value:"youtube",label:"thirdweb tutorial",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ilkj3ay0Uu4?si=CJmPLankHKlPgkAy",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},18679:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const o={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n,children:t})}},73992:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(67294),o=n(36905),s=n(72957),i=n(16550),a=n(81270),l=n(75238),c=n(33609),d=n(92560);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=b({queryString:n,groupId:o}),[m,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,d.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),f=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(51048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),o=a[n].value;o!==r&&(c(t),i(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function g(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,y.jsx)(j,{...e,...t}),(0,y.jsx)(w,{...e,...t})]})}function v(e){const t=(0,x.Z)();return(0,y.jsx)(g,{...e,children:u(e.children)},String(t))}},6817:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/thirdweb-explore-ee9602c6ab8d6ea5e27779bef06b740c.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);