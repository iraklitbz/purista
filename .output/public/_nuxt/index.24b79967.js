import{B as c,z as v,C as $,f as S,D as h,E as D}from"./entry.bfe4695d.js";import{h as E,u as G}from"./index.10dfe276.js";const C=c`
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
    `,w=c`
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
    `,I=c`
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
              formats
              url
            }
          }
        }
      }
    }
  }
}
    `,L=c`
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
              formats
              url
            }
          }
        }
      }
    }
  }
}
    `,N=c`
    query user($id: ID) {
  usersPermissionsUser(id: $id) {
    data {
      attributes {
        email
        company {
          data {
            attributes {
              name
              street
              city
              postal
            }
          }
        }
      }
    }
  }
}
    `,_=(t,n,e)=>t();function k(t,n=_){return{faqs(e,u){return n(o=>t.request(C,e,{...u,...o}),"faqs","query")},outstanding(e,u){return n(o=>t.request(w,e,{...u,...o}),"outstanding","query")},products(e,u){return n(o=>t.request(I,e,{...u,...o}),"products","query")},product(e,u){return n(o=>t.request(L,e,{...u,...o}),"product","query")},user(e,u){return n(o=>t.request(N,e,{...u,...o}),"user","query")}}}const O={default:k},y={default:["faqs","outstanding","products","product","user"]},P=()=>{const t=D();if(!t._gqlState)throw new Error("GQL State is not available.");return t==null?void 0:t._gqlState};function A(){const t=P(),n=Q();return(...e)=>{var r;const u=(typeof(e==null?void 0:e[0])!="string"&&"operation"in(e==null?void 0:e[0])?e[0].operation:e[0])??void 0,o=(typeof(e==null?void 0:e[0])!="string"&&"variables"in(e==null?void 0:e[0])?e[0].variables:e[1])??void 0,a=Object.keys(y).find(l=>y[l].includes(u))??"default",{instance:i}=(r=t.value)==null?void 0:r[a];if(!i)throw new Error("Invalid GraphQL Operation");return O[a](i,async(l,m,b)=>{var d,p,q,f;try{return await l()}catch(s){throw n.value={client:a,operationType:b,operationName:m,statusCode:(d=s==null?void 0:s.response)==null?void 0:d.status,gqlErrors:((p=s==null?void 0:s.response)==null?void 0:p.errors)||((q=s==null?void 0:s.response)==null?void 0:q.message)&&[{message:(f=s==null?void 0:s.response)==null?void 0:f.message}]||[]},t.value.onError&&t.value.onError(n.value),n.value}})[u](o)}}const Q=()=>h("_gqlErrors",()=>null);function j(...t){const n=i=>i&&v(i)?i:$(i),e=(typeof(t==null?void 0:t[0])!="string"&&"options"in(t==null?void 0:t[0])?t[0].options:t[2])??{},u=(typeof(t==null?void 0:t[0])!="string"&&"operation"in(t==null?void 0:t[0])?t[0].operation:t[0])??void 0,o=(typeof(t==null?void 0:t[0])!="string"&&"variables"in(t==null?void 0:t[0])?n(t[0].variables):t[1]&&n(t[1]))??void 0;o&&(e.watch=e.watch||[],e.watch.push(o));const a=`gql:data:${E({operation:u,variables:o})}`;return G(a,()=>A()(u,S(o)),e)}export{j as u};
