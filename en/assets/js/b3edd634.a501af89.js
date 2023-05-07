"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,c=m["".concat(l,".").concat(g)]||m[g]||d[g]||r;return n?i.createElement(c,o(o({ref:t},u),{},{components:n})):i.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={title:"img2img",description:"Generating pictures based on other pictures",hide_table_of_contents:!1,sidebar_position:3},o=void 0,s={unversionedId:"usage/img2img",id:"usage/img2img",title:"img2img",description:"Generating pictures based on other pictures",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/usage/img2img.md",sourceDirName:"usage",slug:"/usage/img2img",permalink:"/en/docs/usage/img2img",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"img2img",description:"Generating pictures based on other pictures",hide_table_of_contents:!1,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"txt2img",permalink:"/en/docs/usage/txt2img"},next:{title:"Extras",permalink:"/en/docs/usage/extras"}},l={},p=[{value:"img2img settings",id:"img2img-settings",level:2},{value:"Resize mode",id:"resize-mode",level:3},{value:"Denoising strength",id:"denoising-strength",level:3},{value:"Inpaint",id:"inpaint",level:2},{value:"Inpaint settings",id:"inpaint-settings",level:2},{value:"Mask blur",id:"mask-blur",level:3},{value:"Mask mode",id:"mask-mode",level:3},{value:"Masked content",id:"masked-content",level:3},{value:"Inpaint area",id:"inpaint-area",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Allows you to use the image as an example for generation, regenerate an already generated image completely / in parts."),(0,a.kt)("p",null,"The interface is similar to txt2img, so I will only explain what is different."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(7959).Z,width:"1920",height:"1018"})),(0,a.kt)("h2",{id:"img2img-settings"},"img2img settings"),(0,a.kt)("h3",{id:"resize-mode"},"Resize mode"),(0,a.kt)("p",null,"A way to change the size/ratio of the picture if it doesn't match the settings."),(0,a.kt)("h3",{id:"denoising-strength"},"Denoising strength"),(0,a.kt)("p",null,"Determines how little respect the algorithm should have for image's content. At ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", nothing will change, and at ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," you'll get an unrelated image. With values below ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),", processing will take less steps than the Sampling Steps slider specifies."),(0,a.kt)("p",null,"It's simple:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Write Prompts."),(0,a.kt)("li",{parentName:"ol"},"Load a picture"),(0,a.kt)("li",{parentName:"ol"},"Adapt the generation sizes to the original image"),(0,a.kt)("li",{parentName:"ol"},"Adjust the denoising strength"),(0,a.kt)("li",{parentName:"ol"},"Generate")),(0,a.kt)("h2",{id:"inpaint"},"Inpaint"),(0,a.kt)("p",null,"Very important and useful tab. Allows you to regenerate only part of the image.\nSo you can fix problems like broken arms or add missing details."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gif",src:n(736).Z,width:"1897",height:"677"})),(0,a.kt)("p",null,"Again, I'll only describe what is different."),(0,a.kt)("h2",{id:"inpaint-settings"},"Inpaint settings"),(0,a.kt)("p",null,"There are not too many differences from img2img."),(0,a.kt)("h3",{id:"mask-blur"},"Mask blur"),(0,a.kt)("p",null,"How much the edges of the mask we're going to draw will be blurred. I usually use ",(0,a.kt)("inlineCode",{parentName:"p"},"7"),", so you can't see the edges of the inpainted area."),(0,a.kt)("h3",{id:"mask-mode"},"Mask mode"),(0,a.kt)("p",null,"Toggles what you want to inpaint: what is masked or what is ",(0,a.kt)("strong",{parentName:"p"},"not")," masked."),(0,a.kt)("h3",{id:"masked-content"},"Masked content"),(0,a.kt)("p",null,"What the SD will see on the masked area.= I suggest you look at the official example:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(7727).Z,width:"985",height:"244"})),(0,a.kt)("h3",{id:"inpaint-area"},"Inpaint area"),(0,a.kt)("p",null,"When generating, it uses only the masked area and specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"Only masked padding, pixels")," amount of pixels around it."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"speeds up generation"),(0,a.kt)("li",{parentName:"ul"},"doesn't change the original size of the picture even if other sizes are specified in the settings")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you use ",(0,a.kt)("inlineCode",{parentName:"p"},"Inpaint area: Only masked"),", not the whole picture is used, but only part of it, so you may have trouble writing a prompt.")))}d.isMDXComponent=!0},7959:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/3kAm18L-6f1359c9ddb020e4d072f20db5b9ed36.png"},7727:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/M7cz0kc-c94ea0d21a3c7ed34fb6b985cb009e02.png"},736:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/QhwAXWx-cdbcc0bc7ec7fb1b995adc38e47228a8.gif"}}]);