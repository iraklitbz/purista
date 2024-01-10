<template>
 <div class="max-w-4xl mx-auto mt-10 parrafBox px-5 md:px-0">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div 
            v-for="(item, index) in products" 
            :key="index"
            class="prod-card-v2 mb-10 group"
            >
            <!-- <span class="prod-card-v2__badge" role="text">New <i class="sr-only">product</i></span> -->

            <nuxt-link 
                :to="localePath(`/products/${item.attributes.slug}`, locale)"
                class="prod-card-v2__img-link rounded-lg shadow-md"
            >
                <figure
                    class="rounded-xl shadow-md overflow-hidden"
                >
                    <img 
                    class="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105" 
                    :src="item.attributes.feature.data.attributes.formats.small.url"
                    />
                </figure>
            </nuxt-link>

            <div class="p-1 lg:p-1 text-center">
            <h2 class="text-lg lg:text-2xl">
                <nuxt-link 
                    :to="localePath(`/products/${item.attributes.slug}`, locale)"
                    class="product-card-v2__title text-lg font-bold leading-4 hover:text-primary transition-colors ease-in duration-200">
                        {{item.attributes.title}}
                    </nuxt-link>
                </h2>

            </div>
        </div>
    </div>
</div>
</template>
<script setup>
  const { locale } = useI18n()
  const localePath = useLocalePath()
  const { data } = await useAsyncGql({
    operation: 'outstanding',
    variables: { locale: locale.value }
  });
  const products = ref(data.value.products.data)
</script>