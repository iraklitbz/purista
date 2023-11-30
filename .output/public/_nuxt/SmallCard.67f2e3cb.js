import{_ as x}from"./nuxt-link.cfba6c9a.js";import{u as h,o as f,c as v,a as e,b as y,w as b,d as g,t as i,f as a,n as s,x as w,y as k}from"./entry.bfe4695d.js";import{u as C}from"./composables.972c961f.js";import{u as q}from"./cart.be0b1d42.js";const B={class:"group"},S={class:"flex"},V={class:"rounded-xl shadow-md overflow-hidden w-16 h-16 mr-3"},j=["src"],I={class:"flex flex-col justify-between"},N={class:"text-white"},T={class:"mt-3 flex"},$={class:"number-input mr-2 w-[60px]"},D=["id"],P={__name:"SmallCard",props:{product:{type:Object,default:()=>({})},alternative:{type:Boolean,default:!1}},setup(l){const t=l,c=q(),{removeFromCart:d}=c,{locale:u}=h(),p=C(),m=o=>o.length>20?o.substring(0,20)+"...":o;return(o,r)=>{const _=x;return f(),v("div",B,[e("div",S,[e("figure",V,[e("img",{class:"w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105",src:t.product.attributes.feature.data.attributes.formats.small.url},null,8,j)]),e("div",I,[e("h3",N,[y(_,{to:a(p)(`/products/${t.product.attributes.slug}`,a(u)),class:s(["hover:text-primary transition-colors ease-in duration-200",{"text-white":!t.alternative,"text-black":t.alternative}])},{default:b(()=>[g(i(m(t.product.attributes.title)),1)]),_:1},8,["to","class"])]),e("div",T,[e("div",$,[w(e("input",{"onUpdate:modelValue":r[0]||(r[0]=n=>t.product.quantity=n),class:s(["form-control appearance-none w-full border border-none px-3 rounded-md text-md leading-2 transition duration-200 outline-none placeholder:opacity-100 placeholder:text-gray-400",{"bg-primary-dark":!t.alternative,"bg-primary-lighter text-primary-darker":t.alternative}]),type:"number",name:"qtyInput",id:"qtyInput_"+t.product.id,min:"1",max:"50",step:"1"},null,10,D),[[k,t.product.quantity]])]),e("p",{class:s(["mr-2",{"text-primary-light":!t.alternative,"text-primary-darker":t.alternative}])},i(t.product.attributes.price*t.product.quantity)+" ₾ ",3),e("button",{class:"ml-2 text-xs text-red-400 hover:text-red-500 transition-colors ease-in duration-200",onClick:r[1]||(r[1]=n=>a(d)(t.product))}," Remove ")])])])])}}},M=P;export{M as _};