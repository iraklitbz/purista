import { defineComponent, ref, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nuxt-icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    filled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const icon = ref("");
    watchEffect(async () => {
      try {
        const iconsImport = /* @__PURE__ */ Object.assign({
          "/assets/icons/check.svg": () => import('./check-f1e76094.mjs').then((m) => m["default"]),
          "/assets/icons/chevronLeft.svg": () => import('./chevronLeft-000fa9de.mjs').then((m) => m["default"]),
          "/assets/icons/chevronRight.svg": () => import('./chevronRight-2abbde10.mjs').then((m) => m["default"]),
          "/assets/icons/cross.svg": () => import('./cross-9e0ce735.mjs').then((m) => m["default"]),
          "/assets/icons/exclamacion.svg": () => import('./exclamacion-993985e8.mjs').then((m) => m["default"]),
          "/assets/icons/facebook.svg": () => import('./facebook-92346233.mjs').then((m) => m["default"]),
          "/assets/icons/instagram.svg": () => import('./instagram-2ca0a567.mjs').then((m) => m["default"]),
          "/assets/icons/mail.svg": () => import('./mail-e833ef36.mjs').then((m) => m["default"]),
          "/assets/icons/menu.svg": () => import('./menu-3511886d.mjs').then((m) => m["default"]),
          "/assets/icons/plus.svg": () => import('./plus-34a1dbbd.mjs').then((m) => m["default"]),
          "/assets/icons/right.svg": () => import('./right-f064f30b.mjs').then((m) => m["default"]),
          "/assets/icons/shopBag.svg": () => import('./shopBag-da1d9a93.mjs').then((m) => m["default"]),
          "/assets/icons/vimeo.svg": () => import('./vimeo-6e498b85.mjs').then((m) => m["default"])
        });
        const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
        icon.value = rawIcon;
      } catch (e) {
        console.error(
          `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
        );
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["nuxt-icon", { "nuxt-icon--fill": !_ctx.filled }]
      }, _attrs))}>${unref(icon)}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt-icons@3.1.0/node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon-dd59450c.mjs.map
