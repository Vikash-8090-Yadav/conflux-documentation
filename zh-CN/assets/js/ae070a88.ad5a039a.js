"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9195],{47758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const r={sidebar_position:9,title:"\u667a\u80fd\u5408\u7ea6",displayed_sidebar:"generalSidebar"},a="\u667a\u80fd\u5408\u7ea6\u7b80\u4ecb",c={id:"general/conflux-basics/contracts",title:"\u667a\u80fd\u5408\u7ea6",description:"\u4ec0\u4e48\u662f\u667a\u80fd\u5408\u7ea6\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/conflux-basics/contracts.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/contracts",permalink:"/zh-CN/docs/general/conflux-basics/contracts",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u667a\u80fd\u5408\u7ea6",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u94b1\u5305",permalink:"/zh-CN/docs/general/conflux-basics/wallets"},next:{title:"\u4ea4\u6613",permalink:"/zh-CN/docs/general/conflux-basics/transactions"}},o={},l=[{value:"\u4ec0\u4e48\u662f\u667a\u80fd\u5408\u7ea6\uff1f",id:"\u4ec0\u4e48\u662f\u667a\u80fd\u5408\u7ea6",level:2},{value:"\u5b9a\u4e49\u548c\u6982\u8ff0",id:"\u5b9a\u4e49\u548c\u6982\u8ff0",level:3},{value:"\u667a\u80fd\u5408\u7ea6\u5982\u4f55\u5de5\u4f5c",id:"\u667a\u80fd\u5408\u7ea6\u5982\u4f55\u5de5\u4f5c",level:3},{value:"Benefits in the Conflux Network",id:"benefits-in-the-conflux-network",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Security Considerations",id:"security-considerations",level:3},{value:"Further reading",id:"further-reading",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u667a\u80fd\u5408\u7ea6\u7b80\u4ecb",children:"\u667a\u80fd\u5408\u7ea6\u7b80\u4ecb"}),"\n",(0,i.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u667a\u80fd\u5408\u7ea6",children:"\u4ec0\u4e48\u662f\u667a\u80fd\u5408\u7ea6\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u667a\u80fd\u5408\u7ea6\u7684\u6982\u5ff5\u6700\u65e9\u7531Nick Szabo\u57281995\u5e74\u63d0\u51fa\u3002 \u667a\u80fd\u5408\u7ea6\u662f\u4e00\u79cd\u8ba1\u7b97\u673a\u534f\u8bae\uff0c\u65e8\u5728\u4ee5\u4fe1\u606f\u5316\u7684\u65b9\u5f0f\u4f20\u64ad\u3001\u9a8c\u8bc1\u6216\u6267\u884c\u5408\u7ea6\u3002 \u667a\u80fd\u5408\u7ea6\u5141\u8bb8\u5728\u6ca1\u6709\u53ef\u4fe1\u7b2c\u4e09\u65b9\u7684\u60c5\u51b5\u4e0b\u6267\u884c\u4ea4\u6613\uff0c\u800c\u4e14\u4ea4\u6613\u662f\u53ef\u8ffd\u6eaf\u548c\u4e0d\u53ef\u9006\u7684\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5b83\u7684\u76ee\u7684\u662f\u63d0\u4f9b\u4e00\u79cd\u6bd4\u4f20\u7edf\u5408\u7ea6\u66f4\u5b89\u5168\u7684\u65b9\u6cd5\uff0c\u5e76\u964d\u4f4e\u4e0e\u5408\u7ea6\u76f8\u5173\u7684\u5176\u4ed6\u4ea4\u6613\u6210\u672c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8eConflux\u7f51\u7edc\uff0c",(0,i.jsx)(n.em,{children:"\u667a\u80fd\u5408\u7ea6"}),"\u662f\u4e00\u79cd\u8fd0\u884c\u5728Conflux\u7f51\u7edc\u4e0a\u7684\u7b80\u5355\u7a0b\u5e8f\u3002 \u6bcf\u4e2a\u667a\u80fd\u5408\u7ea6\u7684\u5b9e\u4f8b\u90fd\u662f\u4e00\u7ec4\u4ee3\u7801\u548c\u6570\u636e\uff0c\u5b83\u4eec\u5b58\u5728\u4e8eConflux\u7f51\u7edc\u4e0a\u7684\u4e00\u4e2a\u7279\u5b9a\u5730\u5740\u3002 \u7531\u4e8e\u533a\u5757\u94fe\u4e0a\u7684\u72b6\u6001\u662f\u5b8c\u5168\u786e\u5b9a\u7684\uff0c\u6240\u4ee5\u5bf9\u667a\u80fd\u5408\u7ea6\u7684\u64cd\u4f5c\u4fdd\u8bc1\u5728\u6240\u6709\u533a\u5757\u94fe\u8282\u70b9\u4e0a\u4ea7\u751f\u76f8\u540c\u7684\u7ed3\u679c\u3002 \u6b64\u5916\uff0c\u7531\u4e8e\u667a\u80fd\u5408\u7ea6\u8fd0\u884c\u5728\u533a\u5757\u94fe\u4e0a\uff0c\u533a\u5757\u94fe\u7684\u53bb\u4e2d\u5fc3\u5316\u548c\u4e0d\u53ef\u7be1\u6539\u7684\u7279\u6027\u4fdd\u8bc1\u4e86\u5408\u7ea6\u64cd\u4f5c\u7684\u786e\u5b9a\u6027\u548c\u5b89\u5168\u6027\u3002 \u56e0\u6b64\uff0c\u57fa\u4e8e\u667a\u80fd\u5408\u7ea6\u521b\u5efa\u4e86\u5404\u79cd\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\uff08dApps\uff09\uff0c\u5305\u62ec\u6e38\u620f\u3001\u6570\u5b57\u6536\u85cf\u54c1\uff08NFT\uff09\u3001\u5728\u7ebf\u6295\u7968\u7cfb\u7edf\u3001\u91d1\u878d\u4ea7\u54c1\uff08DeFi\uff09\u7b49\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"Conflux\u7f51\u7edc\u4e0a\u6709\u4e24\u79cd\u8d26\u6237\u7c7b\u578b\uff1a\u7528\u6237\u8d26\u6237\u548c\u667a\u80fd\u5408\u7ea6\u8d26\u6237\u3002 \u4e00\u65e6\u667a\u80fd\u5408\u7ea6\u88ab\u90e8\u7f72\uff0c\u5c31\u4f1a\u521b\u5efa\u4e00\u4e2a\u76f8\u5e94\u7684\u667a\u80fd\u5408\u7ea6\u8d26\u6237\u3002 \u667a\u80fd\u5408\u7ea6\u8d26\u6237\u6709\u4e00\u4e2aCFX\u4f59\u989d\uff0c\u5b83\u4eec\u4e5f\u53ef\u4ee5\u4e0e\u5176\u4ed6\u8d26\u6237\u8fdb\u884c\u4ea4\u4e92\u3002 \u4f46\u662f\uff0c\u5b83\u4eec\u4e0d\u53d7\u7528\u6237\u63a7\u5236\uff0c\u800c\u662f\u53d7\u90e8\u7f72\u5728\u7f51\u7edc\u4e0a\u7684\u7a0b\u5e8f\u63a7\u5236\u3002 \u7528\u6237\u8d26\u6237\u53ef\u4ee5\u901a\u8fc7\u63d0\u4ea4\u6267\u884c\u667a\u80fd\u5408\u7ea6\u4e0a\u5b9a\u4e49\u7684\u51fd\u6570\u7684\u4ea4\u6613\u6765\u4e0e\u667a\u80fd\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92\u3002 \u667a\u80fd\u5408\u7ea6\u4f7f\u6211\u4eec\u80fd\u591f\u50cf\u4f20\u7edf\u5408\u7ea6\u4e00\u6837\u5b9a\u4e49\u89c4\u5219\uff0c\u5e76\u901a\u8fc7\u4ee3\u7801\u81ea\u52a8\u6267\u884c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Nick Szabo\u7528\u81ea\u52a8\u552e\u8d27\u673a\u7684\u4f8b\u5b50\u6765\u63cf\u8ff0\u4e86\u5982\u4f55\u5c06\u73b0\u5b9e\u4e16\u754c\u7684\u5408\u7ea6\u4e49\u52a1\u7f16\u7a0b\u5230\u8f6f\u4ef6\u548c\u786c\u4ef6\u7cfb\u7edf\u4e2d\u3002 \u6bcf\u4e2a\u4eba\u53ea\u9700\u5c06\u6b63\u786e\u6570\u91cf\u7684\u786c\u5e01\u653e\u5165\u673a\u5668\uff0c\u5c31\u53ef\u4ee5\u671f\u671b\u5f97\u5230\u4e00\u4ef6\u4ea7\u54c1\u4f5c\u4e3a\u4ea4\u6362\u3002 \u540c\u6837\u5730\uff0c\u5728Conflux\u4e0a\uff0c\u667a\u80fd\u5408\u7ea6\u80fd\u591f\u5728\u6307\u5b9a\u7684\u6761\u4ef6\u4e0b\u6267\u884c\u67d0\u4e2a\u4efb\u52a1\u5e76\u5f97\u5230\u67d0\u4e2a\u7ed3\u679c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9a\u4e49\u548c\u6982\u8ff0",children:"\u5b9a\u4e49\u548c\u6982\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"Conflux \u4e0a\u7684\u667a\u80fd\u5408\u7ea6\u662f\u5b58\u50a8\u5728\u533a\u5757\u94fe\u4e0a\u7684\u7a0b\u5e8f\uff0c\u5f53\u9884\u8bbe\u6761\u4ef6\u6ee1\u8db3\u65f6\u6267\u884c\u3002 \u5b83\u4eec\u662f\u4e0d\u53ef\u53d8\u548c\u5206\u5e03\u5f0f\u7684\uff0c\u610f\u5473\u7740\u4e00\u65e6\u90e8\u7f72\uff0c\u5c31\u65e0\u6cd5\u88ab\u66f4\u6539\uff0c\u5e76\u4e14\u7531\u7f51\u7edc\u6267\u884c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u667a\u80fd\u5408\u7ea6\u5982\u4f55\u5de5\u4f5c",children:"\u667a\u80fd\u5408\u7ea6\u5982\u4f55\u5de5\u4f5c"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e9b\u5408\u7ea6\u662f\u7528\u7c7b\u4f3c\u4e8e\u4ee5\u592a\u574a\u7684\u9ad8\u7ea7\u7f16\u7a0b\u8bed\u8a00\u5982 Solidity \u7f16\u5199\u7684\u3002 \u5b83\u4eec\u4e0e\u533a\u5757\u94fe\u4ea4\u4e92\uff0c\u5b58\u50a8\u3001\u4fee\u6539\u6570\u636e\u6216\u53d1\u9001\u4ea4\u6613\uff0c\u81ea\u52a8\u5316\u590d\u6742\u8fc7\u7a0b\u800c\u65e0\u9700\u4e2d\u4ecb\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"benefits-in-the-conflux-network",children:"Benefits in the Conflux Network"}),"\n",(0,i.jsx)(n.p,{children:"Smart contracts in Conflux offer benefits like enhanced security, reduced transaction costs, and increased efficiency. Conflux's unique tree-graph structure facilitates higher throughput and lower fees, making it an ideal platform for deploying smart contracts."}),"\n",(0,i.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsx)(n.p,{children:"The applications are diverse, ranging from decentralized finance (DeFi) and token creation to supply chain management and gaming. Smart contracts serve as the backbone for DApps (Decentralized Applications) on Conflux, enabling innovative business models and services."}),"\n",(0,i.jsx)(n.h3,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,i.jsx)(n.p,{children:"Security in smart contracts is paramount. Despite their immutability, vulnerabilities in code can be exploited. Conflux Network emphasizes best practices in smart contract development, including thorough testing and audits."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If you're interested in ",(0,i.jsx)(n.strong,{children:"Smart Contracts Development on Conflux Network"}),", please check out the following pages:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/zh-CN/docs/general/build/smart-contracts/introduction-to-smart-contracts",children:"Introduction to Smart Contract Development on Conflux Network"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/zh-CN/docs/general/build/smart-contracts/solidity-basics",children:"Solidity Basics"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/zh-CN/docs/general/build/smart-contracts/token-standards",children:"Token \u6807\u51c6"})}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.coinbase.com/learn/crypto-basics/what-is-a-smart-contract",children:"Coinbase: What is a smart contract?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://chain.link/education/smart-contracts",children:"Chainlink: What is a smart contract?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://youtu.be/ZE2HxTmxfrI",children:"Video: Simply Explained - Smart Contracts"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var i=t(67294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);