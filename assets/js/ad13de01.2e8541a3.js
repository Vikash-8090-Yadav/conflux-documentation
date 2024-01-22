"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6903],{7266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(85893),r=t(11151);const s={title:"Trouble Shooting",sidebar_position:14,description:"How to solve common problems",displayed_sidebar:"generalSidebar"},i=void 0,a={id:"general/run-a-node/TroubleShooting",title:"Trouble Shooting",description:"How to solve common problems",source:"@site/docs/general/run-a-node/TroubleShooting.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/TroubleShooting",permalink:"/docs/general/run-a-node/TroubleShooting",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/run-a-node/TroubleShooting.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Trouble Shooting",sidebar_position:14,description:"How to solve common problems",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Nodes FAQs",permalink:"/docs/general/run-a-node/nodes-faqs"},next:{title:"Mining & Staking",permalink:"/docs/category/mining--staking"}},c={},d=[{value:"Node startup failure.",id:"node-startup-failure",level:2},{value:"Linux: illegal instruction?",id:"linux-illegal-instruction",level:3},{value:"Linux: GLIBC_2.27 not found?",id:"linux-glibc_227-not-found",level:3},{value:"kvdb_rocksdb - DB has been previously marked as corrupted, attempting repair",id:"kvdb_rocksdb---db-has-been-previously-marked-as-corrupted-attempting-repair",level:3},{value:"Err value: PKCS#8 cryptographic error",id:"err-value-pkcs8-cryptographic-error",level:3},{value:"No such device or address",id:"no-such-device-or-address",level:3},{value:"Mac System Symbol not found",id:"mac-system-symbol-not-found",level:3},{value:"Windows System  ExecutionContext exists for cur_era_genesis core\\src\\block_data_manager\\mod.rs",id:"windows-system--executioncontext-exists-for-cur_era_genesis-coresrcblock_data_managermodrs",level:3},{value:"The node crashes shortly after startup.",id:"the-node-crashes-shortly-after-startup",level:3},{value:"Node data synchronization issue.",id:"node-data-synchronization-issue",level:2},{value:"The node is unable to connect to peers after startup.",id:"the-node-is-unable-to-connect-to-peers-after-startup",level:3},{value:"How to determine if a node is running properly?",id:"how-to-determine-if-a-node-is-running-properly",level:3},{value:"How to determine if a node is synchronized to the latest block?",id:"how-to-determine-if-a-node-is-synchronized-to-the-latest-block",level:3},{value:"Why is my node not synchronizing?",id:"why-is-my-node-not-synchronizing",level:3},{value:"After restarting the node, the epoch height remains unchanged?",id:"after-restarting-the-node-the-epoch-height-remains-unchanged",level:3},{value:"Why does synchronization take a long time after restart?",id:"why-does-synchronization-take-a-long-time-after-restart",level:3},{value:"Why does the block height stop increasing?",id:"why-does-the-block-height-stop-increasing",level:3},{value:"How to check the error log?",id:"how-to-check-the-error-log",level:3},{value:"Synchronizing data from the beginning on the testnet, the synchronization process gets stuck in the middle.",id:"synchronizing-data-from-the-beginning-on-the-testnet-the-synchronization-process-gets-stuck-in-the-middle",level:3},{value:"failed to calculate mempool broadcast RTT: SystemTimeError(1.2762543s)",id:"failed-to-calculate-mempool-broadcast-rtt-systemtimeerror12762543s",level:3},{value:"Normal node running logs.",id:"normal-node-running-logs",level:2},{value:"ERROR IO Worker #2 cfxcore::con - Fail to recover state_valid",id:"error-io-worker-2-cfxcorecon---fail-to-recover-state_valid",level:3},{value:"INFO COW copy failed, check file system support",id:"info-cow-copy-failed-check-file-system-support",level:3},{value:"WARN  Socket IO Worker #2  cfxcore::tra - an unexecuted tx is garbage-collected.",id:"warn--socket-io-worker-2--cfxcoretra---an-unexecuted-tx-is-garbage-collected",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"node-startup-failure",children:"Node startup failure."}),"\n",(0,o.jsx)(n.h3,{id:"linux-illegal-instruction",children:"Linux: illegal instruction?"}),"\n",(0,o.jsx)(n.p,{children:"If you encounter an 'illegal instruction' error when starting the node using the official provided binary, it indicates a mismatch between your CPU instruction set and the one used to compile the binary. You may try downloading the compatible version from the release page or compile it yourself."}),"\n",(0,o.jsx)(n.h3,{id:"linux-glibc_227-not-found",children:"Linux: GLIBC_2.27 not found?"}),"\n",(0,o.jsxs)(n.p,{children:["The Conflux binary depends on the ",(0,o.jsx)(n.strong,{children:"glibc"})," library. If it is not installed on your system or the installed version is ",(0,o.jsx)(n.strong,{children:"too low"}),", you may encounter this error."]}),"\n",(0,o.jsx)(n.h3,{id:"kvdb_rocksdb---db-has-been-previously-marked-as-corrupted-attempting-repair",children:"kvdb_rocksdb - DB has been previously marked as corrupted, attempting repair"}),"\n",(0,o.jsx)(n.p,{children:"This error occurs because the data files of the node have been corrupted, making it unable to start. In such cases, you can try deleting the data directory and allowing the node to resynchronize the data."}),"\n",(0,o.jsx)(n.p,{children:"If you want to quickly start the node, you can directly download the node data snapshot, unzip it, and start the node."}),"\n",(0,o.jsx)(n.h3,{id:"err-value-pkcs8-cryptographic-error",children:"Err value: PKCS#8 cryptographic error"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(69232).Z+"",width:"2234",height:"562"})}),"\n",(0,o.jsx)(n.p,{children:"This error may be caused by an incorrect password input for the pos_key."}),"\n",(0,o.jsx)(n.h3,{id:"no-such-device-or-address",children:"No such device or address"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'failed to start full client: Os { code: 6, kind: Uncategorized, message: "No such device or address" }'})}),"\n",(0,o.jsx)(n.p,{children:"This error occurs when starting the node using Docker. The node attempts to read the pos_key password from standard input, and if it cannot be read, it returns an error. In this case, you can configure the password in the configuration file or set it as an environment variable."}),"\n",(0,o.jsx)(n.h3,{id:"mac-system-symbol-not-found",children:"Mac System Symbol not found"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(98122).Z+"",width:"1680",height:"361"})}),"\n",(0,o.jsx)(n.p,{children:"If this occurs, it indicates that the host system's version is too low. Currently, only systems with macOS 12 or above are supported."}),"\n",(0,o.jsx)(n.p,{children:"Additionally, when running the node program on a Mac, it's important to choose the correct processor version based on your computer's architecture. M1 and x86 versions are not interchangeable."}),"\n",(0,o.jsx)(n.h3,{id:"windows-system--executioncontext-exists-for-cur_era_genesis-coresrcblock_data_managermodrs",children:"Windows System  ExecutionContext exists for cur_era_genesis core\\src\\block_data_manager\\mod.rs"}),"\n",(0,o.jsx)(n.p,{children:"When using a data snapshot on a Windows system to start a node, you may encounter the following error:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(39433).Z+"",width:"1186",height:"690"})}),"\n",(0,o.jsx)(n.h3,{id:"the-node-crashes-shortly-after-startup",children:"The node crashes shortly after startup."}),"\n",(0,o.jsx)(n.p,{children:"If this issue occurs on a Linux system, it may be due to insufficient permissions for the startup account. You can try starting it in sudo mode."}),"\n",(0,o.jsx)(n.h2,{id:"node-data-synchronization-issue",children:"Node data synchronization issue."}),"\n",(0,o.jsx)(n.h3,{id:"the-node-is-unable-to-connect-to-peers-after-startup",children:"The node is unable to connect to peers after startup."}),"\n",(0,o.jsxs)(n.p,{children:["It is possible that an incorrect configuration file was used, such as using the mainnet binary with testnet configuration, testnet binary with mainnet configuration, or ",(0,o.jsx)(n.strong,{children:"not specifying a configuration file"})," when starting the node."]}),"\n",(0,o.jsxs)(n.p,{children:["The fundamental reason for not connecting to peers is often ",(0,o.jsx)(n.strong,{children:"the lack of correctly specified bootnodes"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Another possibility is that the node is unable to connect to the network due to network issues."}),"\n",(0,o.jsx)(n.h3,{id:"how-to-determine-if-a-node-is-running-properly",children:"How to determine if a node is running properly?"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Check the ",(0,o.jsx)(n.strong,{children:"latest epoch"})," in the running logs:"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.strong,{children:"latest epoch"})," in the node's running logs keeps increasing, or if the ",(0,o.jsx)(n.strong,{children:"epochNumber"})," obtained through the ",(0,o.jsx)(n.code,{children:"cfx_getStatus"})," method continues to rise, it indicates that the node is running normally."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Catch-up mode: false, latest epoch: 85959xxxx\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Check ",(0,o.jsx)(n.strong,{children:"StatisticsInner"})," in the running logs:"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.strong,{children:"latest epoch"})," in the node's running logs is not increasing, but the numbers in ",(0,o.jsx)(n.strong,{children:"SyncGraphStatistics"})," and ",(0,o.jsx)(n.strong,{children:"ConsensusGraphStatistics"})," within ",(0,o.jsx)(n.strong,{children:"StatisticsInner"})," keep growing, the node is still running normally."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Statistics: StatisticsInner { \n    sync_graph: SyncGraphStatistics { \n        inserted_block_count: 1195746, \n        inserted_header_count: 1324647 \n    }, \n    consensus_graph: ConsensusGraphStatistics { \n        inserted_block_count: 154808, \n        activated_block_count: 1305980, \n        processed_block_count: 1305982 \n    } \n}\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Check ",(0,o.jsx)(n.strong,{children:"construct_pivot_state"})," in the running logs:"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.strong,{children:"index"})," or ",(0,o.jsx)(n.strong,{children:"height"})," keep increase, the node is running normally."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"cfxcore::con - construct_pivot_state: index 30774 height 86370774 compute_epoch true\n"})}),"\n",(0,o.jsx)(n.h3,{id:"how-to-determine-if-a-node-is-synchronized-to-the-latest-block",children:"How to determine if a node is synchronized to the latest block?"}),"\n",(0,o.jsxs)(n.p,{children:["If the node's running log shows ",(0,o.jsx)(n.strong,{children:"Catch-up mode: false"}),", it indicates that the node has synchronized to the latest data."]}),"\n",(0,o.jsx)(n.h3,{id:"why-is-my-node-not-synchronizing",children:"Why is my node not synchronizing?"}),"\n",(0,o.jsx)(n.p,{children:"The node synchronization may encounter various issues, with common ones including:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Insufficient disk space on the node machine."}),"\n",(0,o.jsx)(n.li,{children:"Network issues, such as inadequate incoming and outgoing bandwidth (recommended at least 5M)."}),"\n",(0,o.jsx)(n.li,{children:"Linux maximum file open limit not set high enough (ulimit -n 10000)."}),"\n",(0,o.jsx)(n.li,{children:"Incorrect specification of the configuration file; without proper configuration file settings, bootnodes cannot be located, leading to data synchronization issues. (When starting via Docker and mounting directories, it is easy to forget to specify the configuration file.)"}),"\n",(0,o.jsx)(n.li,{children:"Check for any error in node's running log. (When starting via start.sh, error messages are saved in stderr.txt.)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If after checking none of the above issues are present, but the node's ",(0,o.jsx)(n.strong,{children:"latest epoch"})," is not increasing, the node is likely running normally but engaged in other tasks, such as creating a checkpoint. In such cases, it is advisable to observe for an extended period, as this situation may persist for several hours or even tens of hours."]}),"\n",(0,o.jsx)(n.h3,{id:"after-restarting-the-node-the-epoch-height-remains-unchanged",children:"After restarting the node, the epoch height remains unchanged?"}),"\n",(0,o.jsx)(n.p,{children:"After restarting the node, there might be a state rebuilding operation at the era checkpoint. This process takes a considerable amount of time, ranging from half an hour to several hours. Please be patient and wait."}),"\n",(0,o.jsx)(n.h3,{id:"why-does-synchronization-take-a-long-time-after-restart",children:"Why does synchronization take a long time after restart?"}),"\n",(0,o.jsx)(n.p,{children:"After a node is restarted, it synchronizes data from the last checkpoint and replays block data. It will take different amounts of time according to the distance to the last checkpoint. After that, it will start synchronizing from the latest block."}),"\n",(0,o.jsx)(n.p,{children:"It\u2019s normal, generally it will take a few minutes to more than ten minutes."}),"\n",(0,o.jsx)(n.h3,{id:"why-does-the-block-height-stop-increasing",children:"Why does the block height stop increasing?"}),"\n",(0,o.jsx)(n.p,{children:"If the block height stops increasing, you can check the log or terminal to determine whether there is any error. If there is no error, it is most likely due to network reasons, you can try to restart the node."}),"\n",(0,o.jsx)(n.h3,{id:"how-to-check-the-error-log",children:"How to check the error log?"}),"\n",(0,o.jsxs)(n.p,{children:["If you run the node through\xa0",(0,o.jsx)(n.code,{children:"start.sh"}),", you can check the error log in\xa0",(0,o.jsx)(n.code,{children:"stderr.txt"}),"\xa0in the same directory."]}),"\n",(0,o.jsx)(n.h3,{id:"synchronizing-data-from-the-beginning-on-the-testnet-the-synchronization-process-gets-stuck-in-the-middle",children:"Synchronizing data from the beginning on the testnet, the synchronization process gets stuck in the middle."}),"\n",(0,o.jsxs)(n.p,{children:["To perform a full sync on the testnet, you need to increase the option ",(0,o.jsx)(n.code,{children:"additional_maintained_snapshot_count"})," to 50."]}),"\n",(0,o.jsx)(n.h3,{id:"failed-to-calculate-mempool-broadcast-rtt-systemtimeerror12762543s",children:"failed to calculate mempool broadcast RTT: SystemTimeError(1.2762543s)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"details = '''panicked at 'failed to calculate mempool broadcast RTT: SystemTimeError(1.2762543s)', core\\src\\pos\\mempool\\shared_mempool\\peer_manager.rs:400:18'''\nbacktrace = '''\n   0:     0x7ff737fa5645 - backtrace::backtrace::trace::hab5abe5046f447b5\n   1:     0x7ff737fa4aac - backtrace::capture::Backtrace::new::hd9f1f4afb992e4d5\n   2:     0x7ff73781b172 - crash_handler::setup_panic_handler::he3eed2ba07c7a235\n   3:     0x7ff7380d6cf6 - std::panicking::rust_panic_with_hook\n                               at /rustc/9d1b2106e23b1abd32fce1f17267604a5102f57a\\/library\\std\\src\\panicking.rs:610\n   4:     0x7ff7380d6afb - std::panicking::begin_panic_handler::closure$0\n                               at /rustc/9d1b2106e23b1abd32fce1f17267604a5102f57a\\/library\\std\\src\\panicking.rs:502\n   5:     0x7ff7380d4377 - std::sys_common::backtrace::__rust_end_short_backtrace<std::panicking::begin_panic_handler::closure$0,never$>\n                               at /rustc/9d1b2106e23b1abd32fce1f17267604a5102f57a\\/library\\std\\src\\sys_common\\backtrace.rs:139\n   6:     0x7ff7380d67f9 - std::panicking::begin_panic_handler\n                               at /rustc/9d1b2106e23b1abd32fce1f17267604a5102f57a\\/library\\std\\src\\panicking.rs:498\n   7:     0x7ff7384c8e10 - core::panicking::panic_fmt\n                               at /rustc/9d1b2106e23b1abd32fce1f17267604a5102f57a\\/library\\core\\src\\panicking.rs:116\n   8:     0x7ff7384c8f23 - core::result::unwrap_failed\n                               at /rustc/9d1b2106e23b1abd32fce1f17267604a5102f57a\\/library\\core\\src\\result.rs:1690\n   9:     0x7ff7374fcb6f - cfxcore::pos::mempool::shared_mempool::peer_manager::PeerManager::process_broadcast_ack::h66a5c6263f1cb4c5\n  10:     0x7ff7374f5e19 - cfxcore::pos::mempool::shared_mempool::coordinator::coordinator::{{closure}}::h6c1ff8196b71855b\n  11:     0x7ff737543216 - std::panicking::try::hd909c3032f511b0c\n  12:     0x7ff73776aca6 - tokio::runtime::task::harness::Harness<T,S>::complete::hf2bbf17ca3ded03d\n  13:     0x7ff73775b7ee - tokio::runtime::task::harness::Harness<T,S>::poll::h0348d72954fb7fe3\n  14:     0x7ff7379a174f - std::thread::local::LocalKey<T>::with::h1b1b4832535dd8eb\n  15:     0x7ff7379a0508 - tokio::runtime::thread_pool::worker::Context::run::h1871366c06b8b19b\n  16:     0x7ff73799f313 - tokio::runtime::thread_pool::worker::Context::run::h1871366c06b8b19b\n  17:     0x7ff737997b08 - tokio::macros::scoped_tls::ScopedKey<T>::set::h72c7679a82ac49e7\n  18:     0x7ff73799ee3a - tokio::runtime::thread_pool::worker::run::he96293bdc96c9c85\n  19:     0x7ff7379a25d5 - tokio::runtime::task::core::CoreStage<T>::poll::hfebd390d78b509ef\n  20:     0x7ff7379a6036 - std::panicking::try::h2cdfe9794da6da4e\n  21:     0x7ff7379a4150 - tokio::runtime::task::harness::Harness<T,S>::poll::h32aca2917e8ece97\n  22:     0x7ff737994efc - tokio::runtime::blocking::pool::Inner::run::h50dc8a99eae64ddb\n  23:     0x7ff737990855 - std::sys_common::backtrace::__rust_begin_short_backtrace::hd7f858c23b97e5cf\n  24:     0x7ff7379a1203 - <&T as core::fmt::Debug>::fmt::hd9ffef8910ae9eb8\n  25:     0x7ff7380dd69c - alloc::boxed::impl$44::call_once\n                               at /rustc/9d1b2106e23b1abd32fce1f17267604a5102f57a\\library\\alloc\\src\\boxed.rs:1854\n  26:     0x7ff7380dd69c - alloc::boxed::impl$44::call_once\n                               at /rustc/9d1b2106e23b1abd32fce1f17267604a5102f57a\\library\\alloc\\src\\boxed.rs:1854\n  27:     0x7ff7380dd69c - std::sys::windows::thread::impl$0::new::thread_start\n                               at /rustc/9d1b2106e23b1abd32fce1f17267604a5102f57a\\/library\\std\\src\\sys\\windows\\thread.rs:58\n  28:     0x7ffc35637034 - BaseThreadInitThunk\n  29:     0x7ffc36822651 - RtlUserThreadStart\n"})}),"\n",(0,o.jsx)(n.p,{children:"This error is caused by the system API returning a system time that is set backward. It is recommended to synchronize the time promptly to avoid the widening of the system time deviation."}),"\n",(0,o.jsx)(n.h2,{id:"normal-node-running-logs",children:"Normal node running logs."}),"\n",(0,o.jsx)(n.p,{children:"During the node's operation, the following information appears, which does not affect the normal functioning of the node and can be ignored."}),"\n",(0,o.jsx)(n.h3,{id:"error-io-worker-2-cfxcorecon---fail-to-recover-state_valid",children:"ERROR IO Worker #2 cfxcore::con - Fail to recover state_valid"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(25783).Z+"",width:"1934",height:"184"})}),"\n",(0,o.jsx)(n.h3,{id:"info-cow-copy-failed-check-file-system-support",children:"INFO COW copy failed, check file system support"}),"\n",(0,o.jsx)(n.p,{children:'INFO Background Snapshot cfx_storage: - COW copy failed, check file system support. Command "cp" "-R" "--reflink=always"'}),"\n",(0,o.jsx)(n.p,{children:"This message is a prompt indicating that the machine's file system does not support the Copy on Write (COW) feature. It does not affect the node's operation. If the machine supports COW, it can help improve node performance."}),"\n",(0,o.jsx)(n.h3,{id:"warn--socket-io-worker-2--cfxcoretra---an-unexecuted-tx-is-garbage-collected",children:"WARN  Socket IO Worker #2  cfxcore::tra - an unexecuted tx is garbage-collected."}),"\n",(0,o.jsx)(n.p,{children:"Excessive transactions in the transaction pool result in the recycling of transactions in the pool. This does not affect the normal operation of the node."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},25783:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/failed-recover-state-valid-52adb5ef90b1ed64f51aa78dda98c136.png"},98122:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/mac-os-version-too-low-6dce84853690773713bd54ea1851c9f8.png"},69232:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/pos-key-pwd-wrong-7e7f82d37f3d3de7f8135553232959a3.png"},39433:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/snapshot-download-uncomplete-bfa0dc3b6e7c30e1e3c14908f1a0defc.jpeg"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);