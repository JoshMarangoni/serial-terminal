if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,t)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(e=>{const r=t(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"019d58dc3abc827c812e4e3a99c99364"},{url:"main.5cd8e059b41f535b4695.js",revision:"6fc14163df7ba57e5d91da1de9c7790b"},{url:"runtime.58908f3dbdb804a00215.js",revision:"bac88d544bdbbe5a66ee018b2815af84"},{url:"vendors.71b54d27fa1b1e8bdfa6.js",revision:"79a487b54f0e1c2fc95140e9ce36e1b5"}],{})}));
