"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1790],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(4137));const i={},a="Test Framework",l={unversionedId:"general/build/node-development/test-framework",id:"general/build/node-development/test-framework",title:"Test Framework",description:"The framework is written in python3. It can setup multiple Conflux nodes and test the distributed system behavior locally. It controls the nodes behavior by setting the node configurations, calling their RPCs, or sending them P2P messages directly.",source:"@site/docs/general/build/node-development/test-framework.md",sourceDirName:"general/build/node-development",slug:"/general/build/node-development/test-framework",permalink:"/es/docs/general/build/node-development/test-framework",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Block Synchronization Process",permalink:"/es/docs/general/build/node-development/sync"},next:{title:"Introduction to Transaction Traces",permalink:"/es/docs/general/build/node-development/trace-introduction"}},s={},d=[{value:"An Example Test",id:"an-example-test",level:2},{value:"Sending P2P Messages",id:"sending-p2p-messages",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Utility Function List",id:"utility-function-list",level:2},{value:"Introduction to Existing Python Tests",id:"introduction-to-existing-python-tests",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-framework"},"Test Framework"),(0,r.kt)("p",null,"The framework is written in ",(0,r.kt)("inlineCode",{parentName:"p"},"python3"),". It can setup multiple Conflux nodes and test the distributed system behavior locally. It controls the nodes behavior by setting the node configurations, calling their RPCs, or sending them P2P messages directly."),(0,r.kt)("p",null,"All related files are included in the directory  ",(0,r.kt)("inlineCode",{parentName:"p"},"tests"),". "),(0,r.kt)("p",null,"After compiling the source code with ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo build --release")," under the project directory, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"tests/test_all.py")," to run all included python tests."),(0,r.kt)("h2",{id:"an-example-test"},"An Example Test"),(0,r.kt)("p",null,"Here is an example test. It setups 2 nodes, makes each node generate some blocks separately, and finally connects them to check if they can receive the blocks generated by the other."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from test_framework.test_framework import ConfluxTestFramework\nfrom test_framework.util import *\n\nclass ExampleTest(ConfluxTestFramework):\n    def set_test_params(self):\n        self.setup_clean_chain = True\n        self.num_nodes = 2\n\n    def setup_network(self):\n        self.setup_nodes()\n        # connect_sample_nodes(self.nodes, self.log)\n\n    def run_test(self):\n        self.nodes[0].generate(1, 0)\n        assert (self.nodes[0].getblockcount() == 2)\n\n        self.nodes[1].generate(2, 0)\n        assert (self.nodes[1].getblockcount() == 3)\n\n        connect_nodes(self.nodes, 0, 1)\n        sync_blocks(self.nodes)\n        assert (self.nodes[0].getblockcount() == 4)\n        self.log.info(\"PASS\")\n\nif __name__ == '__main__':\n    ExampleTest().main()\n")),(0,r.kt)("p",null,"The framework will"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"set_test_params")," to set basic test initialization parameters."),(0,r.kt)("li",{parentName:"ol"},"Setup the test directories and node configurations according to the parameters set in ",(0,r.kt)("inlineCode",{parentName:"li"},"set_test_params"),". By default, a temp directory will be created and all files will be kept within it. For example, setting ",(0,r.kt)("inlineCode",{parentName:"li"},"self.num_nodes = 2")," will initialize directories for two nodes."),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"setup_network")," to add nodes and connect them. Here ",(0,r.kt)("inlineCode",{parentName:"li"},"self.setup_nodes()")," will add 2 Conflux nodes by running pre-compiled Conflux executable binary within the directory setupped in step 2. We do not connect them here because we want nodes seperated at the beginning."),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"run_test")," to run the actual test codes.")),(0,r.kt)("p",null,"After running ",(0,r.kt)("inlineCode",{parentName:"p"},"self.setup_nodes()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"self.nodes")," is a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"TestNode"),", and each can be used to interact with the corresponding Conflux node. For example, to get the number of blocks in node 0 by calling the RPC named ",(0,r.kt)("inlineCode",{parentName:"p"},"getblockcount"),", you simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"self.nodes[0].getblockcount")," and an integer will be returned."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"connect_nodes(self.nodes, 0, 1)")," connects nodes 0 and 1. ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_blocks(self.nodes)")," waits until all nodes have the same pivot chain tip. Them are both implemented by calling RPCs, and more useful functions will be introduced in ",(0,r.kt)("a",{parentName:"p",href:"#utility-function-list"},"Utility Function List"),"."),(0,r.kt)("h2",{id:"sending-p2p-messages"},"Sending P2P Messages"),(0,r.kt)("p",null,"After calling ",(0,r.kt)("inlineCode",{parentName:"p"},"start_p2p_connection(self.nodes)"),", the field ",(0,r.kt)("inlineCode",{parentName:"p"},"p2p")," of each ",(0,r.kt)("inlineCode",{parentName:"p"},"TestNode")," will be initialized with a simulated Conflux node written in Python, and this simulated node will be connected to the Conflux process controled by the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"TestNode"),". After that, you can send and receive P2P messages within python code. Here is an example about how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"p2p")," to interact with the Conflux node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    def run_test(self):\n        def assert_length(_node, msg):\n            assert_equal(len(msg.headers), 1)\n        h = WaitHandler(self.nodes[0].p2p, GET_BLOCK_HEADERS_RESPONSE, assert_length)\n        self.nodes[0].p2p.send_protocol_msg(GetBlockHeaders(hashes=[self.nodes[0].p2p.genesis.hash]))\n        h.wait()\n")),(0,r.kt)("p",null,"This example tries to get the genesis block header from node 0 with P2P requests (instead of using RPC), and asserts that only one header is returned."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WaitHandler")," will wait for the first message of the designated message type and run a function on this received message. ",(0,r.kt)("inlineCode",{parentName:"p"},"p2p.send_protocol_msg")," is used to send a rlp-encodable message. ",(0,r.kt)("inlineCode",{parentName:"p"},"h.wait()")," waits and handles the first received ",(0,r.kt)("inlineCode",{parentName:"p"},"GET_BLOCK_HEADERS_RESPONSE")," message. Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"WaitHandler")," starts listening right after it's initialized."),(0,r.kt)("h2",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"By default, tests will use the release version executable binary built by ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo"),". If you want to use a file at another path (e.g., a debug version binary), you can set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFLUX")," to the full path of the used binary file before running the tests."),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"utility-function-list"},"Utility Function List"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"introduction-to-existing-python-tests"},"Introduction to Existing Python Tests"),(0,r.kt)("p",null,"TODO"))}u.isMDXComponent=!0}}]);