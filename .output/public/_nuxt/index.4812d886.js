import{_ as v}from"./nuxt-link.1a8297be.js";import{u as y,i as w,h as $,c as a,a as t,t as r,F as _,r as p,f as e,j as k,o as l,b as m,w as x,d as B}from"./entry.7a543543.js";import{u as N}from"./composables.f898cf4e.js";import{g as q}from"./index.4a1114bc.js";const C={class:"max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0"},L={class:"parrafBox mb-10"},P={class:"text-2xl font-bold"},V={class:"mt-6 text-base text-contrast-medium"},j={class:"mb-2"},A={class:"grid grid-cols-2 md:grid-cols-3 gap-4"},E={class:"rounded-xl shadow-md overflow-hidden"},F=["src"],I={class:"p-1 lg:p-1 text-center"},D={class:"text-lg lg:text-xl mt-2"},G={class:"my-1 lg:my-1.5"},Q={class:"prod-card-v2__price text-xl text-primary font-bold"},M={__name:"index",async setup(S){let o,d;const{locale:c}=y(),n=N(),h=q`
        query GetProductsEdges($locale: I18NLocaleCode!) {
          products(locale: $locale) {
            data {
              id
              attributes {
                title
                price
                slug
                feature {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
    `,{data:g}=([o,d]=w(()=>k(h,{locale:c.value})),o=await o,d(),o),f=$(g.value.products.data);return(i,T)=>{const u=v;return l(),a("section",null,[t("main",null,[t("div",C,[t("div",L,[t("h2",P,r(i.$t("store.title")),1),t("div",V,[(l(),a(_,null,p(3,s=>t("p",j,r(i.$t(`store.box1.subtitle${s}`)),1)),64))])]),t("div",A,[(l(!0),a(_,null,p(e(f),(s,b)=>(l(),a("div",{key:b,class:"prod-card-v2 group"},[m(u,{to:e(n)(`/products/${s.attributes.slug}`,e(c)),class:"prod-card-v2__img-link rounded-lg shadow-md"},{default:x(()=>[t("figure",E,[t("img",{class:"w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105",src:s.attributes.feature.data.attributes.url},null,8,F)])]),_:2},1032,["to"]),t("div",I,[t("h2",D,[m(u,{to:e(n)(`/products/${s.attributes.slug}`,e(c)),class:"product-card-v2__title text-lg font-bold hover:text-primary transition-colors ease-in duration-200"},{default:x(()=>[B(r(s.attributes.title),1)]),_:2},1032,["to"])]),t("div",G,[t("span",Q,r(s.attributes.price)+" ₾ ",1)])])]))),128))])])])])}}};export{M as default};
