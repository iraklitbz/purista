import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const option1 = ref(true);
    const option2 = ref(false);
    const url = ref("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1115694160867!2d44.779352350681236!3d41.718111279133325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730729b963f5%3A0x6076e606eb5f6bfe!2sPurista!5e0!3m2!1ses!2sde!4v1668638591014!5m2!1ses!2sde");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><main><section class="contact-v2 relative z-1"><div class="mx-auto max-w-5xl mt-10 mb-12 lg:mb-12"><div class="mb-8 lg:mb-12 parrafBox"><div class="mt-6 text-base text-contrast-medium text-center"><!--[-->`);
      ssrRenderList(2, (index) => {
        _push(`<p class="mb-2">${ssrInterpolate(_ctx.$t(`contact.box1.subtitle${index}`))}</p>`);
      });
      _push(`<!--]--></div></div></div><div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-7xl"><div><dl class="details-list details-list--rows grid grid-cols-12 details-list--cols@md"><div class="${ssrRenderClass([unref(option1) ? "bg-primary-lighter" : "", "cursor-pointer details-list__item py-5 lg:py-8 lg:px-8 lg:text-center col-span-12 lg:col-span-6"])}"><dt class="text-primary text-lg font-bold mb-1.5 lg:mb-2">\u10D1\u10D4\u10E0\u10D1\u10E3\u10D9\u10D8\u10E1 \u10E5\u10E3\u10E9\u10D0 10</dt><dd class="leading-snug"> \u10D7\u10D1\u10D8\u10DA\u10D8\u10E1\u10D8 <br>08:00 \u10D3\u10D0\u10DC 21:00 \u10DB\u10D3\u10D4<br>+591 050 084<br>info@purista.ge </dd></div><div class="${ssrRenderClass([unref(option2) ? "bg-primary-lighter" : "", "details-list__item py-5 cursor-pointer lg:py-8 lg:px-8 lg:text-center col-span-12 lg:col-span-6"])}"><dt class="text-primary font-bold mb-1.5 lg:mb-2">\u10DB. \u10D0\u10E1\u10D0\u10D7\u10D8\u10D0\u10DC\u10D8\u10E1 29\u10D1</dt><dd class="leading-snug"> \u10D7\u10D1\u10D8\u10DA\u10D8\u10E1\u10D8 <br>08:00 \u10D3\u10D0\u10DC 21:00 \u10DB\u10D3\u10D4<br>+591 050 084<br>info@purista.ge </dd></div></dl></div><div class="aspect-w-16 aspect-h-9 mb-10"><iframe width="560" height="315"${ssrRenderAttr("src", unref(url))} title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></section></main></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-2f377bda.mjs.map
