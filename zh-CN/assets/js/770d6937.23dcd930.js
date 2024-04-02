"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9147],{72899:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=e(85893),r=e(11151);const o={displayed_sidebar:"generalSidebar"},s="Short-Circuiting",a={id:"general/build/smart-contracts/gas-optimization/shortCircuit",title:"Short-Circuiting",description:"\u5728Solidity\u4e2d\uff0c\u6bcf\u4e00\u4e2a\u9700\u8981\u4e0a\u94fe\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u6d88\u8017gas\uff0c\u77ed\u8def\u8fd0\u7b97\u662f\u4e00\u79cd\u7f16\u7801\u6280\u5de7\uff0c\u5b83\u4ec5\u5728\u7b2c\u4e00\u4e2a\u53c2\u6570\u6ca1\u6709\u786e\u5b9a\u7ed3\u679c\u65f6\u624d\u8bc4\u4f30\u903b\u8f91\u64cd\u4f5c\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u4ece\u800c\u663e\u8457\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684gas\u6d88\u8017\uff0c\u63d0\u9ad8\u6548\u7387\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/build/smart-contracts/gas-optimization/shortCircuit.md",sourceDirName:"general/build/smart-contracts/gas-optimization",slug:"/general/build/smart-contracts/gas-optimization/shortCircuit",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/shortCircuit",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Low-Cost Reentrancy Guard",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/reentrancy-guard"},next:{title:"Uint Types Gas Comparison",permalink:"/zh-CN/docs/general/build/smart-contracts/gas-optimization/uint"}},c={},u=[];function l(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"short-circuiting",children:"Short-Circuiting"}),"\n",(0,i.jsx)(t.p,{children:"\u5728Solidity\u4e2d\uff0c\u6bcf\u4e00\u4e2a\u9700\u8981\u4e0a\u94fe\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u6d88\u8017gas\uff0c\u77ed\u8def\u8fd0\u7b97\u662f\u4e00\u79cd\u7f16\u7801\u6280\u5de7\uff0c\u5b83\u4ec5\u5728\u7b2c\u4e00\u4e2a\u53c2\u6570\u6ca1\u6709\u786e\u5b9a\u7ed3\u679c\u65f6\u624d\u8bc4\u4f30\u903b\u8f91\u64cd\u4f5c\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u4ece\u800c\u663e\u8457\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684gas\u6d88\u8017\uff0c\u63d0\u9ad8\u6548\u7387\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"\u4ee3\u7801\u6f14\u793a"})}),"\n",(0,i.jsx)(t.p,{children:"Below, we demonstrates how short-circuiting can be applied to minimize gas usage:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-solidity",children:"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract LogicOptimization {\n    // High gas consumption function\n    function heavy() public pure returns (bool ok) {\n        uint num;\n        for (uint256 i = 0; i < 1000; i++) {\n            num = i + 1;\n        }\n        ok = true;\n    }\n\n    // Low gas consumption function\n    function light() public pure returns (bool ok) {\n        ok = true;\n    }\n\n    // No short-circuiting: higher gas usage\n    function basic() external pure {\n        heavy() || light(); // Evaluates both heavy() and light()\n    }\n\n    // With short-circuiting: reduced gas usage\n    function efficient() external pure {\n        light() || heavy(); // light() evaluated first, heavy() skipped if light() is true\n    }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u5173\u4e8e gas \u4f18\u5316\u7684\u5efa\u8bae\uff1a"}),"\n",(0,i.jsxs)(t.p,{children:["\ud83c\udf1f Utilize ",(0,i.jsx)(t.strong,{children:"short-circuiting"})," to prevent unnecessary function calls or computations."]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83c\udf1f Place functions or conditions likely to succeed (or that are less gas-consuming) ",(0,i.jsx)(t.strong,{children:"before"})," others in logical operations."]}),"\n",(0,i.jsx)(t.p,{children:"\ud83c\udf1f Understand the gas cost of operations and structure your code to minimize these costs whenever possible."})]})}function d(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>a,a:()=>s});var i=e(67294);const r={},o=i.createContext(r);function s(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);