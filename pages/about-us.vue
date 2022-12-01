<template>
    <div class="general">
      <Header />
      <main>
        <div class="max-w-6xl mx-auto py-10 px-5 md:px-0">
          <div class="grid grid-cols-3 gap-4">
            <img class="w-full mx-auto" :src="require(`~/assets/images/7.jpeg`)" />
            <img class="w-full mx-auto" :src="require(`~/assets/images/8.jpeg`)" />
            <img class="w-full mx-auto" :src="require(`~/assets/images/9.jpeg`)" />
          </div>
        </div>
        <div class="max-w-4xl mx-auto py-10 px-5">
            <h2 class="text-2xl">{{ $t('about.title') }}</h2>
            <p class="mt-6 text-lg text-contrast-medium">{{$t('about.subtitle')}}</p>
            <h2 class="text-2xl mt-10">{{ $t('about.title2') }}</h2>
            <p class="mt-6 text-lg text-contrast-medium">{{$t('about.subtitle2')}}</p>
        </div>
        <div class="max-w-6xl mx-auto py-10 px-5 md:px-0">
            <img class="w-full mx-auto" :src="require(`~/assets/images/10.jpeg`)" />
        </div>
        <div class="max-w-4xl mx-auto py-10 px-5 parrafBox">
            <h2 class="text-2xl">{{ $t('about.title3') }}</h2>
            <div class="mt-6 text-lg text-contrast-medium" v-html="$t('about.subtitle3')"></div>
        </div>
        <div class="text-center mb-10">
            <nuxt-link class="btn-fx-1" to="/store">
                <div class="btn-fx-1__inner py-2 lg:py-3 px-3 lg:px-5">
                    <span class="font-bold text-xl">{{ $t('about.button') }}</span>
                    <div class="btn-fx-1__icon-wrapper" aria-hidden="true">
                    <svg class="icon ml-1.5 lg:ml-2" viewBox="0 0 20 20"><polyline points="8 5 13 10 8 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    <svg class="icon ml-1.5 lg:ml-2" viewBox="0 0 20 20"><polyline points="8 5 13 10 8 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    </div>
                </div>
            </nuxt-link>
        </div>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>
  <style lang="scss">
   @import "~/assets/scss/btn.scss";
  .parrafBox p {
    @apply mb-4;
  }
  </style>
  