"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2987],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=c,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:c,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),c=r(6010),a=r(2802),o=r(9960),i=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",l.cardTitle),title:a},r," ",a),o&&n.createElement("p",{className:(0,c.Z)("text--truncate",l.cardDescription),title:o},o))}function d(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,a.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},2311:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),c=(r(7294),r(3905)),a=r(2991);const o={sidebar_position:2,title:"Transactions"},i=void 0,s={unversionedId:"core/learn/core-space-basics/transactions/transactions",id:"core/learn/core-space-basics/transactions/transactions",title:"Transactions",description:"",source:"@site/docs/core/learn/core-space-basics/transactions/transactions.mdx",sourceDirName:"core/learn/core-space-basics/transactions",slug:"/core/learn/core-space-basics/transactions/",permalink:"/docs/core/learn/core-space-basics/transactions/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Transactions"},sidebar:"tutorialSidebar",previous:{title:"Addresses",permalink:"/docs/core/learn/core-space-basics/addresses"},next:{title:"Core Space Transactions",permalink:"/docs/core/learn/core-space-basics/transactions/transaction_explain"}},l={},p=[],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,c.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);