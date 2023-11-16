<template>
    <div class="main-navbar">
        <nav 
            class="pt-20 pb-20 md:pt-4 md:pb-4 fixed md:relative w-full h-full md:h-auto top-0 md:left-0 bg-black navbar md:flex md:items-center md:justify-center px-5 border-t-2 border-solid border-primary transition-all ease-in-out z-50"
            :class="menuOpen ? ' left-0' : '-left-full'"
        >
            <ul class="menu flex flex-col md:flex-row justify-center items-center max-w-4xl">
                <li 
                    v-for="(item, index) in menu" 
                    :key="index"
                    class="px-2 mx-2 mb-5 md:mb-0"
                >
                    <nuxt-link 
                        class="no-underline text-primary hover:text-white transition-colors text-xl md:text-lg" 
                        :to="localePath(item.url, locale)"
                    > 
                        {{ $t(item.title) }}
                    </nuxt-link>
                </li>
            </ul>
            <ul class="ml-7 flex items-center justify-center mt-10 md:mt-0">
                <li 
                    v-for="(lang, index) in availableLocales" 
                    :key="index"
                    class="px-2 mb-5 md:mb-0 uppercase"

                >
                    <a
                        class="cursor-pointer no-underline text-primary hover:text-white transition-colors text-xl md:text-lg" 
                        :class="{
                            'text-white': lang.value === locale,
                            'text-gray-500': lang.value !== locale
                        }"
                        @click="() => setLocale(lang.value)"
                    >
                        {{ lang.label }}
                    </a>
                </li>
            </ul>
            <a @click="toggleMenu" class="md:hidden cursor-pointer absolute right-5 top-5">
                <nuxt-icon
                    name="cross"
                    class="icon icon-stroke text-xl text-tui-sky-blue relative"
                />
            </a>
        </nav>
        <a 
            @click="toggleMenu"
            class="md:hidden cursor-pointer flex justify-center border-t-2 border-solid border-primary pt-1 pb-1"
        >
            <nuxt-icon
                name="menu"
                class="icon icon-stroke text-xl text-tui-sky-blue relative"
            />
        </a>
    </div>
</template>
<script setup>
    const { locale, locales, setLocale } = useI18n()
    const localePath = useLocalePath()
    const menu = ref([
        {
            title: 'menu.nav1.title',
            url: '/'
        },
        {
            title: 'menu.nav2.title',
            url: '/about-us'
        },
        {
            title: 'menu.nav3.title',
            url: '/products'
        },
        {
            title: 'menu.nav4.title',
            url: '/faqs'
        },
        {
            title: 'menu.nav5.title',
            url: '/contact'
        }
    ])
    const availableLocales = computed(() => {
        return (locales.value).map((item) => {
            return {
                value: item.code,
                label: item.label,
                name: item.name
            }
        })
    })
    const menuOpen = ref(false)
    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value
    }
</script>
<style scoped>
a.router-link-exact-active {
  @apply text-white;
}
</style>