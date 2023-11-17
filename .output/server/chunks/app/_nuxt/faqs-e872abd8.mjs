import _sfc_main$1 from './nuxt-icon-dd59450c.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useI18n } from '../server.mjs';
import { u as useAsyncGql } from './index-0da410f5.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';
import './asyncData-5ef11671.mjs';

const _sfc_main = {
  __name: "faqs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const activeAccordion = ref(null);
    const { locale } = useI18n();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncGql({
      operation: "faqs",
      variables: { locale: locale.value }
    })), __temp = await __temp, __restore(), __temp);
    const faqs = ref(data.value.faqs.data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_icon = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(_attrs)}><main><div class="max-w-3xl mx-auto py-10 px-5 md:px-0"><section><div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-3xl"><ul class="my-10"><!--[-->`);
      ssrRenderList(unref(faqs), (item, index) => {
        _push(`<li class="${ssrRenderClass([index === 1 ? "border-t border-solid border-gray-200 " : "", "border-b border-solid border-gray-200 hover:border-b-gray-400 transition-all ease-in-out duration-300"])}"><button class="py-3 lg:py-5 w-full flex justify-between items-center" type="button"><span class="text-lg lg:text-xl text-left">${ssrInterpolate(item.attributes.question)}</span>`);
        _push(ssrRenderComponent(_component_nuxt_icon, {
          name: "plus",
          class: ["icon icon-stroke text-2xl text-primary relative transition-all ease-in-out duration-300", unref(activeAccordion) === index ? "rotate-45" : ""]
        }, null, _parent));
        _push(`</button>`);
        if (unref(activeAccordion) === index) {
          _push(`<div class="pt-1.5 lg:pt-2 px-5 lg:px-8 pb-5 lg:pb-8"><div class="text-component leading-snug text-space-y-md"><p class="text-gray-600 text-lg">${ssrInterpolate(item.attributes.answer)}</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></section></div></main></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faqs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faqs-e872abd8.mjs.map
