import{f as r,V as m,A as f,W as c,n as P,k as h,X as l,Y as v,Z as L,M as b,$ as g,N as u,a0 as A,a1 as R,a2 as S,a3 as T,a4 as _,a5 as j,s as x}from"./entry.6868a192.js";const k=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(a,o){const t=await l[a.name]().then(e=>e.default||e);return()=>u(t,a.layoutProps,o.slots)}}),C=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(a,o){const t=b(),e=m(g),s=e===f()?c():e,n=P(()=>x(a.name)??s.meta.layout??"default"),i=h();o.expose({layoutRef:i});const p=t.deferHydration();return()=>{const d=n.value&&n.value in l,y=s.meta.layoutTransition??v;return L(T,d&&y,{default:()=>u(S,{suspensible:!0,onResolve:()=>{R(p)}},{default:()=>u(B,{layoutProps:A(o.attrs,{ref:i}),key:n.value,name:n.value,shouldProvide:!a.name,hasTransition:!!y},o.slots)})}).default()}}}),B=r({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(a,o){const t=a.name;return a.shouldProvide&&_(j,{isCurrent:e=>t===(e.meta.layout??"default")}),()=>{var e,s;return!t||typeof t=="string"&&!(t in l)?(s=(e=o.slots).default)==null?void 0:s.call(e):u(k,{key:t,layoutProps:a.layoutProps,name:t},o.slots)}}});export{C as _};