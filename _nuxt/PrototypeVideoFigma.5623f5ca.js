import{h as r,o as t,c as o,F as l,i as d,n as p,a as u,t as m,_ as i,j as y,b as g}from"./entry.9723afbf.js";const v={class:"switch-container"},h=["onClick"],f=r({__name:"CustomSwitch",props:{options:{type:Array,required:!0},selectedOption:{type:String,required:!0}},emits:["change"],setup(s,{emit:n}){function a(c){n("change",c)}return(c,_)=>(t(),o("div",v,[(t(!0),o(l,null,d(s.options,e=>(t(),o("div",{key:e,class:p(["option",{selected:e==s.selectedOption}]),onClick:w=>a(e)},[u("p",null,m(e),1)],10,h))),128))]))}});const x=i(f,[["__scopeId","data-v-2dacc3e7"]]),C={class:"prototype-container"},k=["src"],S=["src"],V=r({__name:"PrototypeVideoFigma",props:{figmaUrl:{type:String,required:!0},videoUrl:{type:String,required:!0}},setup(s){const n=y("Video");function a(c){n.value=c}return(c,_)=>{const e=x;return t(),o("div",C,[g(e,{options:["Video","Figma"],"selected-option":n.value,onChange:a},null,8,["selected-option"]),n.value=="Figma"?(t(),o("iframe",{key:0,class:"prototype",src:s.figmaUrl,allowfullscreen:""},null,8,k)):(t(),o("video",{key:1,controls:"",autoplay:"",src:s.videoUrl,class:"prototype"},null,8,S))])}}});const $=i(V,[["__scopeId","data-v-568a02fd"]]);export{$ as _};
