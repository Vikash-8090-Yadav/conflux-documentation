"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,g=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4,title:"Running a Full Node"},i=void 0,l={unversionedId:"general/run-a-node/running-full-node",id:"general/run-a-node/running-full-node",title:"Running a Full Node",description:"Configuring Conflux Full Node",source:"@site/docs/general/run-a-node/running-full-node.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/running-full-node",permalink:"/docs/general/run-a-node/running-full-node",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Running a Full Node"},sidebar:"tutorialSidebar",previous:{title:"Compiling the Conflux Client",permalink:"/docs/general/run-a-node/compiling-conflux-client"},next:{title:"Running a Light Node",permalink:"/docs/general/run-a-node/running-light-node"}},u={},s=[{value:"Configuring Conflux Full Node",id:"configuring-conflux-full-node",level:2},{value:"Running Test",id:"running-test",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuring-conflux-full-node"},"Configuring Conflux Full Node"),(0,o.kt)("p",null,"Conflux can be configured using either the CLI options or a config file. Should the CLI flags and the config file disagree about a setting, the CLI takes precedence.  "),(0,o.kt)("p",null,"The config file follows the format of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/toml-lang/toml"},"TOML"),". The path of the configuration file can be set with the CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"--config path/to/conflux.toml"),". A default configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra.toml")," with every configuration explained has been provided in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),", and you can start customizing your configuration from there."),(0,o.kt)("p",null,"You can list all CLI options by running  ",(0,o.kt)("inlineCode",{parentName:"p"},"$ ./conflux --help"),". The vast majority of CLI options map to a setting in the TOML file, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--public-address 127.0.0.1:32323")," can be set by creating a config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'public_address="127.0.0.1:32323"\n')),(0,o.kt)("p",null,"If you are going to set up a node and let it join the Conflux mainnet(testnet), you need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"public_address"),' appropriately. It should be set as the IP address of your node which can be accessed publicly from Internet. If your node is covered under a public gateway, you can get its public address by searching "ip" in ',(0,o.kt)("a",{parentName:"p",href:"https://www.google.com"},"Google"),"."),(0,o.kt)("p",null,"If you want to let your node participate the mining process, you need to enable it by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"start_mining"),' as "true" and ',(0,o.kt)("inlineCode",{parentName:"p"},"mining_author")," as the account address that receives the mining reward. "),(0,o.kt)("p",null,"If you want to open the http or websocket RPC, you need to enable it by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonrpc_http_port")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonrpc_ws_port"),".\n",(0,o.kt)("strong",{parentName:"p"},"Note that to serve transaction-related RPCs, ",(0,o.kt)("inlineCode",{parentName:"strong"},"persist_tx_index")," should also be set to ",(0,o.kt)("inlineCode",{parentName:"strong"},"true")," or the node will only be able to handle very recent transactions.")),(0,o.kt)("h2",{id:"running-test"},"Running Test"),(0,o.kt)("p",null,"We have both unit tests written in Rust and integration tests written in python. After you make some modifications to the code, you can run these tests to see if the system still runs correctly."),(0,o.kt)("p",null,"First, you need to install the dependencies as instructed in ",(0,o.kt)("a",{parentName:"p",href:"install.md#install-test-dependencies"},"Install Test Dependencies"),"."),(0,o.kt)("p",null,"Then you can run the tests as follows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Linux:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  $ ./dev-support/test.sh\n")),(0,o.kt)("p",{parentName:"li"},"  This will automatically run the unit tests in our Rust code and the python tests.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Others:"),(0,o.kt)("p",{parentName:"li"},"  To run unit tests in Rust:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  $ cargo test --release --all\n")),(0,o.kt)("p",{parentName:"li"},"  To run python integration tests:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  $ ./tests/test_all.py\n")))))}d.isMDXComponent=!0}}]);