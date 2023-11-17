import { k as useLocalePath$1, a as useRoute, i as useRouter, l as getComposer, c as useNuxtApp } from '../server.mjs';

function useLocalePath(options) {
  const { route, router, i18n } = options || {};
  return useLocalePath$1({
    route: route || useRoute(),
    router: router || useRouter(),
    i18n: i18n || getComposer(useNuxtApp().$i18n)
  });
}

export { useLocalePath as u };
//# sourceMappingURL=composables-15e8ee2d.mjs.map
