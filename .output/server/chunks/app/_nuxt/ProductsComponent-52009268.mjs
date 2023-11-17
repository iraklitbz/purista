import { _ as __nuxt_component_0$1 } from './nuxt-link-48225c8e.mjs';
import { a as useI18n, b as useAsyncQuery } from '../server.mjs';
import { u as useLocalePath } from './composables-15242686.mjs';
import { gql } from 'graphql-tag';
import { useSSRContext, withAsyncContext, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ProductsComponent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useI18n();
    const localePath = useLocalePath();
    const { locale } = useI18n();
    const query = gql`
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
  `;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(query, { locale: locale.value })), __temp = await __temp, __restore(), __temp);
    const products = ref(data.value.products.data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto mt-10 parrafBox px-5 md:px-0" }, _attrs))}><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(products), (item, index) => {
        _push(`<div class="prod-card-v2 mb-10 group">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(localePath)(`/products/${item.attributes.slug}`, unref(locale)),
          class: "prod-card-v2__img-link rounded-lg shadow-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<figure class="rounded-xl shadow-md overflow-hidden"${_scopeId}><img class="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"${ssrRenderAttr("src", item.attributes.feature.data.attributes.formats.small.url)}${_scopeId}></figure>`);
            } else {
              return [
                createVNode("figure", { class: "rounded-xl shadow-md overflow-hidden" }, [
                  createVNode("img", {
                    class: "w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105",
                    src: item.attributes.feature.data.attributes.formats.small.url
                  }, null, 8, ["src"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="p-1 lg:p-1 text-center"><h2 class="text-lg lg:text-2xl">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(localePath)(`/products/${item.attributes.slug}`, unref(locale)),
          class: "product-card-v2__title text-lg font-bold leading-4 hover:text-primary transition-colors ease-in duration-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.attributes.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.attributes.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h2><div class="my-1 lg:my-1.5"><span class="prod-card-v2__price text-primary font-bold text-xl">${ssrInterpolate(item.attributes.price)} \u20BE </span></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductsComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ProductsComponent-52009268.mjs.map
