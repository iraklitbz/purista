import{D as r,C as f,W as u,o as l,c as i,f as p,a8 as c}from"./entry.924b29e5.js";function h(o){let t,n=o[0],s=1;for(;s<o.length;){const e=o[s],a=o[s+1];if(s+=2,(e==="optionalAccess"||e==="optionalCall")&&n==null)return;e==="access"||e==="optionalAccess"?(t=n,n=a(n)):(e==="call"||e==="optionalCall")&&(n=a((...d)=>n.call(t,...d)),t=void 0)}return n}const m=["id"],C=["href"],k=r({__name:"ProseH3",props:{id:{}},setup(o){const t=o,{headings:n}=f().public.mdc,s=u(()=>t.id&&h([n,"optionalAccess",e=>e.anchorLinks,"optionalAccess",e=>e.h3]));return(e,a)=>(l(),i("h3",{id:e.id},[e.id&&p(s)?(l(),i("a",{key:0,href:`#${e.id}`},[c(e.$slots,"default")],8,C)):c(e.$slots,"default",{key:1})],8,m))}});export{k as default};
