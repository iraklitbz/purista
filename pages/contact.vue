<template>
    <div class="general">
      <Header />
      <main>
        <div class="max-w-4xl mx-auto py-10 px-5 md:px-0">
            <section class="contact relative z-1">
                <div class="mb-8 lg:mb-12 parrafBox">
                    <div class="mt-6 text-base text-contrast-medium" v-html="$t('contact.subtitle')"></div>
                </div>
                <div class="grid grid-cols-12 gap-8 lg:gap-12">
                        <div class="col-span-12 lg:col-span-5">
                            <dl class="details-list details-list--rows">
                                <div 
                                    v-for="(item, index) in $t('contact.list')"
                                    :key="index" 
                                    class="details-list__item py-5 text-base lg:py-8 lg:flex lg:justify-between"
                                >
                                    <dt class="font-bold mb-1.5 lg:mb-2 lg:mb-0">{{item.q}}</dt>
                                    <dd class="leading-snug lg:text-right">
                                        {{item.a}}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div class="wrapper col-span-12 lg:col-span-7">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1115694160867!2d44.779352350681236!3d41.718111279133325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730729b963f5%3A0x6076e606eb5f6bfe!2sPurista!5e0!3m2!1ses!2sde!4v1668638591014!5m2!1ses!2sde" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        
                    </div>
                    <div class="mt-20 grid grid-cols-12 gap-8 lg:gap-12">
                        <div class="col-span-12 lg:col-span-5">
                            <dl class="details-list details-list--rows">
                                <div 
                                    v-for="(item, index) in $t('contact.list2')"
                                    :key="index" 
                                    class="details-list__item py-5 text-base lg:py-8 lg:flex lg:justify-between"
                                >
                                    <dt class="font-bold mb-1.5 lg:mb-2 lg:mb-0">{{item.q}}</dt>
                                    <dd class="leading-snug lg:text-right">
                                        {{item.a}}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div class="wrapper col-span-12 lg:col-span-7">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.427140752105!2d44.79699431536675!3d41.689713879237665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf2726b4a91%3A0x105404e163805314!2s29%20Lado%20Asatiani%20St%2C%20T&#39;bilisi%2C%20Georgia!5e0!3m2!1ses!2ses!4v1670273889760!5m2!1ses!2ses" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        
                    </div>
            </section>
            
        </div>
      </main>
      <Footer />
    </div>
  </template>
  
<script>
export default {
    name: 'ContactPage'
}
</script>
<style lang="scss">
    @import "~/assets/scss/detail.scss";
    .parrafBox p {
        @apply mb-4;
    }
    .wrapper {
        overflow: hidden;
  padding-top: 56.25%; /* 16:9 */
  position: relative;
}
.wrapper iframe {
    position: absolute;
  top: 0;
  left: 0;
  border: 0;
  width: 100%;
  height: 100%;
}
</style>
  