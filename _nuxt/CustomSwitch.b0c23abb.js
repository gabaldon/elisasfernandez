import{f as r,o as t,c as s,F as _,v as i,x as l,a as d,t as p,_ as u}from"./entry.edd42396.js";const m={class:"switch-container"},h=["onClick"],v=r({__name:"CustomSwitch",props:{options:{type:Array,required:!0},selectedOption:{type:String,required:!0}},emits:["change"],setup(n,{emit:o}){function a(c){o("change",c)}return(c,y)=>(t(),s("div",m,[(t(!0),s(_,null,i(n.options,e=>(t(),s("div",{key:e,class:l(["option",{selected:e==n.selectedOption}]),onClick:f=>a(e)},[d("p",null,p(e),1)],10,h))),128))]))}});const x=u(v,[["__scopeId","data-v-2dacc3e7"]]);export{x as _};
