<template>
    <div class="general">
      <Header />
      <main>
        <div class="max-w-3xl mx-auto py-10 px-5 md:px-0">
            <section>
                <div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-3xl">

                    <ul class="accordion  js-accordion" data-animation="on" data-multi-items="on">

                        <li     
                            class="accordion__item  js-accordion__item"
                            v-for="(item, index) in $t('faqs')" 
                            :key="index" 
                        >
                            <button class="accordion__header py-3 lg:py-5 px-5 lg:px-8 js-tab-focus" type="button">
                            <span class="text-lg lg:text-xl">{{item.q}}</span>
                            <svg class="icon accordion__icon-arrow-v2 no-js:is-hidden" viewBox="0 0 20 20">
                                <g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" y1="3" x2="17" y2="17" />
                                <line x1="17" y1="3" x2="3" y2="17" />
                                </g>
                            </svg>
                            </button>
                            <div class="accordion__panel pt-1.5 lg:pt-2 px-5 lg:px-8 pb-5 lg:pb-8 js-accordion__panel">
                            <div class="text-component leading-snug text-space-y-md">
                                <p class="text-contrast-low text-lg">{{item.a}}</p>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </section>
        </div>
      </main>
      <Footer />
    </div>
  </template>
  
<script>
import acordeon from "~/plugins/acordeon.js";
export default {
    name: 'FaqsPage',
    mounted() {
        acordeon()
    },
}
</script>
<style lang="scss">
    @import "~/assets/scss/acordeon.scss";
</style>
  