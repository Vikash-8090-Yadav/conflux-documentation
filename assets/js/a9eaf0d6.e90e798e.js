"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"Using Ledger on Conflux Core Space",keywords:["ledger","wallet"]},l=void 0,i={unversionedId:"core/tutorial/using-ledger-on-conflux-core-space",id:"core/tutorial/using-ledger-on-conflux-core-space",title:"Using Ledger on Conflux Core Space",description:"Introduction",source:"@site/docs/core/tutorial/using-ledger-on-conflux-core-space.md",sourceDirName:"core/tutorial",slug:"/core/tutorial/using-ledger-on-conflux-core-space",permalink:"/docs/core/tutorial/using-ledger-on-conflux-core-space",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Using Ledger on Conflux Core Space",keywords:["ledger","wallet"]},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Transferring Funds Across Spaces",permalink:"/docs/core/tutorial/transferring-funds-across-spaces"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Before You Start",id:"before-you-start",level:2},{value:"Installation",id:"installation",level:2},{value:"Connecting Your Ledger Device to Fluent",id:"connecting-your-ledger-device-to-fluent",level:2},{value:"Using Ledger: Sending Crypto Assets",id:"using-ledger-sending-crypto-assets",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://confluxnetwork.org"},"Conflux")," is a high performance distributed ledger based on the Tree-Graph concensus protocol.\nConflux supports the Conflux native token CFX, and numerous other crypto assets including ",(0,r.kt)("a",{parentName:"p",href:"https://confluxscan.io/tokens/crc20"},"CRC20")," and ",(0,r.kt)("a",{parentName:"p",href:"https://confluxscan.io/tokens/crc721"},"NFT")," tokens.\nYou can now use your ",(0,r.kt)("strong",{parentName:"p"},"Ledger Nano S")," or ",(0,r.kt)("strong",{parentName:"p"},"Ledger Nano X")," hardware wallet to securely store your assets on Conflux.\nIn this guide, we will show you how to install the Conflux app on your Ledger device, how to import your accounts into Fluent, and how to transfer assets on Conflux."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This guide is for Conflux Core. If you would like to use your Ledger device with the EVM-compatible Conflux eSpace, click here.")),(0,r.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,r.kt)("p",null,"Before you start, make sure that you have done the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initialized your ",(0,r.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true"},"Nano S")," or ",(0,r.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360018784134-Set-up-your-Ledger-Nano-X?docs=true"},"Nano X")," device."),(0,r.kt)("li",{parentName:"ul"},"Updated your ",(0,r.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware?docs=true"},"Nano S")," or ",(0,r.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware?docs=true"},"Nano X")," device to the latest firmware version."),(0,r.kt)("li",{parentName:"ul"},"Installed ",(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," and updated it to the latest version."),(0,r.kt)("li",{parentName:"ul"},"Installed ",(0,r.kt)("a",{parentName:"li",href:"https://fluentwallet.com/"},"Fluent Wallet")," on a compatible desktop browser.")),(0,r.kt)("p",null,"If you encounter any issues, find us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/aCZkf2C"},"Discord")," or ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/Conflux_English"},"Telegram"),", we are happy to help."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Conflux Ledger app is currently available as an ",(0,r.kt)("strong",{parentName:"p"},"unaudited developer release"),". Please use it at your own risk.")),(0,r.kt)("p",null,"You can install the ",(0,r.kt)("strong",{parentName:"p"},"Conflux app")," on your Ledger device by following these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),(0,r.kt)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),(0,r.kt)("li",{parentName:"ol"},"Open Ledger Live."),(0,r.kt)("li",{parentName:"ol"},"Click on the gear icon in the top right corner to open Settings."),(0,r.kt)("li",{parentName:"ol"},'Go to "Experimental features" and enable "Developer mode".'),(0,r.kt)("li",{parentName:"ol"},'In the menu on the left, click "Manager" to open the Ledger Live app manager.'),(0,r.kt)("li",{parentName:"ol"},'When your Ledger device displays "Allow Ledger manager", press both buttons to continue.'),(0,r.kt)("li",{parentName:"ol"},'Back in Ledger Live, under the "App catalog" tab, enter "Conflux" in the search field.'),(0,r.kt)("li",{parentName:"ol"},'Once Ledger Live shows the Conflux app, press "Install".')),(0,r.kt)("p",null,"The Conflux app is now installed successfully."),(0,r.kt)("h2",{id:"connecting-your-ledger-device-to-fluent"},"Connecting Your Ledger Device to Fluent"),(0,r.kt)("p",null,"You can import accounts from your Ledger device into your Fluent wallet by following these steps:"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Quit Ledger Live if it is currently opened."),(0,r.kt)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),(0,r.kt)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the Conflux app on your device and press both buttons to open it."),(0,r.kt)("li",{parentName:"ol"},'In Fluent, open the menu in the top right corner and select "Account Management".'),(0,r.kt)("li",{parentName:"ol"},'Click "Add" and select "Hardware Wallet". Read the instructions carefully and click "Ready".'),(0,r.kt)("li",{parentName:"ol"},'On the "Connect your Ledger" page, click "Connect".'),(0,r.kt)("li",{parentName:"ol"},'A browser popup will appear saying "Fluent wants to connect". Select your Ledger device from the list and click "Connect".'),(0,r.kt)("li",{parentName:"ol"},'After a few seconds, the "Choose Address" page shows up in Fluent. Select one or more accounts that you would like to import to Fluent and click "Import".')),(0,r.kt)("p",null,'Your account is now available in Fluent as "LedgerNanoS-1" (or similar).'),(0,r.kt)("h2",{id:"using-ledger-sending-crypto-assets"},"Using Ledger: Sending Crypto Assets"),(0,r.kt)("p",null,"Assuming your account on the Ledger device has some CFX tokens, the steps below show how to make a CFX transfer on Conflux."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you do not have CFX, you can purchase at one of the exchanges listed ",(0,r.kt)("a",{parentName:"p",href:"https://123cfx.com/#Exchanges"},"here"),".")),(0,r.kt)("p",null,"Make sure you have already imported your Ledger account into your Fluent wallet by following the steps in the previous section. Quit Ledger Live if it is currently opened."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect your Ledger Nano S or Ledger Nano X device to your computer through USB."),(0,r.kt)("li",{parentName:"ol"},"Unlock your device by entering your PIN."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Conflux app")," on your device and press both buttons to open it."),(0,r.kt)("li",{parentName:"ol"},'In Fluent, select your Ledger account (e.g., "LedgerNanoS-1").'),(0,r.kt)("li",{parentName:"ol"},'Click "Send" and enter the recipient address (should start with ',(0,r.kt)("inlineCode",{parentName:"li"},"0x"),")."),(0,r.kt)("li",{parentName:"ol"},'Under "Token and Amount", enter the amount of CFX to transfer and click "Next".'),(0,r.kt)("li",{parentName:"ol"},'Double check the transaction details, and click "Confirm".'),(0,r.kt)("li",{parentName:"ol"},'Your Ledger device will now show "Review transaction". ',(0,r.kt)("strong",{parentName:"li"},"Carefully review the transaction amount and receipient address")," by repeatedly pressing the right button on your device."),(0,r.kt)("li",{parentName:"ol"},'If everything looks correct, press both buttons at the "Accept and send" screen to approve the transaction. Otherwise, press both buttons at the "Reject" screen to reject the transaction.')),(0,r.kt)("p",null,'After the transaction has been approved, it is now signed and sent to the Conflux Network. You can see the transaction status in Fluent. If you click on "History", then click on the arrow icon at the top right corner of your transaction, you can see more details on ',(0,r.kt)("a",{parentName:"p",href:"https://confluxscan.io"},"Conflux Scan"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"You can learn more about Conflux at ",(0,r.kt)("a",{parentName:"p",href:"https://confluxnetwork.org"},"confluxnetwork.org")," or at the ",(0,r.kt)("a",{parentName:"p",href:"http://developer.confluxnetwork.org"},"Conflux Developer Portal"),". You can check transaction and account details on ",(0,r.kt)("a",{parentName:"p",href:"https://confluxscan.io"},"Conflux Scan"),"."),(0,r.kt)("p",null,"If you encounter any issues, find us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/aCZkf2C"},"Discord")," or ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/Conflux_English"},"Telegram"),", we are happy to help.\ns"))}d.isMDXComponent=!0}}]);