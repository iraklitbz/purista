import { _ as __nuxt_component_0 } from './nuxt-link-48225c8e.mjs';
import { a as useI18n, b as useAsyncQuery } from '../server.mjs';
import { u as useLocalePath } from './composables-15242686.mjs';
import { gql } from 'graphql-tag';
import { withAsyncContext, ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ts-invariant';
import 'zen-observable-ts';
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import '@intlify/core-base';
import 'is-https';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const localePath = useLocalePath();
    const query = gql`
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
    `;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(query, { locale: locale.value })), __temp = await __temp, __restore(), __temp);
    const products = ref(data.value.products.data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><main><div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0"><div class="parrafBox mb-10"><h2 class="text-2xl font-bold">${ssrInterpolate(_ctx.$t("store.title"))}</h2><div class="mt-6 text-base text-contrast-medium"><!--[-->`);
      ssrRenderList(3, (index) => {
        _push(`<p class="mb-2">${ssrInterpolate(_ctx.$t(`store.box1.subtitle${index}`))}</p>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(unref(products), (item, index) => {
        _push(`<div class="prod-card-v2 group">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(localePath)(`/products/${item.attributes.slug}`, unref(locale)),
          class: "prod-card-v2__img-link rounded-lg shadow-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<figure class="rounded-xl shadow-md overflow-hidden"${_scopeId}><img class="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"${ssrRenderAttr("src", item.attributes.feature.data.attributes.url)}${_scopeId}></figure>`);
            } else {
              return [
                createVNode("figure", { class: "rounded-xl shadow-md overflow-hidden" }, [
                  createVNode("img", {
                    class: "w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105",
                    src: item.attributes.feature.data.attributes.url
                  }, null, 8, ["src"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="p-1 lg:p-1 text-center"><h2 class="text-lg lg:text-xl mt-2">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(localePath)(`/products/${item.attributes.slug}`, unref(locale)),
          class: "product-card-v2__title text-lg font-bold hover:text-primary transition-colors ease-in duration-200"
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
        _push(`</h2><div class="my-1 lg:my-1.5"><span class="prod-card-v2__price text-xl text-primary font-bold">${ssrInterpolate(item.attributes.price)} \u20BE </span></div></div></div>`);
      });
      _push(`<!--]--></div></div></main></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-93b965d0.mjs.map
