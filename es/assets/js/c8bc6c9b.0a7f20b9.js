"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6112],{20044:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(85893),o=t(11151);const i={displayed_sidebar:"generalSidebar",sidebar_position:2},r="Memory vs Calldata",s={id:"general/build/smart-contracts/gas-optimization/memoryAndCalldata",title:"Memory vs Calldata",description:"1. memory: Typically used for function parameters and temporary variables within functions. Stored in memory and not persistent on the blockchain.",source:"@site/docs/general/build/smart-contracts/gas-optimization/memoryAndCalldata.md",sourceDirName:"general/build/smart-contracts/gas-optimization",slug:"/general/build/smart-contracts/gas-optimization/memoryAndCalldata",permalink:"/es/docs/general/build/smart-contracts/gas-optimization/memoryAndCalldata",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:2,frontMatter:{displayed_sidebar:"generalSidebar",sidebar_position:2},sidebar:"generalSidebar",previous:{title:"Gas Optimization",permalink:"/es/docs/general/build/smart-contracts/gas-optimization/"},next:{title:"Bitmap & Bitwise operation",permalink:"/es/docs/general/build/smart-contracts/gas-optimization/bitmap"}},l={},c=[];function d(n){const e={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"memory-vs-calldata",children:"Memory vs Calldata"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"memory"}),": Typically used for function parameters and temporary variables within functions. Stored in memory and not persistent on the blockchain."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"calldata"}),": Similar to memory, stored in memory and not persistent on the blockchain. The key difference is that calldata variables are immutable and commonly used for function parameters."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Learn more:\n",(0,a.jsx)(e.a,{href:"https://docs.soliditylang.org/en/latest/types.html#data-location",children:"Data location and assignment behavior"})]}),"\n",(0,a.jsxs)(e.p,{children:["Below, we demonstrate how to write data using both ",(0,a.jsx)(e.code,{children:"calldata"})," and ",(0,a.jsx)(e.code,{children:"memory"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-solidity",children:"contract CalldataAndMemory {\n    struct Confi {\n        uint16 age;\n        string name;\n        string wish;\n    }\n\n    Confi John;\n    Confi Jane;\n\n    function writeToJohn(Confi calldata JohnData) external {\n        John = JohnData;\n    }\n\n    function writeToJane(Confi memory JaneData) external {\n        Jane = JaneData;\n    }\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"Recommendations for gas optimization:"}),"\n",(0,a.jsxs)(e.p,{children:["\ud83c\udf1f In practical situations, if it's possible to use calldata, it is recommended to use ",(0,a.jsx)(e.code,{children:"calldata"})," instead of ",(0,a.jsx)(e.code,{children:"memory"}),"."]})]})}function m(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);