import{S as Ye,i as Xe,s as Ze,a as Qe,e as F,c as xe,b as M,g as ce,t as J,d as fe,f as z,h as G,j as et,o as Ee,k as tt,l as rt,m as nt,n as ye,p as C,q as at,r as ot,u as st,v as W,w as Y,x as Le,y as X,z as Z,A as Be}from"./chunks/index-258c50b6.js";import{g as Fe,f as Je,s as K,a as ve,b as it,i as lt}from"./chunks/singletons-23d8a106.js";function ct(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function ft(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(n,e){const t=new URL(n);for(const s of ut){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(s,o,l)=>l(n,o),dt(t),t}function dt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function mt(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ue=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;le.delete(s)}return ue(n,e)};const le=new Map;function ht(n,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(o+=`[data-hash="${mt(t.body)}"]`);const l=document.querySelector(o);if(l!=null&&l.textContent){const{body:r,...f}=JSON.parse(l.textContent),m=l.getAttribute("data-ttl");return m&&le.set(e,{body:r,init:f,ttl:1e3*Number(m)}),Promise.resolve(new Response(r,f))}return ue(n,t)}function _t(n,e){const t=le.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);le.delete(n)}return ue(n,e)}const gt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function wt(n){const e=[],t=[];let s=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(yt).map((l,r,f)=>{const m=decodeURIComponent(l),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(m);if(d)return e.push(d[1]),t.push(d[2]),"(?:/(.*))?";const g=r===f.length-1;return m&&"/"+m.split(/\[(.+?)\]/).map((y,O)=>{if(O%2){const V=gt.exec(y);if(!V)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,U,q,N]=V;return e.push(q),t.push(N),U?"(.*?)":"([^/]+?)"}return g&&y.includes(".")&&(s=!1),y.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:t}}function yt(n){return!/^\([^)]+\)$/.test(n)}function bt(n,e,t,s){const o={};for(let l=0;l<e.length;l+=1){const r=e[l],f=t[l],m=n[l+1]||"";if(f){const d=s[f];if(!d)throw new Error(`Missing "${f}" param matcher`);if(!d(m))return}o[r]=m}return o}function Et(n,e,t,s){const o=new Set(e);return Object.entries(t).map(([f,[m,d,g]])=>{const{pattern:y,names:O,types:V}=wt(f),U={id:f,exec:q=>{const N=y.exec(q);if(N)return bt(N,O,V,s)},errors:[1,...g||[]].map(q=>n[q]),layouts:[0,...d||[]].map(r),leaf:l(m)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function l(f){const m=f<0;return m&&(f=~f),[m,n[f]]}function r(f){return f===void 0?f:[o.has(f),n[f]]}}function vt(n){let e,t,s;var o=n[0][0];function l(r){return{props:{data:r[2],form:r[1]}}}return o&&(e=W(o,l(n))),{c(){e&&Y(e.$$.fragment),t=F()},l(r){e&&Le(e.$$.fragment,r),t=F()},m(r,f){e&&X(e,r,f),M(r,t,f),s=!0},p(r,f){const m={};if(f&4&&(m.data=r[2]),f&2&&(m.form=r[1]),o!==(o=r[0][0])){if(e){ce();const d=e;J(d.$$.fragment,1,0,()=>{Z(d,1)}),fe()}o?(e=W(o,l(r)),Y(e.$$.fragment),z(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(r){s||(e&&z(e.$$.fragment,r),s=!0)},o(r){e&&J(e.$$.fragment,r),s=!1},d(r){r&&G(t),e&&Z(e,r)}}}function kt(n){let e,t,s;var o=n[0][0];function l(r){return{props:{data:r[2],$$slots:{default:[Rt]},$$scope:{ctx:r}}}}return o&&(e=W(o,l(n))),{c(){e&&Y(e.$$.fragment),t=F()},l(r){e&&Le(e.$$.fragment,r),t=F()},m(r,f){e&&X(e,r,f),M(r,t,f),s=!0},p(r,f){const m={};if(f&4&&(m.data=r[2]),f&523&&(m.$$scope={dirty:f,ctx:r}),o!==(o=r[0][0])){if(e){ce();const d=e;J(d.$$.fragment,1,0,()=>{Z(d,1)}),fe()}o?(e=W(o,l(r)),Y(e.$$.fragment),z(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(r){s||(e&&z(e.$$.fragment,r),s=!0)},o(r){e&&J(e.$$.fragment,r),s=!1},d(r){r&&G(t),e&&Z(e,r)}}}function Rt(n){let e,t,s;var o=n[0][1];function l(r){return{props:{data:r[3],form:r[1]}}}return o&&(e=W(o,l(n))),{c(){e&&Y(e.$$.fragment),t=F()},l(r){e&&Le(e.$$.fragment,r),t=F()},m(r,f){e&&X(e,r,f),M(r,t,f),s=!0},p(r,f){const m={};if(f&8&&(m.data=r[3]),f&2&&(m.form=r[1]),o!==(o=r[0][1])){if(e){ce();const d=e;J(d.$$.fragment,1,0,()=>{Z(d,1)}),fe()}o?(e=W(o,l(r)),Y(e.$$.fragment),z(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(r){s||(e&&z(e.$$.fragment,r),s=!0)},o(r){e&&J(e.$$.fragment,r),s=!1},d(r){r&&G(t),e&&Z(e,r)}}}function ze(n){let e,t=n[5]&&Ge(n);return{c(){e=tt("div"),t&&t.c(),this.h()},l(s){e=rt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=nt(e);t&&t.l(o),o.forEach(G),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,o){M(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=Ge(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&G(e),t&&t.d()}}}function Ge(n){let e;return{c(){e=at(n[6])},l(t){e=ot(t,n[6])},m(t,s){M(t,e,s)},p(t,s){s&64&&st(e,t[6])},d(t){t&&G(e)}}}function Ot(n){let e,t,s,o,l;const r=[kt,vt],f=[];function m(g,y){return g[0][1]?0:1}e=m(n),t=f[e]=r[e](n);let d=n[4]&&ze(n);return{c(){t.c(),s=Qe(),d&&d.c(),o=F()},l(g){t.l(g),s=xe(g),d&&d.l(g),o=F()},m(g,y){f[e].m(g,y),M(g,s,y),d&&d.m(g,y),M(g,o,y),l=!0},p(g,[y]){let O=e;e=m(g),e===O?f[e].p(g,y):(ce(),J(f[O],1,1,()=>{f[O]=null}),fe(),t=f[e],t?t.p(g,y):(t=f[e]=r[e](g),t.c()),z(t,1),t.m(s.parentNode,s)),g[4]?d?d.p(g,y):(d=ze(g),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},i(g){l||(z(t),l=!0)},o(g){J(t),l=!1},d(g){f[e].d(g),g&&G(s),d&&d.d(g),g&&G(o)}}}function Lt(n,e,t){let{stores:s}=e,{page:o}=e,{components:l}=e,{form:r}=e,{data_0:f=null}=e,{data_1:m=null}=e;et(s.page.notify);let d=!1,g=!1,y=null;return Ee(()=>{const O=s.page.subscribe(()=>{d&&(t(5,g=!0),t(6,y=document.title||"untitled page"))});return t(4,d=!0),O}),n.$$set=O=>{"stores"in O&&t(7,s=O.stores),"page"in O&&t(8,o=O.page),"components"in O&&t(0,l=O.components),"form"in O&&t(1,r=O.form),"data_0"in O&&t(2,f=O.data_0),"data_1"in O&&t(3,m=O.data_1)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(o)},[l,r,f,m,d,g,y,s,o]}class It extends Ye{constructor(e){super(),Xe(this,e,Lt,Ot,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const jt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),At=function(n,e){return new URL(n,e).href},Ke={},j=function(e,t,s){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=At(o,s),o in Ke)return;Ke[o]=!0;const l=o.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":jt,l||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),l)return new Promise((m,d)=>{f.addEventListener("load",m),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},Pt={},pe=[()=>j(()=>import("./chunks/0-abdaac52.js"),["chunks/0-abdaac52.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-79be8784.js","chunks/index-258c50b6.js"],import.meta.url),()=>j(()=>import("./chunks/1-c2388703.js"),["chunks/1-c2388703.js","components/error.svelte-6e2cd0cf.js","chunks/index-258c50b6.js","chunks/singletons-23d8a106.js"],import.meta.url),()=>j(()=>import("./chunks/2-36ad069d.js"),["chunks/2-36ad069d.js","components/pages/_page.svelte-e1eae31a.js","assets/_page-9d4f40e1.css","chunks/index-258c50b6.js","chunks/Features-2d86173b.js","assets/Features-984e3d29.css"],import.meta.url),()=>j(()=>import("./chunks/3-851fec2c.js"),["chunks/3-851fec2c.js","components/pages/about/_page.svelte-ec3d2b99.js","chunks/index-258c50b6.js"],import.meta.url),()=>j(()=>import("./chunks/4-77dadd88.js"),["chunks/4-77dadd88.js","components/pages/web-projects/_page.svelte-715e3252.js","assets/_page-58acffbb.css","chunks/index-258c50b6.js","chunks/Features-2d86173b.js","assets/Features-984e3d29.css"],import.meta.url),()=>j(()=>import("./chunks/5-5978d59c.js"),["chunks/5-5978d59c.js","components/pages/web-projects/adge/_page.svelte-427504c8.js","chunks/index-258c50b6.js","chunks/Captionbox-8e1f84fa.js","assets/Captionbox-93774623.css"],import.meta.url),()=>j(()=>import("./chunks/6-aa4a450f.js"),["chunks/6-aa4a450f.js","components/pages/web-projects/adge/images/_page.svelte-94947015.js","chunks/index-258c50b6.js","chunks/ImageSection-e3ca5922.js","assets/ImageSection-7d2aba35.css"],import.meta.url),()=>j(()=>import("./chunks/7-b4844443.js"),["chunks/7-b4844443.js","components/pages/web-projects/autodesk/_page.svelte-1bfa8427.js","assets/_page-2359a796.css","chunks/index-258c50b6.js","chunks/PicCluster-3fd27267.js","assets/PicCluster-af34aa67.css"],import.meta.url),()=>j(()=>import("./chunks/8-fffcab2c.js"),["chunks/8-fffcab2c.js","components/pages/web-projects/corelight/_page.svelte-a0e6de52.js","chunks/index-258c50b6.js","chunks/PicCluster-3fd27267.js","assets/PicCluster-af34aa67.css"],import.meta.url),()=>j(()=>import("./chunks/9-01b37a27.js"),["chunks/9-01b37a27.js","components/pages/web-projects/credit-karma/_page.svelte-67bf54b0.js","chunks/index-258c50b6.js","chunks/PicCluster-3fd27267.js","assets/PicCluster-af34aa67.css"],import.meta.url),()=>j(()=>import("./chunks/10-e7719f49.js"),["chunks/10-e7719f49.js","components/pages/web-projects/molekule/_page.svelte-28f50899.js","chunks/index-258c50b6.js","chunks/PicCluster-3fd27267.js","assets/PicCluster-af34aa67.css"],import.meta.url),()=>j(()=>import("./chunks/11-2a730bb1.js"),["chunks/11-2a730bb1.js","components/pages/web-projects/platinum/_page.svelte-e5cbdaa9.js","chunks/index-258c50b6.js","chunks/Captionbox-8e1f84fa.js","assets/Captionbox-93774623.css"],import.meta.url),()=>j(()=>import("./chunks/12-5f38d193.js"),["chunks/12-5f38d193.js","components/pages/web-projects/platinum/images/_page.svelte-0eeee6d5.js","chunks/index-258c50b6.js","chunks/ImageSection-e3ca5922.js","assets/ImageSection-7d2aba35.css"],import.meta.url),()=>j(()=>import("./chunks/13-822a56d1.js"),["chunks/13-822a56d1.js","components/pages/web-projects/platzner/_page.svelte-1be7db8f.js","chunks/index-258c50b6.js","chunks/Captionbox-8e1f84fa.js","assets/Captionbox-93774623.css"],import.meta.url),()=>j(()=>import("./chunks/14-cca439f1.js"),["chunks/14-cca439f1.js","components/pages/web-projects/platzner/images/_page.svelte-19a26248.js","chunks/index-258c50b6.js","chunks/ImageSection-e3ca5922.js","assets/ImageSection-7d2aba35.css"],import.meta.url),()=>j(()=>import("./chunks/15-7276c7d5.js"),["chunks/15-7276c7d5.js","components/pages/web-projects/rejuvenation-site/_page.svelte-4f5cba0e.js","chunks/index-258c50b6.js","chunks/Captionbox-8e1f84fa.js","assets/Captionbox-93774623.css"],import.meta.url),()=>j(()=>import("./chunks/16-1a3fc1a2.js"),["chunks/16-1a3fc1a2.js","components/pages/web-projects/rejuvenation-site/images/_page.svelte-7bbf8576.js","chunks/index-258c50b6.js","chunks/ImageSection-e3ca5922.js","assets/ImageSection-7d2aba35.css"],import.meta.url),()=>j(()=>import("./chunks/17-ffaf1dbd.js"),["chunks/17-ffaf1dbd.js","components/pages/web-projects/satsukiina/_page.svelte-14819f3f.js","chunks/index-258c50b6.js","chunks/Captionbox-8e1f84fa.js","assets/Captionbox-93774623.css"],import.meta.url),()=>j(()=>import("./chunks/18-8d3a9490.js"),["chunks/18-8d3a9490.js","components/pages/web-projects/satsukiina/images/_page.svelte-a4d7f5a8.js","chunks/index-258c50b6.js","chunks/ImageSection-e3ca5922.js","assets/ImageSection-7d2aba35.css"],import.meta.url),()=>j(()=>import("./chunks/19-d29fb3fd.js"),["chunks/19-d29fb3fd.js","components/pages/web-projects/serpentvenom/_page.svelte-448b1c71.js","chunks/index-258c50b6.js","chunks/Captionbox-8e1f84fa.js","assets/Captionbox-93774623.css"],import.meta.url),()=>j(()=>import("./chunks/20-5f53e251.js"),["chunks/20-5f53e251.js","components/pages/web-projects/serpentvenom/images/_page.svelte-56c0ae65.js","chunks/index-258c50b6.js","chunks/ImageSection-e3ca5922.js","assets/ImageSection-7d2aba35.css"],import.meta.url),()=>j(()=>import("./chunks/21-213f2c75.js"),["chunks/21-213f2c75.js","components/pages/web-projects/smcta/_page.svelte-396c93d4.js","chunks/index-258c50b6.js","chunks/Captionbox-8e1f84fa.js","assets/Captionbox-93774623.css"],import.meta.url),()=>j(()=>import("./chunks/22-3f7dcf7b.js"),["chunks/22-3f7dcf7b.js","components/pages/web-projects/smcta/images/_page.svelte-fa7f52f5.js","chunks/index-258c50b6.js","chunks/ImageSection-e3ca5922.js","assets/ImageSection-7d2aba35.css"],import.meta.url),()=>j(()=>import("./chunks/23-10267502.js"),["chunks/23-10267502.js","components/pages/web-projects/urban-forest/_page.svelte-b43ff966.js","chunks/index-258c50b6.js","chunks/Captionbox-8e1f84fa.js","assets/Captionbox-93774623.css"],import.meta.url),()=>j(()=>import("./chunks/24-75dd2f0a.js"),["chunks/24-75dd2f0a.js","components/pages/web-projects/urban-forest/images/_page.svelte-5cebfbb3.js","chunks/index-258c50b6.js","chunks/ImageSection-e3ca5922.js","assets/ImageSection-7d2aba35.css"],import.meta.url)],St=[],Tt={"":[2],about:[3],"web-projects":[4],"web-projects/adge":[5],"web-projects/autodesk":[7],"web-projects/corelight":[8],"web-projects/credit-karma":[9],"web-projects/molekule":[10],"web-projects/platinum":[11],"web-projects/platzner":[13],"web-projects/rejuvenation-site":[15],"web-projects/satsukiina":[17],"web-projects/serpentvenom":[19],"web-projects/smcta":[21],"web-projects/urban-forest":[23],"web-projects/adge/images":[6],"web-projects/platinum/images":[12],"web-projects/platzner/images":[14],"web-projects/rejuvenation-site/images":[16],"web-projects/satsukiina/images":[18],"web-projects/serpentvenom/images":[20],"web-projects/smcta/images":[22],"web-projects/urban-forest/images":[24]},$t={handleError:({error:n})=>{console.error(n)}};class ke{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,t){this.status=e,this.location=t}}const Dt="/__data.json";async function Vt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,o])=>[s,await o])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Nt=-1,Ut=-2,qt=-3,Ct=-4,Bt=-5,Ft=-6;function Jt(n){const e=JSON.parse(n);if(typeof e=="number")return o(e);const t=e,s=Array(t.length);function o(l){if(l===Nt)return;if(l===qt)return NaN;if(l===Ct)return 1/0;if(l===Bt)return-1/0;if(l===Ft)return-0;if(l in s)return s[l];const r=t[l];if(!r||typeof r!="object")s[l]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":s[l]=new Date(r[1]);break;case"Set":const m=new Set;s[l]=m;for(let y=1;y<r.length;y+=1)m.add(o(r[y]));break;case"Map":const d=new Map;s[l]=d;for(let y=1;y<r.length;y+=2)d.set(o(r[y]),o(r[y+1]));break;case"RegExp":s[l]=new RegExp(r[1],r[2]);break;case"Object":s[l]=Object(r[1]);break;case"BigInt":s[l]=BigInt(r[1]);break;case"null":const g=Object.create(null);s[l]=g;for(let y=1;y<r.length;y+=2)g[r[y]]=o(r[y+1]);break}else{const f=new Array(r.length);s[l]=f;for(let m=0;m<r.length;m+=1){const d=r[m];d!==Ut&&(f[m]=o(d))}}else{const f={};s[l]=f;for(const m in r){const d=r[m];f[m]=o(d)}}return s[l]}return o(0)}const We="sveltekit:scroll",B="sveltekit:index",oe=Et(pe,St,Tt,Pt),Re=pe[0],Oe=pe[1];Re();Oe();let te={};try{te=JSON.parse(sessionStorage[We])}catch{}function be(n){te[n]=ve()}function zt({target:n,base:e,trailing_slash:t}){var Ue;const s=[];let o=null;const l={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,url:null},f=!1,m=!1,d=!0,g=!1,y=!1,O,V=(Ue=history.state)==null?void 0:Ue[B];V||(V=Date.now(),history.replaceState({...history.state,[B]:V},"",location.href));const U=te[V];U&&(history.scrollRestoration="manual",scrollTo(U.x,U.y));let q=!1,N,Ie,re;async function je(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),u=_e(a,!0);o=null,await Pe(u,a,[])}async function de(a,{noscroll:u=!1,replaceState:p=!1,keepfocus:i=!1,state:c={}},h,_){return typeof a=="string"&&(a=new URL(a,Fe(document))),ge({url:a,scroll:u?ve():null,keepfocus:i,redirect_chain:h,details:{state:c,replaceState:p},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Ae(a){const u=_e(a,!1);if(!u)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o={id:u.id,promise:$e(u)},o.promise}async function Pe(a,u,p,i,c={},h){var k,v;Ie=c;let _=a&&await $e(a);if(_||(_=await Ne(u,null,ee(new Error(`Not found: ${u.pathname}`),{url:u,params:{},routeId:null}),404)),u=(a==null?void 0:a.url)||u,Ie!==c)return!1;if(_.type==="redirect")if(p.length>10||p.includes(u.pathname))_=await ne({status:500,error:ee(new Error("Redirect loop"),{url:u,params:{},routeId:null}),url:u,routeId:null});else return de(new URL(_.location,u).href,{},[...p,u.pathname],c),!1;else((v=(k=_.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await K.updated.check()&&await ae(u);if(s.length=0,y=!1,g=!0,i&&i.details){const{details:b}=i,E=b.replaceState?0:1;b.state[B]=V+=E,history[b.replaceState?"replaceState":"pushState"](b.state,"",u)}if(o=null,m){r=_.state,_.props.page&&(_.props.page.url=u);const b=ie();O.$set(_.props),b()}else Se(_);if(i){const{scroll:b,keepfocus:E}=i;if(!E){const L=document.body,A=L.getAttribute("tabindex");L.tabIndex=-1,L.focus({preventScroll:!0}),setTimeout(()=>{var P;(P=getSelection())==null||P.removeAllRanges()}),A!==null?L.setAttribute("tabindex",A):L.removeAttribute("tabindex")}if(await Be(),d){const L=u.hash&&document.getElementById(u.hash.slice(1));b?scrollTo(b.x,b.y):L?L.scrollIntoView():scrollTo(0,0)}}else await Be();d=!0,_.props.page&&(N=_.props.page),h&&h(),g=!1}function Se(a){var c,h;r=a.state;const u=document.querySelector("style[data-sveltekit]");u&&u.remove(),N=a.props.page;const p=ie();O=new It({target:n,props:{...a.props,stores:K},hydrate:!0}),p();const i={from:null,to:se("to",{params:r.params,routeId:(h=(c=r.route)==null?void 0:c.id)!=null?h:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(_=>_(i)),m=!0}async function Q({url:a,params:u,branch:p,status:i,error:c,route:h,form:_}){var A;const k=p.filter(Boolean),v={type:"loaded",state:{url:a,params:u,branch:p,error:c,route:h},props:{components:k.map(P=>P.node.component)}};_!==void 0&&(v.props.form=_);let b={},E=!N;for(let P=0;P<k.length;P+=1){const $=k[P];b={...b,...$.data},(E||!r.branch.some(D=>D===$))&&(v.props[`data_${P}`]=b,E=E||Object.keys((A=$.data)!=null?A:{}).length>0)}if(E||(E=Object.keys(N.data).length!==Object.keys(b).length),!r.url||a.href!==r.url.href||r.error!==c||_!==void 0||E){v.props.page={error:c,params:u,routeId:h&&h.id,status:i,url:a,form:_,data:E?b:N.data};const P=($,D)=>{Object.defineProperty(v.props.page,$,{get:()=>{throw new Error(`$page.${$} has been replaced by $page.url.${D}`)}})};P("origin","origin"),P("path","pathname"),P("query","searchParams")}return v}async function me({loader:a,parent:u,url:p,params:i,routeId:c,server_data_node:h}){var b,E,L,A,P;let _=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},v=await a();if((b=v.shared)!=null&&b.load){let $=function(...I){for(const w of I){const{href:R}=new URL(w,p);k.dependencies.add(R)}};const D={routeId:c,params:new Proxy(i,{get:(I,w)=>(k.params.add(w),I[w])}),data:(E=h==null?void 0:h.data)!=null?E:null,url:pt(p,()=>{k.url=!0}),async fetch(I,w){let R;I instanceof Request?(R=I.url,w={body:I.method==="GET"||I.method==="HEAD"?void 0:await I.blob(),cache:I.cache,credentials:I.credentials,headers:I.headers,integrity:I.integrity,keepalive:I.keepalive,method:I.method,mode:I.mode,redirect:I.redirect,referrer:I.referrer,referrerPolicy:I.referrerPolicy,signal:I.signal,...w}):R=I;const T=new URL(R,p).href;return $(T),m?_t(T,w):ht(R,T,w)},setHeaders:()=>{},depends:$,parent(){return k.parent=!0,u()}};Object.defineProperties(D,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(L=await v.shared.load.call(null,D))!=null?L:null,_=_?await Vt(_):null}return{node:v,loader:a,server:h,shared:(A=v.shared)!=null&&A.load?{type:"data",data:_,uses:k}:null,data:(P=_!=null?_:h==null?void 0:h.data)!=null?P:null}}function Te(a,u,p,i){if(y)return!0;if(!p)return!1;if(p.parent&&u||p.url&&a)return!0;for(const c of p.params)if(i[c]!==r.params[c])return!0;for(const c of p.dependencies)if(s.some(h=>h(new URL(c))))return!0;return!1}function he(a,u){var p,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&u!=null?u:null}async function $e({id:a,invalidating:u,url:p,params:i,route:c}){var I;if((o==null?void 0:o.id)===a)return o.promise;const{errors:h,layouts:_,leaf:k}=c,v=[..._,k];h.forEach(w=>w==null?void 0:w().catch(()=>{})),v.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const E=r.url?a!==r.url.pathname+r.url.search:!1,L=v.reduce((w,R,T)=>{var x;const S=r.branch[T],H=!!(R!=null&&R[0])&&((S==null?void 0:S.loader)!==R[1]||Te(E,w.some(Boolean),(x=S.server)==null?void 0:x.uses,i));return w.push(H),w},[]);if(L.some(Boolean)){try{b=await He(p,L)}catch(w){return ne({status:500,error:ee(w,{url:p,params:i,routeId:c.id}),url:p,routeId:c.id})}if(b.type==="redirect")return b}const A=b==null?void 0:b.nodes;let P=!1;const $=v.map(async(w,R)=>{var x;if(!w)return;const T=r.branch[R],S=A==null?void 0:A[R];if((!S||S.type==="skip")&&w[1]===(T==null?void 0:T.loader)&&!Te(E,P,(x=T.shared)==null?void 0:x.uses,i))return T;if(P=!0,(S==null?void 0:S.type)==="error")throw S;return me({loader:w[1],url:p,params:i,routeId:c.id,parent:async()=>{var Ce;const qe={};for(let we=0;we<R;we+=1)Object.assign(qe,(Ce=await $[we])==null?void 0:Ce.data);return qe},server_data_node:he(S===void 0&&w[0]?{type:"skip"}:S!=null?S:null,T==null?void 0:T.server)})});for(const w of $)w.catch(()=>{});const D=[];for(let w=0;w<v.length;w+=1)if(v[w])try{D.push(await $[w])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let T=500,S;A!=null&&A.includes(R)?(T=(I=R.status)!=null?I:T,S=R.error):R instanceof ke?(T=R.status,S=R.body):S=ee(R,{params:i,url:p,routeId:c.id});const H=await De(w,D,h);return H?await Q({url:p,params:i,branch:D.slice(0,H.idx).concat(H.node),status:T,error:S,route:c}):await Ne(p,c.id,S,T)}else D.push(void 0);return await Q({url:p,params:i,branch:D,status:200,error:null,route:c,form:u?void 0:null})}async function De(a,u,p){for(;a--;)if(p[a]){let i=a;for(;!u[i];)i-=1;try{return{idx:i+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function ne({status:a,error:u,url:p,routeId:i}){var b;const c={},h=await Re();let _=null;if(h.server)try{const E=await He(p,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;_=(b=E.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||f)&&await ae(p)}const k=await me({loader:Re,url:p,params:c,routeId:i,parent:()=>Promise.resolve({}),server_data_node:he(_)}),v={node:await Oe(),loader:Oe,shared:null,server:null,data:null};return await Q({url:p,params:c,branch:[k,v],status:a,error:u,route:null})}function _e(a,u){if(Ve(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const i of oe){const c=i.exec(p);if(c){const h=new URL(a.origin+ct(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:u,route:i,params:ft(c),url:h}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ge({url:a,scroll:u,keepfocus:p,redirect_chain:i,details:c,type:h,delta:_,nav_token:k,accepted:v,blocked:b}){var $,D,I,w;let E=!1;const L=_e(a,!1),A={from:se("from",{params:r.params,routeId:(D=($=r.route)==null?void 0:$.id)!=null?D:null,url:r.url}),to:se("to",{params:(I=L==null?void 0:L.params)!=null?I:null,routeId:(w=L==null?void 0:L.route.id)!=null?w:null,url:a}),type:h};_!==void 0&&(A.delta=_);const P={...A,cancel:()=>{E=!0}};if(l.before_navigate.forEach(R=>R(P)),E){b();return}be(V),v(),m&&K.navigating.set(A),await Pe(L,a,i,{scroll:u,keepfocus:p,details:c},k,()=>{l.after_navigate.forEach(R=>R(A)),K.navigating.set(null)})}async function Ne(a,u,p,i){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await ne({status:i,error:p,url:a,routeId:u}):await ae(a)}function ae(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Ee(()=>(l.after_navigate.push(a),()=>{const u=l.after_navigate.indexOf(a);l.after_navigate.splice(u,1)}))},before_navigate:a=>{Ee(()=>(l.before_navigate.push(a),()=>{const u=l.before_navigate.indexOf(a);l.before_navigate.splice(u,1)}))},disable_scroll_handling:()=>{(g||!m)&&(d=!1)},goto:(a,u={})=>de(a,u,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:u}=new URL(a,location.href);s.push(p=>p.href===u)}return je()},invalidateAll:()=>(y=!0,je()),prefetch:async a=>{const u=new URL(a,Fe(document));await Ae(u)},prefetch_routes:async a=>{const p=(a?oe.filter(i=>a.some(c=>i.exec(c))):oe).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const u=new URL(location.href),{branch:p,route:i}=r;if(!i)return;const c=await De(r.branch.length,p,i.errors);if(c){const h=await Q({url:u,params:r.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});r=h.state;const _=ie();O.$set(h.props),_()}}else if(a.type==="redirect")de(a.location,{},[]);else{const u={form:a.data,page:{...N,form:a.data,status:a.status}},p=ie();O.$set(u),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var _,k;let c=!1;const h={from:se("from",{params:r.params,routeId:(k=(_=r.route)==null?void 0:_.id)!=null?k:null,url:r.url}),to:null,type:"unload",cancel:()=>c=!0};l.before_navigate.forEach(v=>v(h)),c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(V);try{sessionStorage[We]=JSON.stringify(te)}catch{}}});const a=i=>{const{url:c,options:h}=Je(i);if(c&&h.prefetch){if(Ve(c))return;Ae(c)}};let u;const p=i=>{clearTimeout(u),u=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:h,options:_}=Je(i);if(!c||!h)return;const k=c instanceof SVGAElement;if(!k&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:"))return;const v=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||v.includes("external")||_.reload||(k?c.target.baseVal:c.target))return;const[b,E]=h.href.split("#");if(E!==void 0&&b===location.href.split("#")[0]){q=!0,be(V),r.url=h,K.page.set({...N,url:h}),K.page.notify();return}ge({url:h,scroll:_.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[B]===V)return;const c=i.state[B]-V;ge({url:new URL(location.href),scroll:te[i.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{V=i.state[B]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[B]:++V},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:u,node_ids:p,params:i,routeId:c,data:h,form:_})=>{var b;f=!0;const k=new URL(location.href);let v;try{const E=p.map(async(L,A)=>{const P=h[A];return me({loader:pe[L],url:k,params:i,routeId:c,parent:async()=>{const $={};for(let D=0;D<A;D+=1)Object.assign($,(await E[D]).data);return $},server_data_node:he(P)})});v=await Q({url:k,params:i,branch:await Promise.all(E),status:a,error:u,form:_,route:(b=oe.find(L=>L.id===c))!=null?b:null})}catch(E){if(E instanceof Me){await ae(new URL(E.location,location.href));return}v=await ne({status:E instanceof ke?E.status:500,error:ee(E,{url:k,params:i,routeId:c}),url:k,routeId:c})}Se(v)}}}async function He(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Dt;const s=await ue(t.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),o=await s.text();if(!s.ok)throw new Error(JSON.parse(o));return Jt(o)}function ee(n,e){var t;return n instanceof ke?n.body:(t=$t.handleError({error:n,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Gt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function se(n,e){for(const t of Gt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return e}function ie(){return()=>{}}async function Ht({env:n,hydrate:e,paths:t,target:s,trailing_slash:o}){it(t);const l=zt({target:s,base:t.base,trailing_slash:o});lt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Ht as start};