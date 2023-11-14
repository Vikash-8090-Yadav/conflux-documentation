"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[468],{4137:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>f});var n=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function t(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):t(t({},a),e)),o},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return o?n.createElement(f,t(t({ref:a},d),{},{components:o})):n.createElement(f,t({ref:a},d))}));function f(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=o.length,t=new Array(s);t[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:r,t[1]=i;for(var c=2;c<s;c++)t[c]=o[c];return n.createElement.apply(null,t)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8529:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(4137));const s={sidebar_position:2,title:"\xbfPor qu\xe9 introducir PoS?",id:"why_pos",keywords:["pos","why"]},t=void 0,i={unversionedId:"general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",id:"general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",title:"\xbfPor qu\xe9 introducir PoS?",description:"Este es un art\xedculo escrito antes del merge de Ethereum para explicar por qu\xe9 Conflux decide introducir PoS.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/conflux-basics/consensus-mechanisms/proof-of-stake/why-pos.md",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-stake",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",permalink:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",draft:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\xbfPor qu\xe9 introducir PoS?",id:"why_pos",keywords:["pos","why"]},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n a PoS",permalink:"/es/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview"},next:{title:"Glossary",permalink:"/es/docs/general/conflux-basics/glossary"}},l={},c=[{value:"Consenso H\xedbrido PoW + PoS?",id:"consenso-h\xedbrido-pow--pos",level:2}],d={toc:c},u="wrapper";function p(e){let{components:a,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Este es un art\xedculo escrito antes del merge de Ethereum para explicar por qu\xe9 Conflux decide introducir PoS.")),(0,r.kt)("p",null,"Empecemos por explicar la realidad de que Conflux tendr\xe1 que considerar el riesgo de un ataque del 51% en un per\xedodo bastante largo: debido a los enormes ingresos mineros de Ethereum y a las crecientes demandas de tarjetas gr\xe1ficas, los mineros ya han comprado un mont\xf3n de tarjetas gr\xe1ficas, formando un enorme grupo de poder de hashing."),(0,r.kt)("p",null,"Conflux tambi\xe9n utiliza tarjetas gr\xe1ficas para la miner\xeda, y el poder de hashing de las tarjetas gr\xe1ficas para mantener la seguridad de Conflux sigue estando muy por detr\xe1s de la de Ethereum. Por lo tanto, existe el riesgo de que un gran n\xfamero de tarjetas gr\xe1ficas se cambien a Conflux en un corto per\xedodo de tiempo para realizar un ataque del 51%."),(0,r.kt)("p",null,'Riesgos similares de ataques del 51% no s\xf3lo existen en cadenas p\xfablicas de PoW con miner\xeda por tarjetas gr\xe1ficas, tambi\xe9n existen en blockchains como BCH, que utiliza la misma miner\xeda ASIC que BTC pero con una potencia de c\xf3mputo significativamente menor. Para hacer frente al riesgo de ataque del 51%, BCH ha llegado incluso a adoptar una soluci\xf3n "menos elegante" al limitar la duraci\xf3n de la cancelaci\xf3n.'),(0,r.kt)("p",null,"En teor\xeda, una cadena p\xfablica con PoW nunca puede eliminar completamente el riesgo de un ataque del 51%. En la pr\xe1ctica, si un atacante lanza o no un ataque del 51 % depende en gran medida de los beneficios y costos del ataque. En t\xe9rminos de la ganancia del atacante: un ataque del 51% exitoso no da\xf1ar\xe1 la ganancia de la miner\xeda. La ganancia del atacante puede reducirse principalmente por dos razones. Uno es la p\xe9rdida causada por el colapso del valor del token despu\xe9s de un ataque exitoso; la otra es que la comunidad puede llegar a un consenso para hacer retroceder el estado a trav\xe9s de un hard fork para eliminar la ganancia del atacante. Sin embargo, hoy en d\xeda las blockchains han soportado m\xfaltiples activos en cadena y proporcionado servicios cruzados, as\xed que ahora es dif\xedcil eliminar el impacto causado por un ataque de doble gasto a trav\xe9s de un simple hard fork, que es muy diferente de la situaci\xf3n cuando se bifurc\xf3 la ETC de ETH."),(0,r.kt)("p",null,"En t\xe9rminos de aumentar el coste para los atacantes del 51%, ahora hay tres opciones disponibles:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Evitar todos los grupos de poder de hashing de gran escala. Espec\xedficamente, abandonar la miner\xeda por tarjetas gr\xe1ficas y cambiar a la miner\xeda especializada ASIC."),(0,r.kt)("li",{parentName:"ol"},"Obtener un poder de hashing en la red de Conflux cercana o incluso superior a la de Ethereum. Esto requiere aumentar los ingresos totales de la miner\xeda de Conflux a un nivel comparable al de Ethereum. La emisi\xf3n de miner\xeda actual de Ethereum es de aproximadamente 2,6 ETH cada 13 segundos, o un promedio de 0,2 ETH por segundo. Basado en el precio de mercado de 3400 USD/ETH, que da a Ethereum un ingreso minero de unos 680 USD por segundo, o unos 58.752.000 USD por d\xeda. Para aumentar los ingresos de miner\xeda de Conflux a este nivel, requerir\xeda un impulso de alrededor de 170 veces. Esto significa aumentar los ingresos de cada bloque a $340, es decir, aumentar la recompensa por bloque a m\xe1s de 340 CFX manteniendo el precio de 1USD/CFX, o aumentar el precio unitario de CFX 170 veces mientras se mantiene la salida. Alcanzar este objetivo en el corto plazo puede requerir que Elon Musk env\xede un tweet para CFX cada semana o incluso cada d\xeda."),(0,r.kt)("li",{parentName:"ol"},"Introducir un mecanismo de PoS para contrarrestar ataques del 51%. La decisi\xf3n PoS hace imposible que un atacante consiga un ataque de doble gasto basado \xfanicamente en la ventaja del poder de c\xf3mputo. a menos que el atacante invierta adicionalmente suficiente CFX para influir en la decisi\xf3n de PoS.")),(0,r.kt)("p",null,"De estas tres opciones, creemos que s\xf3lo la \xfaltima es realmente factible."),(0,r.kt)("p",null,'En cuanto al roadmap t\xe9cnico del equipo, el objetivo de Conflux es lograr una "plataforma de cadena p\xfablica descentralizada accesible y asequible para todos", en lugar de una "cadena p\xfablica con un protocolo espec\xedfico de consenso de PoW". El enfoque t\xe9cnico es s\xf3lo un medio para servir al objetivo, no al propio objetivo. Por esta raz\xf3n, a\xf1adir decisiones PoS al final al mecanismo de consenso de Conflux para mejorar la velocidad de confirmaci\xf3n y resistir posibles ataques del 51% est\xe1 en l\xednea con los objetivos de Conflux. Adem\xe1s, reducir la complejidad y el riesgo potencial de a\xf1adir mecanismo de finalidad de PoS, elegimos dejar la selecci\xf3n y el despacho de las transacciones enteramente en manos de los mineros de PoW, y el ordenamiento de bloques sigue las reglas de ordenaci\xf3n de los \xe1rboles, con la votaci\xf3n de PoS s\xf3lo sobre la finalidad de bloques generados por los mineros de PoW.'),(0,r.kt)("p",null,"En cuanto a la comprensi\xf3n de PoW y PoS, nunca hemos cambiado: PoW es m\xe1s seguro pero m\xe1s lento para confirmar; PoS es m\xe1s r\xe1pido de confirmar pero menos seguro. La combinaci\xf3n de PoW y PoS tiene el potencial de ser un protocolo de consenso m\xe1s deseable"),(0,r.kt)("h2",{id:"consenso-h\xedbrido-pow--pos"},"Consenso H\xedbrido PoW + PoS?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Las ventajas del consenso de PoW - seguridad y fiabilidad"),(0,r.kt)("li",{parentName:"ul"},"Ventajas de consenso PoS - eficiencia (confirmaci\xf3n r\xe1pida, bajo consumo de energ\xeda)"),(0,r.kt)("li",{parentName:"ul"},"Ambos pueden lograr un avance cercano al l\xedmite de capacidad de red",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"La expansi\xf3n adicional requiere actualizaci\xf3n de infraestructura o soluciones de capa 2"))),(0,r.kt)("li",{parentName:"ul"},"\xbfC\xf3mo combinar las ventajas de ambos?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Alta seguridad"),(0,r.kt)("li",{parentName:"ul"},"Confirmaci\xf3n r\xe1pida"),(0,r.kt)("li",{parentName:"ul"},"Consumo energ\xe9tico razonable")))))}p.isMDXComponent=!0}}]);