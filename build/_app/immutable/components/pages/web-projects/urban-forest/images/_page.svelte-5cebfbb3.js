import{S as P,i as k,s as H,a as E,k as x,q as I,M as W,h as f,c as v,l as b,m as j,r as y,n as S,b as D,D as d,f as _,d as q,t as U,P as B,L as C,w as L,x as R,y as z,N as M,O as N,z as O,g as $}from"../../../../../chunks/index-258c50b6.js";import{I as G}from"../../../../../chunks/ImageSection-e3ca5922.js";function T(i,s,a){const r=i.slice();return r[2]=s[a],r[4]=a,r}function A(i){let s,a;const r=[i[2],{picIndex:i[4]+1},{projectUrl:i[1]}];let c={};for(let t=0;t<r.length;t+=1)c=C(c,r[t]);return s=new G({props:c}),{c(){L(s.$$.fragment)},l(t){R(s.$$.fragment,t)},m(t,h){z(s,t,h),a=!0},p(t,h){const p=h&3?M(r,[h&1&&N(t[2]),r[1],h&2&&{projectUrl:t[1]}]):{};s.$set(p)},i(t){a||(_(s.$$.fragment,t),a=!0)},o(t){U(s.$$.fragment,t),a=!1},d(t){O(s,t)}}}function J(i){let s,a,r,c,t,h,p,m=i[0],n=[];for(let e=0;e<m.length;e+=1)n[e]=A(T(i,m,e));const F=e=>U(n[e],1,1,()=>{n[e]=null});return{c(){s=E(),a=x("article"),r=x("header"),c=x("h2"),t=I("Urban Forest: Theme Design for Sandvox Screenshots"),h=E();for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){W("svelte-bxagff",document.head).forEach(f),s=v(e),a=b(e,"ARTICLE",{class:!0,id:!0});var o=j(a);r=b(o,"HEADER",{});var u=j(r);c=b(u,"H2",{});var w=j(c);t=y(w,"Urban Forest: Theme Design for Sandvox Screenshots"),w.forEach(f),u.forEach(f),h=v(o);for(let g=0;g<n.length;g+=1)n[g].l(o);o.forEach(f),this.h()},h(){document.title="Ugly Bunnies\u2014Urban Forest: Theme Design for Sandvox Screenshots",S(a,"class","project"),S(a,"id","top")},m(e,l){D(e,s,l),D(e,a,l),d(a,r),d(r,c),d(c,t),d(a,h);for(let o=0;o<n.length;o+=1)n[o].m(a,null);p=!0},p(e,[l]){if(l&3){m=e[0];let o;for(o=0;o<m.length;o+=1){const u=T(e,m,o);n[o]?(n[o].p(u,l),_(n[o],1)):(n[o]=A(u),n[o].c(),_(n[o],1),n[o].m(a,null))}for($(),o=m.length;o<n.length;o+=1)F(o);q()}},i(e){if(!p){for(let l=0;l<m.length;l+=1)_(n[l]);p=!0}},o(e){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)U(n[l]);p=!1},d(e){e&&f(s),e&&f(a),B(n,e)}}}function K(i,s,a){let{pics:r=[{src:"/assets/web-projects/uf-homepage1.png",alt:"Homepage Detail screenshot",caption:"A Detail of the homepage",title:"Homepage detail",maxWidth:"48rem"},{src:"/assets/web-projects/UF_detail4.png",alt:"Example of the theme in production",caption:"An example of the theme in production with one column",title:"Theme in Production",maxWidth:"48rem"},{src:"/assets/web-projects/UF_detail5.png",alt:"Example of the theme in production",caption:"An example of the theme in production with two columns",title:"Theme in Production",maxWidth:"48rem"},{src:"/assets/web-projects/UF_detail6.png",alt:"Example of the theme in production",caption:"An example of the theme in production with two columns",title:"Theme in Production",maxWidth:"40rem"}]}=s,{projectUrl:c="/web-projects/urban-forest"}=s;return i.$$set=t=>{"pics"in t&&a(0,r=t.pics),"projectUrl"in t&&a(1,c=t.projectUrl)},[r,c]}class X extends P{constructor(s){super(),k(this,s,K,J,H,{pics:0,projectUrl:1})}}export{X as default};