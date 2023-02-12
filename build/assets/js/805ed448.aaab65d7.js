"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[953],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),m=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(n),k=a,d=s["".concat(o,".").concat(k)]||s[k]||c[k]||r;return n?i.createElement(d,l(l({ref:t},u),{},{components:n})):i.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0430 \u0441\u0432\u043e\u0439 \u043f\u043a",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 WebUi \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435.",hide_table_of_contents:!1,sidebar_position:2},l=void 0,p={unversionedId:"installation/local",id:"installation/local",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0430 \u0441\u0432\u043e\u0439 \u043f\u043a",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 WebUi \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435.",source:"@site/docs/installation/local.md",sourceDirName:"installation",slug:"/installation/local",permalink:"/docs/installation/local",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0430 \u0441\u0432\u043e\u0439 \u043f\u043a",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 WebUi \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435.",hide_table_of_contents:!1,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u0417\u0430\u043f\u0443\u0441\u043a Colab",permalink:"/docs/installation/colab"},next:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 WebUi",permalink:"/docs/usage/index"}},o={},m=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0441\u0435\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b WebUi",id:"start",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 WebUi",id:"install-webui",level:2},{value:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",id:"commandline_args",level:2},{value:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b",id:"recomended_args",level:3},{value:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b",id:"other_args",level:3}],u={toc:m},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Stable Diffusion \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u043d\u0430 \u0441\u0432\u043e\u0435\u043c \u0436\u0435\u043b\u0435\u0437\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0447\u0435\u043c colab \u0438 \u0435\u043c\u0443 \u043f\u043e\u0434\u043e\u0431\u043d\u043e\u0435.\n\u0412\u043e\u0442 \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0442\u0435\u043c \u043a\u0430\u043a \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c SD \u043d\u0430 \u0441\u0432\u043e\u0439 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u041d\u0435\u0439\u0440\u043e\u043d\u043a\u0430 \u043e\u0447\u0435\u043d\u044c \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u0430 \u043a \u0432\u0438\u0434\u0435\u043e\u043f\u0430\u043c\u044f\u0442\u0438. \u0412 \u0438\u0434\u0435\u0430\u043b\u0435 8\u0433\u0431+, \u0447\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0442\u0435\u043c \u043b\u0443\u0447\u0448\u0435. \u0427\u0438\u0441\u0442\u043e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438, \u0432\u0441\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438 \u043d\u0430 6\u0433\u0431, \u0438 \u043d\u0430 4\u0433\u0431, \u043d\u043e \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441 \u0442\u0430\u043a\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c VRAM \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0430\u0442\u044c\u0441\u044f \u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0430\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0431\u043e\u043b\u044c\u044e, \u0442\u0430\u043a \u0447\u0442\u043e \u043d\u0435 \u0441\u043e\u0432\u0435\u0442\u0443\u044e. \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0434\u0430\u0436\u0435 \u043d\u0435\u0442 4\u0433\u0431 - \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435, \u0438 \u0438\u0434\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b \u043a\u043e\u043b\u0430\u0431."),(0,a.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0432\u0435\u0441\u0438\u0442\u044c \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u043c\u043d\u043e\u0433\u043e. \u041e\u0431\u044b\u0447\u043d\u043e \u0433\u0434\u0435-\u0442\u043e \u043c\u0435\u0436\u0434\u0443 1 \u0438 8 \u0433\u0431, \u0438 \u0442\u0430\u043a \u043a\u0430\u043a \u043d\u0430 \u043e\u0434\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432\u044b \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043d\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435\u0441\u044c, \u0441\u043e\u0432\u0435\u0442\u0443\u044e \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435."),(0,a.kt)("li",{parentName:"ol"},"\u0410\u0434\u0435\u043a\u0432\u0430\u0442\u043d\u043e \u0432\u0441\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430\u0445 \u0441 \u0447\u0438\u043f\u0430\u043c\u0438 Nvidia, \u043d\u0430 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0430\u0445 \u043e\u0442 AMD \u0442\u043e\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c, \u043d\u043e \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0440\u0430\u0439\u043d\u0435 \u0445\u0435\u0440\u043e\u0432\u043e \u0438 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u044f \u044d\u0442\u043e \u043d\u0435 \u0431\u0443\u0434\u0443.")),(0,a.kt)("h2",{id:"start"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0441\u0435\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b WebUi"),(0,a.kt)("p",null,"\u0422\u0443\u0442 \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0432\u0435 \u0432\u0435\u0449\u0438 - Python \u0438 Git"),(0,a.kt)("p",null,"\u041d\u0430\u0447\u043d\u0435\u043c \u0441 \u043f\u0438\u0442\u043e\u043d\u0430. \u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/release/python-3109/"},"\u0441\u044e\u0434\u0430"),", \u0441\u043a\u0440\u043e\u043b\u043b\u0438\u043c \u0434\u043e \u043f\u0443\u043d\u043a\u0442\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"Files")," \u0438 \u043a\u0430\u0447\u0430\u0435\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0449\u0438\u043a \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.\n\u0412 \u0446\u0435\u043b\u043e\u043c \u0432\u043e\u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0442\u0440\u043e\u0433\u0430\u0435\u043c, \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 - ",(0,a.kt)("strong",{parentName:"p"},"\u043f\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435")," \u0433\u0430\u043b\u043e\u0447\u043a\u0443 \u043d\u0430\u043f\u0440\u043e\u0442\u0438\u0432 \u043f\u0443\u043d\u043a\u0442\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Python xx.xx to PATH")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/YWkGXhn.png",alt:"image"})),(0,a.kt)("p",null,"\u0421 \u0433\u0438\u0442\u043e\u043c \u0432\u0441\u0435 \u0442\u043e\u0436\u0435 \u043d\u0435 \u0441\u043b\u043e\u0436\u043d\u043e. \u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"\u043d\u0430 \u044d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442")," \u0438 \u043a\u0430\u0447\u0430\u0435\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0449\u0438\u043a \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0439 \u043e\u0441.\n\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043c\u0435\u043d\u044f\u0435\u043c, \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430 \u0432\u0441\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u043c\u0441\u044f \u0438 \u0442\u044b\u043a\u0430\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u0434\u0430\u043b\u0435\u0435"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u043a.")),(0,a.kt)("h2",{id:"install-webui"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 WebUi"),(0,a.kt)("p",null,"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u0441\u044f \u0433\u0434\u0435 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0430\u043f\u043a\u0443 \u0441 \u043d\u0435\u0439\u0440\u043e\u043d\u043a\u043e\u0439 \u0438 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0442\u0430\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd")," \u0432 \u0430\u0434\u0440\u0435\u0441\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/se6U2uL.gif",alt:"gif"})),(0,a.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0442\u0443\u0434\u0430 \u0442\u0430\u043a\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:\n",(0,a.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/hmECibL.gif",alt:"gif"})),(0,a.kt)("p",null,"\u0422\u0430\u043a \u043a\u0430\u043a WebUi \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u0431\u0435\u0437 \u043c\u043e\u0434\u0435\u043b\u0438 - \u043a\u0430\u0447\u0430\u0435\u043c \u043a\u0430\u043a\u0443\u044e-\u043d\u0438\u0431\u0443\u0434\u044c \u0438 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u043c \u0432 \u043f\u0430\u043f\u043a\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"stable-diffusion-webui\\models\\Stable-diffusion"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Wvj5Kj3.gif",alt:"gif"})),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c, \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"webui-user.bat")," \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"stable-diffusion-webui"),", \u0438 \u0436\u0434\u0435\u043c \u043f\u043e\u043a\u0430 \u0441\u043a\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 (\u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043d\u044f\u0442\u044c \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u043c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0442\u0430\u043a \u043a\u0430\u043a \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432\u0435\u0441\u044f\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0433\u0438\u0433\u0430\u0431\u0430\u0439\u0442)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/jhBcPzH.gif",alt:"gif"})),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 - \u043f\u043e \u043d\u0435\u043c\u0443 \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c\n\u0412 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c, \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 webui \u0432\u0441\u0435 \u0442\u0430\u043a\u0436\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"webui-user.bat"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/UgS5j2q.gif",alt:"gif"})),(0,a.kt)("h2",{id:"commandline_args"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"),(0,a.kt)("p",null,"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438/\u0444\u0443\u043d\u043a\u0446\u0438.\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043c\u043e\u0436\u043d\u043e \u0434\u0432\u0443\u043c\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0412\u043f\u0438\u0441\u0430\u0442\u044c \u0438\u0445 \u043f\u043e\u0441\u043b\u0435  ",(0,a.kt)("inlineCode",{parentName:"p"},"COMMANDLINE_ARGS")," \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"webui-user.bat")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/owe9g2S.png",alt:"image"})," ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"stable-diffusion-webui")," \u0438 \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u043d\u0435\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"webui.bat {\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b}")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/B0yY31S.png",alt:"image"})))),(0,a.kt)("h3",{id:"recomended_args"},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b"),(0,a.kt)("p",null,"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043b\u0438\u0447\u043d\u043e \u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e. \u0418\u0445 \u043f\u0440\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u043e \u043b\u0438\u0448\u043d\u0438\u043c\u0438 \u043e\u043d\u0438 \u0442\u043e\u0447\u043d\u043e \u043d\u0435 \u0431\u0443\u0434\u0443\u0442."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--xformers")," - \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--no-half-vae")," - \u0444\u0438\u043a\u0441\u0438\u0442 \u0447\u0435\u0440\u043d\u044b\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b \u0432\u043c\u0435\u0441\u0442\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--listen")," - \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c WebUi \u0441 \u043b\u044e\u0431\u043e\u0433\u043e \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0432 \u044d\u0442\u043e\u0439 \u0436\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),(0,a.kt)("div",null,"\u041b\u0438\u0447\u043d\u043e \u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b \u044d\u0442\u043e \u0442\u0430\u043a: \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u043b webui \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435, \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b \u0447\u0435\u0440\u0435\u0437 \u043d\u043e\u0443\u0442\u0431\u0443\u043a \u0441\u0438\u0434\u044f \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u043c\u043d\u0430\u0442\u0435. \u0422\u0430\u043a\u0436\u0435 \u0435\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435, \u0438\u043b\u0438 \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0435\u043c\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 \u0441 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043e\u043c \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0437\u0430\u043f\u0443\u0449\u0435\u043d webui.",(0,a.kt)("p",{parentName:"li"},"  \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431 \u043e\u0442\u043a\u0440\u044b\u0442\u044c webui \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u043d\u0443\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://{\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 ip \u0445\u043e\u0441\u0442\u0430}:{\u043f\u043e\u0440\u0442}/")," \u0442\u0430\u043a\u0436\u0435, \u0432\u043c\u0435\u0441\u0442\u043e ip \u0430\u0434\u0440\u0435\u0441\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u044f \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430.\n\u0423\u0437\u043d\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 ip \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"ipconfig")," \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435."),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZYt0H4l.png",alt:"image"})),(0,a.kt)("p",{parentName:"li"},"  \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435, \u0430\u0434\u0440\u0435\u0441 webui \u0431\u0443\u0434\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://192.168.1.101:{\u043f\u043e\u0440\u0442}/")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/En2JWv5.jpeg",alt:"image"}))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--medvram")," - \u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0435\u043e\u043f\u0430\u043c\u044f\u0442\u0438. \u041d\u0435\u043c\u043d\u043e\u0433\u043e \u0437\u0430\u043c\u0435\u0434\u043b\u044f\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e, \u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 VRAM."))),(0,a.kt)("h3",{id:"other_args"},"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--share")," - \u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 WebUi \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441 \u043b\u044e\u0431\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u043c\u0438\u0440\u0430. \u041e\u0431\u044b\u0447\u043d\u043e, \u0442\u0430\u043a\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 72 \u0447\u0430\u0441\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--port")," - \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043f\u043e\u0440\u0442. \u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u043e\u0440\u0442\u043e\u0432 \u043c\u0435\u043d\u044c\u0448\u0435 1024 \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c WebUi \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--lowvram")," - \u0443\u0441\u0438\u043b\u0435\u043d\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"--medvram"),". \u041d\u0430\u043c\u043d\u043e\u0433\u043e \u0441\u0438\u043b\u044c\u043d\u0435\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u044f\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e, \u043d\u043e \u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442 \u043d\u0430\u043c\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u0448\u0435 \u0432\u0438\u0434\u0435\u043e\u043f\u0430\u043c\u044f\u0442\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--gradio-auth \u041b\u043e\u0433\u0438\u043d:\u041f\u0430\u0440\u043e\u043b\u044c")," - \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 webui, \u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"--share"))))}c.isMDXComponent=!0}}]);