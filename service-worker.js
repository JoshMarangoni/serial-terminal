if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,t)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(e=>{const r=t(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-046431ad"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"8512a678df31ea7f3bbf80d1ca41ca8a"},{url:"main.903b20d531e8ef74224e.js",revision:"dd2b8a55f239bc30007f60b2e5ee1113"},{url:"runtime.2388b87b067ee793e5eb.js",revision:"bac88d544bdbbe5a66ee018b2815af84"},{url:"vendors.00d5ee89021ce6369966.js",revision:"af91ae44279cc2cdeeecfd51aa20bb7a"}],{})}));
