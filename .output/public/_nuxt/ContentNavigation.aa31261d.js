import{h as p,u as f}from"./asyncData.f1ad068e.js";import{B as v,O as g,C as d,P as l,Q as h,x as _,D as C,G as r}from"./entry.05815345.js";import{q as y,w as m,e as w,s as P,j as $,u as N}from"./query.a3065896.js";import{u as j}from"./preview.8d9be590.js";import{_ as D}from"./nuxt-link.caff1ed9.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=y(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./client-db.ac548cba.js"),["./client-db.ac548cba.js","./entry.05815345.js","./entry.20b0b54d.css","./query.a3065896.js","./asyncData.f1ad068e.js","./preview.8d9be590.js","./index.13aa9e49.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},x=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=C(),{navigation:a}=e,s=o=>r(D,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),R=x;export{R as default};