import{_ as h}from"./nuxt-link.caff1ed9.js";import{u as i,i as f,h as v,o as r,c,a as t,F as b,r as w,b as _,w as u,f as o,d as y,t as p}from"./entry.05815345.js";import{u as k}from"./composables.c21d4ec3.js";import{u as B}from"./index.c4eb7614.js";const C={class:"max-w-4xl mx-auto mt-10 parrafBox px-5 md:px-0"},N={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},P={class:"rounded-xl shadow-md overflow-hidden"},V=["src"],$={class:"p-1 lg:p-1 text-center"},A={class:"text-lg lg:text-2xl"},F={class:"my-1 lg:my-1.5"},L={class:"prod-card-v2__price text-primary font-bold text-xl"},j={__name:"ProductsComponent",async setup(q){let a,n;i();const l=k(),{locale:e}=i(),{data:m}=([a,n]=f(()=>B({operation:"outstanding",variables:{locale:e.value}})),a=await a,n(),a),x=v(m.value.products.data);return(D,E)=>{const d=h;return r(),c("div",C,[t("div",N,[(r(!0),c(b,null,w(o(x),(s,g)=>(r(),c("div",{key:g,class:"prod-card-v2 mb-10 group"},[_(d,{to:o(l)(`/products/${s.attributes.slug}`,o(e)),class:"prod-card-v2__img-link rounded-lg shadow-md"},{default:u(()=>[t("figure",P,[t("img",{class:"w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105",src:s.attributes.feature.data.attributes.formats.small.url},null,8,V)])]),_:2},1032,["to"]),t("div",$,[t("h2",A,[_(d,{to:o(l)(`/products/${s.attributes.slug}`,o(e)),class:"product-card-v2__title text-lg font-bold leading-4 hover:text-primary transition-colors ease-in duration-200"},{default:u(()=>[y(p(s.attributes.title),1)]),_:2},1032,["to"])]),t("div",F,[t("span",L,p(s.attributes.price)+" ₾ ",1)])])]))),128))])])}}},z=j;export{z as _};