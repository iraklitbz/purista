<template>
    <div class="general">
      <Header />
      <main>
        <div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0">
            <div class="parrafBox mb-10">
              <h2 class="text-2xl">{{ $t('store.title') }}</h2>
              <div class="mt-6 text-base text-contrast-medium" v-html="$t('store.subtitle')"></div>
            </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4" v-if="$t('productos')">
            <div 
              v-for="(item, index) in $t('productos')" 
              :key="index"
              class="prod-card-v2"
              >
              <!-- <span class="prod-card-v2__badge" role="text">New <i class="sr-only">product</i></span> -->

              <nuxt-link :to="`/products/${item.id}`" class="prod-card-v2__img-link rounded-lg shadow-md">
                <figure>
                  <img class="w-full" :src="require(`~/assets/images/products/${item.img}`)">
                </figure>
              </nuxt-link>

              <div class="p-1 lg:p-1 text-center">
                <h1 class="text-lg lg:text-2xl"><nuxt-link :to="`/products/${item.id}`" class="product-card-v2__title text-lg">{{item.title}}</nuxt-link></h1>

                <div class="my-1 lg:my-1.5">
                  <span class="prod-card-v2__price text-primary font-bold">{{item.price}}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </template>
  
<script>
export default {
    name: 'StorePage'
}
</script>
<style lang="scss">
    @import "~/assets/scss/card.scss";
    .parrafBox p {
        @apply mb-4;
    }
</style>
  