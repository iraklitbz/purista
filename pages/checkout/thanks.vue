<template>
    <section
        class="max-w-4xl mx-auto pt-10 pb-20 px-5 md:px-0"
    >
        <h2
            class="text-lg lg:text-2xl mb-10 text-center"
        >
           Thank you for your purchase! we will send you an email with the details of your order.
        </h2>
        <nuxt-link
            class="mt-7 first-line:button button--aylen px-5 py-3 w-full bg-primary hover:bg-primary-light hover:text-white relative block focus:outline-none border-2 text-white border-solid rounded-lg text-xl text-center font-semibold tracking-widest overflow-hidden" 
            :to="localePath('/', locale)"
        >
            Back to home
        </nuxt-link>
    </section>
</template>

<script setup>
    import { useStorage } from '@vueuse/core'
    import { cart } from '~/store/cart'
    import { useTokenStore } from '~/store/token'
    const orderIDstorage = useStorage('orderID')
    const recibe = ref(null)
    const tokenStore = useTokenStore()
    const { handleGetToken, token } = tokenStore
    await handleGetToken()
    const dataProducts = ref([])
    dataProducts.value = cart().cartProducts
    const { locale } = useI18n()
    const localePath = useLocalePath()
    // user info
    const user = useStrapiUser()
    const orderID = ref(null)
    const direction = ref(null)
    const name = ref(null)
    const email = ref(null)
    const company = ref(null)
    const date = ref(null)
    const payed = ref(null)
    const products = ref(null)
    const userData = ref(null)
    if (token && orderIDstorage.value) {
        recibe.value = await useRecibe(token, orderIDstorage.value)
    }
    if(user.value) {
        const { data } = await useAsyncGql({
            operation: 'user',
            variables: { id: user.value.id }
        });
        userData.value = data.value.usersPermissionsUser.data.attributes
    }
    const mapFields = async () => {
        let counter = 1
        products.value = dataProducts.value.map(item => {
        const key = `product${counter++}`;
        return {
            [key]: {
                id: item.id,
                title: item.attributes.title,
                price: item.attributes.price,
                quantity: item.quantity,
            },
        };
        }).reduce((acc, obj) => Object.assign(acc, obj), {});
        // totaly value
        payed.value = dataProducts.value.reduce((total, product) => {
            return total + product.attributes.price * product.quantity;
        }, 0)
    }
    const handleSaveInSTRAPI = async () => {
        mapFields()
        orderID.value = orderIDstorage.value,
        direction.value = `${userData.value.company.data.attributes.street}, ${userData.value.company.data.attributes.city}, ${userData.value.company.data.attributes.postal}`,
        name.value = userData.value.username,
        email.value = userData.value.email,
        company.value = userData.value.company.data.attributes.name,
        date.value = new Date(),
        payed.value = payed.value + ' ₾',
        products.value
        const data = await useOrders(
            orderID.value,
            direction.value,
            name.value,
            email.value,
            company.value,
            date.value,
            payed.value,
            products.value
        )
        if(data.error) {
            error.value = true
        }
    }
    if(recibe.value && dataProducts.value.length > 0) {
        await handleSaveInSTRAPI()
        cart().handleEmptyCart()
        orderIDstorage.value = ''
    }
</script>