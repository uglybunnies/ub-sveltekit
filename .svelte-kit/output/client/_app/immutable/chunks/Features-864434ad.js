import{S as N,i as Q,s as R,k as v,l as _,m,h as u,n as c,b as K,A as J,O as U,a as C,q as M,c as F,r as O,P as z,p as h,C as f,J as W,u as X}from"./index-02c43d49.js";function B(o,e,a){const t=o.slice();return t[1]=e[a],t}function H(o){let e,a,t,s,n,l,g,p,q,L=o[1].copy+"",j,k,b,d,V,w,I,D,P;return{c(){e=v("div"),a=v("div"),t=v("div"),s=v("img"),g=C(),p=v("div"),q=v("p"),j=M(L),k=C(),b=v("p"),d=v("a"),V=M("View project \xBB"),I=C(),this.h()},l(r){e=_(r,"DIV",{class:!0,style:!0});var i=m(e);a=_(i,"DIV",{class:!0});var E=m(a);t=_(E,"DIV",{class:!0});var S=m(t);s=_(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(u),g=F(E),p=_(E,"DIV",{class:!0});var T=m(p);q=_(T,"P",{class:!0});var y=m(q);j=O(y,L),y.forEach(u),k=F(T),b=_(T,"P",{class:!0});var A=m(b);d=_(A,"A",{class:!0,href:!0});var G=m(d);V=O(G,"View project \xBB"),G.forEach(u),A.forEach(u),T.forEach(u),E.forEach(u),I=F(i),i.forEach(u),this.h()},h(){z(s.src,n=o[1].src)||c(s,"src",n),c(s,"alt",l=o[1].alt),c(s,"class","svelte-7qg5e4"),c(t,"class","image svelte-7qg5e4"),c(q,"class","svelte-7qg5e4"),c(d,"class","slink"),c(d,"href",w=o[1].link),c(b,"class","svelte-7qg5e4"),c(p,"class","copy svelte-7qg5e4"),c(a,"class","card svelte-7qg5e4"),c(e,"class","project-card svelte-7qg5e4"),h(e,"--projectTilt",o[1].tilt),h(e,"--offsetTop",o[1].top),h(e,"--offsetLeft",o[1].left),h(e,"--mobileTop",o[1].mobileTop),h(e,"--mobileLeft",o[1].mobileLeft)},m(r,i){K(r,e,i),f(e,a),f(a,t),f(t,s),f(a,g),f(a,p),f(p,q),f(q,j),f(p,k),f(p,b),f(b,d),f(d,V),f(e,I),D||(P=W(a,"click",Z),D=!0)},p(r,i){i&1&&!z(s.src,n=r[1].src)&&c(s,"src",n),i&1&&l!==(l=r[1].alt)&&c(s,"alt",l),i&1&&L!==(L=r[1].copy+"")&&X(j,L),i&1&&w!==(w=r[1].link)&&c(d,"href",w),i&1&&h(e,"--projectTilt",r[1].tilt),i&1&&h(e,"--offsetTop",r[1].top),i&1&&h(e,"--offsetLeft",r[1].left),i&1&&h(e,"--mobileTop",r[1].mobileTop),i&1&&h(e,"--mobileLeft",r[1].mobileLeft)},d(r){r&&u(e),D=!1,P()}}}function Y(o){let e,a=o[0],t=[];for(let s=0;s<a.length;s+=1)t[s]=H(B(o,a,s));return{c(){e=v("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=_(s,"DIV",{class:!0});var n=m(e);for(let l=0;l<t.length;l+=1)t[l].l(n);n.forEach(u),this.h()},h(){c(e,"class","featured svelte-7qg5e4")},m(s,n){K(s,e,n);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(s,[n]){if(n&1){a=s[0];let l;for(l=0;l<a.length;l+=1){const g=B(s,a,l);t[l]?t[l].p(g,n):(t[l]=H(g),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=a.length}},i:J,o:J,d(s){s&&u(e),U(t,s)}}}function Z(o){let a=o.target.closest(".card"),t=document.querySelector(".show");a.classList.contains("show")?a.classList.remove("show"):(t&&t.classList.remove("show"),a.classList.add("show"))}function $(o,e,a){let{projects:t}=e;return o.$$set=s=>{"projects"in s&&a(0,t=s.projects)},[t]}class ee extends N{constructor(e){super(),Q(this,e,$,Y,R,{projects:0})}}export{ee as F};