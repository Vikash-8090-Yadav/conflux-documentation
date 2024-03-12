"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6838],{80148:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=r(85893),t=r(11151);const i={sidebar_position:1,title:"RPC \u63d0\u4f9b\u5546",displayed_sidebar:"eSpaceSidebar",description:"\u4f01\u4e1a\u7ea7\u670d\u52a1\u63d0\u4f9b\u8005\u4e3a\u4f7f\u7528 Conflux \u63d0\u4f9b\u4e86\u673a\u4f1a\u3002"},c=void 0,o={id:"espace/build/infrastructure/RPC-Provider",title:"RPC \u63d0\u4f9b\u5546",description:"\u4f01\u4e1a\u7ea7\u670d\u52a1\u63d0\u4f9b\u8005\u4e3a\u4f7f\u7528 Conflux \u63d0\u4f9b\u4e86\u673a\u4f1a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/infrastructure/RPC-Provider.md",sourceDirName:"espace/build/infrastructure",slug:"/espace/build/infrastructure/RPC-Provider",permalink:"/zh-CN/docs/espace/build/infrastructure/RPC-Provider",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"RPC \u63d0\u4f9b\u5546",displayed_sidebar:"eSpaceSidebar",description:"\u4f01\u4e1a\u7ea7\u670d\u52a1\u63d0\u4f9b\u8005\u4e3a\u4f7f\u7528 Conflux \u63d0\u4f9b\u4e86\u673a\u4f1a\u3002"},sidebar:"eSpaceSidebar",previous:{title:"Infrastructures",permalink:"/zh-CN/docs/category/infrastructures"},next:{title:"The Graph",permalink:"/zh-CN/docs/espace/build/infrastructure/graph/"}},d={},a=[{value:"NOWNodes",id:"nownodes",level:2},{value:"Unifra",id:"unifra",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"Infura\u3001Alchemy\u3001Quick \u7b49\u662f\u5426\u652f\u6301 Conflux eSpace \u7f51\u7edc\uff1f",id:"infuraalchemyquick-\u7b49\u662f\u5426\u652f\u6301-conflux-espace-\u7f51\u7edc",level:3}];function l(e){const n={a:"a",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Conflux eSpace \u4e5f\u63d0\u4f9b\u81ea\u5df1\u7684 RPC \u63d0\u4f9b\u5546\uff0c\u7c7b\u4f3c\u4e8e Infura\u3001Alchemy \u548c QuickNode\u3002 \u8fd9\u4e9b\u4f9b\u5e94\u5546\u53ef\u4ee5\u88ab\u7528\u6765\u8fde\u63a5\u5230 Conflux eSpace \u7f51\u7edc\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"nownodes",children:(0,s.jsx)(n.a,{href:"https://nownodes.io/conflux",children:"NOWNodes"})}),"\n",(0,s.jsx)(n.p,{children:"NOWNodes \u662f\u4e00\u79cd\u533a\u5757\u94fe\u5373\u670d\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u8ba9\u7528\u6237\u901a\u8fc7 API \u83b7\u53d6\u5bf9\u5168\u8282\u70b9\u548c\u533a\u5757\u6d4f\u89c8\u5668\u7684\u8bbf\u95ee\u6743\u9650\u3002 \u8be5\u670d\u52a1\u63d0\u4f9b\u5feb\u901f\u3001\u7ecf\u6d4e\u3001\u53ef\u9760\u7684\u9ad8\u8d28\u91cf\u57fa\u7840\u8bbe\u65bd\u3002 \u6240\u6709\u5408\u4f5c\u4f19\u4f34\u90fd\u53ef\u83b7\u5f97\u9ad8\u8d28\u91cf\u670d\u52a1\u3002\n\u7528\u6237\u7684\u8282\u70b9\u5904\u4e8e\u5168\u5929 24 \u5c0f\u65f6\u7684\u76d1\u63a7\u4e4b\u4e0b\u2014\u2014\u4e0d\u95f4\u65ad\u7684\u53ef\u7528\u6027\u548c\u76f8\u5173\u6027\u76d1\u63a7\u3002 \u8fd9\u6837\uff0c\u4ed6\u4eec\u7684\u5ba2\u6237\u53ef\u4ee5\u4eab\u53d7\u4efb\u4f55\u5927\u578b\u4efb\u52a1\u7684\u53ef\u6269\u5c55\u6027\u548c\u5feb\u901f\u7684 API \u54cd\u5e94\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["NOWNodes \u76ee\u524d\u652f\u6301 Conflux eSpace \u7f51\u7edc\uff0ceSpace \u8282\u70b9\u7684 url \u662f **",(0,s.jsx)(n.a,{href:"https://cfx.nownodes.io**%E3%80%82",children:"https://cfx.nownodes.io**\u3002"})," \u76ee\u524d\uff0c\u5b83\u4ec5\u4e3a\u4e3b\u7f51\u7f51\u7edc\u63d0\u4f9b\u5168\u8282\u70b9 RPC \u670d\u52a1\u3002 \u672a\u6765\uff0c\u5c06\u9010\u6b65\u589e\u52a0\u5bf9\u6d4b\u8bd5\u7f51\u7684\u652f\u6301\u3002 \u5173\u4e8e\u652f\u6301\u7684\u7f51\u7edc\uff0c\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://nownodes.io/nodes",children:"NOWNodes \u8282\u70b9\u5217\u8868"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["NOWNodes \u63d0\u4f9b\u5171\u4eab\u8282\u70b9\u548c\u4e13\u7528\u8282\u70b9\u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u53ca\u514d\u8d39\u7684\u57fa\u7840\u670d\u52a1\u548c\u4ed8\u8d39\u8ba1\u5212\u3002 \u5173\u4e8e\u670d\u52a1\u5b9a\u4ef7\u8be6\u60c5\uff0c\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://nownodes.io/pricing",children:"NOWNodes \u4ef7\u683c\u5217\u8868"}),"\u3002 NOWNodes \u652f\u6301\u6b27\u5143\u548c\u52a0\u5bc6\u8d27\u5e01\u652f\u4ed8\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5177\u4f53\u8be6\u60c5\u548c\u4f7f\u7528\u8bf4\u660e\uff0c\u8bf7\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"https://nownodes.io",children:"NOWNodes\u5b98\u65b9\u7f51\u7ad9"})," \u5e76\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://documenter.getpostman.com/view/13630829/TVmFkLwy",children:"\u6587\u6863"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"unifra",children:(0,s.jsx)(n.a,{href:"https://unifra.io/",children:"Unifra"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://unifra.io/",children:"Unifra"})," \u63d0\u4f9b\u5bf9\u6240\u6709\u4eba\u5f00\u653e\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u4e3a\u6240\u6709 Web3 \u5f00\u53d1\u8005\u63d0\u4f9b\u53ef\u9760\u7684\u57fa\u7840\u8bbe\u65bd\u670d\u52a1\u3002 \u4ed6\u4eec\u7684\u8282\u70b9\u670d\u52a1\u5df2\u7ecf\u5305\u542b\u4e86\u5bf9 Conflux eSpace \u7f51\u7edc\u7684\u652f\u6301\u3002\n\u4ed6\u4eec\u63d0\u4f9b\u4e86\u7a33\u5b9a\u4ee5\u53ca\u5bf9\u7528\u6237\u53cb\u597d\u7684 RPC \u670d\u52a1\uff0c\u53ef\u4ee5\u88ab\u7528\u6765\u8fde\u63a5\u5230 Conflux eSpace \u7f51\u7edc\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"Unifra \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u514d\u8d39\u4f7f\u7528\u7684 RPC \u7aef\u70b9\uff1a"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7f51\u7edc\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u94fe ID"}),(0,s.jsx)(n.th,{children:"RPC \u7aef\u70b9 URL"}),(0,s.jsx)(n.th,{children:"\u6d4f\u89c8\u5668\u7f51\u5740"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#mainnet",children:"\u4e3b\u7f51"})}),(0,s.jsx)(n.td,{children:"1030 (0x406)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://conflux-espace-public.unifra.io",children:"https://conflux-espace-public.unifra.io"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://evm.confluxscan.net",children:"https://evm.confluxscan.net"})})]})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u4ece Unifra \u7684",(0,s.jsx)(n.a,{href:"https://console.unifra.io/",children:"\u63a7\u5236\u53f0\u9762\u677f"}),"\u4e2d\u8d2d\u4e70",(0,s.jsx)(n.strong,{children:"\u66f4\u9ad8\u7ea7\u522b\u7684 RPC \u670d\u52a1"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,s.jsx)(n.h3,{id:"infuraalchemyquick-\u7b49\u662f\u5426\u652f\u6301-conflux-espace-\u7f51\u7edc",children:"Infura\u3001Alchemy\u3001Quick \u7b49\u662f\u5426\u652f\u6301 Conflux eSpace \u7f51\u7edc\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u4ed6\u4eec\u6682\u4e0d\u652f\u6301 Conflux eSpace \u7f51\u7edc\u3002 \u4f46\u6211\u4eec\u6b63\u5728\u4e0e\u4ed6\u4eec\u5408\u4f5c\uff0c\u4ee5\u8ba9\u5176\u652f\u6301 Conflux eSpace \u7f51\u7edc\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>c});var s=r(67294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);