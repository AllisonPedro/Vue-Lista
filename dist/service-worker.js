if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const u=e=>n(e,o),c={module:{uri:o},exports:l,require:u};s[o]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(i(...e),l)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-todo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/566.7fc90240.css",revision:null},{url:"/css/chunk-vendors.6d417f76.css",revision:null},{url:"/img/C.I.T.7d55baea.png",revision:null},{url:"/index.html",revision:"7b4f47cfc050986f9b71659d9a173732"},{url:"/js/30.ec4af88f.js",revision:null},{url:"/js/566.a30c4e07.js",revision:null},{url:"/js/app.2db6f1d8.js",revision:null},{url:"/js/chunk-vendors.20f6bb2a.js",revision:null},{url:"/manifest.json",revision:"fbafddbca0454e2cf83c4640f9391b35"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
