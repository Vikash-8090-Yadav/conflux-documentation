"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:7,title:"ParamsControl"},c=void 0,i={unversionedId:"core/learn/core-space-basics/internal-contracts/params-control",id:"core/learn/core-space-basics/internal-contracts/params-control",title:"ParamsControl",description:"ParamsControl at address 0x0888000000000000000000000000000000000007 with the following interfaces. Which can be used to participate chain parameter DAO vote.",source:"@site/docs/core/learn/core-space-basics/internal-contracts/params-control.md",sourceDirName:"core/learn/core-space-basics/internal-contracts",slug:"/core/learn/core-space-basics/internal-contracts/params-control",permalink:"/docs/core/learn/core-space-basics/internal-contracts/params-control",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"ParamsControl"},sidebar:"tutorialSidebar",previous:{title:"CrossSpaceCall",permalink:"/docs/core/learn/core-space-basics/internal-contracts/crossSpaceCall"},next:{title:"Sponsorship Mechanism",permalink:"/docs/core/learn/core-space-basics/sponsor-mechanism"}},s={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ParamsControl")," at address ",(0,o.kt)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000007")," with the following interfaces. Which can be used to participate chain parameter DAO vote."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// SPDX-License-Identifier: MIT\n\npragma solidity >=0.8.0;\n\ninterface ParamsControl {\n    struct Vote {\n        uint16 topic_index;\n        uint256[3] votes;\n    }\n\n    /*** Query Functions ***/\n    /**\n     * @dev cast vote for parameters\n     * @param vote_round The round to vote for\n     * @param vote_data The list of votes to cast\n     */\n    function castVote(uint64 vote_round, Vote[] calldata vote_data) external;\n\n    /**\n     * @dev read the vote data of an account\n     * @param addr The address of the account to read\n     */\n    function readVote(address addr) external view returns (Vote[] memory);\n\n    /**\n     * @dev Current vote round\n     */\n    function currentRound() external view returns (uint64);\n\n    /**\n     * @dev read the total votes of given round\n     * @param vote_round The vote number\n     */\n    function totalVotes(uint64 vote_round) external view returns (Vote[] memory);\n\n    event CastVote(uint64 indexed vote_round, address indexed addr, uint16 indexed topic_index, uint256[3] votes);\n    event RevokeVote(uint64 indexed vote_round, address indexed addr, uint16 indexed topic_index, uint256[3] votes);\n}\n")))}u.isMDXComponent=!0}}]);