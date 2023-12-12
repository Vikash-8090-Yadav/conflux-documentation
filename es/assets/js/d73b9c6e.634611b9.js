"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7613],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,f=c["".concat(i,".").concat(h)]||c[h]||d[h]||a;return o?r.createElement(f,s(s({ref:t},u),{},{components:o})):r.createElement(f,s({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<a;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5831:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={sidebar_position:2,title:"Staking Through a PoS Pool",displayed_sidebar:"generalSidebar"},s=void 0,l={unversionedId:"general/mine-stake/stake/pos-pools-list",id:"general/mine-stake/stake/pos-pools-list",title:"Staking Through a PoS Pool",description:"A PoS pool is a staking pool that allows users to stake their CFX and receive rewards without having to run a node. The pool operator runs the node and distributes the rewards to the users.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/mine-stake/stake/pos-pools-list.md",sourceDirName:"general/mine-stake/stake",slug:"/general/mine-stake/stake/pos-pools-list",permalink:"/es/docs/general/mine-stake/stake/pos-pools-list",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Staking Through a PoS Pool",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Become a Solo Validator",permalink:"/es/docs/general/mine-stake/stake/become-a-solo-validator"},next:{title:"Staking Considerations",permalink:"/es/docs/general/mine-stake/stake/staking-considerations"}},i={},p=[{value:"Conflux PoS Pool Validators",id:"conflux-pos-pool-validators",level:2},{value:"eSpace PoS Pools",id:"espace-pos-pools",level:3},{value:"Dual Space PoS Pools",id:"dual-space-pos-pools",level:3},{value:"Notes",id:"notes",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A PoS pool is a staking pool that allows users to stake their CFX and receive rewards without having to run a node. The pool operator runs the node and distributes the rewards to the users."),(0,n.kt)("p",null,"Staking through a PoS pool is a good option for users who do not have the technical knowledge to run a node, or who do not have the time to do so. However, users should be aware that they are trusting the pool operator to effectively run and maintain the node and distribute the rewards fairly."),(0,n.kt)("h2",{id:"conflux-pos-pool-validators"},"Conflux PoS Pool Validators"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.conflux-pos-validators.com/"},"Conflux PoS Validators")," is a third-party application that compiles a list of PoS staking pools on the Conflux network. Its purpose is to centralize information on the different staking pools that secure the Conflux network, and anyone can add their pool to the list by following the instructions provided."),(0,n.kt)("p",null,"Although it has not been developed by the Conflux team, it has been awarded with a ",(0,n.kt)("a",{parentName:"p",href:"https://forum.conflux.fun/t/conflux-pools-validators-list/14258"},"Conflux Grant")," . The application is open-source, and anyone can contribute to its development."),(0,n.kt)("p",null,"However, users should exercise caution as the application is not affiliated with the staking pools and is not responsible for lost or blocked tokens. Users are encouraged to read the contract themselves before depositing their CFX onto one of the pools. Additionally, alerts are displayed on the application for pools whose contract has not been verified on Conflux scan. A warning about staking risks can be found ",(0,n.kt)("a",{parentName:"p",href:"https://forum.conflux.fun/t/pos-mining-pool-risk-warning/13760"},"here"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"PoS Validators",src:o(45369).Z,width:"3580",height:"1824"})),(0,n.kt)("p",null,"Some of the pools are for Core Space users, and some are for eSpace users, and some are for both."),(0,n.kt)("h3",{id:"espace-pos-pools"},"eSpace PoS Pools"),(0,n.kt)("p",null,"The following pools are only for eSpace users:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://app.phxverse.com/"},"PHX V2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.nucleon.space/"},"Nucelon"))),(0,n.kt)("p",null,"They are Lido like pools, which means that users deposit their CFX into the pool and receive a token in return. The token represents the user's share of the pool. The user can also withdraw their CFX  and receive rewards from the pool at any time by burning the token."),(0,n.kt)("h3",{id:"dual-space-pos-pools"},"Dual Space PoS Pools"),(0,n.kt)("p",null,"The following pools are for both Core Space and eSpace users:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pospool.phxverse.com/"},"PHX V1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://confluxpos.cn/"},"ABC PoS Pool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hydrasf.club/"},"hydrasf Pool"))),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("p",null,"Use these pools at your own risk. The Conflux team is not responsible for any lost or blocked tokens."))}d.isMDXComponent=!0},45369:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/posValidators-9d29dc30b908e59c7b220c34a4a9235f.bin"}}]);