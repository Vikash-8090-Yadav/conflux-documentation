"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1094],{4137:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(7462),a=(t(7294),t(4137));const o={sidebar_position:1,title:"AdminControl"},i=void 0,c={unversionedId:"core/learn/core-space-basics/internal-contracts/admin",id:"core/learn/core-space-basics/internal-contracts/admin",title:"AdminControl",description:"\u6982\u89c8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/learn/core-space-basics/internal-contracts/admin.md",sourceDirName:"core/learn/core-space-basics/internal-contracts",slug:"/core/learn/core-space-basics/internal-contracts/admin",permalink:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/admin",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"AdminControl"},sidebar:"tutorialSidebar",previous:{title:"\u5185\u7f6e\u5408\u7ea6",permalink:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/"},next:{title:"SponsorWhitelistControl",permalink:"/zh-CN/docs/core/learn/core-space-basics/internal-contracts/sponsor-whitelist-control"}},l={},p=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AdminControl")," \u5408\u7ea6\u662f\u4e00\u4e2a\u7528\u4e8e\u5408\u7ea6\u5f00\u53d1\u8c03\u8bd5\u7684\u5de5\u5177\u3002  \u5f53\u5728\u4e00\u4e2a\u4ea4\u6613\u4e2d\u521b\u5efa\u4e00\u4e2a\u5408\u7ea6\u65f6\uff0c\u5f53\u524d\u4ea4\u6613\u7684\u53d1\u9001\u65b9\u5c06\u81ea\u52a8\u6210\u4e3a\u5408\u7ea6\u7684\u7ba1\u7406\u5458\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"\u5730\u5740\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u63a5\u53e3",(0,a.kt)("inlineCode",{parentName:"p"},"setAdmin(address contractAddr, address newAdmin)"),"\u5c06\u7ba1\u7406\u5458\u6743\u9650\u8f6c\u79fb\u7ed9\u5176\u4ed6",(0,a.kt)("strong",{parentName:"p"},"\u666e\u901a\u5730\u5740"),"\u6216",(0,a.kt)("strong",{parentName:"p"},"\u96f6\u5730\u5740"),"\u3002 \u5408\u7ea6\u6c38\u8fdc\u4e0d\u80fd\u662f\u7ba1\u7406\u5458\u3002"),(0,a.kt)("p",null,"\u7ba1\u7406\u5458\u5728\u5408\u7ea6\u4e2d\u6709\u591a\u79cd\u7ba1\u7406\u5458\u6743\u9650\u3002 \u5b83\u53ef\u4ee5\u8c03\u7528\u63a5\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"destroy(address contractAddr)")," \u6765\u9500\u6bc1\u5408\u7ea6\uff0c\u5c31\u50cf\u5408\u7ea6\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"suicide()")," \u51fd\u6570\u4e00\u6837\u3002 SponsorWhitelist \u5185\u90e8\u5408\u7ea6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ea\u80fd\u88ab\u7ba1\u7406\u5458\u5730\u5740\u8c03\u7528\u7684\u529f\u80fd\u3002 \u8fd9\u4e9b\u51fd\u6570\u53ef\u4ee5\u66f4\u65b0\u8d5e\u52a9\u4eba\u673a\u5236\u4e2d\u7684\u767d\u540d\u5355\u3002 \u4ed6\u4eec\u7a0d\u540e\u4f1a\u88ab\u4ecb\u7ecd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u6240\u6709\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\u7684\u63a5\u53e3\uff0c\u5728\u5185\u7f6e\u5408\u7ea6\u6267\u884c\u671f\u95f4\uff0c\u65e0\u8bba\u6267\u884c\u6210\u529f\u4e0e\u5426\uff0c\u90fd\u4e0d\u4f1a\u89e6\u53d1\u9519\u8bef\u6216\u5f02\u5e38\u3002"),"\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u4e2a\u975e\u7ba1\u7406\u5458\u5730\u5740\u8bd5\u56fe\u5c06\u7ba1\u7406\u5458\u5730\u5740\u8bbe\u7f6e\u4e3a\u81ea\u5df1\u7684\u5730\u5740\uff0c\u8be5\u4ea4\u6613\u5c06\u6210\u529f\uff0c\u4f46\u4e0d\u4f1a\u53d1\u751f\u4efb\u4f55\u53d8\u5316\u3002"),(0,a.kt)("p",null,"ConfluxScan \u53ef\u80fd\u4f1a\u5c06\u5177\u6709\u975e\u96f6\u7ba1\u7406\u5458\u5730\u5740\u7684\u5408\u7ea6\u6807\u8bb0\u4e3a\u8c03\u8bd5\u6a21\u5f0f\u3002 ",(0,a.kt)("strong",{parentName:"p"},"\u6240\u4ee5\u8bf7\u8bb0\u4f4f\uff0c\u5982\u679c\u60a8\u8ba4\u4e3a\u5408\u7ea6\u5df2\u7ecf\u51c6\u5907\u597d\u8fdb\u5165\u751f\u4ea7\u73af\u5883\uff0c\u60a8\u5e94\u8be5\u5c06\u7ba1\u7406\u5458\u5730\u5740\u8bbe\u7f6e\u4e3a\u96f6\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AdminControl")," \u5408\u7ea6\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u67e5\u8be2\u63a5\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"getAdmin(address contractAddr)"),"\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8c03\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fb9\u754c\u60c5\u51b5\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458\u5728\u5408\u7ea6\u521b\u5efa\u65f6\u5c31\u88ab\u8bbe\u7f6e\u4e86\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u53d1\u9001\u65b9 ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," \u521b\u5efa\u5408\u7ea6 ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," \u5e76\u5728\u5408\u7ea6\u6784\u9020\u671f\u95f4\u5c06\u7ba1\u7406\u5458\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"C"),"\uff0c\u5219\u5408\u7ea6\u90e8\u7f72\u65f6\u7ba1\u7406\u5458\u5c06\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"C"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7136\u800c\uff0c\u5982\u679c\u53d1\u9001\u8005 ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," \u8c03\u7528\u5408\u7ea6 ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),"\uff0c\u7136\u540e\u5408\u7ea6 ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," \u521b\u5efa\u5408\u7ea6 ",(0,a.kt)("inlineCode",{parentName:"li"},"C")," \u5e76\u5728\u5408\u7ea6\u6784\u9020\u671f\u95f4\u5c06\u7ba1\u7406\u5458\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"D"),"\uff0c\u90a3\u4e48\u8be5\u8bbe\u7f6e\u5c06\u5931\u8d25\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"C")," \u7684\u7ba1\u7406\u5458\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\uff0c\u800c\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"C")," \u7684\u53d1\u9001\u8005\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f46\u662f\uff0cConflux \u5f15\u5165\u4e86\u4e00\u79cd\u7279\u6b8a\u7b56\u7565\u3002 \u5728\u60c5\u51b52\u4e2d\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"D")," \u662f\u96f6\u5730\u5740\uff0c\u5219\u8bbe\u7f6e\u7ba1\u7406\u5458\u4f1a\u6210\u529f\u3002 \u8fd9\u610f\u5473\u7740\u4e00\u4e2a\u5408\u7ea6\u53ef\u4ee5\u5728\u521b\u5efa\u65f6\u58f0\u660e\u201c\u6211\u4e0d\u9700\u8981\u7ba1\u7406\u5458\u201d\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u5047\u8bbe\u60a8\u5df2\u7ecf\u90e8\u7f72\u4e86\u4e00\u4e2a\u5730\u5740\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"contract_addr")," \u7684\u5408\u7ea6\u3002 \u7ba1\u7406\u5458\u53ef\u4ee5\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AdminControl.setAdmin(contract_addr, new_admin)"),"\u6765\u66f4\u6539\u7ba1\u7406\u5458\uff0c\u5e76\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"AdminControl.destroy(contract_addr)"),"\u6765\u9500\u6bc1\u5408\u7ea6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const PRIVATE_KEY = '0xxxxxxx';\nconst cfx = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  logger: console,\n  networkId: 1,\n});\nconst account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\n\nconst admin_contract = cfx.InternalContract('AdminControl')\n// to change administrator\nadmin_contract.setAdmin(contract_addr, new_admin).sendTransaction({\n  from: account,\n}).confirmed();\n\n// to kill the contract\nadmin_contract.destroy(contract_addr).sendTransaction({\n  from: account,\n}).confirmed();\n")))}m.isMDXComponent=!0}}]);