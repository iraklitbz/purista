import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-35fd959f.mjs';
import _sfc_main$4 from './nuxt-icon-dd59450c.mjs';
import { _ as _export_sfc, u as useI18n } from '../server.mjs';
import { u as useLocalePath } from './composables-15e8ee2d.mjs';
import { useSSRContext, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';

const _sfc_main$3 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, setLocale } = useI18n();
    const localePath = useLocalePath();
    const menu = ref([
      {
        title: "menu.nav1.title",
        url: "/"
      },
      {
        title: "menu.nav2.title",
        url: "/about-us"
      },
      {
        title: "menu.nav3.title",
        url: "/products"
      },
      {
        title: "menu.nav4.title",
        url: "/faqs"
      },
      {
        title: "menu.nav5.title",
        url: "/contact"
      }
    ]);
    const availableLocales = computed(() => {
      return locales.value.map((item) => {
        return {
          value: item.code,
          label: item.label,
          name: item.name
        };
      });
    });
    const menuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_nuxt_icon = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-navbar" }, _attrs))} data-v-cd85f6c1><nav class="${ssrRenderClass([unref(menuOpen) ? " left-0" : "-left-full", "pt-20 pb-20 md:pt-4 md:pb-4 fixed md:relative w-full h-full md:h-auto top-0 md:left-0 bg-black navbar md:flex md:items-center md:justify-center px-5 border-t-2 border-solid border-primary transition-all ease-in-out z-50"])}" data-v-cd85f6c1><ul class="menu flex flex-col md:flex-row justify-center items-center max-w-4xl" data-v-cd85f6c1><!--[-->`);
      ssrRenderList(unref(menu), (item, index) => {
        _push(`<li class="px-2 mx-2 mb-5 md:mb-0" data-v-cd85f6c1>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "no-underline text-primary hover:text-white transition-colors text-xl md:text-lg",
          to: unref(localePath)(item.url, unref(locale))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(item.title))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(item.title)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><ul class="ml-7 flex items-center justify-center mt-10 md:mt-0" data-v-cd85f6c1><!--[-->`);
      ssrRenderList(unref(availableLocales), (lang, index) => {
        _push(`<li class="px-2 mb-5 md:mb-0 uppercase" data-v-cd85f6c1><a class="${ssrRenderClass([{
          "text-white": lang.value === unref(locale),
          "text-gray-500": lang.value !== unref(locale)
        }, "cursor-pointer no-underline text-primary hover:text-white transition-colors text-xl md:text-lg"])}" data-v-cd85f6c1>${ssrInterpolate(lang.label)}</a></li>`);
      });
      _push(`<!--]--></ul><a class="md:hidden cursor-pointer absolute right-5 top-5" data-v-cd85f6c1>`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "cross",
        class: "icon icon-stroke text-xl text-tui-sky-blue relative"
      }, null, _parent));
      _push(`</a></nav><a class="md:hidden cursor-pointer flex justify-center border-t-2 border-solid border-primary pt-1 pb-1" data-v-cd85f6c1>`);
      _push(ssrRenderComponent(_component_nuxt_icon, {
        name: "menu",
        class: "icon icon-stroke text-xl text-tui-sky-blue relative"
      }, null, _parent));
      _push(`</a></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cd85f6c1"]]);
const _imports_0$1 = "" + buildAssetsURL("logo.f7e4fa32.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_Navbar = __nuxt_component_1$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-black" }, _attrs))}><div class="main-logo py-5">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-24 md:w-36 mx-auto"${ssrRenderAttr("src", _imports_0$1)} alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "w-24 md:w-36 mx-auto",
            src: _imports_0$1,
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`</header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = "" + buildAssetsURL("footer.8f28df4b.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_nuxt_icon = _sfc_main$4;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-black flex flex-col justify-center" }, _attrs))}><div class="main-logo py-5">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-24 md:w-36 mx-auto"${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "w-24 md:w-36 mx-auto",
            src: _imports_0
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><ul class="flex justify-center"><li class="text-center text-white mr-2"><a cl target="_blank" href="https://www.facebook.com/profile.php?id=100064998761253">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "facebook",
    class: "icon icon-stroke text-2xl text-tui-sky-blue relative"
  }, null, _parent));
  _push(`</a></li><li class="text-center text-white"><a target="_blank" href="https://www.instagram.com/purista.ge/">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "instagram",
    class: "icon icon-stroke text-2xl text-tui-sky-blue relative"
  }, null, _parent));
  _push(`</a></li></ul><div class="max-w-4xl m-auto w-full mt-10 flex justify-center border-solid border-t-2 py-2 border-primary"><p class="text-center text-sm text-white">${ssrInterpolate(_ctx.$t("footer.parraf"))}</p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="general">`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-27158005.mjs.map
