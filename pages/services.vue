<template>
    <div class="general">
      <Header />
      <main>
        <div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0">
            <h2 class="text-2xl">{{ $t('service.title') }}</h2>
            <p class="mt-6 text-lg text-contrast-medium">{{$t('service.subtitle')}}</p>
        </div>
        <div class="bg-contrast-high bg-opacity-5 py-20 px-5 md:px-0">
          <div class="max-w-6xl mx-auto">
            <div class="grid-gallery">
                <div class="left">
                    <img class="w-full mx-auto" :src="require(`~/assets/images/2.jpeg`)" />
                </div>
                <div class="right">
                    <img class="w-full mx-auto" :src="require(`~/assets/images/3.jpeg`)" />
                    <img class="w-full mx-auto" :src="require(`~/assets/images/4.jpeg`)" />
                    <img class="w-full mx-auto" :src="require(`~/assets/images/5.jpeg`)" />
                    <img class="w-full mx-auto" :src="require(`~/assets/images/6.jpeg`)" />
                </div>
            </div>
          </div>
        </div>
        <div class="max-w-4xl mx-auto py-20 parrafBox px-5 md:px-0">
            <h2 class="text-2xl">{{ $t('service.title2') }}</h2>
            <p class="mt-6 text-lg text-contrast-medium">{{$t('service.subtitle3')}}</p>
            <ul class="mt-10 list list--icons p-10 bg-primary bg-opacity-9">
              <li class="text-base mb-2">
                <div class="flex items-start">
                  <load-svg name="plus" class="w-5 mr-2 text-success" />
                  
                  <div>{{ $t('service.list') }}</div>
                </div>
              </li>

              <li class="text-base mb-2">
                <div class="flex items-start">
                  <load-svg name="plus" class="w-5 mr-2 text-success" />                  
                  <div>{{ $t('service.list2') }}</div>
                </div>
              </li>

              <li class="text-base mb-2">
                <div class="flex items-start">
                  <load-svg name="plus" class="w-5 mr-2 text-success" />                  
                  <div> {{ $t('service.list3') }}</div>
                </div>
              </li>

              <li class="text-base">
                <div class="flex items-start">
                  <load-svg name="plus" class="w-5 mr-2 text-success" />                  
                  <div>{{ $t('service.list4') }}</div>
                </div>
              </li>
            </ul>
            <div class="mt-10 text-lg text-contrast-medium" v-html="$t('service.subtitle2')"></div>
            <div class="mt-10 text-center">
              <p class="font-bold">{{ $t('service.title3') }}</p>
              <nuxt-link class="btn-fx-1 mt-5" to="/store">
                <div class="btn-fx-1__inner py-2 lg:py-3 px-3 lg:px-5">
                  <span class="font-bold text-xl">{{ $t('service.button') }}</span>
                  <div class="btn-fx-1__icon-wrapper" aria-hidden="true">
                    <svg class="icon ml-1.5 lg:ml-2" viewBox="0 0 20 20"><polyline points="8 5 13 10 8 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    <svg class="icon ml-1.5 lg:ml-2" viewBox="0 0 20 20"><polyline points="8 5 13 10 8 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                  </div>
                </div>
              </nuxt-link>
            </div>
        </div> 
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicePage'
  }
  </script>
  <style lang="scss">
   @import "~/assets/scss/btn.scss";
  .grid-gallery {
    display: flex;
    gap: 10px;
    .left {
      width: 35%;
    }
    .right {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 65%;
        img {
            width: calc(50% - 10px);
            object-fit: cover;
        }
    }
  }
  .parrafBox p {
    @apply mb-4;
  }
  </style>
  