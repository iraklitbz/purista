import{_ as h}from"./nuxt-link.1a8297be.js";import{u as i,i as v,j as b,h as y,o as r,c,a as t,F as w,r as k,b as u,w as _,f as e,d as $,t as p}from"./entry.7a543543.js";import{u as B}from"./composables.f898cf4e.js";import{g as C}from"./index.4a1114bc.js";const N={class:"max-w-4xl mx-auto mt-10 parrafBox px-5 md:px-0"},P={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},q={class:"rounded-xl shadow-md overflow-hidden"},L=["src"],V={class:"p-1 lg:p-1 text-center"},j={class:"text-lg lg:text-2xl"},A={class:"my-1 lg:my-1.5"},E={class:"prod-card-v2__price text-primary font-bold text-xl"},F={__name:"ProductsComponent",async setup(I){let o,l;i();const n=B(),{locale:a}=i(),m=C`
      query GetProductsEdges($locale: I18NLocaleCode!) {
        products(locale: $locale, pagination: { limit: 4 }) {
          data {
            id
            attributes {
              title
              price
              slug
              feature {
                data {
                  attributes {
                    formats
                  }
                }
              }
            }
          }
        }
      }
  `,{data:g}=([o,l]=v(()=>b(m,{locale:a.value})),o=await o,l(),o),x=y(g.value.products.data);return(D,G)=>{const d=h;return r(),c("div",N,[t("div",P,[(r(!0),c(w,null,k(e(x),(s,f)=>(r(),c("div",{key:f,class:"prod-card-v2 mb-10 group"},[u(d,{to:e(n)(`/products/${s.attributes.slug}`,e(a)),class:"prod-card-v2__img-link rounded-lg shadow-md"},{default:_(()=>[t("figure",q,[t("img",{class:"w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105",src:s.attributes.feature.data.attributes.formats.small.url},null,8,L)])]),_:2},1032,["to"]),t("div",V,[t("h2",j,[u(d,{to:e(n)(`/products/${s.attributes.slug}`,e(a)),class:"product-card-v2__title text-lg font-bold leading-4 hover:text-primary transition-colors ease-in duration-200"},{default:_(()=>[$(p(s.attributes.title),1)]),_:2},1032,["to"])]),t("div",A,[t("span",E,p(s.attributes.price)+" ₾ ",1)])])]))),128))])])}}},H=F;export{H as _};
