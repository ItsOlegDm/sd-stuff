"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),b=o,d=u["".concat(p,".").concat(b)]||u[b]||m[b]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u0417\u0430\u043f\u0443\u0441\u043a Colab",description:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a webui \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 Google Colab.",hide_table_of_contents:!1,sidebar_position:1},l=void 0,i={unversionedId:"installation/colab",id:"installation/colab",title:"\u0417\u0430\u043f\u0443\u0441\u043a Colab",description:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a webui \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 Google Colab.",source:"@site/docs/installation/colab.md",sourceDirName:"installation",slug:"/installation/colab",permalink:"/en/docs/installation/colab",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u0417\u0430\u043f\u0443\u0441\u043a Colab",description:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a webui \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 Google Colab.",hide_table_of_contents:!1,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 WebUi",permalink:"/en/docs/installation/index"},next:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0430 \u0441\u0432\u043e\u0439 \u043f\u043a",permalink:"/en/docs/installation/local"}},p={},c=[{value:"\u0418\u043c\u043f\u043e\u0440\u0442 \u043f\u0430\u043f\u043a\u0438 \u0441 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438",id:"import_models",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0421olab`a",id:"run_colab",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Google Colaboratory \u2014 \u044d\u0442\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0447\u043d\u0430\u044f \u0441\u0440\u0435\u0434\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043a\u043e\u0434\u043e\u043c \u043e\u0442 Google. \u0421\u0435\u0440\u0432\u0438\u0441 \u043d\u0443\u0436\u0435\u043d, \u0447\u0442\u043e\u0431\u044b \u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0434 \u0432 jupyter notebook. \u041e\u043d \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0443\u0435\u0442 \u043f\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0443 \u043e\u0431\u043b\u0430\u043a\u0430, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430\u0434 \u043e\u0434\u043d\u0438\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c \u0446\u0435\u043b\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439")),(0,o.kt)("p",null,"\u0412 \u043d\u0430\u0448\u0435\u043c \u0436\u0435 \u0441\u043b\u0443\u0447\u0430\u0435, \u044d\u0442\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 GPU \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 WebUi, \u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0430\u0440\u0442\u043e\u0432."),(0,o.kt)("h2",{id:"import_models"},"\u0418\u043c\u043f\u043e\u0440\u0442 \u043f\u0430\u043f\u043a\u0438 \u0441 \u043c\u043e\u0434\u0435\u043b\u044f\u043c\u0438"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431 \u0447\u0442\u043e-\u0442\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u0445\u043e\u0442\u044f-\u0431\u044b \u043e\u0434\u043d\u0430 \u043c\u043e\u0434\u0435\u043b\u044c. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0430\u043c\u0438 \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0444\u0430\u0439\u043b \u0441 \u043d\u0435\u0439 (.ckpt \u0438\u043b\u0438 .safetensors), \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 \u0441\u0432\u043e\u0439 \u0434\u0438\u0441\u043a. \u0418\u043b\u0438 \u0436\u0435, \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0443 \u0441\u0435\u0431\u044f \u044f\u0440\u043b\u044b\u043a \u043d\u0430 \u043c\u043e\u044e \u043f\u0430\u043f\u043a\u0443, \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0432 \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0431\u0435\u0437 \u043f\u043e\u0441\u0442\u0435\u0440\u0438 \u043c\u0435\u0441\u0442\u0430 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0435 \u043c\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438, \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442\u0435 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0448\u0430\u0433\u0443. "),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u043f\u043e  ",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1FC8ZM9_wQMjw-Stb14EPoeshuH7DwxrL?usp=share_link"},"\u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435"),".\n\u0416\u043c\u0435\u043c \u043d\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438, \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0435\u0435 \u044f\u0440\u043b\u044b\u043a \u043d\u0430 \u0441\u0432\u043e\u0439 \u0433\u0443\u0433\u043b \u0434\u0438\u0441\u043a."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/YKQCnfR.png",alt:"image"})),(0,o.kt)("h2",{id:"run_colab"},"\u0417\u0430\u043f\u0443\u0441\u043a \u0421olab`a"),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u043d\u0430 ",(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast_stable_diffusion_AUTOMATIC1111.ipynb"},"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 colab`a"),"\n\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043f\u0435\u0440\u0432\u0443\u044e \u044f\u0447\u0435\u0439\u043a\u0443"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/XaZRc2P.png",alt:"image"})),(0,o.kt)("p",null,"C\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u043c\u0441\u044f \u0441 \u0442\u0435\u043c \u0447\u0442\u043e \u0433\u0443\u0433\u043b \u043d\u0435 \u0437\u043d\u0430\u0435\u0442 \u044d\u0442\u043e\u0442 \u043a\u043e\u043b\u0430\u0431, \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0441\u0432\u043e\u0439 \u0433\u0443\u0433\u043b \u0434\u0438\u0441\u043a."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/7y6slFu.png",alt:"image"})),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043e\u0431\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u044f\u0447\u0435\u0439\u043a\u0438. \u041e\u0434\u043d\u0430 \u0438\u0437 \u043d\u0438\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 WebUi, \u0430 \u0432\u0442\u043e\u0440\u0430\u044f - \u0432\u0441\u0435, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0435\u0433\u043e \u0440\u0430\u0431\u043e\u0442\u044b."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/layd8Nv.png",alt:"image"})),(0,o.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043b\u0430\u0431\u0443 \u0433\u0434\u0435 \u043b\u0435\u0436\u0430\u0442 \u043c\u043e\u0434\u0435\u043b\u0438. \u0421\u043f\u0440\u0430\u0432\u0430 \u0435\u0441\u0442\u044c \u0438\u043a\u043e\u043d\u043a\u0430 \u043f\u0430\u043f\u043a\u0438, \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u043c \u043d\u0430 \u043d\u0435\u0435, \u0438\u0434\u0435\u043c \u043f\u043e \u043f\u0443\u0442\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"gdrive > MyDrive")," \u0438 \u043a\u043e\u043f\u0438\u0440\u0443\u0435\u043c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0440\u0430\u043d\u0435\u0435 \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0439 \u044f\u0440\u043b\u044b\u043a / \u043f\u0430\u043f\u043a\u0443 \u043a\u0443\u0434\u0430 \u0432\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u043b\u0438 \u043c\u043e\u0434\u0435\u043b\u044c(\u0438) "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/cm00Osa.png",alt:"image"})),(0,o.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u044d\u0442\u043e\u0442 \u043f\u0443\u0442\u044c \u0432 \u043f\u043e\u043b\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"Path_to_MODEL")," \u044f\u0447\u0435\u0439\u043a\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"Model Download/Load"),", \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u0435\u0435"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/gxe8Kb3.png",alt:"image"})),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u044f\u0447\u0435\u0439\u043a\u0443, \u0438 \u0436\u0434\u0435\u043c \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0441\u044b\u043b\u043a\u0438 - \u043f\u0435\u0440\u0435\u0439\u0434\u044f \u043f\u043e \u043d\u0435\u0439, \u0432\u044b \u043e\u0442\u043a\u0440\u043e\u0438\u0442\u0435 WebUi"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/BJBTBYe.png",alt:"image"})))}m.isMDXComponent=!0}}]);