import { _ as __nuxt_component_0 } from './nuxt-link-48225c8e.mjs';
import { _ as _export_sfc, a as useI18n } from '../server.mjs';
import { u as useLocalePath } from './composables-15242686.mjs';
import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "about-us",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-4a2b056f><main data-v-4a2b056f><div class="max-w-6xl mx-auto py-10 px-5 md:px-0" data-v-4a2b056f><div class="grid grid-flow-col auto-cols-[minmax(0,_2fr)] gap-2 md:gap-10" data-v-4a2b056f><img class="w-full mx-auto rounded-xl" src="https://res.cloudinary.com/dhaznxmws/image/upload/v1700167301/assets/7_mc6svi.jpg" data-v-4a2b056f><img class="w-full mx-auto rounded-xl" src="https://res.cloudinary.com/dhaznxmws/image/upload/v1700167304/assets/8_wc4lmm.jpg" data-v-4a2b056f><img class="w-full mx-auto rounded-xl" src="https://res.cloudinary.com/dhaznxmws/image/upload/v1700167302/assets/9_qggwku.jpg" data-v-4a2b056f></div></div><div class="max-w-4xl mx-auto py-10 px-5" data-v-4a2b056f><h2 class="text-xl font-bold" data-v-4a2b056f>${ssrInterpolate(_ctx.$t("about.title"))}</h2><p class="mt-6 text-lg text-contrast-medium" data-v-4a2b056f>${ssrInterpolate(_ctx.$t("about.subtitle"))}</p><h2 class="text-xl font-bold mt-10" data-v-4a2b056f>${ssrInterpolate(_ctx.$t("about.title2"))}</h2><p class="mt-6 text-lg text-contrast-medium" data-v-4a2b056f>${ssrInterpolate(_ctx.$t("about.subtitle2"))}</p></div><div class="max-w-4xl mx-auto px-5 parrafBox" data-v-4a2b056f><h2 class="text-xl font-bold" data-v-4a2b056f>${ssrInterpolate(_ctx.$t("about.title3"))}</h2><div class="mt-6 text-lg text-contrast-medium" data-v-4a2b056f><!--[-->`);
      ssrRenderList(3, (index) => {
        _push(`<p class="mb-2" data-v-4a2b056f>${ssrInterpolate(_ctx.$t(`about.box1.subtitle${index}`))}</p>`);
      });
      _push(`<!--]--></div></div><div class="my-20 flex justify-center" data-v-4a2b056f>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "button button--aylen px-5 py-3 bg-primary hover:bg-primary-light hover:text-white relative block focus:outline-none border-2 text-white border-solid rounded-lg text-xl text-center font-semibold uppercase tracking-widest overflow-hidden",
        to: unref(localePath)("/contact", unref(locale).value)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("about.button"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("about.button")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a2b056f"]]);

export { aboutUs as default };
//# sourceMappingURL=about-us-8ca44d4b.mjs.map
