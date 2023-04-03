"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const r={},a="Test Framework",s={unversionedId:"general/build/test-framework",id:"general/build/test-framework",title:"Test Framework",description:"The framework is written in python3. It can setup multiple Conflux nodes and test the distributed system behavior locally. It controls the nodes behavior by setting the node configurations, calling their RPCs, or sending them P2P messages directly.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/build/test-framework.md",sourceDirName:"general/build",slug:"/general/build/test-framework",permalink:"/zh-Hans/docs/general/build/test-framework",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/build/test-framework.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Block Synchronization Process",permalink:"/zh-Hans/docs/general/build/sync"},next:{title:"Introduction to Transaction Traces",permalink:"/zh-Hans/docs/general/build/trace-introduction"}},l={},d=[{value:"An Example Test",id:"an-example-test",level:2},{value:"Sending P2P Messages",id:"sending-p2p-messages",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Utility Function List",id:"utility-function-list",level:2},{value:"Introduction to Existing Python Tests",id:"introduction-to-existing-python-tests",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-framework"},"Test Framework"),(0,i.kt)("p",null,"The framework is written in ",(0,i.kt)("inlineCode",{parentName:"p"},"python3"),". It can setup multiple Conflux nodes and test the distributed system behavior locally. It controls the nodes behavior by setting the node configurations, calling their RPCs, or sending them P2P messages directly."),(0,i.kt)("p",null,"All related files are included in the directory  ",(0,i.kt)("inlineCode",{parentName:"p"},"tests"),"."),(0,i.kt)("p",null,"After compiling the source code with ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo build --release")," under the project directory, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/test_all.py")," to run all included python tests."),(0,i.kt)("h2",{id:"an-example-test"},"An Example Test"),(0,i.kt)("p",null,"Here is an example test. It setups 2 nodes, makes each node generate some blocks separately, and finally connects them to check if they can receive the blocks generated by the other."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from test_framework.test_framework import ConfluxTestFramework\nfrom test_framework.util import *\n\nclass ExampleTest(ConfluxTestFramework):\n    def set_test_params(self):\n        self.setup_clean_chain = True\n        self.num_nodes = 2\n\n    def setup_network(self):\n        self.setup_nodes()\n        # connect_sample_nodes(self.nodes, self.log)\n\n    def run_test(self):\n        self.nodes[0].generate(1, 0)\n        assert (self.nodes[0].getblockcount() == 2)\n\n        self.nodes[1].generate(2, 0)\n        assert (self.nodes[1].getblockcount() == 3)\n\n        connect_nodes(self.nodes, 0, 1)\n        sync_blocks(self.nodes)\n        assert (self.nodes[0].getblockcount() == 4)\n        self.log.info(\"PASS\")\n\nif __name__ == '__main__':\n    ExampleTest().main()\n")),(0,i.kt)("p",null,"The framework will"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"set_test_params")," to set basic test initialization parameters."),(0,i.kt)("li",{parentName:"ol"},"Setup the test directories and node configurations according to the parameters set in ",(0,i.kt)("inlineCode",{parentName:"li"},"set_test_params"),". By default, a temp directory will be created and all files will be kept within it. For example, setting ",(0,i.kt)("inlineCode",{parentName:"li"},"self.num_nodes = 2")," will initialize directories for two nodes."),(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"setup_network")," to add nodes and connect them. Here ",(0,i.kt)("inlineCode",{parentName:"li"},"self.setup_nodes()")," will add 2 Conflux nodes by running pre-compiled Conflux executable binary within the directory setupped in step 2. We do not connect them here because we want nodes seperated at the beginning."),(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"run_test")," to run the actual test codes.")),(0,i.kt)("p",null,"After running ",(0,i.kt)("inlineCode",{parentName:"p"},"self.setup_nodes()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"self.nodes")," is a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"TestNode"),", and each can be used to interact with the corresponding Conflux node. For example, to get the number of blocks in node 0 by calling the RPC named ",(0,i.kt)("inlineCode",{parentName:"p"},"getblockcount"),", you simply call ",(0,i.kt)("inlineCode",{parentName:"p"},"self.nodes[0].getblockcount")," and an integer will be returned."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"connect_nodes(self.nodes, 0, 1)")," connects nodes 0 and 1. ",(0,i.kt)("inlineCode",{parentName:"p"},"sync_blocks(self.nodes)")," waits until all nodes have the same pivot chain tip. Them are both implemented by calling RPCs, and more useful functions will be introduced in ",(0,i.kt)("a",{parentName:"p",href:"#utility-function-list"},"Utility Function List"),"."),(0,i.kt)("h2",{id:"sending-p2p-messages"},"Sending P2P Messages"),(0,i.kt)("p",null,"After calling ",(0,i.kt)("inlineCode",{parentName:"p"},"start_p2p_connection(self.nodes)"),", the field ",(0,i.kt)("inlineCode",{parentName:"p"},"p2p")," of each ",(0,i.kt)("inlineCode",{parentName:"p"},"TestNode")," will be initialized with a simulated Conflux node written in Python, and this simulated node will be connected to the Conflux process controled by the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"TestNode"),". After that, you can send and receive P2P messages within python code. Here is an example about how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"p2p")," to interact with the Conflux node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"    def run_test(self):\n        def assert_length(_node, msg):\n            assert_equal(len(msg.headers), 1)\n        h = WaitHandler(self.nodes[0].p2p, GET_BLOCK_HEADERS_RESPONSE, assert_length)\n        self.nodes[0].p2p.send_protocol_msg(GetBlockHeaders(hashes=[self.nodes[0].p2p.genesis.hash]))\n        h.wait()\n")),(0,i.kt)("p",null,"This example tries to get the genesis block header from node 0 with P2P requests (instead of using RPC), and asserts that only one header is returned."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WaitHandler")," will wait for the first message of the designated message type and run a function on this received message. ",(0,i.kt)("inlineCode",{parentName:"p"},"p2p.send_protocol_msg")," is used to send a rlp-encodable message. ",(0,i.kt)("inlineCode",{parentName:"p"},"h.wait()")," waits and handles the first received ",(0,i.kt)("inlineCode",{parentName:"p"},"GET_BLOCK_HEADERS_RESPONSE")," message. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"WaitHandler")," starts listening right after it's initialized."),(0,i.kt)("h2",{id:"configurations"},"Configurations"),(0,i.kt)("p",null,"By default, tests will use the release version executable binary built by ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo"),". If you want to use a file at another path (e.g., a debug version binary), you can set the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"CONFLUX")," to the full path of the used binary file before running the tests."),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h2",{id:"utility-function-list"},"Utility Function List"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h2",{id:"introduction-to-existing-python-tests"},"Introduction to Existing Python Tests"),(0,i.kt)("p",null,"TODO"))}u.isMDXComponent=!0}}]);