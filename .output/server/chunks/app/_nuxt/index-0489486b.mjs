import { _ as __nuxt_component_0 } from './ProductsComponent-960cc9e4.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './nuxt-link-35fd959f.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'graphql-request';
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
import './composables-15e8ee2d.mjs';
import './index-0da410f5.mjs';
import './asyncData-5ef11671.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ProductsComponent = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="main-bg"></div><main><div class="max-w-4xl mx-auto pt-20 parrafBox px-5 md:px-0"><h2 class="text-3xl font-bold">${ssrInterpolate(_ctx.$t("home.title"))}</h2><div class="mt-6 text-lg text-contrast-medium"><!--[-->`);
  ssrRenderList(4, (index2) => {
    _push(`<p class="mb-2">${ssrInterpolate(_ctx.$t(`home.box1.subtitle${index2}`))}</p>`);
  });
  _push(`<!--]--></div></div><div class="bg-contrast-high bg-opacity-5 py-20 px-5 md:px-0"><div class="max-w-6xl mx-auto"><div class="aspect-w-16 aspect-h-9"><iframe width="560" height="315" src="https://www.youtube.com/embed/WMfFilAJ5aU" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></div><div class="max-w-4xl mx-auto pb-10 parrafBox px-5 md:px-0"><p class="text-xl font-bold mb-5">${ssrInterpolate(_ctx.$t("home.title2"))}</p><p class="text-lg text-contrast-medium mb-5">${ssrInterpolate(_ctx.$t("home.subtitle2"))}</p><p class="text-xl font-bold mb-5">${ssrInterpolate(_ctx.$t("home.title3"))}</p><p class="text-lg text-contrast-medium mb-5">${ssrInterpolate(_ctx.$t("home.subtitle3"))}</p><p class="text-xl font-bold">${ssrInterpolate(_ctx.$t("home.title4"))}</p></div>`);
  _push(ssrRenderComponent(_component_ProductsComponent, null, null, _parent));
  _push(`</main></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-0489486b.mjs.map
