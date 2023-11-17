import{q as a,s as m,v as $,f as S,x as h,y as G}from"./entry.05815345.js";import{h as w,u as E}from"./asyncData.f1ad068e.js";const C=a`
    query faqs($locale: I18NLocaleCode!) {
  faqs(locale: $locale) {
    data {
      attributes {
        question
        answer
      }
    }
  }
}
    `,L=a`
    query outstanding($locale: I18NLocaleCode!) {
  products(locale: $locale, pagination: {limit: 4}) {
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
    `,N=a`
    query products($locale: I18NLocaleCode!) {
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
    `,D=a`
    query product($slug: String!, $locale: I18NLocaleCode!) {
  products(locale: $locale, filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        title
        price
        slug
        description
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
    `,I=(t,u,e)=>t();function _(t,u=I){return{faqs(e,n){return u(o=>t.request(C,e,{...n,...o}),"faqs","query")},outstanding(e,n){return u(o=>t.request(L,e,{...n,...o}),"outstanding","query")},products(e,n){return u(o=>t.request(N,e,{...n,...o}),"products","query")},product(e,n){return u(o=>t.request(D,e,{...n,...o}),"product","query")}}}const k={default:_},y={default:["faqs","outstanding","products","product"]},O=()=>{const t=G();if(!t._gqlState)throw new Error("GQL State is not available.");return t==null?void 0:t._gqlState};function x(){const t=O(),u=A();return(...e)=>{var r;const n=(typeof(e==null?void 0:e[0])!="string"&&"operation"in(e==null?void 0:e[0])?e[0].operation:e[0])??void 0,o=(typeof(e==null?void 0:e[0])!="string"&&"variables"in(e==null?void 0:e[0])?e[0].variables:e[1])??void 0,c=Object.keys(y).find(s=>y[s].includes(n))??"default",{instance:l}=(r=t.value)==null?void 0:r[c];if(!l)throw new Error("Invalid GraphQL Operation");return k[c](l,async(s,v,b)=>{var d,p,q,f;try{return await s()}catch(i){throw u.value={client:c,operationType:b,operationName:v,statusCode:(d=i==null?void 0:i.response)==null?void 0:d.status,gqlErrors:((p=i==null?void 0:i.response)==null?void 0:p.errors)||((q=i==null?void 0:i.response)==null?void 0:q.message)&&[{message:(f=i==null?void 0:i.response)==null?void 0:f.message}]||[]},t.value.onError&&t.value.onError(u.value),u.value}})[n](o)}}const A=()=>h("_gqlErrors",()=>null);function R(...t){const u=l=>l&&m(l)?l:$(l),e=(typeof(t==null?void 0:t[0])!="string"&&"options"in(t==null?void 0:t[0])?t[0].options:t[2])??{},n=(typeof(t==null?void 0:t[0])!="string"&&"operation"in(t==null?void 0:t[0])?t[0].operation:t[0])??void 0,o=(typeof(t==null?void 0:t[0])!="string"&&"variables"in(t==null?void 0:t[0])?u(t[0].variables):t[1]&&u(t[1]))??void 0;o&&(e.watch=e.watch||[],e.watch.push(o));const c=`gql:data:${w({operation:n,variables:o})}`;return E(c,()=>x()(n,S(o)),e)}export{R as u};
