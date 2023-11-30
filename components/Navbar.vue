<template>
                    <ClientOnly>
    <div 
        :class="menusIsSticky ? 'md:fixed w-full top-0 z-[100]' : ''"
    >
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
            <div
                class="md:ml-7 flex md:flex-row flex-col items-center justify-center mt-10 md:mt-0"
            >
                <ul class="flex items-center justify-center">
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
                <nuxt-link 
                    v-if="!user"
                    class="md:ml-3 no-underline text-primary hover:text-white transition-colors text-xl md:text-lg" 
                    :to="localePath('/user/login', locale)"
                > 
                    <nuxt-icon
                        name="user"
                        class="icon icon-fill text-3xl relative"
                    />
                </nuxt-link>
                <button
                    v-else
                    class="md:l-3 no-underline text-primary hover:text-white transition-colors text-xl md:text-lg" 
                    title="Logout"
                    @click="hanldeLogout"
                > 
                    <nuxt-icon
                        name="logout"
                        class="icon icon-fill text-3xl relative"
                    />
                </button>

                    <button
                        v-if="user"
                        class="md:ml-7 mt-4 md:mt-0 no-underline relative text-primary hover:text-white transition-colors text-xl md:text-lg" 
                        @click="handleToggleMenu"
                    > 
                        <nuxt-icon
                            name="cart"
                            class="icon icon-fill text-3xl text-primary relative"
                        />
                        <span
                            v-if="totalQuantity > 0"
                            class="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                            :class="pulse ? 'pulse-animation' : ''"
                        >
                            {{ totalQuantity }}
                        </span>
                    </button>
            </div>
            <a @click="toggleMenu" class="md:hidden cursor-pointer absolute right-5 top-5">
                <nuxt-icon
                    name="cross"
                    class="icon icon-fill text-3xl text-tui-sky-blue relative text-primary"
                />
            </a>
        </nav>
        <a 
            @click="toggleMenu"
            class="md:hidden cursor-pointer text-black flex justify-center border-t-2 border-solid border-primary pt-1 pb-1"
        >
            <nuxt-icon
                name="menu"
                class="icon text-3xl relative"
            />
        </a>
        <ShopCart 
            v-if="toggleCart"
            class="absolute max-h-[440px] w-full z-10 bg-black"
            :class="menusIsSticky ? 'cart-animation-sticky' : 'cart-animation'"
            v-click-outside="handleCloseMenu"
        />
        <Alert 
            v-if="alertActive"
            class="absolute w-full"
            :class="menusIsSticky ? 'alert-animation-sticky' : 'alert-animation'"
            :state="'success'"
            :message="message"
        />
    </div>
</ClientOnly>
</template>
<script setup>
    import { useCartStore } from '~/store/cart'
    import { useAlertStore } from '~/store/alert'
    const user = useStrapiUser()
    const cartStore = useCartStore()
    const alertStore = useAlertStore()
    //CART
    const { handleToggleMenu, handleCloseMenu } = cartStore
    const { toggleCart, totalQuantity } = storeToRefs(cartStore)
    //ALERT
    const { alertActive, message } = storeToRefs(alertStore)
    const { locale, locales, setLocale } = useI18n()
    const { logout } = useStrapiAuth()
    const route = useRouter()
    const menusIsSticky = ref(false)
    const localePath = useLocalePath()
    const pulse = ref(false)
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
    const hanldeLogout = async () => {
        logout()
        route.push('/')
    }
    watch(() => totalQuantity.value, (newValue, oldValue) => {
        if(newValue > oldValue) {
            pulse.value = true
            setTimeout(() => {
                pulse.value = false
            }, 300)
        }
    })
    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    })
    const handleScroll = () => {
        const scrollPosition = window.scrollY
        if(scrollPosition > 210) {
            document.body.classList.add('menu-sticky')
            menusIsSticky.value = true
        } else {
            document.body.classList.remove('menu-sticky')
            menusIsSticky.value = false
        }
    }
    // const userData = ref(null)
    // if(user.value) {
    //     const { data } = await useAsyncGql({
    //         operation: 'user',
    //         variables: { id: user.value.id }
    //     });
    //     console.log(data.value)
    // }
</script>
<style scoped>
a.router-link-exact-active {
  @apply text-white;
}
.cart-animation {
    animation: cartAnimation 0.3s forwards;
}
.alert-animation-sticky {
    animation: alertAnimationSticky  0.3s forwards;
}
.alert-animation {
    animation: alertAnimation 0.3s forwards;
}
.cart-animation-sticky {
    animation: cartAnimationSticky 0.3s forwards;
}
.pulse-animation {
    animation: animationPulse 0.3s forwards;
}
@keyframes cartAnimation {
    0% {
        top: -200px;
        opacity: 0;
    }
    100% {
        top: 272px;
        opacity: 1;
    }
}
@keyframes cartAnimationSticky {
    0% {
        top: -200px;
        opacity: 0;
    }
    100% {
        top: 64px;
        opacity: 1;
    }
}
@keyframes alertAnimation {
    0% {
        top: -200px;
        opacity: 0;
    }
    100% {
        top: 272px;
        opacity: 1;
    }
}
@keyframes alertAnimationSticky {
    0% {
        top: -200px;
        opacity: 0;
    }
    100% {
        top: 64px;
        opacity: 1;
    }
}
@keyframes animationPulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
</style>