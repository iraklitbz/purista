<template>
    <div class="general">
      <Header />
      <main>
        <section class="contact-v2 relative z-1">
            <div class="mx-auto max-w-5xl mt-10 mb-12 lg:mb-12">
                <div class="mb-8 lg:mb-12 parrafBox">
                    <div class="mt-6 text-base text-contrast-medium text-center" v-html="$t('contact.subtitle')"></div>
                </div>
            </div>

            <div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-7xl">
                <div class="mb-8 lg:mb-12">
                <dl class="details-list details-list--rows grid grid-cols-12 details-list--cols@md">
                    <div class="details-list__item py-5 lg:py-8 lg:px-8 lg:text-center col-span-12 lg:col-span-6">
                        <dt @click="handleMaps('option1')" class="text-primary cursor-pointer font-bold mb-1.5 lg:mb-2">ბერბუკის ქუჩა 10</dt>
                        <dd class="leading-snug">
                            თბილისი <br>08:00 დან 21:00 მდე<br>+591 050 084<br>info@purista.ge
                        </dd>
                    </div>
                
                    <div class="details-list__item py-5 lg:py-8 lg:px-8 lg:text-center col-span-12 lg:col-span-6">
                        <dt @click="handleMaps('option2')" class="text-primary  font-bold mb-1.5 lg:mb-2 cursor-pointer">მ. ასათიანის 29ბ</dt>
                        <dd class="leading-snug">
                            თბილისი <br>08:00 დან 21:00 მდე<br>+591 050 084<br>info@purista.ge
                        </dd>
                    </div>
                
                </dl>
                </div>
                <div class="wrapper col-span-12 lg:col-span-12 mb-10">
                    <iframe 
                        :src="url" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            </section>
      </main>
      <Footer />
    </div>
  </template>
<script>
export default {
    name: 'ContactoPage',
    data () {
        return {
            url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1115694160867!2d44.779352350681236!3d41.718111279133325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730729b963f5%3A0x6076e606eb5f6bfe!2sPurista!5e0!3m2!1ses!2sde!4v1668638591014!5m2!1ses!2sde'
        }
    },
    methods: {
        handleMaps (data) {
            if(data === 'option1') {
                this.url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1115694160867!2d44.779352350681236!3d41.718111279133325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730729b963f5%3A0x6076e606eb5f6bfe!2sPurista!5e0!3m2!1ses!2sde!4v1668638591014!5m2!1ses!2sde"
            } else if(data === 'option2') {
                this.url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.6623933611095!2d44.7502859!3d41.7278034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044731cf517b523%3A0xe7c6c4802e67c118!2s29%20Mikheil%20Asatiani%20St%2C%20T'bilisi%2C%20Georgien!5e0!3m2!1sde!2ses!4v1670877040344!5m2!1sde!2ses"
            }
        }
    }
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
  