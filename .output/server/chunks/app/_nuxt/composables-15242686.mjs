import { l as useLocalePath$1, d as useRoute, j as useRouter, m as getComposer, o as useNuxtApp } from '../server.mjs';

function useLocalePath(options) {
  const { route, router, i18n } = options || {};
  return useLocalePath$1({
    route: route || useRoute(),
    router: router || useRouter(),
    i18n: i18n || getComposer(useNuxtApp().$i18n)
  });
}

export { useLocalePath as u };
//# sourceMappingURL=composables-15242686.mjs.map
