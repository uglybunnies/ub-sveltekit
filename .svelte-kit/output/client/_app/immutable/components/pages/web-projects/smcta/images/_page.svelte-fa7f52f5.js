import{S as C,i as y,s as A,a as S,k as v,q as k,M as I,h as g,c as T,l as j,m as b,r as L,n as W,b as D,D as u,f as d,d as M,t as w,P,L as q,w as B,x as N,y as R,N as z,O,z as $,g as F}from"../../../../../chunks/index-258c50b6.js";import{I as G}from"../../../../../chunks/ImageSection-e3ca5922.js";function E(i,n,o){const r=i.slice();return r[2]=n[o],r[4]=o,r}function H(i){let n,o;const r=[i[2],{picIndex:i[4]+1},{projectUrl:i[1]}];let l={};for(let t=0;t<r.length;t+=1)l=q(l,r[t]);return n=new G({props:l}),{c(){B(n.$$.fragment)},l(t){N(n.$$.fragment,t)},m(t,h){R(n,t,h),o=!0},p(t,h){const p=h&3?z(r,[h&1&&O(t[2]),r[1],h&2&&{projectUrl:t[1]}]):{};n.$set(p)},i(t){o||(d(n.$$.fragment,t),o=!0)},o(t){w(n.$$.fragment,t),o=!1},d(t){$(n,t)}}}function J(i){let n,o,r,l,t,h,p,m=i[0],s=[];for(let e=0;e<m.length;e+=1)s[e]=H(E(i,m,e));const U=e=>w(s[e],1,1,()=>{s[e]=null});return{c(){n=S(),o=v("article"),r=v("header"),l=v("h2"),t=k("SMCTA Website Screenshots"),h=S();for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){I("svelte-xaf4uw",document.head).forEach(g),n=T(e),o=j(e,"ARTICLE",{class:!0,id:!0});var a=b(o);r=j(a,"HEADER",{});var f=b(r);l=j(f,"H2",{});var x=b(l);t=L(x,"SMCTA Website Screenshots"),x.forEach(g),f.forEach(g),h=T(a);for(let _=0;_<s.length;_+=1)s[_].l(a);a.forEach(g),this.h()},h(){document.title="Ugly Bunnies\u2014San Mateo County Transit Authority Website Screenshots",W(o,"class","project"),W(o,"id","top")},m(e,c){D(e,n,c),D(e,o,c),u(o,r),u(r,l),u(l,t),u(o,h);for(let a=0;a<s.length;a+=1)s[a].m(o,null);p=!0},p(e,[c]){if(c&3){m=e[0];let a;for(a=0;a<m.length;a+=1){const f=E(e,m,a);s[a]?(s[a].p(f,c),d(s[a],1)):(s[a]=H(f),s[a].c(),d(s[a],1),s[a].m(o,null))}for(F(),a=m.length;a<s.length;a+=1)U(a);M()}},i(e){if(!p){for(let c=0;c<m.length;c+=1)d(s[c]);p=!0}},o(e){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)w(s[c]);p=!1},d(e){e&&g(n),e&&g(o),P(s,e)}}}function K(i,n,o){let{pics:r=[{src:"/assets/web-projects/smcta-homepage.png",alt:"Homepage screenshot",caption:"The complete view of the homepage",title:"The Homepage",maxWidth:"48rem"},{src:"/assets/web-projects/smcta-content-page.png",alt:"content page screenshot",caption:"The complete view of content page",title:"The Content Page",maxWidth:"48rem"},{src:"/assets/web-projects/smcta-live-homepage.png",alt:"Live version of the homepage",caption:"Here is a screenshot of the  homepage after launch",title:"The Live Homepage",maxWidth:"48rem"},{src:"/assets/web-projects/smcta-homepage-detail.png",alt:"Detail of the homepage",caption:"Detail of the homepage",title:"Hmepage Detail",maxWidth:"42rem"},{src:"/assets/web-projects/smcta-nav-detail.png",alt:"Detail of the navigation and mastead",caption:"Detail of the navigation and mastead",title:"Site Navigation",maxWidth:"38rem"}]}=n,{projectUrl:l="/web-projects/smcta"}=n;return i.$$set=t=>{"pics"in t&&o(0,r=t.pics),"projectUrl"in t&&o(1,l=t.projectUrl)},[r,l]}class X extends C{constructor(n){super(),y(this,n,K,J,A,{pics:0,projectUrl:1})}}export{X as default};