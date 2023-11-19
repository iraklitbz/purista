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
           
            <div>
                <CartReview />
                <form
                    class=""
                    v-if="user"
                >
                    <div
                        class="mt-10"
                    >
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-90">
                                Card Number
                            </label>
                            <input 
                                type="text" 
                                name="text" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                                placeholder="Street"
                            >
                        </div>
                        <div
                            class="mt-4"
                        >
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-90">
                                Name on Card
                            </label>
                            <input 
                                type="text" 
                                name="text" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                                placeholder="Street"
                            >
                        </div>
                        <div
                            class="flex gap-5 mt-4"
                        >
                            <div
                                class="w-full"
                            >
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-90">
                                    Expiration date (MM/YY)
                                </label>
                                <input 
                                    type="text" 
                                    name="text" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                                    placeholder="City"
                                >
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-90">
                                    Security code 
                                </label>
                                <input 
                                    type="text" 
                                    name="text" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-4" 
                                    placeholder="Postal"
                                >
                            </div>
                        </div>
                    </div>
                    <nuxt-link
                        class="mt-7 first-line:button button--aylen px-5 py-3 w-full bg-primary hover:bg-primary-light hover:text-white relative block focus:outline-none border-2 text-white border-solid rounded-lg text-xl text-center font-semibold tracking-widest overflow-hidden" 
                        :to="localePath('/thanks', locale)"
                    >
                        Buy
                    </nuxt-link>
                </form>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { useCartStore } from '~/store/cart'
    const user = useStrapiUser()
    const cartStore = useCartStore()
    //CART
    const { handleCloseMenu } = cartStore
const { locale } = useI18n()
const localePath = useLocalePath()
const userData = ref(null)
if(user.value) {
    const { data } = await useAsyncGql({
        operation: 'user',
        variables: { id: user.value.id }
    });
    userData.value = data.value.usersPermissionsUser.data.attributes
}
onMounted(() => {
    handleCloseMenu()
})
</script>