<template>
    <div class="main-navbar">
        <nav 
            class="pt-20 pb-20 md:pt-4 md:pb-4 fixed md:relative w-full h-full md:h-auto top-0 md:left-0 bg-black navbar md:flex md:items-center md:justify-center px-5 border-t-2 border-solid border-primary transition-all ease-in-out z-50"
            :class="menuOpen ? ' left-0' : '-left-full'"
        >
            <ul v-if="$t" class="menu flex flex-col md:flex-row justify-center items-center max-w-4xl">
                <li 
                    v-for="(item, index) in $t('menu')" 
                    :key="index"
                    class="px-2 mx-2 mb-5 md:mb-0"
                >
                    <NuxtLink class="no-underline text-primary hover:text-white transition-colors text-xl md:text-lg" :to="item.url"> {{item.title}}</NuxtLink>
                </li>
            </ul>
            <ul v-if="$t" class="ml-7 flex items-center justify-center mt-10 md:mt-0">
                <li 
                    v-for="(lang, index) in $i18n.localeCodes" 
                    :key="index"
                    class="px-2 mb-5 md:mb-0 uppercase"

                >
                    <a class="cursor-pointer no-underline text-primary hover:text-white transition-colors text-xl md:text-lg" @click.prevent.stop="$i18n.setLocale(lang)">{{ lang }}</a>
                </li>
            </ul>
            <a @click="toggleMenu" class="md:hidden cursor-pointer absolute right-5 top-5">
                <load-svg name="cross" class="text-white w-10" />
            </a>
        </nav>
        <a 
            @click="toggleMenu"
            class="md:hidden cursor-pointer flex justify-center border-t-2 border-solid border-primary pt-1 pb-1"
        >
            <load-svg name="menu" class="text-primary w-10" />
        </a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menuOpen: false
            }
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen
            }
        }
    }
</script>
<style>
a.nuxt-link-exact-active {
  @apply text-white;
}
</style>