<template>
  <div class="general">
    <Header />
    <div class="main-bg"></div>
    <main>
      <div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0">
          <h2 class="text-2xl">{{ $t('home.title') }}</h2>
          <div class="mt-6 text-lg text-contrast-medium" v-html="$t('home.subtitle')"></div>
      </div>
      <div class="bg-contrast-high bg-opacity-5 py-20 px-5 md:px-0">
        <div class="max-w-6xl mx-auto">
          <video-player
              src="https://www.youtube.com/embed/WMfFilAJ5aU"
            />
        </div>
      </div>
      <div class="max-w-4xl mx-auto pt-20 pb-10 parrafBox px-5 md:px-0">
          <p class="text-xl font-bold">{{ $t('home.title2') }}</p>
          <p class="text-lg text-contrast-medium">{{ $t('home.subtitle2') }}</p>
          <p class="text-xl font-bold">{{ $t('home.title3') }}</p>
          <p class="text-lg text-contrast-medium">{{ $t('home.subtitle3') }}</p>
          <p class="text-xl font-bold">{{ $t('home.title4') }}</p>
      </div>
      <div class="max-w-4xl mx-auto mt-10 parrafBox px-5 md:px-0">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4" v-if="$t('productos')">
            <div 
              v-for="(item, index) in products.slice(0,4)" 
              :key="index"
              class="prod-card-v2 mb-10"
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
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
export default {
  name: 'IndexPage',
  components: {
      VideoPlayer
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    const obj = this.$t('productos')
    const result = Object.keys(obj).map((key) => obj[key]);
    this.products = result
  },
}
</script>
<style lang="scss">
.main-bg {
  height: 28vh;
  width: 100%;
  background-image: url('~/assets/images/1.jpeg');
  background-position: top center;
  background-size: 200%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  @media (min-width: 48rem) {
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    height: 60vh;
  }
}
.parrafBox p {
  @apply mb-4;
}
</style>
