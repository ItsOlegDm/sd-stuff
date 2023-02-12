"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"LoRA",description:"\u041b\u043e\u0440\u0430",hide_table_of_contents:!1,sidebar_position:3},a=void 0,l={unversionedId:"additional/lora",id:"additional/lora",title:"LoRA",description:"\u041b\u043e\u0440\u0430",source:"@site/docs/additional/lora.md",sourceDirName:"additional",slug:"/additional/lora",permalink:"/en/docs/additional/lora",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"LoRA",description:"\u041b\u043e\u0440\u0430",hide_table_of_contents:!1,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hypernetworks",permalink:"/en/docs/additional/hypernetworks"}},p={},c=[],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"LowRank Adaptation of Large Language Models")),(0,o.kt)("p",null,"\u0414\u0435\u043b\u0430\u0435\u0442 \u0432\u0441\u0435 \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435 \u0447\u0442\u043e \u0438 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u0438 \u0441 \u0433\u0438\u043f\u0435\u0440\u043d\u0435\u0442\u0432\u043e\u0440\u043a\u0430\u043c\u0438, \u043d\u043e \u043b\u0443\u0447\u0448\u0435, \u0438 \u0443\u0447\u0438\u0442\u0441\u044f \u0431\u044b\u0441\u0442\u0440\u0435\u0435."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f LoRA \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0435e \u043f\u043e \u043f\u0443\u0442\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"stable-diffusion-webui\\models\\Lora")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/wVD8BuL.gif",alt:"gif"})),(0,o.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c, \u043f\u043e\u0434 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u043c \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"\ud83c\udfb4"),", \u0438\u0434\u0435\u043c \u0432\u043e \u0432\u043a\u043b\u0430\u0434\u043a\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"LoRA")," \u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u043d\u0443\u0436\u043d\u0443\u044e \u043d\u0430\u043c \u043b\u043e\u0440\u0443. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/whxbHJN.gif",alt:"gif"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u0412\u043b\u0438\u044f\u043d\u0438\u0435 \u043b\u043e\u0440\u044b \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u0430\u043a\u0436\u0435, \u043a\u0430\u043a \u0438 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u0442\u0435\u0433\u0430"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/rhwD1WH.gif",alt:"gif"}))))}d.isMDXComponent=!0}}]);