"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[147],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>g});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(i),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return i?n.createElement(g,l(l({ref:t},u),{},{components:i})):n.createElement(g,l({ref:t},u))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var o=2;o<r;o++)l[o]=i[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},2870:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=i(7462),a=(i(7294),i(3905));const r={title:"txt2img",description:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c\u0443 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e",hide_table_of_contents:!1,sidebar_position:2},l=void 0,p={unversionedId:"usage/txt2img",id:"usage/txt2img",title:"txt2img",description:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c\u0443 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e",source:"@site/docs/usage/txt2img.md",sourceDirName:"usage",slug:"/usage/txt2img",permalink:"/en/docs/usage/txt2img",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"txt2img",description:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c\u0443 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e",hide_table_of_contents:!1,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u0412\u0430\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c",permalink:"/en/docs/usage/important"},next:{title:"img2img",permalink:"/en/docs/usage/img2img"}},s={},o=[{value:"\u041f\u0440\u043e\u043c\u043f\u0442\u044b",id:"prompts",level:2},{value:"\u041d\u0435\u0433\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u043f\u0442",id:"negative_prompt",level:3},{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",id:"main_settings",level:2},{value:"Sampling method",id:"sampling-method",level:3},{value:"Sampling steps",id:"sampling-steps",level:3},{value:"Width/Heigh",id:"widthheigh",level:3},{value:"Batch count/Batch size",id:"batch-countbatch-size",level:3},{value:"CFG Scale",id:"cfg-scale",level:3},{value:"Seed",id:"seed",level:3},{value:"Restore faces",id:"restore-faces",level:3},{value:"Tiling",id:"tiling",level:3},{value:"Hires. fix",id:"hires-fix",level:3},{value:"Upscaler",id:"hiresfix-upscaler",level:4},{value:"Upscale by/Resize width/height to",id:"hiresfix-upscalebywh",level:4},{value:"Hires steps",id:"hiresfix-steps",level:4},{value:"Denoising strength",id:"hiresfix-denoising",level:4}],u={toc:o},m="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u042d\u0442\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c. \u0418 \u0442\u0430\u043a, \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u0440\u043e\u0431\u0435\u0436\u0438\u043c\u0441\u044f \u043f\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 \u0434\u0430\u043d\u043d\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0438:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/UzLRybm.png",alt:"image"})),(0,a.kt)("h2",{id:"prompts"},"\u041f\u0440\u043e\u043c\u043f\u0442\u044b"),(0,a.kt)("p",null,"\u041f\u0440\u043e\u043c\u043f\u0442\u044b \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u0430\u043d\u0438\u043c\u0435\u0448\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043e\u0431\u044b\u0447\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0438\u0437 \u0442\u0435\u0433\u043e\u0432 \u0441 ",(0,a.kt)("a",{parentName:"p",href:"https://danbooru.donmai.us"},"danbooru"),", \u0442\u0430\u043a \u0447\u0442\u043e \u043f\u0440\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u043c\u043f\u0442\u043e\u0432 \u0434\u043b\u044f \u043d\u0438\u0445 \u0441\u0442\u043e\u0438\u0442 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u0435\u0433\u0438 \u0437\u0434\u0435\u0441\u044c."),(0,a.kt)("p",null,"\u0412 WebUi \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0442\u0435\u0433\u0430 \u0432 \u043f\u0440\u043e\u043c\u043f\u0442\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0443 \u0432\u0430\u0441 \u0432 \u043f\u0440\u043e\u043c\u043f\u0442\u0435 \u0435\u0441\u0442\u044c \u0442\u0435\u0433 ",(0,a.kt)("inlineCode",{parentName:"p"},"fox ears")," \u043d\u043e \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 \u043d\u0435\u0442 \u0443\u0448\u0435\u0439. \u0418\u043b\u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u044d\u0444\u0444\u0438\u043a\u0442 \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0442\u0435\u0433\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u0438\u043b\u044c\u043d\u044b\u0439. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u0445\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0432\u044b\u0448\u0430\u0442\u044c/\u043f\u043e\u043d\u0438\u0436\u0430\u0442\u044c \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e \u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442\u044c \u0432 \u043f\u0440\u043e\u043c\u043f\u0442\u0435. \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u044d\u0442\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a: ",(0,a.kt)("inlineCode",{parentName:"p"},"(\u0442\u0435\u0433:1.1) (\u0442\u0435\u0433:0.9)"),". \u0412 \u043f\u0435\u0440\u0432\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u0435\u0433\u0430 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0430, \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u043f\u043e\u043d\u0438\u0436\u0435\u043d\u0430. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u043f\u0438\u0441\u0430\u0442\u044c \u044d\u0442\u043e \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438\u043b\u0438 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0443\u0436\u043d\u044b\u0439 \u0442\u0435\u0433 \u0438 \u0437\u0430\u0436\u0430\u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl")," \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435 \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u0441\u0442\u0440\u0435\u043b\u043e\u0447\u043a\u0438 \u0432\u0432\u0435\u0440\u0445/\u0432\u043d\u0438\u0437."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/rkBTn3u.gif",alt:"gif"})),(0,a.kt)("h3",{id:"negative_prompt"},"\u041d\u0435\u0433\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u043f\u0442"),(0,a.kt)("p",null,"\u041e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u0430\u044f \u0448\u0442\u0443\u043a\u0430, \u0431\u0435\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u044b\u0439 \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u043c\u043d\u043e\u0433\u043e \u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u043e\u0432 \u0438 \u0442.\u043f. \u041f\u043e \u0441\u0443\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0432\u044b \u041d\u0415 \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u0442\u044c \u0432 \u0430\u0440\u0442\u0435. \u0417\u0434\u0435\u0441\u044c \u0435\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c, \u044f \u043f\u043e\u043a\u0430\u0436\u0443 \u0442\u043e \u0447\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u0441\u0430\u043c:"),(0,a.kt)("p",null,"\u041e\u0431\u044b\u0447\u043d\u043e, \u044f \u043f\u0440\u043e\u0441\u0442\u043e \u0431\u0435\u0440\u0443 \u044d\u0442\u043e\u0442 \u043d\u0435\u0433\u0430\u0442\u0438\u0432 \u0437\u0430 \u043e\u0441\u043d\u043e\u0432\u0443 \u0438 \u043f\u043e \u043d\u0430\u0434\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u044f\u044e \u0435\u0433\u043e \u0442\u0435\u043c \u0447\u0442\u043e \u043c\u043d\u0435 \u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u043d\u0430 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, futa, futanari, yaoi,huge_breasts, large_breasts , broken fingers\n")),(0,a.kt)("p",null,'\u041c\u043d\u043e\u0433\u0438\u043c \u0442\u0430\u043a\u0436\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0447\u0435\u043d\u044c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 "\u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439" \u043d\u0435\u0433\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u043f\u0442, \u043d\u043e \u043b\u0438\u0447\u043d\u043e \u044f \u043d\u0435 \u0441\u043e\u0432\u0435\u0442\u0443\u044e \u0442\u0430\u043a \u0434\u0435\u043b\u0430\u0442\u044c.'),(0,a.kt)("h2",{id:"main_settings"},"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"txt2img"),". \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0434 \u043f\u0440\u043e\u043c\u043f\u0442\u0430\u043c\u0438."),(0,a.kt)("h3",{id:"sampling-method"},"Sampling method"),(0,a.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0448\u0443\u043c\u0430 \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043c\u0435\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439 \u043f\u043e\u0441\u043b\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438 \u043d\u0435 \u043f\u0440\u0438\u043d\u043e\u0441\u044f\u0442 \u0432\u0438\u0434\u0438\u043c\u043e\u0433\u043e \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438."),(0,a.kt)("p",null,"\u041e\u0447\u0435\u043d\u044c \u0441\u0443\u0431\u044c\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0448\u0442\u0443\u043a\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u043e\u0442 \u0441\u0435\u043c\u043f\u043b\u0435\u0440 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0430\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0435, \u043d\u043e \u043f\u043e\u043c\u043d\u0438\u0442\u0435 \u0447\u0442\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0438\u0437 \u043d\u0438\u0445 \u043d\u0443\u0436\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0430\u0434\u0435\u043a\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0447\u0435\u043c \u0434\u0440\u0443\u0433\u0438\u043c. "),(0,a.kt)("p",null,"\u041b\u0438\u0447\u043d\u043e \u044f \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"DDIM")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"DPM++ SDE Karras"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u0412\u043d\u0435\u0448\u043d\u0435, \u043c\u0435\u0436\u0434\u0443 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0438\u0437 \u0441\u0435\u043c\u043f\u043b\u0435\u0440\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0431\u044b\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043d\u043e\u0439 \u0440\u0430\u0437\u043d\u0438\u0446\u044b. \u0412 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u0432 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0442\u0441\u0432\u0435 \u0448\u0430\u0433\u043e\u0432.  \u0427\u0435\u043c \u043c\u0435\u043d\u044c\u0448\u0435 \u043d\u0443\u0436\u043d\u043e \u0448\u0430\u0433\u043e\u0432 - \u0442\u0435\u043c \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0431\u044b\u0441\u0442\u0440\u0435\u0435.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u0441\u0435\u0435\u043c\u043f\u043b\u0435\u0440\u043e\u0432"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/dM98n2Z.jpeg",alt:"image"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/L6ZVq3l.jpeg",alt:"image"})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432"),"Prompt:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"best quality, 1girl, small breasts, japanese armor, red hair, long hair, \nred eyes, fox ears, animal_ear_fluff, holding weapon, bow \\(weapon\\),holding bow \\(weapon\\),\n")),(0,a.kt)("p",null,"Negative prompt: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, futa, futanari, yaoi,huge_breasts, large_breasts , (demon horns:1.1), blood, ribs, rebs, realistic face, broken fingers, earrings, hair ornament, loli, bad hands, bad fingers, thick thighs, pubic hair\n")),(0,a.kt)("p",null,"Settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Steps: 70, CFG scale: 11, Size: 512x920, Model hash: 0873291ac5\nModel: AbyssOrangeMix2_nsfw, Clip skip: 2, ENSD: 31337,\n"))))),(0,a.kt)("h3",{id:"sampling-steps"},"Sampling steps"),(0,a.kt)("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0442\u0441\u0432\u043e \u0448\u0430\u0433\u043e\u0432/\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439 \u0432 \u0445\u043e\u0434\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443. \u041e\u0442 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f, \u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c. \u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0441\u0435\u043c\u043f\u043b\u0435\u0440\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438, \u043d\u043e \u043e\u0431\u044b\u0447\u043d\u043e (\u043f\u043e \u043a\u0440\u0430\u0439\u043d\u0435\u0439  \u043c\u0435\u0440\u0435 \u0434\u043b\u044f \u0442\u0435\u0445 \u0434\u0432\u0443\u0445 \u0447\u0442\u043e \u044f \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u043b \u0432\u044b\u0448\u0435) \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0430\u0433\u043e\u0432 \u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0439\u043e\u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"20-30"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ITpi1fJ.jpeg",alt:"image"})),(0,a.kt)("h3",{id:"widthheigh"},"Width/Heigh"),(0,a.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0448\u0438\u0440\u0438\u043d\u0430 \u0438 \u0432\u044b\u0441\u043e\u0442\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438.\n\u041d\u0435 \u0441\u043e\u0432\u0435\u0442\u0443\u044e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0431\u043e\u043b\u0448\u0438\u0445 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f\u0445, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043b\u043e\u043c\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u0438 \u0432 \u0438\u0442\u043e\u0433\u0435 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043a\u0430\u0448\u0443 \u0438\u0437 \u043f\u043e\u043b\u043e\u043c\u0430\u043d\u044b\u0445 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0442.\u043f."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/u4UCAjv.jpeg",alt:"image"})),(0,a.kt)("h3",{id:"batch-countbatch-size"},"Batch count/Batch size"),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u043f\u0440\u043e\u0441\u0442\u043e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Batch size")," - \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0445\u0441\u044f ",(0,a.kt)("strong",{parentName:"li"},"\u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Batch count")," - \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a/\u0431\u0430\u0442\u0447\u0435\u0439 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0445\u0441\u044f ",(0,a.kt)("strong",{parentName:"li"},"\u043f\u043e \u043e\u0447\u0435\u0440\u0435\u0434\u0438"),". \u0422.\u0435. \u043f\u043e\u0441\u043b\u0435 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043a\u043d\u043e\u043f\u043a\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437. ")),(0,a.kt)("h3",{id:"cfg-scale"},"CFG Scale"),(0,a.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0442\u043e, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0441\u043b\u0443\u0448\u0438\u0432\u0430\u0442\u0441\u044f \u043a \u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043f\u0440\u043e\u043c\u043f\u0442\u0443. \u041e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0440\u0430\u0439\u043e\u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"7-15"),", \u043e\u0434\u043d\u0430\u043a\u043e \u0438\u043d\u043d\u043e\u0433\u0434\u0430 \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043d\u0438\u0437\u043a\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0445 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0430\u0440\u0442\u044b \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0435\u0435 \u0447\u0435\u043c \u043d\u0430 \u0432\u044b\u0441\u043e\u043a\u0438\u0445. "),(0,a.kt)("p",null,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0440\u0442\u044f\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443, \u043d\u0435 \u0441\u043e\u0432\u0435\u0442\u0443\u044e \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/IAtLwsl.jpeg",alt:"image"})),(0,a.kt)("h3",{id:"seed"},"Seed"),(0,a.kt)("p",null,"\u0412 \u043c\u0430\u0439\u043a\u0440\u0430\u0444\u0442 \u0438\u0433\u0440\u0430\u043b\u0438? \u041d\u0443 \u0432\u043e\u0442 \u0442\u0443\u0442 \u0441\u0438\u0434 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u043a\u0430\u043a \u0438 \u0432 \u043c\u0430\u0439\u043d\u043a\u0440\u0430\u0444\u0442\u0435. \u041a\u043b\u044e\u0447 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0430\u0442\u043a\u0443\u044e \u0436\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u0445\u043e\u0436\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443. \u0415\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 - \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0442\u043e\u0436\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u044b\u043c\u0438."),(0,a.kt)("h3",{id:"restore-faces"},"Restore faces"),(0,a.kt)("p",null,"\u0411\u0435\u0441\u043f\u043e\u043b\u0435\u0437\u0435\u043d \u043f\u0440\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0430\u043d\u0438\u043c\u0435\u0448\u043d\u044b\u0445 \u0430\u0440\u0442\u043e\u0432. \u041f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043f\u043e\u0447\u0438\u043d\u0438\u0442\u044c \u043b\u0438\u0446\u0430 \u0432\u043e\u0432\u0440\u0435\u043c\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0432 \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u044f\u0445."),(0,a.kt)("h3",{id:"tiling"},"Tiling"),(0,a.kt)("p",null,"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e \u043e\u0431\u044c\u0435\u0434\u0435\u043d\u044f\u0442\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u0430\u043a \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b. (\u0437\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0441\u043f\u0430\u0441\u0438\u0431\u043e ",(0,a.kt)("a",{parentName:"p",href:"https://antlers-anon.fanbox.cc/posts/5250143"},"@Antlers_Anon"),")"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ezxgarP.gif",alt:"gif"})),(0,a.kt)("h3",{id:"hires-fix"},"Hires. fix"),(0,a.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0432 \u0430\u0434\u0435\u043a\u0432\u0430\u0442\u043d\u043e\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0438 \u0431\u0435\u0437 \u0438\u0441\u043a\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438.\n\u041f\u043e \u0441\u0443\u0442\u0438 \u0430\u043f\u0441\u043a\u0435\u0439\u043b\u0438\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0434\u0435\u043b\u0430\u0435\u0442 img2img.\n\u041f\u0440\u043e\u0439\u0434\u0435\u043c\u0441\u044f \u043f\u043e \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c:"),(0,a.kt)("h4",{id:"hiresfix-upscaler"},"Upscaler"),(0,a.kt)("p",null,"\u0410\u043f\u0441\u043a\u0435\u0439\u043b\u0435\u0440 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0430\u043f\u0441\u043a\u0435\u0439\u043b \u043f\u0435\u0440\u0435\u0434 img2img. \u041d\u0435 \u043f\u0440\u0435\u043d\u0446\u0438\u043f\u0438\u0430\u043b\u044c\u043d\u043e \u0432\u0430\u0436\u0435\u043d, \u043d\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0438\u0433\u0440\u0430\u0442\u044c\u0441\u044f \u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u043e\u0442 \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0443 \u0432\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0445\u043e\u0434\u0438\u0442\u044c \u043b\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."),(0,a.kt)("h4",{id:"hiresfix-upscalebywh"},"Upscale by/Resize width/height to"),(0,a.kt)("p",null,"\u0414\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f  ",(0,a.kt)("inlineCode",{parentName:"p"},"Upscale by")," \u0432\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0435 ",(0,a.kt)("strong",{parentName:"p"},"\u0432 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437")," \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u043a\u0430\u043d\u0438\u044e \u0441\u0442\u043e\u0438\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),".\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0436\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"Resize width to")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"Resize height to")," \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u0432\u044b\u0441\u043e\u0442\u0443 \u0438 \u0448\u0438\u0440\u0438\u043d\u0443 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e."),(0,a.kt)("h4",{id:"hiresfix-steps"},"Hires steps"),(0,a.kt)("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0430\u0433\u043e\u0432 \u043f\u0440\u0438 img2img hires fix","`","a, \u043a\u043e\u0433\u0434\u0430 \u0441\u0442\u043e\u0438\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u043e\u043d\u043e \u0440\u0430\u0432\u043d\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0448\u0430\u0433\u043e\u0432 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 txt2img."),(0,a.kt)("h4",{id:"hiresfix-denoising"},"Denoising strength"),(0,a.kt)("p",null,"\u0420\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u0442 \u0442\u043e, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u043d\u0435\u0439\u0440\u043e\u043d\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u0435\u0434\u0438\u0434\u0443\u0449\u0443\u044e \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e, \u0430 \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u043d\u0430 \u043f\u0440\u043e\u043c\u043f\u0442. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," - \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u0434\u0430\u0441\u0442 \u0441\u0442\u0430\u0440\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," - \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443")),(0,a.kt)("p",null,"\u041b\u0438\u0447\u043d\u043e \u044f \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e \u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u0435\u043d\u043e\u0438\u0437 \u0432 \u0440\u0430\u0439\u043e\u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"0.5-0.6"),"."))}c.isMDXComponent=!0}}]);