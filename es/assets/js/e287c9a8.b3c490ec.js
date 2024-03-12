"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9420],{82023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(85893),s=t(11151);const r={sidebar_position:3,title:"Developer Quickstart",description:"Quickstart for developers to Ethereum developers to build on eSpace",keywords:["Quickstart"],displayed_sidebar:"eSpaceSidebar"},c=void 0,i={id:"espace/DeveloperQuickstart",title:"Developer Quickstart",description:"Quickstart for developers to Ethereum developers to build on eSpace",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/espace/DeveloperQuickstart.md",sourceDirName:"espace",slug:"/espace/DeveloperQuickstart",permalink:"/es/docs/espace/DeveloperQuickstart",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Developer Quickstart",description:"Quickstart for developers to Ethereum developers to build on eSpace",keywords:["Quickstart"],displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"User Guide",permalink:"/es/docs/espace/UserGuide"},next:{title:"Tutorials",permalink:"/es/docs/category/tutorials-1"}},a={},l=[{value:"Acquiring CFX",id:"acquiring-cfx",level:2},{value:"Network Configuration",id:"network-configuration",level:2},{value:"eSpace Mainnet",id:"espace-mainnet",level:3},{value:"eSpace Testnet",id:"espace-testnet",level:3},{value:"Configure your tooling",id:"configure-your-tooling",level:2},{value:"Hardhat",id:"hardhat",level:3},{value:"Foundry",id:"foundry",level:3},{value:"Remix Web IDE",id:"remix-web-ide",level:3},{value:"web3.py",id:"web3py",level:3},{value:"Brownie",id:"brownie",level:3},{value:"ethers.js",id:"ethersjs",level:3},{value:"scaffold-eth-2",id:"scaffold-eth-2",level:3},{value:"Configure the Frontend Wallet",id:"configure-the-frontend-wallet",level:4},{value:"Deploy onto Vercel",id:"deploy-onto-vercel",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"With Conflux eSpace, your favorite tools for building and testing smart contracts just work."}),"\n",(0,o.jsx)(n.p,{children:"Since eSpace is EVM-Compatible, you\u2019ll just need to point your favorite builder tools at a Conflux eSpace RPC Provider."}),"\n",(0,o.jsxs)(n.p,{children:["If you are not familiar with Ethereum development, you can start by learning the basics and understanding its stack through ",(0,o.jsx)(n.a,{href:"https://ethereum.org/en/developers/",children:"Ethereum's official documentation"})]}),"\n",(0,o.jsx)(n.h2,{id:"acquiring-cfx",children:"Acquiring CFX"}),"\n",(0,o.jsx)(n.p,{children:"eSpace also uses CFX as its native currency, which will be needed to pay transaction fees for deploying and interacting with the network."}),"\n",(0,o.jsxs)(n.p,{children:["To start building on eSpace, we suggest you begin with using eSpace testnet. You'll first need to acquire some testnet CFX through ",(0,o.jsx)(n.a,{href:"https://efaucet.confluxnetwork.org/",children:"faucet"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Once you're ready to deploy on eSpace's mainnet, if you only have Core CFX, you can bridge over CFX from Core Space using ",(0,o.jsx)(n.a,{href:"/es/docs/general/tutorials/transferring-funds/transfer-funds-across-spaces",children:"our space bridge"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"network-configuration",children:"Network Configuration"}),"\n",(0,o.jsx)(n.h3,{id:"espace-mainnet",children:"eSpace Mainnet"}),"\n",(0,o.jsx)(n.p,{children:"Use the table below to configure your Ethereum tools to the eSpace mainnet."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Network Name"}),(0,o.jsx)(n.th,{children:"Conflux eSpace"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RPC URL"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://evm.confluxrpc.com",children:"https://evm.confluxrpc.com"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Chain ID"}),(0,o.jsx)(n.td,{children:"1030"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Currency Symbol"}),(0,o.jsx)(n.td,{children:"CFX"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Block Explorer URL"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://evm.confluxscan.io",children:"https://evm.confluxscan.io"})})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"espace-testnet",children:"eSpace Testnet"}),"\n",(0,o.jsx)(n.p,{children:"Use the table below to configure your Ethereum tools to the eSpace Testnet."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Network Name"}),(0,o.jsx)(n.th,{children:"Conflux eSpace Testnet"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RPC URL"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://evmtestnet.confluxrpc.com",children:"https://evmtestnet.confluxrpc.com"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Chain ID"}),(0,o.jsx)(n.td,{children:"71"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Currency Symbol"}),(0,o.jsx)(n.td,{children:"CFX"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Block Explorer URL"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://evmtestnet.confluxscan.io",children:"https://evmtestnet.confluxscan.io"})})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"configure-your-tooling",children:"Configure your tooling"}),"\n",(0,o.jsxs)(n.p,{children:["For setting up tooling to verify a smart contract deployment, see ",(0,o.jsx)(n.a,{href:"/es/docs/espace/tutorials/VerifyContracts",children:"Verifying Smart Contracts"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"hardhat",children:"Hardhat"}),"\n",(0,o.jsxs)(n.p,{children:["Modify your Hardhat config file ",(0,o.jsx)(n.code,{children:"hardhat.config.ts"})," to point at the eSpace Testnet public RPC."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'...\n\nconst config: HardhatUserConfig = {\n  ...\n  networks: {\n    eSpaceTestnet: {\n      url: "https://evmtestnet.confluxrpc.com" || "",\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n    },\n  },\n};\n\n...\n'})}),"\n",(0,o.jsxs)(n.p,{children:["A complete workflow for using Hardhat deploy contract is shown ",(0,o.jsx)(n.a,{href:"/es/docs/espace/tutorials/deployContract/hardhatAndFoundry",children:"here"})]}),"\n",(0,o.jsx)(n.h3,{id:"foundry",children:"Foundry"}),"\n",(0,o.jsx)(n.p,{children:"To deploy using the eSpace Testnet Public RPC, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"forge create ... --rpc-url=https://evmtestnet.confluxrpc.com --legacy\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A complete workflow for using foundry deploy contract is shown ",(0,o.jsx)(n.a,{href:"/es/docs/espace/tutorials/deployContract/hardhatAndFoundry",children:"here"})]}),"\n",(0,o.jsx)(n.h3,{id:"remix-web-ide",children:"Remix Web IDE"}),"\n",(0,o.jsxs)(n.p,{children:["After compiling your contracts, the easiest way to deploy using Remix is by ",(0,o.jsx)(n.a,{href:"/es/docs/espace/UserGuide",children:"setting up Metamask"}),", then selecting the ",(0,o.jsx)(n.strong,{children:"Conflux eSpace Testnet"})," network."]}),"\n",(0,o.jsx)(n.p,{children:"Now, in the \u201cDeploy and Run Transactions\u201d tab, use the \u201cEnvironment\u201d drop-down and select \u201cInjected Provider - MetaMask.\u201d"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(89789).Z+""})}),"\n",(0,o.jsxs)(n.p,{children:["Connect your wallet and select the Conflux eSpace Testnet. Your account should be selected automatically in Remix, and you can click \u201cDeploy.\u201d A complete workflow for Remix usage is shown ",(0,o.jsx)(n.a,{href:"/es/docs/espace/tutorials/deployContract/remix",children:"here"})]}),"\n",(0,o.jsx)(n.h3,{id:"web3py",children:"web3.py"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["It is recommended to create virtual environments before using ",(0,o.jsx)(n.code,{children:"web3.py"})," to avoid dependency conflicts, for example, by using ",(0,o.jsx)(n.a,{href:"https://docs.python.org/3/library/venv.html",children:"venv"})," or ",(0,o.jsx)(n.a,{href:"https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#creating-an-environment-with-commands",children:"conda"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"web3.py"})," is one of the most widely used Python interfaces for interacting with the Ethereum blockchain and ecosystem. It can be installed using the command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install web3 # or pip3 install web3\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"web3.py"})," can also be used to interact with Conflux eSpace. The example code below shows how to connect to the Conflux eSpace testnet endpoint and check the connection:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'>>> from web3 import Web3\n>>> w3 = Web3(Web3.HTTPProvider("https://evmtestnet.confluxrpc.com"))\n>>> w3.is_connected() \nTrue # should return True\n'})}),"\n",(0,o.jsxs)(n.p,{children:["It should be noted that the latest version of ",(0,o.jsx)(n.code,{children:"web3.py"})," populates ",(0,o.jsx)(n.code,{children:"maxFeePerGas"})," and ",(0,o.jsx)(n.code,{children:"maxPriorityFeePerGas"})," for transactions by default, while Conflux eSpace only supports the legacy transaction type prior to EIP-1559. Therefore, developers need to specify the ",(0,o.jsx)(n.code,{children:"gas_price"})," field in transactions or use the ",(0,o.jsx)(n.a,{href:"https://web3py.readthedocs.io/en/stable/gas_price.html",children:"gas price API"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from web3 import Web3\nfrom web3.middleware.signing import construct_sign_and_send_raw_middleware\nfrom web3.gas_strategies.rpc import rpc_gas_price_strategy\n\nw3 = Web3(Web3.HTTPProvider("https://evmtestnet.confluxrpc.com"))\nassert w3.is_connected()\nacct = w3.eth.account.from_key("xxxxxx") # your secret key\n\nw3.middleware_onion.add(construct_sign_and_send_raw_middleware(acct))\nw3.eth.default_account = acct.address\n\n# Set gas price strategy\nw3.eth.set_gas_price_strategy(rpc_gas_price_strategy)\n\nw3.eth.send_transaction({"from": acct.address, "value": 0, "to": acct.address})\n'})}),"\n",(0,o.jsx)(n.h3,{id:"brownie",children:"Brownie"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://eth-brownie.readthedocs.io/en/stable/",children:"Brownie"})," is a Python-based development and testing framework for smart contracts targeting the Ethereum Virtual Machine. To add the Conflux eSpace networks to Brownie, run the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'brownie networks add "Conflux eSpace" conflux-espace-main name=Mainnet host=https://evm.confluxrpc.com explorer=https://evm.confluxscan.io chainid=1030\nbrownie networks add "Conflux eSpace" conflux-espace-test name=Testnet host=https://evmtestnet.confluxrpc.com explorer=https://evmtestnet.confluxscan.io chainid=71\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To deploy on eSpace, specify the Conflux network by using the ",(0,o.jsx)(n.code,{children:"--network"})," option."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"brownie run scripts/token.py --network conflux-espace-test\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"scripts/token.py"})," is the Brownie script you want to run on Conflux eSpace. In our ",(0,o.jsx)(n.a,{href:"/es/docs/espace/tutorials/deployContract/brownie",children:(0,o.jsx)(n.strong,{children:"Brownie tutorial"})}),", we show the complete workflow of how to configure a template Brownie project and how to run Brownie scripts on Conflux eSpace."]}),"\n",(0,o.jsx)(n.h3,{id:"ethersjs",children:"ethers.js"}),"\n",(0,o.jsxs)(n.p,{children:["Setting up a eSpace Testnet provider in an ",(0,o.jsx)(n.code,{children:"ethers"})," script:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { ethers } from "ethers"\n\nconst provider = new ethers.providers.JsonRpcProvider("https://evmtestnet.confluxrpc.com")\n'})}),"\n",(0,o.jsx)(n.h3,{id:"scaffold-eth-2",children:"scaffold-eth-2"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/conflux-fans/conflux-scaffold",children:"Scaffold Conflux"})," is an adaptation of ",(0,o.jsx)(n.a,{href:"https://scaffoldeth.io/",children:"Scaffold-ETH-2"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"We have adjusted the template to allow you to deploy the contract on Conflux eSpace."}),"\n",(0,o.jsx)(n.li,{children:"Conflux Scaffold offers users the ability to quickly leverage front-end react components that are commonly used to build web3 apps. These include pre-fabricated wallets with the ability to connect to Conflux eSpace, Conflux eSpace testnet, hardhat, etc. It also includes other components to display balance, and recieve address/value inputs."}),"\n",(0,o.jsx)(n.li,{children:"Hooks are available on Scaffold Conflux to interact with the smart contracts built on hardhat. This simplifies the process of reading contracts, writing contracts, and subscribe to events emitted by the smart contract."}),"\n",(0,o.jsxs)(n.li,{children:["You can visit our ",(0,o.jsx)(n.a,{href:"/es/docs/espace/tutorials/scaffoldCfx/scaffold",children:"tutorial"})," for more in-depth discussion how to set-up Scaffold Conflux and use some of the hooks/components."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To deploy to Conflux eSpace using Scaffold-eth-2 (hardhat), specify the Conflux eSpace network when deploying."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn deploy --network confluxESpace\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The deployer of the contract and thereby the owner of the contract can be changed by re-labelling the ",(0,o.jsx)(n.code,{children:"./packages/hardhat/.env.example"})," to ",(0,o.jsx)(n.code,{children:"./packages/hardhat/.env"}),' and putting your private key in DEPLOYER_PRIVATE_KEY=. However, the default uses a default "public" private key for hardhat testing purposes.']})}),"\n",(0,o.jsx)(n.h4,{id:"configure-the-frontend-wallet",children:"Configure the Frontend Wallet"}),"\n",(0,o.jsx)(n.p,{children:"To configure your frontend, you will need to change the default wallet connection to Conflux eSpace. Currently it is set up to connect to hardhat which allows you to use default burner wallets. Changing the below allows the wallet to switch to Conflux eSpace."}),"\n",(0,o.jsxs)(n.p,{children:["To add the network, modify ",(0,o.jsx)(n.code,{children:"packages/nextjs/scaffold.config.ts"})]}),"\n",(0,o.jsx)(n.p,{children:"Change from"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const scaffoldConfig = {\n  targetNetworks: [chains.hardhat],\n"})}),"\n",(0,o.jsx)(n.p,{children:"to"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const scaffoldConfig = {\n  targetNetworks: [chains.confluxESpace],\n"})}),"\n",(0,o.jsx)(n.h4,{id:"deploy-onto-vercel",children:"Deploy onto Vercel"}),"\n",(0,o.jsx)(n.p,{children:"Preview the app. You should be able to connect to Conflux eSpace through your wallet."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nvm use 18\nyarn start\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once you are ready to deploy your app, simply run the following command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn vercel\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},89789:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/avif;base64,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"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(67294);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);