import{C as f,S as p,U as v,D as g,V as d,W as l,X as h,Y as _,E as C,H as r}from"./entry.7a543543.js";import{q as y,w as m,e as w,s as P,j as $,u as N}from"./query.c66a4771.js";import{u as j}from"./preview.49793c9e.js";import{_ as D}from"./nuxt-link.1a8297be.js";const E=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=y(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./client-db.edb6c514.js"),["./client-db.edb6c514.js","./entry.7a543543.js","./entry.20b0b54d.css","./query.c66a4771.js","./preview.49793c9e.js","./index.13aa9e49.js","./_commonjsHelpers.23102255.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},T=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await _(`content-navigation-${p(a.value)}`,()=>E(a.value));return{navigation:s}},render(e){const t=C(),{navigation:a}=e,s=o=>r(D,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),O=T;export{O as default};