<template>
    <section
        class="max-w-4xl mx-auto pt-10 pb-20 px-5 md:px-0"
    >
        <h2
            class="text-lg lg:text-2xl mb-10 text-center"
        >
           Ups, something went wrong with your purchase, please try again.
        </h2>
        <nuxt-link
            class="mt-7 first-line:button button--aylen px-5 py-3 w-full bg-primary hover:bg-primary-light hover:text-white relative block focus:outline-none border-2 text-white border-solid rounded-lg text-xl text-center font-semibold tracking-widest overflow-hidden" 
            :to="localePath('/checkout', locale)"
        >
            Back to checkout
        </nuxt-link>
    </section>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
</script>