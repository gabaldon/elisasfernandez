import{_ as v}from"./HeroSection.034306e5.js";import{_ as E}from"./nuxt-img.7ebec6e1.js";import{_ as h,k as i,o as n,c as r,F as g,x as d,y as w,b as m,m as N,z as O,n as I,f as S,u as j,g as R,w as L}from"./entry.b9bc3966.js";import{_ as C}from"./nuxt-layout.ff76437c.js";import{u as x}from"./vue.f36acd1f.f2695b41.js";import"./CustomSwitch.9391b7a0.js";const M=["onMousemove","onMouseleave"],P={__name:"PhotoGrid",props:{images:{type:[Array,Object],required:!0}},setup(A){const o=i(0),s=i(0),l=i(null);function e(t){l.value=t}function _(t){o.value=t.clientX+20,s.value=t.clientY}return(t,c)=>{const u=E;return n(),r("div",{class:"photos-container",onMousemove:_,onScroll:c[0]||(c[0]=(...a)=>t.hideTitles&&t.hideTitles(...a))},[(n(!0),r(g,null,d(A.images,(a,f)=>(n(),r("div",{key:f,class:w(a.horizontal?"img-container single-col cursor":"img-container cursor"),onMousemove:p=>a.text.show=!0,onMouseleave:p=>a.text.show=!1},[m(u,{class:"image",provider:"cloudinary",src:a.src,alt:a.title,loading:"lazy",sizes:"sm:355px md:320px lg:800px",onClick:p=>e(a)},null,8,["src","alt","onClick"])],42,M))),128))],32)}}},z=h(P,[["__scopeId","data-v-d1b40f5f"]]),T={class:"photos-container"},y={__name:"PhotoSettings",setup(A){N(()=>{window.addEventListener("scroll",s)}),O(()=>{window.removeEventListener("scroll",s)});const o=i([{name:"/v1694527754/roju_1_lkasxh.jpg",title:"ROJU, SONIDO MUCHACHO",show:!1},{name:"/v1695130790/manolo1_etlree.jpg",title:"MANOLO CARO, ICON EL PAÍS",show:!1},{name:"/v1694527753/madre_2_n9y752.jpg",title:"ANTONIA",show:!1},{name:"/v1694527756/FLACA_MECHERO_abmrzx.jpg",title:"FLACA",show:!1},{name:"/v1694527749/badgyal_candy_8_wartpy.jpg",title:"BAD GYAL, TENTACIONES EL PAÍS",show:!1},{name:"/v1694527752/dave_eggers_1_cghtpu.jpg",title:"DAVE EGGERS, ICON EL PAÍS",show:!1},{name:"/v1694527753/maria_gafas_xofkef.jpg",title:"MARÍA",show:!1},{name:"/v1695130796/rodrigo2_jfqjiv.jpg",title:"RODRIGO CUEVAS, ICON EL PAIS",show:!1},{name:"/v1694527758/portada_sa2pem.jpg",title:"ONTO THE EARTH",show:!1},{name:"/v1694527756/ARUFE_AN%CC%83O_NUEVO_ntuxto.jpg",title:"ARUFE",show:!1},{name:"/v1694527753/SR_PERFIL_zlhj2j.jpg",title:"SOFIA",show:!1},{name:"/v1694527749/edificio_1_bzq6qq.jpg",title:"MADRID",show:!1},{name:"/v1694527750/ny_2_vfphsh.jpg",title:"NEW YORK",show:!1},{name:"/v1694527750/nairobi_3_vzuilc.jpg",title:"NAIROBI, RETINA X MASTERCARD",horizontal:!0,show:!1},{name:"/v1694527751/montana_5_lb2quj.jpg",title:"AZERBAIJAN",show:!1},{name:"/v1694527749/hochiminh_6_qqbmo2.jpg",title:"HO CHI MINH",horizontal:!0,show:!1},{name:"/v1694527754/osama_w7hvaa.jpg",title:"OSAMA Y ENRIQUE, ICON EL PAIS",show:!1},{name:"/v1695130797/clara_xzwrqz.jpg",title:"CLARA LAGO, TAPAS MAGAZINE",show:!1},{name:"/v1694527754/dora_rwmzqs.jpg",title:"DORA",show:!1},{name:"/v1695130788/kokoshca_xt8fy0.jpg",title:"KOKOSHCA, SONIDO MUCHACHO",horizontal:!0,show:!1},{name:"/v1695130796/german_cuhxzx.jpg",title:"GERMÁN ALCARAZU, ICON EL PAÍS",show:!1},{name:"/v1694527750/Retina_10_uxb17h.jpg",title:"ADEYEMI AJAO, RETINA EL PÁIS",show:!1},{name:"/v1694527754/ALASKA_RETINA_fdzzvc.jpg",title:"ALASKA, RETINA EL PAÍS",show:!1},{name:"/v1694527755/INGRID_t8f7vq.jpg",title:"INGRID GARCÍA-JONSSON, RETINA EL PAÍS",show:!1},{name:"/v1694527757/Palomo_Spain_Naranja_4_jblvb9.jpg",title:"PALOMO SPAIN, ICON EL PAÍS",show:!1},{name:"/v1694527749/coche_3_wlzx47.jpg",title:"MARÍA",horizontal:!0,show:!1},{name:"/v1694527755/megansito_ki391y.jpg",title:"MEGANSITO EL GUAPO",show:!1},{name:"/v1694527750/joon_color_11_hxfepo.jpg",title:"J-ZOON",show:!1},{name:"/v1694527752/MariaKfisherman_1_mrt4l6.jpg",title:"MARIA KE FISHERMAN, TENTACIONES EL PAÍS",show:!1},{name:"/v1694527750/yung_beef_2_hhldai.jpg",title:"YUNG BEEF, TENTACIONES EL PAÍS",show:!1},{name:"/v1694527749/retina_product_vcuels.jpg",title:"FORMAS CON ALMA, RETINA EL PAÍS",show:!1},{name:"/v1694527751/Sita_abellan_5_y73lcy.jpg",title:"SITA ABELLÁN, TENTACIONES EL PAÍS",show:!1},{name:"/v1694527758/Palomo_Spain_BN_3_aeekvh.jpg",title:"PALOMO SPAIN, ICON EL PAÍS",horizontal:!0,show:!1},{name:"/v1695130794/eva_soriano_tapas_tbcf48.jpg",title:"EVA SORIANO, TAPAS MAGAZINE",show:!1},{name:"/v1694527752/elena_li_chen_o7hhpm.jpg",title:"ELENA LI CHEN, UNOMODELS",show:!1},{name:"/v1694527757/mama_patos_p0iwli.jpg",title:"MAMÁ",show:!1},{name:"/v1694527756/maria_agua_kioxkn.jpg",title:"MARÍA",show:!1},{name:"/v1694527758/yawners_front_zkczaw.jpg",title:"YAWNERS",horizontal:!0,show:!1}]);function s(){o.value=o.value.map(e=>({...e,show:!1}))}const l=I(()=>o.value.map(e=>({src:e.name,horizontal:e.horizontal?e.horizontal:null,text:{title:e.title,show:e.show}})));return(e,_)=>{const t=z;return n(),r("div",T,[m(t,{images:l.value},null,8,["images"])])}}},G=y,b=S({__name:"photos",setup(A){const{t:o}=j();return x({title:o("head.title"),meta:[{name:o("head.title"),content:o("head.photo-description")}]}),(s,l)=>{const e=v,_=G,t=C;return n(),R(t,null,{default:L(()=>[m(e),m(_)]),_:1})}}});const F=h(b,[["__scopeId","data-v-73c3cdd9"]]);export{F as default};
