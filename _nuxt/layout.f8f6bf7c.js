import{j as r,m,P as f,q as c,s as P,h,l as v,v as l,x as L,y as S,z as T,A as b,B as u,C as g,D as j,S as x,T as A,E as R,L as _}from"./entry.d4ada3b3.js";const B=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(a,o){const t=await l[a.name]().then(e=>e.default||e);return()=>u(t,a.layoutProps,o.slots)}}),N=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(a,o){const t=T(),e=m(f),s=e===c()?P():e,n=h(()=>b(a.name)??s.meta.layout??"default"),i=v();o.expose({layoutRef:i});const p=t.deferHydration();return()=>{const d=n.value&&n.value in l,y=s.meta.layoutTransition??L;return S(A,d&&y,{default:()=>u(x,{suspensible:!0,onResolve:()=>{j(p)}},{default:()=>u(C,{layoutProps:g(o.attrs,{ref:i}),key:n.value,name:n.value,shouldProvide:!a.name,hasTransition:!!y},o.slots)})}).default()}}}),C=r({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(a,o){const t=a.name;return a.shouldProvide&&R(_,{isCurrent:e=>t===(e.meta.layout??"default")}),()=>{var e,s;return!t||typeof t=="string"&&!(t in l)?(s=(e=o.slots).default)==null?void 0:s.call(e):u(B,{key:t,layoutProps:a.layoutProps,name:t},o.slots)}}});export{N as _};
