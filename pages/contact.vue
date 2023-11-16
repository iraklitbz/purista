<template>
    <section>
      <main>
        <section class="contact-v2 relative z-1">
            <div class="mx-auto max-w-5xl mt-10 mb-12 lg:mb-12">
                <div class="mb-8 lg:mb-12 parrafBox">
                    <div class="mt-6 text-base text-contrast-medium text-center">
                        <p
                            v-for="index in 2"
                            class="mb-2"
                        >
                            {{ $t(`contact.box1.subtitle${index}`) }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-7xl">
                <div>
                <dl class="details-list details-list--rows grid grid-cols-12 details-list--cols@md">
                    <div @click="handleMaps('option1')" 
                        class="cursor-pointer details-list__item py-5 lg:py-8 lg:px-8 lg:text-center col-span-12 lg:col-span-6"
                        :class="option1 ? 'bg-primary-lighter' : ''"
                        >
                        <dt class="text-primary text-lg font-bold mb-1.5 lg:mb-2">ბერბუკის ქუჩა 10</dt>
                        <dd class="leading-snug">
                            თბილისი <br>08:00 დან 21:00 მდე<br>+591 050 084<br>info@purista.ge
                        </dd>
                    </div>
                
                    <div @click="handleMaps('option2')"
                        class="details-list__item py-5 cursor-pointer lg:py-8 lg:px-8 lg:text-center col-span-12 lg:col-span-6"
                        :class="option2 ? 'bg-primary-lighter' : ''"
                    >
                        <dt class="text-primary  font-bold mb-1.5 lg:mb-2">მ. ასათიანის 29ბ</dt>
                        <dd class="leading-snug">
                            თბილისი <br>08:00 დან 21:00 მდე<br>+591 050 084<br>info@purista.ge
                        </dd>
                    </div>
                
                </dl>
                </div>
                <div class="aspect-w-16 aspect-h-9 mb-10">
                    <iframe
                        width="560"
                        height="315"
                        :src="url"
                        title="Video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            </section>
      </main>
    </section>
  </template>
<script setup>
const option1 = ref(true)
const option2 = ref(false)
const url = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1115694160867!2d44.779352350681236!3d41.718111279133325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730729b963f5%3A0x6076e606eb5f6bfe!2sPurista!5e0!3m2!1ses!2sde!4v1668638591014!5m2!1ses!2sde') 
const handleMaps = (data) => {
    if(data === 'option1') {
        option1.value = true
        option2.value = false
        url.value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1115694160867!2d44.779352350681236!3d41.718111279133325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730729b963f5%3A0x6076e606eb5f6bfe!2sPurista!5e0!3m2!1ses!2sde!4v1668638591014!5m2!1ses!2sde"
    } else if(data === 'option2') {
        option1.value = false
        option2.value = true
        url.value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.6623933611095!2d44.7502859!3d41.7278034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044731cf517b523%3A0xe7c6c4802e67c118!2s29%20Mikheil%20Asatiani%20St%2C%20T'bilisi%2C%20Georgien!5e0!3m2!1sde!2ses!4v1670877040344!5m2!1sde!2ses"
    }
}
</script>
  