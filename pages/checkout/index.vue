<template>
    <section
        class="max-w-4xl mx-auto pt-10 pb-20 px-5 md:px-0"
    >
        <h2
            class="text-lg lg:text-3xl mb-10"
        >
            Checkout
        </h2>
        <div
            class="grid grid-cols-2 gap-10"
        >
            <form
                v-if="user"
                class=""
            >
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-90">Contact Information</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        class="bg-gray-50 border disabled:bg-gray-200 disabled:text-gray-500 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                        :value="userData.email"
                        disabled
                    >
                </div>
                <div
                    class="mt-10"
                >
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-90">
                            Delivery Address
                        </label>
                        <input 
                            type="text" 
                            name="text" 
                            class="bg-gray-50 border disabled:bg-gray-200 disabled:text-gray-500 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                            :value="userData.company.data.attributes.street"
                            disabled
                        >
                    </div>
                    <div
                        class="flex gap-5 mt-4"
                    >
                        <div
                            class="w-full"
                        >
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-90">
                                City
                            </label>
                            <input 
                                type="text" 
                                name="text" 
                                class="bg-gray-50 border disabled:bg-gray-200 disabled:text-gray-500 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                                :value="userData.company.data.attributes.city"
                                disabled
                            >
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-90">
                                Postal
                            </label>
                            <input 
                                type="text" 
                                name="text" 
                                class="bg-gray-50 border disabled:bg-gray-200 disabled:text-gray-500 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                                :value="userData.company.data.attributes.postal"
                                disabled
                            >
                        </div>
                    </div>
                    <div
                        class="mt-4"
                    >
                        <div
                            class="w-full"
                        >
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-90">
                                Company
                            </label>
                            <input 
                                type="text" 
                                name="text" 
                                class="bg-gray-50 border disabled:bg-gray-200 disabled:text-gray-500 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                                :value="userData.company.data.attributes.name"
                                disabled
                            >
                        </div>
                    </div>
                </div>
                <p
                    class="mt-4 text-xs"
                >
                    If the contact direction is not correct, please contact us <nuxt-link :to="localePath('/contact', locale)" class="text-primary">here</nuxt-link>
                </p>
            </form>
            <div
                v-else
            >
                <h3>
                    You need to login to continue
                </h3>
                <nuxt-link
                    class="mt-5 button m-auto w-full button--aylen px-5 py-2 bg-primary hover:bg-primary-light hover:text-white relative block focus:outline-none border-2 text-white border-solid rounded-lg text-lg text-center font-semibold tracking-widest overflow-hidden" 
                    :to="localePath('/user/login', locale)"
                >
                    Login
                </nuxt-link>
            </div>
           <ClientOnly>
            <div>
                    <CartReview 
                        :price-discount="discountPercent"
                    />
                    <div
                        v-if="dataProducts.length > 0"
                    >
                            <button
                                class="mt-7 first-line:button button--aylen flex h-[56px] items-center justify-center px-5 py-3 w-full bg-primary hover:bg-primary-light hover:text-white relative focus:outline-none border-2 text-white border-solid rounded-lg text-xl text-center font-semibold tracking-widest overflow-hidden" 
                                @click="handleBuy(event)"
                            >
                                <span
                                    v-if="!loading"
                                >
                                    Buy
                                </span>
                                <div v-else class="dot-elastic"></div>
                            </button>
                            <p
                                v-if="error"
                                class="mt-4 text-lg text-red-500 text-center"
                            >
                                Error, please try again
                            </p>
                    </div>
                </div>
            </ClientOnly>
        </div>
    </section>
</template>
<script setup>
    import { useStorage } from '@vueuse/core'
    import { cart } from '~/store/cart'
    import { useTokenStore } from '~/store/token'
    const user = useStrapiUser()
    const loading = ref(false)
    const orderIDstorage = useStorage('orderID')
    const tokenStore = useTokenStore()
    const dataProducts = ref([])
    const error = ref(false)
    dataProducts.value = cart().cartProducts
    const discountPercent = ref(0)
    //CART
    const { handleGetToken, token } = tokenStore
    handleGetToken()
    const { locale } = useI18n()
    const localePath = useLocalePath()
    const userData = ref(null)
    if(user.value) {
        const { data } = await useAsyncGql({
            operation: 'user',
            variables: { id: user.value.id }
        });
        userData.value = data.value.usersPermissionsUser.data.attributes
        if(data.value.usersPermissionsUser.data.attributes.company.data.attributes.discount !== null) {
            discountPercent.value = data.value.usersPermissionsUser.data.attributes.company.data.attributes.discount
        }
    }
    onMounted(() => {
        cart().handleCloseMenu()
    })
    const totalPrice = computed(() => {
        return dataProducts.value.reduce((total, product) => {
            const productTotal = product.attributes.price * product.quantity;
            return total + productTotal;
        }, 0).toFixed(2);
    });
    const finalPrice = computed(() => {
        if(discountPercent.value > 0) {
            return (totalPrice.value - (totalPrice.value * (discountPercent.value / 100))).toFixed(2)
        }
        return totalPrice.value
    })
    const handleBuy = async () => {
        loading.value = true
        error.value = false
        const basket = dataProducts.value.map(item => {
            return {
                product_id: item.id,
                quantity: item.quantity,
                unit_price: item.attributes.price
            }
        })
        const handleGeneratePayLink = await useSendOrder(token, finalPrice.value, basket)
        if(handleGeneratePayLink && handleGeneratePayLink._links && handleGeneratePayLink._links.redirect.href) {
            loading.value = false
            orderIDstorage.value = handleGeneratePayLink.id
            navigateTo(handleGeneratePayLink._links.redirect.href, {
                    external: true,
                    open: {
                        target: '_blank'
                    }
            })
        } else {
            error.value = true
        }
    }
</script>
<style scoped>
 .dot-elastic {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    animation: dot-elastic 1s infinite linear;
    }
    .dot-elastic::before, .dot-elastic::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    }
    .dot-elastic::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    animation: dot-elastic-before 1s infinite linear;
    }
    .dot-elastic::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #fff;
    animation: dot-elastic-after 1s infinite linear;
    }

    @keyframes dot-elastic-before {
    0% {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(1, 1.5);
    }
    50% {
        transform: scale(1, 0.67);
    }
    75% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(1, 1);
    }
    }
    @keyframes dot-elastic {
    0% {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(1, 1);
    }
    50% {
        transform: scale(1, 1.5);
    }
    75% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(1, 1);
    }
    }
    @keyframes dot-elastic-after {
    0% {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(1, 1);
    }
    50% {
        transform: scale(1, 0.67);
    }
    75% {
        transform: scale(1, 1.5);
    }
    100% {
        transform: scale(1, 1);
    }
    }
</style>