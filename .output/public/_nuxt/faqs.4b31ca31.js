import{_ as f}from"./nuxt-icon.vue.64877757.js";import{h as u,u as h,i as v,c as o,a as t,F as q,r as w,f as r,j as k,o as l,n as _,t as d,b as C,k as A}from"./entry.924b29e5.js";import{g as N}from"./index.5ada8b90.js";const $={class:"max-w-3xl mx-auto py-10 px-5 md:px-0"},B={class:"w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-3xl"},F={class:"my-10"},V=["onClick"],j={class:"text-lg lg:text-xl text-left"},E={key:0,class:"pt-1.5 lg:pt-2 px-5 lg:px-8 pb-5 lg:pb-8"},I={class:"text-component leading-snug text-space-y-md"},L={class:"text-gray-600 text-lg"},J={__name:"faqs",async setup(z){let s,c;const a=u(null),{locale:m}=h(),p=N`
      query GetFaqsEdges($locale: I18NLocaleCode!) {
        faqs(locale: $locale) {
          data {
            attributes {
                question
                answer
            }
          }
        }
      }
  `,{data:x}=([s,c]=v(()=>k(p,{locale:m.value})),s=await s,c(),s),y=u(x.value.faqs.data),g=n=>{a.value=a.value===n?null:n};return(n,D)=>{const b=f;return l(),o("section",null,[t("main",null,[t("div",$,[t("section",null,[t("div",B,[t("ul",F,[(l(!0),o(q,null,w(r(y),(i,e)=>(l(),o("li",{key:e,class:_(["border-b border-solid border-gray-200 hover:border-b-gray-400 transition-all ease-in-out duration-300",e===1?"border-t border-solid border-gray-200 ":""])},[t("button",{class:"py-3 lg:py-5 w-full flex justify-between items-center",type:"button",onClick:G=>g(e)},[t("span",j,d(i.attributes.question),1),C(b,{name:"plus",class:_(["icon icon-stroke text-2xl text-primary relative transition-all ease-in-out duration-300",r(a)===e?"rotate-45":""])},null,8,["class"])],8,V),r(a)===e?(l(),o("div",E,[t("div",I,[t("p",L,d(i.attributes.answer),1)])])):A("",!0)],2))),128))])])])])])])}}};export{J as default};
