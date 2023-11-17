<template>
    <section>
      <main>
        <div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0">
            <div class="parrafBox mb-10">
              <h2 class="text-2xl font-bold">{{ $t('store.title') }}</h2>
              <div class="mt-6 text-base text-contrast-medium">
                <p
                  v-for="index in 3"
                  class="mb-2"
                >
                    {{ $t(`store.box1.subtitle${index}`) }}
                </p>
              </div>
            </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div 
              v-for="(item, index) in products" 
              :key="index"
              class="prod-card-v2 group"
              >

              <nuxt-link 
                :to="localePath(`/products/${item.attributes.slug}`, locale)" 
                class="prod-card-v2__img-link rounded-lg shadow-md "
              >
                <figure
                  class="rounded-xl shadow-md overflow-hidden"
                >
                  <img 
                    class="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105" 
                    :src="item.attributes.feature.data.attributes.url"
                  >
                </figure>
              </nuxt-link>

              <div class="p-1 lg:p-1 text-center">
                <h2 class="text-lg lg:text-xl mt-2">
                  <nuxt-link 
                    :to="localePath(`/products/${item.attributes.slug}`, locale)" 
                    class="product-card-v2__title text-lg font-bold hover:text-primary transition-colors ease-in duration-200"
                  >
                    {{item.attributes.title}}
                  </nuxt-link>
                </h2>

                <div class="my-1 lg:my-1.5">
                  <span class="prod-card-v2__price text-xl text-primary font-bold">
                    {{item.attributes.price}} ₾
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  </template>
  
<script setup>
    const { locale } = useI18n()
    const localePath = useLocalePath()
    const { data } = await useAsyncGql({
      operation: 'products',
      variables: { locale: locale.value }
    })
    const products = ref(data.value.products.data)
    console.log(products)
</script>
  