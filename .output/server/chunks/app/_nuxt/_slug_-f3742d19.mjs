import { _ as __nuxt_component_0 } from './ProductsComponent-52009268.mjs';
import { d as useRoute, a as useI18n, b as useAsyncQuery } from '../server.mjs';
import { gql } from 'graphql-tag';
import { withAsyncContext, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import MarkdownIt from 'markdown-it';
import './nuxt-link-48225c8e.mjs';
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
import './composables-15242686.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const markdown = new MarkdownIt();
    const route = useRoute();
    const { locale } = useI18n();
    const query = gql`
      query GetProductEdges($slug: String!, $locale: I18NLocaleCode!) {
        products(locale: $locale, filters:{slug:{eq: $slug}}) {
          data {
            attributes {
              title
              price
              slug,
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
  `;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(query, { slug: route.params.slug, locale: locale.value })), __temp = await __temp, __restore(), __temp);
    const product = ref(data.value.products.data[0].attributes);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductsComponent = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><main><div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0"><div class="grid grid-cols-12 gap-5 lg:gap-8"><div class="col-span-12"><div class="text-component"><h2 class="text-4xl font-bold">${ssrInterpolate(unref(product).title)}</h2><p class="text-lg mt-5 lg:text-2xl text-primary font-bold">${ssrInterpolate(unref(product).price)} \u20BE </p></div></div><div class="col-span-12 lg:col-span-6 xl:col-span-5"><div class="w-full list md:sticky md:top-10"><ul>${unref(markdown).render(unref(product).description)}</ul></div></div><div class="col-span-12 lg:col-span-6 xl:col-span-7"><figure><img class="block w-full"${ssrRenderAttr("src", unref(product).feature.data.attributes.url)}></figure></div></div></div>`);
      _push(ssrRenderComponent(_component_ProductsComponent, null, null, _parent));
      _push(`</main></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-f3742d19.mjs.map