"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:4,title:"Deploying an ERC-20 Token Using Brownie",description:"Learn how to deploy an ERC-20 Token using Brownie.",keywords:["Brownie","\u667a\u80fd\u5408\u7ea6","Python"],displayed_sidebar:"eSpaceSidebar"},i=void 0,l={unversionedId:"espace/tutorials/deployContract/brownie",id:"espace/tutorials/deployContract/brownie",title:"Deploying an ERC-20 Token Using Brownie",description:"Learn how to deploy an ERC-20 Token using Brownie.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/tutorials/deployContract/brownie.md",sourceDirName:"espace/tutorials/deployContract",slug:"/espace/tutorials/deployContract/brownie",permalink:"/zh-CN/docs/espace/tutorials/deployContract/brownie",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Deploying an ERC-20 Token Using Brownie",description:"Learn how to deploy an ERC-20 Token using Brownie.",keywords:["Brownie","\u667a\u80fd\u5408\u7ea6","Python"],displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"Deploying contract using thirdweb",permalink:"/zh-CN/docs/espace/tutorials/deployContract/thirdweb"},next:{title:"Contract Verification",permalink:"/zh-CN/docs/espace/tutorials/VerifyContracts"}},c={},s=[{value:"Install Brownie",id:"install-brownie",level:2},{value:"Add Conflux eSpace Networks",id:"add-conflux-espace-networks",level:2},{value:"Generate Template Token Project",id:"generate-template-token-project",level:2},{value:"Generate/Import Your Account",id:"generateimport-your-account",level:2},{value:"Generate a New Account",id:"generate-a-new-account",level:3},{value:"Import Your Account",id:"import-your-account",level:3},{value:"Fund Your Account",id:"fund-your-account",level:2},{value:"Modify Deployment Script",id:"modify-deployment-script",level:2},{value:"Deployment",id:"deployment",level:2},{value:"\u63a5\u4e0b\u6765\u662f\uff1f",id:"\u63a5\u4e0b\u6765\u662f",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://eth-brownie.readthedocs.io/en/stable/"},"Brownie")," is a Python-based development and testing framework for smart contracts targeting the Ethereum Virtual Machine. In this tutorial, we will guide you through configuring Brownie (or eth-brownie) for Conflux eSpace and demonstrate how to use Brownie scripts to deploy contracts on Conflux eSpace."),(0,a.kt)("h2",{id:"install-brownie"},"Install Brownie"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To avoid dependency conflicts, it is recommended to create virtual environments before installing ",(0,a.kt)("inlineCode",{parentName:"p"},"eth-brownie"),". Tools like ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/venv.html"},"venv")," or ",(0,a.kt)("a",{parentName:"p",href:"https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#creating-an-environment-with-commands"},"conda")," can be used for this purpose.")),(0,a.kt)("p",null,"Execute the following command to install Brownie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install eth-brownie # or pip3 install eth-brownie\n")),(0,a.kt)("h2",{id:"add-conflux-espace-networks"},"Add Conflux eSpace Networks"),(0,a.kt)("p",null,"To add the Conflux eSpace networks to Brownie, execute these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'brownie networks add "Conflux eSpace" conflux-espace-main name=Mainnet host=https://evm.confluxrpc.com explorer=https://evm.confluxscan.io chainid=1030\nbrownie networks add "Conflux eSpace" conflux-espace-test name=Testnet host=https://evmtestnet.confluxrpc.com explorer=https://evmtestnet.confluxscan.io chainid=71\n')),(0,a.kt)("p",null,"Alternatively, import the Conflux eSpace networks to Brownie using a ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"live:\n- name: Conflux eSpace\n  networks:\n  - chainid: 1030\n    explorer: https://evm.confluxscan.io\n    host: https://evm.confluxrpc.com\n    id: conflux-espace-main\n    name: Mainnet\n  - chainid: 71\n    explorer: https://evmtestnet.confluxscan.io\n    host: https://evmtestnet.confluxrpc.com\n    id: conflux-espace-test\n    name: Testnet\n")),(0,a.kt)("p",null,"Then, run the following command to add them to your network configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brownie networks import ./network-config.yaml\n")),(0,a.kt)("p",null,"Upon successful addition, the networks will appear in the Brownie network list, as shown by running ",(0,a.kt)("inlineCode",{parentName:"p"},"brownie networks list"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"......\n\nConflux eSpace\n  \u251c\u2500Testnet: conflux-espace-test\n  \u2514\u2500Mainnet: conflux-espace-main\n\n......\n")),(0,a.kt)("h2",{id:"generate-template-token-project"},"Generate Template Token Project"),(0,a.kt)("p",null,"To generate a template token project, run ",(0,a.kt)("inlineCode",{parentName:"p"},"brownie bake token"),". The project will be created in the current folder. For this tutorial, we will place the project directly under the user directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\nbrownie bake token\ncd token\n")),(0,a.kt)("h2",{id:"generateimport-your-account"},"Generate/Import Your Account"),(0,a.kt)("p",null,"You have the option to either generate a new account or import an existing one for Brownie."),(0,a.kt)("h3",{id:"generate-a-new-account"},"Generate a New Account"),(0,a.kt)("p",null,"To create a new account via the command line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brownie accounts generate <id>\n")),(0,a.kt)("p",null,"You will be prompted to set a password for the account. Brownie will then generate a random private key and make the account accessible as ",(0,a.kt)("inlineCode",{parentName:"p"},"<id>"),". The address of the new account will be displayed in the terminal, which you will need in subsequent steps."),(0,a.kt)("p",null,"Here is an example output of the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Brownie v1.14.5 - Python development framework for Ethereum\n\nGenerating a new private key...\nmnemonic: 'park service pull home hedgehog soul grief food people uncle will series'\nEnter the password to encrypt this account with: \nSUCCESS: A new account '0x960ecb222F296C1D75a111D33094Cb393ab17b09' has been generated with the id 'new'\n")),(0,a.kt)("h3",{id:"import-your-account"},"Import Your Account"),(0,a.kt)("p",null,"If you already have an account, you can import it. To import your private key, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# id is the identifier of your account, used to specify the account in scripts\nbrownie accounts new <id>\n# for example, brownie accounts new dev\n")),(0,a.kt)("p",null,"Brownie will prompt you to enter your secret key and password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Brownie v1.14.5 - Python development framework for Ethereum\n\nEnter the private key you wish to add: *******************\nEnter the password to encrypt this account with: **************\nSUCCESS: A new account 'xxxxxxxxxxxx' has been generated with the id 'dev'\n\n\n")),(0,a.kt)("p",null,"It's also possible to import your keystore using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brownie accounts import <id> <path>\n")),(0,a.kt)("p",null,"For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://eth-brownie.readthedocs.io/en/stable/account-management.html#account-management"},"account management"),"."),(0,a.kt)("h2",{id:"fund-your-account"},"Fund Your Account"),(0,a.kt)("p",null,"To send transactions, you need to fund your account. The ",(0,a.kt)("a",{parentName:"p",href:"https://efaucet.confluxnetwork.org/"},"Conflux's eSpace faucet")," can assist with this."),(0,a.kt)("p",null,"After entering your account address, your account will receive funds on the eSpace testnet."),(0,a.kt)("h2",{id:"modify-deployment-script"},"Modify Deployment Script"),(0,a.kt)("p",null,"The default ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts/token.py")," in the template ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," project is not directly usable for the Conflux eSpace testnet. An extra line needs to be added to the default script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'#!/usr/bin/python3\n\nfrom brownie import Token, accounts\n\n\ndef main():\n    accounts.load("dev") # Specify which account to load here\n    return Token.deploy("Test Token", "TST", 18, 1e21, {\'from\': accounts[0]})\n\n')),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"To deploy on the Conflux eSpace testnet, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brownie run scripts/token.py --network conflux-espace-test\n")),(0,a.kt)("p",null,"Brownie will ask for your password. After entering it, the script will execute and the contract will be deployed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Brownie v1.14.5 - Python development framework for Ethereum\n\nTokenProject is the active project.\n\nRunning 'scripts/token.py::main'...\nEnter the password to unlock this account: \nTransaction sent: 0x547675979e80eccfe0665d2ab347cefc8ca3644dbdaddb0572b76cc7a62d1b7b\n  Gas price: 20.0 gwei   Gas limit: 1302100   Nonce: 0\n  Token.constructor confirmed - Block: 148584450   Gas used: 1043993 (80.18%)\n  Token deployed at: 0x634757eFE5DD3D27ecf38480c6F2Eac6752E90DB\n")),(0,a.kt)("h2",{id:"\u63a5\u4e0b\u6765\u662f"},"\u63a5\u4e0b\u6765\u662f\uff1f"),(0,a.kt)("p",null,"Now that you've deployed your ERC-20 token on Conflux eSpace using Brownie, you can start building upon this foundation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Explore the Template"),": Familiarize yourself with the template project you've just deployed. Investigate the functions and structure of the ERC-20 token smart contract. Understanding this template is crucial for further development.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Customization"),": Begin customizing the token contract. You might want to add unique features or modify the existing functionalities to suit your specific needs. This could include adjusting the token supply, implementing burning mechanisms, or adding voting capabilities.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Develop Additional Scripts"),": Consider developing additional Brownie scripts to automate tasks like distributing tokens, managing airdrops, or handling token allowances. These scripts can enhance your project's efficiency and functionality.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Basic Front-End Development"),": If you're inclined, start working on a simple front-end interface. This can be a basic web application that allows users to interact with your token for tasks such as transferring tokens or checking their balance."))),(0,a.kt)("p",null,"By following these steps, you'll be well on your way to further developing your project on Conflux eSpace."),(0,a.kt)("p",null,"For more examples of using Brownie, explore ",(0,a.kt)("a",{parentName:"p",href:"https://eth-brownie.readthedocs.io/en/stable/index.html"},"Brownie's documentation"),". You are also welcome to ask questions in our community or raise issues on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-documentation/issues/new/choose"},"GitHub repository"),"."))}d.isMDXComponent=!0}}]);