"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9934],{49363:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var c=a(85893),s=a(11151);const r={sidebar_position:5,title:"CrossSpaceCall \u5408\u7ea6",description:"\u5bf9CrossSpaceCall\u5408\u7ea6\u7684\u8be6\u7ec6\u89e3\u91ca",displayed_sidebar:"eSpaceSidebar"},l=void 0,o={id:"espace/build/cross-space-bridge",title:"CrossSpaceCall \u5408\u7ea6",description:"\u5bf9CrossSpaceCall\u5408\u7ea6\u7684\u8be6\u7ec6\u89e3\u91ca",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/cross-space-bridge.md",sourceDirName:"espace/build",slug:"/espace/build/cross-space-bridge",permalink:"/zh-CN/docs/espace/build/cross-space-bridge",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"CrossSpaceCall \u5408\u7ea6",description:"\u5bf9CrossSpaceCall\u5408\u7ea6\u7684\u8be6\u7ec6\u89e3\u91ca",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"eSpace Mapped Addresses(Cross Space)",permalink:"/zh-CN/docs/espace/build/accounts"},next:{title:"Run an eSpace Node",permalink:"/zh-CN/docs/espace/build/run-a-node"}},t={},d=[{value:"CrossSpaceCall \u63a5\u53e3",id:"crossspacecall-\u63a5\u53e3",level:2},{value:"\u5728 eSpace \u548c Core Space \u4e4b\u95f4\u8f6c\u79fb CFX",id:"\u5728-espace-\u548c-core-space-\u4e4b\u95f4\u8f6c\u79fb-cfx",level:2},{value:"\u4ece Core Space \u5230 eSpace",id:"\u4ece-core-space-\u5230-espace",level:3},{value:"JS \u793a\u4f8b",id:"js-\u793a\u4f8b",level:4},{value:"\u4ece eSpace \u5230 Core Space",id:"\u4ece-espace-\u5230-core-space",level:3},{value:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740",id:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740",level:4},{value:"\u8f6c\u79fb\u6b65\u9aa4",id:"\u8f6c\u79fb\u6b65\u9aa4",level:4},{value:"JS \u793a\u4f8b",id:"js-\u793a\u4f8b-1",level:4},{value:"\u4ece Core Space \u8c03\u7528 eSpace \u5408\u7ea6",id:"\u4ece-core-space-\u8c03\u7528-espace-\u5408\u7ea6",level:2},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["Conflux eSpace \u548c Core Space \u662f\u4e24\u4e2a\u72ec\u7acb\u7684 space\uff0c\u60a8\u4e0d\u80fd\u76f4\u63a5\u5c06 CFX \u4ece base32 \u5730\u5740\u53d1\u9001\u5230\u5341\u516d\u8fdb\u5236\u5730\u5740\u3002 \u60a8\u53ea\u80fd\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"https://confluxhub.io/espace-bridge/cross-space",children:"Confluxhub Space Bridge"})," \u5728 eSpace \u548c Core Space \u4e4b\u95f4\u8f6c\u79fb CFX\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u5e95\u5c42\uff0cCore Space \u4e2d\u6709\u4e00\u4e2a\u540d\u4e3a CrossSpaceCall \u7684\u5185\u7f6e\u5408\u7ea6\uff0c\u7528\u4e8e\u5728 eSpace \u548c Core Space \u4e4b\u95f4\u8f6c\u79fb CFX\u3002 \u901a\u8fc7CrossSpaceCall\uff0c\u5728Core Space\u5185\u76f4\u63a5\u4e0eeSpace\u5408\u7ea6\u8fdb\u884c\u4e92\u52a8\u6210\u4e3a\u53ef\u80fd\u3002 \u8fd9\u4e2a\u5408\u7ea6\u662f\u7531 ",(0,c.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md",children:"CIP-90"})," \u5f15\u5165\u7684\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"crossspacecall-\u63a5\u53e3",children:"CrossSpaceCall \u63a5\u53e3"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e2a\u5408\u7ea6\u5728 Core Space \u4e2d\u53ef\u7528\uff0c\u5730\u5740\u4e3a\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["base32 \u5730\u5740\uff1a",(0,c.jsxs)(n.a,{href:"https://confluxscan.io/address/cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv",children:["'cfx",":aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv","'"]})]}),"\n",(0,c.jsxs)(n.li,{children:["\u5341\u516d\u8fdb\u5236\u5730\u5740\uff08\u5728 solidity \u4e2d\u4f7f\u7528\uff09\uff1a",(0,c.jsx)(n.code,{children:"0x0888000000000000000000000000000000000006"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u8fd9\u4e2a\u5408\u7ea6\u7684\u63a5\u53e3\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"interface CrossSpaceCall {\n    /**\n     * @dev \u5728 eSpace \u4e2d\u90e8\u7f72\u4e00\u4e2a\u5408\u7ea6\n     * @param init bytes - \u5408\u7ea6\u521d\u59cb\u5316\u5b57\u8282\u7801\n     * @return bytes20 - \u90e8\u7f72\u5408\u7ea6\u7684\u5341\u516d\u8fdb\u5236\u5730\u5740\n     */\n    function createEVM(bytes calldata init) external payable returns (bytes20);\n    /* \u8de8\u7a7a\u95f4 CFX \u8f6c\u79fb\u7684\u65b9\u6cd5 */\n\n    /**\n     * @dev \u5c06 CFX \u4ece Core space \u8f6c\u79fb\u5230 eSpace \u6307\u5b9a\u5730\u5740\u3002\u8f6c\u79fb\u91d1\u989d\u7531\u4ea4\u6613\u503c\u6307\u5b9a\u3002\n     * @param to bytes20 - \u63a5\u6536\u65b9\u5728 eSpace \u7684\u5341\u516d\u8fdb\u5236\u5730\u5740\n     * @return output bytes - \u4ea4\u6613\u8f93\u51fa\n     */\n    function transferEVM(bytes20 to) external payable returns (bytes memory output);\n    \n    /**\n     * @dev \u4ece eSpace \u6620\u5c04\u8d26\u6237\u4f59\u989d\u4e2d\u63d0\u53d6 CFX\n     * @param value uint256 - \u9700\u8981\u63d0\u53d6\u7684 CFX \u6570\u91cf\n     */ \n    function withdrawFromMapped(uint256 value) external;\n\n    /**\n     * @dev \u67e5\u8be2 eSpace \u6620\u5c04\u8d26\u6237\u7684 CFX \u4f59\u989d\n     * @param addr address - \u9700\u8981\u67e5\u8be2\u7684 core \u5730\u5740\n     * @return uint256 - \u4f59\u989d\n     */\n    function mappedBalance(address addr) external view returns (uint256);\n\n    /**\n     * @dev \u67e5\u8be2 eSpace \u6620\u5c04\u8d26\u6237\u7684 nonce\n     * @param addr address - \u9700\u8981\u67e5\u8be2\u7684 core \u5730\u5740\n     * @return uint256 - Nonce \u503c\n     */ \n    function mappedNonce(address addr) external view returns (uint256);\n    \n    /* \u5176\u4ed6\u8de8\u7a7a\u95f4\u64cd\u4f5c\u7684\u65b9\u6cd5 */\n\n    /**\n     * @dev \u4ece Core space \u8c03\u7528 eSpace \u5408\u7ea6\u65b9\u6cd5\n     * @param to bytes20 - eSpace \u4e2d\u5408\u7ea6\u7684\u5341\u516d\u8fdb\u5236\u5730\u5740\n     * @param data bytes - \u5408\u7ea6\u65b9\u6cd5\u8c03\u7528\u6570\u636e\n     * @return output bytes - \u65b9\u6cd5\u8c03\u7528\u7ed3\u679c\n     */ \n    function callEVM(bytes20 to, bytes calldata data) external payable returns (bytes memory output);\n\n    /**\n     * @dev \u4ece Core space \u9759\u6001\u8c03\u7528 eSpace \u5408\u7ea6\u65b9\u6cd5\n     * @param to bytes20 - eSpace \u4e2d\u5408\u7ea6\u7684\u5341\u516d\u8fdb\u5236\u5730\u5740\n     * @param data bytes - \u5408\u7ea6\u65b9\u6cd5\u8c03\u7528\u6570\u636e\n     * @return output bytes - \u65b9\u6cd5\u8c03\u7528\u7ed3\u679c\n     */ \n    function staticCallEVM(bytes20 to, bytes calldata data) external view returns (bytes memory output);\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5728-espace-\u548c-core-space-\u4e4b\u95f4\u8f6c\u79fb-cfx",children:"\u5728 eSpace \u548c Core Space \u4e4b\u95f4\u8f6c\u79fb CFX"}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u8c03\u7528 CrossSpaceCall \u5185\u7f6e\u5408\u7ea6\u7684\u76f8\u5173\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5728 eSpace \u548c Core Space \u4e4b\u95f4\u8f6c\u79fb CFX\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\uff0cCrossSpaceCall\uff08\u5982\u540c\u5176\u4ed6\u5185\u7f6e\u5408\u7ea6\u4e00\u6837\uff09\u53ea\u80fd\u5728 Conflux Core Space \u4e2d\u8bbf\u95ee\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u4ece-core-space-\u5230-espace",children:"\u4ece Core Space \u5230 eSpace"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u4ece Core \u5230 eSpace"}),"\uff1a\u8981\u5c06 CFX \u4ece Conflux Core \u8f6c\u79fb\u5230 Conflux eSpace\uff0c\u9700\u8981\u8c03\u7528\u8be5\u5408\u7ea6\u7684 ",(0,c.jsx)(n.code,{children:"transferEVM(bytes20 to)"})," \u65b9\u6cd5\u3002 \u6b64\u8f6c\u79fb\u7684\u76ee\u7684\u5730\u5740\u7531\u65b9\u6cd5\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"to"})," \u6307\u5b9a\u3002 \u8de8\u7a7a\u95f4\u8f6c\u79fb\u5c06\u5728\u4e00\u4e2a\u5355\u4e00\u7684\u539f\u5b50\u6b65\u9aa4\u4e2d\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"function transferEVM(bytes20 to) external payable returns (bytes memory output);\n"})}),"\n",(0,c.jsx)(n.h4,{id:"js-\u793a\u4f8b",children:"JS \u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst conflux = new Conflux({\n  url: 'https://main.confluxrpc.com',\n  chainId: 1029,\n});\n\nconst account = conflux.wallet.addPrivateKey(process.env.PRIVATE_KEY);\n\nconst crossSpaceCall = conflux.InternalContract('CrossSpaceCall');\n\nasync function main() {\n    const eSpaceAddress = '0x3D69D968e3673e188B2D2d42b6a385686186258f';\n\n    const receipt = await crossSpaceCall.transferEVM(eSpaceAddress)\n        .sendTransaction({\n            from: account,\n            value: Drip.fromCFX(1),  // \u8f6c\u79fb 1 CFX\uff0c\u91d1\u989d\u7531 value \u6307\u5b9a\n        }).executed();\n\n    console.log(`\u8f6c\u79fb\u5230 ${eSpaceAddress} ${receipt.outcomeStatus === 0 ?  'succeed' : 'failed'}`);\n}\n\nmain();\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u4ece-espace-\u5230-core-space",children:"\u4ece eSpace \u5230 Core Space"}),"\n",(0,c.jsx)(n.h4,{id:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740",children:"\u8de8\u7a7a\u95f4\u64cd\u4f5c\u4e2d\u7684\u6620\u5c04\u5730\u5740"}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u5c06 CFX \u4ece eSpace \u8f6c\u79fb\u5230 Core Space\uff0c\u9700\u8981\u4e00\u4e2a\u6620\u5c04\u5730\u5740\u3002 Core Space \u4e2d\u7684\u6bcf\u4e2a\u5730\u5740\u5728 eSpace \u4e2d\u90fd\u6709\u4e00\u4e2a ",(0,c.jsx)(n.strong,{children:"\u6620\u5c04\u5730\u5740"})," \uff08hex40\uff09\u3002 \u53ea\u6709 Core space \u5730\u5740\u53ef\u4ee5\u4ece\u5176\u6620\u5c04\u5730\u5740\u63d0\u53d6 CFX\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u5173\u6620\u5c04\u5730\u5740\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.jsx)(n.a,{href:"/zh-CN/docs/espace/build/accounts#mapped-addresses-in-cross-space-operations",children:"\u6620\u5c04\u5730\u5740"}),"\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"\u8f6c\u79fb\u6b65\u9aa4",children:"\u8f6c\u79fb\u6b65\u9aa4"}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u5c06 CFX \u4ece Conflux eSpace \u8f6c\u79fb\u5230 Conflux Core\uff0c\u9700\u8981\u4e24\u4e2a\u6b65\u9aa4\u3002"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5c06 CFX \u8f6c\u79fb\u5230\u5c5e\u4e8e Core \u76ee\u6807\u5730\u5740\u7684 eSpace \u6620\u5c04\u5730\u5740\u3002 \u8fd9\u4e2a\u64cd\u4f5c\u9700\u8981\u4e00\u4e2a eSpace \u4ea4\u6613\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"CrossSpaceCall"})," \u5185\u90e8\u5408\u7ea6\u7684 ",(0,c.jsx)(n.code,{children:"withdrawFromMapped(uint256 value)"})," \u65b9\u6cd5\u3002 \u8fd9\u4e2a\u8c03\u7528\u5c06\u628a CFX \u4ece\u6620\u5c04\u8d26\u6237\u8f6c\u56de\u5230\u76f8\u5e94\u7684\u76ee\u6807\u5730\u5740\u3002 \u53e6\u4e00\u4e2a\u65b9\u6cd5 ",(0,c.jsx)(n.code,{children:"mappedBalance"})," \u53ef\u7528\u4e8e\u67e5\u8be2\u4e00\u4e2a core \u5730\u5740\u7684\u6620\u5c04\u5730\u5740\u4f59\u989d\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"function withdrawFromMapped(uint256 value) external;\n\n// \u53c2\u6570 addr \u662f\u4e00\u4e2a core \u8d26\u6237\u5730\u5740\nfunction mappedBalance(address addr) external view returns (uint256);\n"})}),"\n",(0,c.jsx)(n.h4,{id:"js-\u793a\u4f8b-1",children:"JS \u793a\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u6b65\u9aa4 1: \u4f7f\u7528 js-conflux-sdk \u7684\u5730\u5740\u5de5\u5177\u65b9\u6cd5\u83b7\u53d6 Core Space \u76ee\u6807\u8d26\u6237\u7684\u6620\u5c04\u5730\u5740\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const { address } = require('js-conflux-sdk');\n\nconst base32Address = 'cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91';\n\nconst mappedAddress = address.cfxMappedEVMSpaceAddress(base32Address);\n\n// 0x12Bf6283CcF8Ad6ffA63f7Da63EDc217228d839A\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6b65\u9aa4 2: \u901a\u8fc7\u94b1\u5305\u6216 ethers.js \u5728 eSpace \u4e2d\u5411\u6620\u5c04\u5730\u5740\u8f6c\u79fb CFX"}),"\n",(0,c.jsxs)(n.p,{children:["\u6b65\u9aa4 3: \u5728 Core Space \u4e2d\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"CrossSpaceCall"})," \u5185\u90e8\u5408\u7ea6\u7684 ",(0,c.jsx)(n.code,{children:"withdrawFromMapped"})," \u65b9\u6cd5\uff0c\u4ece\u6620\u5c04\u5730\u5740\u63d0\u53d6 CFX\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const { Conflux, Drip, address } = require('js-conflux-sdk');\n\nconst conflux = new Conflux({\n  url: 'https://main.confluxrpc.com',\n  chainId: 1029,\n});\n\nconst account = conflux.wallet.addPrivateKey(process.env.PRIVATE_KEY);\n\nconst crossSpaceCall = conflux.InternalContract('CrossSpaceCall');\n\nasync function main() {\n    const receipt = await crossSpaceCall.withdrawFromMapped(Drip.fromCFX(1))\n        .sendTransaction({\n            from: account,\n        }).executed();\n\n    console.log(`\u4ece eSpace \u63d0\u53d6 ${receipt.outcomeStatus === 0 ?' succeed' : 'failed'}`);\n}\n\nmain();\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u4ece-core-space-\u8c03\u7528-espace-\u5408\u7ea6",children:"\u4ece Core Space \u8c03\u7528 eSpace \u5408\u7ea6"}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7 CrossSpaceCall \u5408\u7ea6\uff0c\u53ef\u4ee5\u4ece Core Space \u8bfb\u53d6\u6216\u5199\u5165 eSpace \u5408\u7ea6\u7684\u72b6\u6001\u3002 \u6211\u4eec\u5c06\u7ed9\u51fa\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5c55\u793a\u5982\u4f55\u4ece Core Space \u8c03\u7528 eSpace \u5408\u7ea6\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u5728 eSpace \u4e2d\u90e8\u7f72\u7684\u5408\u7ea6\uff0c\u5730\u5740\u4e3a ",(0,c.jsx)(n.code,{children:"0x8c2a2b6b4c3b6e7e7d3b5e8b4b6b6b6b6b6b6b6b"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"contract SimpleStore {\n    uint256 public value;\n\n    function setValue(uint256 _value) public {\n        value = _value;\n    }\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u5728 Core Space \u4e2d\u90e8\u7f72\u7684\u5408\u7ea6\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'\ncontract CrossCallExample {\n\n    CrossSpace public crossSpaceCall = CrossSpace(0x0888000000000000000000000000000000000006);\n\n    function readValue() public returns (uint256) {\n        bytes20 to = bytes20(0x8c2a2b6b4c3b6e7e7d3b5e8b4b6b6b6b6b6b6b6b);\n        bytes memory num = crossSpaceCall.staticCallEVM(to, abi.encodeWithSignature("value()"));\n        return abi.decode(num, (uint256));\n    }\n\n    function setValue(uint256 _value) public {\n        bytes20 to = bytes20(0x8c2a2b6b4c3b6e7e7d3b5e8b4b6b6b6b6b6b6b6b);\n        bytes memory data = abi.encodeWithSignature("setValue(uint256)", 100);\n        crossSpaceCall.callEVM(to, data);\n    }\n}\n\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u5176\u4ed6\u8d44\u6e90",children:"\u5176\u4ed6\u8d44\u6e90"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md",children:"CIP-90"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/zh-CN/docs/espace/build/accounts#mapped-addresses-in-cross-space-operations",children:"\u5173\u4e8e\u6620\u5c04\u5730\u5740"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/zh-CN/docs/core/core-space-basics/internal-contracts/crossSpaceCall",children:"CrossSpaceCall"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/zh-CN/docs/espace/build/evm-compatibility#phantom-transactions",children:"eSpace \u865a\u62df\u4ea4\u6613"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>l});var c=a(67294);const s={},r=c.createContext(s);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);