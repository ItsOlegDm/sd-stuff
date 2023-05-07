"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[361],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>c});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(i),d=a,c=h["".concat(l,".").concat(d)]||h[d]||m[d]||s;return i?n.createElement(c,r(r({ref:t},u),{},{components:i})):n.createElement(c,r({ref:t},u))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<s;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6270:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=i(7462),a=(i(7294),i(3905));const s={title:"txt2img",description:"Generating pictures from text description",hide_table_of_contents:!1,sidebar_position:2},r=void 0,o={unversionedId:"usage/txt2img",id:"usage/txt2img",title:"txt2img",description:"Generating pictures from text description",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/usage/txt2img.md",sourceDirName:"usage",slug:"/usage/txt2img",permalink:"/en/docs/usage/txt2img",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"txt2img",description:"Generating pictures from text description",hide_table_of_contents:!1,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Good to know before starting.",permalink:"/en/docs/usage/important"},next:{title:"img2img",permalink:"/en/docs/usage/img2img"}},l={},p=[{value:"Prompts",id:"prompts",level:2},{value:"Parentheses",id:"parentheses",level:3},{value:"Negative prompt",id:"negative_prompt",level:3},{value:"Generation settings",id:"main_settings",level:2},{value:"Sampling method",id:"sampling-method",level:3},{value:"Sampling steps",id:"sampling-steps",level:3},{value:"Width/Heigh",id:"widthheigh",level:3},{value:"Batch count/Batch size",id:"batch-countbatch-size",level:3},{value:"CFG Scale",id:"cfg-scale",level:3},{value:"Seed",id:"seed",level:3},{value:"Restore faces",id:"restore-faces",level:3},{value:"Tiling",id:"tiling",level:3},{value:"Hires. fix",id:"hires-fix",level:3},{value:"Upscaler",id:"hiresfix-upscaler",level:4},{value:"Upscale by/Resize width/height to",id:"hiresfix-upscalebywh",level:4},{value:"Hires steps",id:"hiresfix-steps",level:4},{value:"Denoising strength",id:"hiresfix-denoising",level:4}],u={toc:p},h="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(h,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the main function that we use. So, let's take a quick run through the interface of this tab:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(3790).Z,width:"1902",height:"1020"})),(0,a.kt)("h2",{id:"prompts"},"Prompts"),(0,a.kt)("p",null,"Prompts for most anime models usually consist of tags from ",(0,a.kt)("a",{parentName:"p",href:"https://danbooru.donmai.us"},"danbooru"),", so you should watch the tags here when writing prompts."),(0,a.kt)("h3",{id:"parentheses"},"Parentheses"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It's a way of telling the AI what you want to put emphasis on. Generally what comes first in the prompt is treated as more important but if you want more control you can use this syntax. For example if you want your image slightly influenced by Alphonse Mucha's art you can add: (by Alphonse Mucha:0.8) and if you want it more you can do (by Alphonse Mucha:1.5). Not using a number is the same as 1.21 more or less. Same applies to negatives")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Stolen from ",(0,a.kt)("a",{parentName:"em",href:"https://antlers-anon.fanbox.cc/posts/5250143"},"@Antlers Anon's guide"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gif",src:i(3281).Z,width:"775",height:"144"})),(0,a.kt)("h3",{id:"negative_prompt"},"Negative prompt"),(0,a.kt)("p",null,"A very important stuff, without which you will get a lot of artifacts, etc. Essentially a list of what you do NOT want to see in a image."),(0,a.kt)("p",null,"Usually, I just take this negative as a basis and, if needed, add to it what I do not like in the generation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, futa, futanari, yaoi,huge_breasts, large_breasts , broken fingers\n")),(0,a.kt)("p",null,'Many people also like to use a very long "universal" negative prompt, but I don\'t recommend using it'),(0,a.kt)("h2",{id:"main_settings"},"Generation settings"),(0,a.kt)("p",null,"The basic settings of ",(0,a.kt)("inlineCode",{parentName:"p"},"txt2img"),". Located just under the Prompts."),(0,a.kt)("h3",{id:"sampling-method"},"Sampling method"),(0,a.kt)("p",null,"The method of processing the input noise on which depends the minimum number of iterations after which, the following steps don't make a visible improvement of the picture."),(0,a.kt)("p",null,"This is a very subjective thing, use the sampler you like more, but remember that some of them need more iterations to get a good result than others."),(0,a.kt)("p",null,"I usually use ",(0,a.kt)("inlineCode",{parentName:"p"},"DDIM")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"DPM++ SDE Karras"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Visually, there may not be a noticeable difference between some of the samplers. In this case, the difference is in the number of steps needed.  The fewer steps are needed, the faster the generation is.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Examples of each of the samplers"),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(5320).Z,width:"3000",height:"1718"}),"\n",(0,a.kt)("img",{alt:"image",src:i(2822).Z,width:"3000",height:"1565"})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Information about generating examples"),"Prompt:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"best quality, 1girl, small breasts, japanese armor, red hair, long hair, \nred eyes, fox ears, animal_ear_fluff, holding weapon, bow \\(weapon\\),holding bow \\(weapon\\),\n")),(0,a.kt)("p",null,"Negative prompt: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, futa, futanari, yaoi,huge_breasts, large_breasts , (demon horns:1.1), blood, ribs, rebs, realistic face, broken fingers, earrings, hair ornament, loli, bad hands, bad fingers, thick thighs, pubic hair\n")),(0,a.kt)("p",null,"Settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Steps: 70, CFG scale: 11, Size: 512x920, Model hash: 0873291ac5\nModel: AbyssOrangeMix2_nsfw, Clip skip: 2, ENSD: 31337,\n"))))),(0,a.kt)("h3",{id:"sampling-steps"},"Sampling steps"),(0,a.kt)("p",null,"The number of steps/iterations during SD will process the picture. This can affect the detail, and directly affects the speed. Some samplers may need more iterations, but usually (at least for the two I mentioned earlier) the number of steps is kept around ",(0,a.kt)("inlineCode",{parentName:"p"},"20-30"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(5914).Z,width:"4000",height:"731"})),(0,a.kt)("h3",{id:"widthheigh"},"Width/Heigh"),(0,a.kt)("p",null,"Accordingly, the width and height of the generated image.\nI don't recommend generating in higher resolutions, because it will break the composition and you will end up with a mess of broken limbs, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(2106).Z,width:"1024",height:"1030"})),(0,a.kt)("h3",{id:"batch-countbatch-size"},"Batch count/Batch size"),(0,a.kt)("p",null,"It's simple:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Batch size")," - number of images generated ",(0,a.kt)("strong",{parentName:"li"}," at one time"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Batch count")," - number of pictures/batches generated ",(0,a.kt)("strong",{parentName:"li"},"in turn"),". So, after pressing the button, the generation process will be repeated a specified number of times.")),(0,a.kt)("h3",{id:"cfg-scale"},"CFG Scale"),(0,a.kt)("p",null,"Classifier Free Guidance Scale - how strongly the image should conform to prompt - lower values produce more creative results"),(0,a.kt)("p",null,"Usually values in the range ",(0,a.kt)("inlineCode",{parentName:"p"},"7-15")," are used."),(0,a.kt)("p",null,"Too high values only ruin the picture, I don't recommend using it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:i(5081).Z,width:"4000",height:"724"})),(0,a.kt)("h3",{id:"seed"},"Seed"),(0,a.kt)("p",null,"Have you ever played in Minecraft? Well, here the seed works exactly the same way as in Minecraft. Generation key using which you can get the same or similar picture. The only thing - the settings must also be identical."),(0,a.kt)("h3",{id:"restore-faces"},"Restore faces"),(0,a.kt)("p",null,"Useless when generating anime pictures. Helps to fix faces while generating in realistic styles."),(0,a.kt)("h3",{id:"tiling"},"Tiling"),(0,a.kt)("p",null,"Generates pictures that can be repeated infinitely, for example using them as textures. (thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://antlers-anon.fanbox.cc/posts/5250143"},"@Antlers_Anon")," for the picture)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gif",src:i(6523).Z,width:"1536",height:"945"})),(0,a.kt)("h3",{id:"hires-fix"},"Hires. fix"),(0,a.kt)("p",null,"Very important for generating in good resolution without distorting the composition.\nEssentially upscales the picture using one of the methods presented, and then does img2img.\nLet's run through the basic settings:"),(0,a.kt)("h4",{id:"hiresfix-upscaler"},"Upscaler"),(0,a.kt)("p",null,"The upscaler you will use to increase the resolution of the image before img2img. It is not crucial, but you can play around and choose the one that will give you the best results."),(0,a.kt)("h4",{id:"hiresfix-upscalebywh"},"Upscale by/Resize width/height to"),(0,a.kt)("p",null,"There are two ways to specify the final resolution. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Upscale by")," you just specify ",(0,a.kt)("strong",{parentName:"p"},"how many times")," to increase the picture, the default is ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),".\nUsing ",(0,a.kt)("inlineCode",{parentName:"p"},"Resize width to")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Resize height to")," you can specify the height and width you want the output to be, the default is off."),(0,a.kt)("h4",{id:"hiresfix-steps"},"Hires steps"),(0,a.kt)("p",null,"The amount of steps when img2img in hires fix, when it is ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," it equals to the amount of steps in txt2img."),(0,a.kt)("h4",{id:"hiresfix-denoising"},"Denoising strength"),(0,a.kt)("p",null,"Determines how little respect the algorithm should have for image's content. At ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", nothing will change, and at ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," you'll get an unrelated image. With values below ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),", processing will take less steps than the Sampling Steps slider specifies."),(0,a.kt)("p",null,"I would recommend using a denoise between ",(0,a.kt)("inlineCode",{parentName:"p"},"0.5 and 0.6"),"."))}m.isMDXComponent=!0},5081:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IAtLwsl-47c8df877ef7deb4f491c50813bbed66.jpeg"},5914:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ITpi1fJ-c4a54204d9cd1f112deb471a9929a861.jpeg"},2822:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/L6ZVq3l-35922192628915552666a0f27c18e70a.jpeg"},3790:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/UzLRybm-a74d92746f81a80fbd5ebe8aa3634e41.png"},5320:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/dM98n2Z-fec116c67e7f1f60295ab172f813d916.jpeg"},6523:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ezxgarP-f24d14f1a8fc526138f4e52f39eb8a98.gif"},3281:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/rkBTn3u-a2ecc1dff688a9aeece08bf31c2b17c1.gif"},2106:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/u4UCAjv-42db586044e4ae50ee6e6178f5b5684e.jpeg"}}]);