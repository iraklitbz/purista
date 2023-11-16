import{aa as _,D as q,W as b,ab as k,h as x,ac as A,ad as L,ae as T,N,af as B,H as C,a3 as E,a0 as w,ag as U,ah as j,ai as I,G as O,a1 as V,C as D,aj as P,ak as z}from"./entry.924b29e5.js";async function R(a,n=_()){const{path:u,matched:e}=n.resolve(a);if(!e.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(u)))return;const l=n._preloadPromises=n._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>R(a,n));n._routePreloaded.add(u);const i=e.map(s=>{var t;return(t=s.components)==null?void 0:t.default}).filter(s=>typeof s=="function");for(const s of i){const t=Promise.resolve(s()).catch(()=>{}).finally(()=>l.splice(l.indexOf(t)));l.push(t)}await Promise.all(l)}const F=(...a)=>a.find(n=>n!==void 0),H="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function M(a){const n=a.componentName||"NuxtLink",u=(e,l)=>{if(!e||a.trailingSlash!=="append"&&a.trailingSlash!=="remove")return e;const i=a.trailingSlash==="append"?O:V;if(typeof e=="string")return i(e,!0);const s="path"in e?e.path:l(e).path;return{...e,name:void 0,path:i(s,!0)}};return q({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=_(),s=D(),t=b(()=>{const r=e.to||e.href||"";return u(r,i.resolve)}),d=b(()=>typeof t.value=="string"&&k(t.value,{acceptRelative:!0})),v=b(()=>e.external||e.target&&e.target!=="_self"?!0:typeof t.value=="object"?!1:t.value===""||d.value),y=x(!1),h=x(null),S=r=>{var f;h.value=e.custom?(f=r==null?void 0:r.$el)==null?void 0:f.nextElementSibling:r==null?void 0:r.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!G()){const f=P();let m,o=null;A(()=>{const p=$();L(()=>{m=T(()=>{var g;(g=h==null?void 0:h.value)!=null&&g.tagName&&(o=p.observe(h.value,async()=>{o==null||o(),o=null;const c=typeof t.value=="string"?t.value:i.resolve(t.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",c).catch(()=>{}),!v.value&&R(t.value,i).catch(()=>{})]),y.value=!0}))})})}),N(()=>{m&&B(m),o==null||o(),o=null})}return()=>{var p,g;if(!v.value){const c={ref:S,to:t.value,activeClass:e.activeClass||a.activeClass,exactActiveClass:e.exactActiveClass||a.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(y.value&&(c.class=e.prefetchedClass||a.prefetchedClass),c.rel=e.rel),C(E("RouterLink"),c,l.default)}const r=typeof t.value=="object"?((p=i.resolve(t.value))==null?void 0:p.href)??null:t.value&&!e.external&&!d.value?u(w(s.app.baseURL,t.value),i.resolve):t.value||null,f=e.target||null,m=e.noRel?null:F(e.rel,a.externalRelAttribute,r?H:"")||null,o=()=>z(r,{replace:e.replace});return e.custom?l.default?l.default({href:r,navigate:o,get route(){if(!r)return;const c=U(r);return{path:c.pathname,fullPath:c.pathname,get query(){return j(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:r}},rel:m,target:f,isExternal:v.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:h,href:r,rel:m,target:f},(g=l.default)==null?void 0:g.call(l))}}})}const W=M(I);function $(){const a=P();if(a._observer)return a._observer;let n=null;const u=new Map,e=(i,s)=>(n||(n=new IntersectionObserver(t=>{for(const d of t){const v=u.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&v&&v()}})),u.set(i,s),n.observe(i),()=>{u.delete(i),n.unobserve(i),u.size===0&&(n.disconnect(),n=null)});return a._observer={observe:e}}function G(){const a=navigator.connection;return!!(a&&(a.saveData||/2g/.test(a.effectiveType)))}export{W as _};
