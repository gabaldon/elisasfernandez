import{i as r,q as m,P as f,s as c,v as P,g as v,k as L,x as l,y as h,z as g,A as S,B as T,C as u,D as b,E as x,S as A,T as R,G as _,L as j}from"./entry.20b39391.js";const B=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(a,o){const t=await l[a.name]().then(e=>e.default||e);return()=>u(t,a.layoutProps,o.slots)}}),N=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(a,o){const t=S(),e=m(f),s=e===c()?P():e,n=v(()=>T(a.name)??s.meta.layout??"default"),i=L();o.expose({layoutRef:i});const p=t.deferHydration();return()=>{const d=n.value&&n.value in l,y=s.meta.layoutTransition??h;return g(R,d&&y,{default:()=>u(A,{suspensible:!0,onResolve:()=>{x(p)}},{default:()=>u(k,{layoutProps:b(o.attrs,{ref:i}),key:n.value,name:n.value,shouldProvide:!a.name,hasTransition:!!y},o.slots)})}).default()}}}),k=r({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(a,o){const t=a.name;return a.shouldProvide&&_(j,{isCurrent:e=>t===(e.meta.layout??"default")}),()=>{var e,s;return!t||typeof t=="string"&&!(t in l)?(s=(e=o.slots).default)==null?void 0:s.call(e):u(B,{key:t,layoutProps:a.layoutProps,name:t},o.slots)}}});export{N as _};
