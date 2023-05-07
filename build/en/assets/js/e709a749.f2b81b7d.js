"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={title:"Installing WebUi on your PC",description:"Installing and configuring WebUi on your pc.",hide_table_of_contents:!1,sidebar_position:2},l=void 0,r={unversionedId:"installation/local",id:"installation/local",title:"Installing WebUi on your PC",description:"Installing and configuring WebUi on your pc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/installation/local.md",sourceDirName:"installation",slug:"/installation/local",permalink:"/en/docs/installation/local",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installing WebUi on your PC",description:"Installing and configuring WebUi on your pc.",hide_table_of_contents:!1,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Running Paperspace",permalink:"/en/docs/installation/paperspace"},next:{title:"Running Colab [Outdated]",permalink:"/en/docs/installation/colab"}},s={},d=[{value:"Installing the required programs",id:"start",level:2},{value:"WebUi installation",id:"install-webui",level:2},{value:"Command-line arguments",id:"commandline_args",level:2},{value:"Recommended arguments",id:"recomended_args",level:3},{value:"Other useful arguments",id:"other_args",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using Stable Diffusion on your hardware can be more convenient than colab.\nHere is what you need to know before you install the SD on your computer:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"SD is very demanding on video memory. Ideally 8gb+, the more the better. Technically, everything will work with 6gb, and 4gb, but generating with so little amount of VRAM will be followed by a lot of anal pain, so I don't recommend it. If you don't even have 4gb, forget about it, and go use colab."),(0,i.kt)("li",{parentName:"ol"},"Models can weigh quite a bit. Usually somewhere between 1gb and 8gb, and since you probably won't stop at one model, I suggest you prepare some disk space."),(0,i.kt)("li",{parentName:"ol"},"Everything will work fine only on Nvidia GPU, AMD GPU can also run SD, but it will work extremely shitty and I'll not explain how to do it (because I don't have an AMD GPU to show it).")),(0,i.kt)("h2",{id:"start"},"Installing the required programs"),(0,i.kt)("p",null,"We only need to install two programs - Python and Git"),(0,i.kt)("p",null,"Let's start with python. Go ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/release/python-3109/"},"here"),", scroll to ",(0,i.kt)("inlineCode",{parentName:"p"},"Files")," and download the installer. You don't need to touch anything during the installation, the only thing you need to do is check the checkbox for ",(0,i.kt)("inlineCode",{parentName:"p"}," Add Python xx.xx to PATH"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(1731).Z,width:"358",height:"101"})),(0,i.kt)("p",null,"The git is easy, too. Go ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"here")," and download the installer. Don't change anything during the installation, just agree with everything and click ",(0,i.kt)("inlineCode",{parentName:"p"},"next"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It's recommended to restart your PC after installation.")),(0,i.kt)("h2",{id:"install-webui"},"WebUi installation"),(0,i.kt)("p",null,"Determine where we will store the SD folder and open a command line there.\nYou can do this simply by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," in the address bar."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gif",src:n(9926).Z,width:"1129",height:"687"})),(0,i.kt)("p",null,"Run this command:\n",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gif",src:n(6773).Z,width:"1113",height:"626"})),(0,i.kt)("p",null,"Since WebUi won't run without a model, download one and put it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stable-diffusion-webui\\models\\Stable-diffusion")," folder."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gif",src:n(9275).Z,width:"905",height:"540"})),(0,i.kt)("p",null,"Now, run ",(0,i.kt)("inlineCode",{parentName:"p"},"webui-user.bat")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stable-diffusion-webui")," folder, and wait for everything to download (this can take quite a while, since some components weigh several gigabytes)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gif",src:n(8107).Z,width:"1674",height:"910"})),(0,i.kt)("p",null,"After installation the local address appears in the console.\nTo start webui next time, you will still need to run ",(0,i.kt)("inlineCode",{parentName:"p"},"webui-user.bat")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gif",src:n(8041).Z,width:"1664",height:"604"})),(0,i.kt)("h2",{id:"commandline_args"},"Command-line arguments"),(0,i.kt)("p",null,"Arguments that are used when starting WebUi and change some settings/functions.\nThere are two ways to use an argument:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Insert them after ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMANDLINE_ARGS")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"webui-user.bat")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image",src:n(104).Z,width:"532",height:"317"})," ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a command line in ",(0,i.kt)("inlineCode",{parentName:"p"},"stable-diffusion-webui")," and type in ",(0,i.kt)("inlineCode",{parentName:"p"},"webui.bat {arguments}")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image",src:n(9005).Z,width:"887",height:"379"})))),(0,i.kt)("h3",{id:"recomended_args"},"Recommended arguments"),(0,i.kt)("p",null,"The arguments I use. You don't have to use them, but they're definitely not superfluous."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--xformers")," - speeds up generation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--listen")," - allows you to open WebUi from any other device in the same local network."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"More about this"),(0,i.kt)("div",null,"I used it this way: run webui on a PC, and use it on a laptop from another room. You can also use it on your phone, or any other device on the same local network as the machine that's running webui.",(0,i.kt)("p",{parentName:"li"},"  In order to open webui on another device, you need to open a link like ",(0,i.kt)("inlineCode",{parentName:"p"},"http://{local ip of the server device}:{port}/")," also, instead of the ip address you can use the computer name.\nYou can find out your local ip by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"ipconfig")," at the command line."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"image",src:n(2792).Z,width:"619",height:"483"})),(0,i.kt)("p",{parentName:"li"},"  In this example, the webui address would be ",(0,i.kt)("inlineCode",{parentName:"p"},"http://192.168.1.101:{port}/"),"."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"image",src:n(4761).Z,width:"1532",height:"1456"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--medvram")," - useful if you don't have a lot of video memory. Slows down generation a bit, but uses less VRAM."))),(0,i.kt)("h3",{id:"other_args"},"Other useful arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--no-half-vae")," - fixes black squares instead of pictures when you`re using NovelAi, Anything etc. VAE."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--share")," - Creates a public link to WebUi which can be opened from anywhere in the world. Usually, this link is valid for 72 hours."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--port")," - allows you to change the port. To set ports less than 1024 you need to run WebUi as an administrator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--lowvram")," - enhanced version of ",(0,i.kt)("inlineCode",{parentName:"li"},"--medvram"),". Slows down generation much more, but consumes much less VRAM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--gradio-auth Login:Password")," - sets login and password for webui, handy if you use ",(0,i.kt)("inlineCode",{parentName:"li"},"--share"),".")))}c.isMDXComponent=!0},9005:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/B0yY31S-12b139cbb6932d40fb8b77e5a1033203.png"},4761:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/En2JWv5-a715feb4c574ecb4594fb778578a785e.jpeg"},8041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UgS5j2q-23e76d6f757297ded7563ddd875ac08e.gif"},9275:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Wvj5Kj3-0f2ecfac5800d410e2d72ac776c467ec.gif"},1731:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/YWkGXhn-98febea147c3e1d5c06d30e514013c5e.png"},2792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ZYt0H4l-945063491abdf1f9ff0f9affeea43f19.png"},6773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hmECibL-383edc5a0c1ca9d351358a90aac75a48.gif"},8107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jhBcPzH-f1e3a214aa5cbe0c303edd59e6098d86.gif"},104:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/owe9g2S-bcc39f0cbafa3de2a9a23a1d4d6a59d5.png"},9926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/se6U2uL-26633e3ae22359d362a0a61ffb877d82.gif"}}]);