import{P as o,i as u,Q as f,R as d,q as v,S as i,T as l,U as h,V as m}from"./entry.cff48877.js";function I(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),h()&&(v(()=>{r.dispose()}),i(()=>{s.value=!0}),l(()=>{s.value=!1})),r}export{I as u};