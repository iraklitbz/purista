import { b as useState, c as useNuxtApp } from '../server.mjs';
import { unref, isRef, reactive } from 'vue';
import { t as hash } from '../../nitro/node-server.mjs';
import { u as useAsyncData } from './asyncData-5ef11671.mjs';
import { gql } from 'graphql-request';

const FaqsDocument = gql`
    query faqs($locale: I18NLocaleCode!) {
  faqs(locale: $locale) {
    data {
      attributes {
        question
        answer
      }
    }
  }
}
    `;
const OutstandingDocument = gql`
    query outstanding($locale: I18NLocaleCode!) {
  products(locale: $locale, pagination: {limit: 4}) {
    data {
      id
      attributes {
        title
        price
        slug
        feature {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
    `;
const ProductsDocument = gql`
    query products($locale: I18NLocaleCode!) {
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
const ProductDocument = gql`
    query product($slug: String!, $locale: I18NLocaleCode!) {
  products(locale: $locale, filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        title
        price
        slug
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
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
  return {
    faqs(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(FaqsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "faqs", "query");
    },
    outstanding(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(OutstandingDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "outstanding", "query");
    },
    products(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ProductsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "products", "query");
    },
    product(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ProductDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "product", "query");
    }
  };
}
const GqlSdks = {
  default: getSdk
};
const GqClientOps = { "default": ["faqs", "outstanding", "products", "product"] };
const useGqlState = () => {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._gqlState) {
    throw new Error("GQL State is not available.");
  }
  return nuxtApp == null ? void 0 : nuxtApp._gqlState;
};
function useGql() {
  const state = useGqlState();
  const errState = useGqlErrorState();
  return (...args) => {
    var _a2, _b, _c;
    var _a;
    const operation = (_a2 = typeof (args == null ? void 0 : args[0]) !== "string" && "operation" in (args == null ? void 0 : args[0]) ? args[0].operation : args[0]) != null ? _a2 : void 0;
    const variables = (_b = typeof (args == null ? void 0 : args[0]) !== "string" && "variables" in (args == null ? void 0 : args[0]) ? args[0].variables : args[1]) != null ? _b : void 0;
    const client = (_c = Object.keys(GqClientOps).find((k) => GqClientOps[k].includes(operation))) != null ? _c : "default";
    const { instance } = (_a = state.value) == null ? void 0 : _a[client];
    if (!instance) {
      throw new Error("Invalid GraphQL Operation");
    }
    return GqlSdks[client](instance, async (action, operationName, operationType) => {
      var _a22, _b2, _c2, _d;
      try {
        return await action();
      } catch (err) {
        errState.value = {
          client,
          operationType,
          operationName,
          statusCode: (_a22 = err == null ? void 0 : err.response) == null ? void 0 : _a22.status,
          gqlErrors: ((_b2 = err == null ? void 0 : err.response) == null ? void 0 : _b2.errors) || ((_c2 = err == null ? void 0 : err.response) == null ? void 0 : _c2.message) && [{ message: (_d = err == null ? void 0 : err.response) == null ? void 0 : _d.message }] || []
        };
        if (state.value.onError) {
          state.value.onError(errState.value);
        }
        throw errState.value;
      }
    })[operation](variables);
  };
}
const useGqlErrorState = () => useState("_gqlErrors", () => null);
function useAsyncGql(...args) {
  var _a, _b, _c;
  const toReactive = (v) => v && isRef(v) ? v : reactive(v);
  const options = (_a = typeof (args == null ? void 0 : args[0]) !== "string" && "options" in (args == null ? void 0 : args[0]) ? args[0].options : args[2]) != null ? _a : {};
  const operation = (_b = typeof (args == null ? void 0 : args[0]) !== "string" && "operation" in (args == null ? void 0 : args[0]) ? args[0].operation : args[0]) != null ? _b : void 0;
  const variables = (_c = typeof (args == null ? void 0 : args[0]) !== "string" && "variables" in (args == null ? void 0 : args[0]) ? toReactive(args[0].variables) : args[1] && toReactive(args[1])) != null ? _c : void 0;
  if (variables) {
    options.watch = options.watch || [];
    options.watch.push(variables);
  }
  const key = `gql:data:${hash({ operation, variables })}`;
  return useAsyncData(key, () => useGql()(operation, unref(variables)), options);
}

export { useAsyncGql as u };
//# sourceMappingURL=index-0da410f5.mjs.map
