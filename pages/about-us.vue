<template>
    <section>
      <main>
        <div class="max-w-6xl mx-auto py-10 px-5 md:px-0">
          <div class="grid grid-flow-col auto-cols-[minmax(0,_2fr)] gap-2 md:gap-10">
              <img class="w-full mx-auto rounded-xl" src="https://res.cloudinary.com/dhaznxmws/image/upload/v1700167301/assets/7_mc6svi.jpg" />
              <img class="w-full mx-auto rounded-xl" src="https://res.cloudinary.com/dhaznxmws/image/upload/v1700167304/assets/8_wc4lmm.jpg" />
          </div>
        </div>
        <div class="max-w-4xl mx-auto py-10 px-5">
            <h2 class="text-xl font-bold">
              {{ $t('about.title') }}
            </h2>
            <p class="mt-6 text-lg text-contrast-medium">
              {{ $t('about.subtitle') }}
            </p>
            <h2 class="text-xl font-bold mt-10">{{ $t('about.title2') }}</h2>
            <p class="mt-6 text-lg text-contrast-medium">{{$t('about.subtitle2')}}</p>
        </div>
        <div class="max-w-4xl mx-auto px-5 parrafBox">
            <h2 class="text-xl font-bold">{{ $t('about.title3') }}</h2>
            <div class="mt-6 text-lg text-contrast-medium">
              <p
                v-for="index in 3"
                class="mb-2"
              >
                  {{ $t(`about.box1.subtitle${index}`) }}
              </p>
            </div>
        </div>
        <div class="my-20 flex justify-center">
            <nuxt-link 
              class="button button--aylen px-5 py-3 bg-primary hover:bg-primary-light hover:text-white relative block focus:outline-none border-2 text-white border-solid rounded-lg text-xl text-center font-semibold uppercase tracking-widest overflow-hidden" 
              :to="localePath('/contact', locale)"
            >
              {{ $t('about.button') }}
            </nuxt-link>
        </div>
      </main>
    </section>
  </template>
<script setup>
  const { locale } = useI18n()
  const localePath = useLocalePath()
</script>