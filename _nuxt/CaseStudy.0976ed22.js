import{_ as d}from"./CustomButton.69a56299.js";import{_ as p}from"./nuxt-link.24b83314.js";import{f as l,o as i,c as u,a as e,b as o,w as r,d as n,t as _,_ as f}from"./entry.d0c7671a.js";const y={class:"case-study-container"},m={class:"floating-btn"},h=["data"],x=["href"],b=l({__name:"CaseStudy",props:{pdfUrl:{type:String,required:!0},nextProjectUrl:{type:String,required:!0},prototypeUrl:{type:String,required:!0}},setup(t){return(a,g)=>{const s=d,c=p;return i(),u("div",y,[e("div",m,[o(c,{to:t.prototypeUrl,rel:"prototype"},{default:r(()=>[o(s,{type:"primary"},{default:r(()=>[n(_(a.$t("prototype")),1)]),_:1})]),_:1},8,["to"]),o(c,{to:t.nextProjectUrl,rel:"next-project"},{default:r(()=>[o(s,{type:"with-border"},{default:r(()=>[n(_(a.$t("next-project")),1)]),_:1})]),_:1},8,["to"])]),e("object",{class:"pdf",data:t.pdfUrl,type:"application/pdf"},[e("p",null,[n(" Your web browser doesn't have a PDF plugin. Instead you can "),e("a",{href:t.pdfUrl,"aria-label":"click here to download the PDF file"}," click here to download the PDF file. ",8,x)])],8,h)])}}});const S=f(b,[["__scopeId","data-v-bd4c6f76"]]);export{S as _};
